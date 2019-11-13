import Vue from 'vue'
import Flickity from 'vue-flickity';
import axios from "axios";

const comment = {
  template: "#comment-template",
  props: ["comment"]
}

new Vue({
  el: "#comments__slider",
  template: "#comments-template",
  components: {
    Flickity,
    comment
  },

  data: {
    commentsArr: [],
    flickityOptions: {
      initialIndex: 0,
      prevNextButtons: true,
      pageDots: false,
      wrapAround: false,
      groupCells: true

      // any options from Flickity can be used
    },
    currentIndex: 0
  },

  methods: {
    onInit() {
      this.$refs.flickity.on('change', (event) => {
        this.currentIndex = event

        if (!this.$refs.flickity.$flickity.nextButton.isEnabled)
          this.currentIndex = this.commentsArr.length
      })
    },

    next() {
      console.log(this.currentIndex);
      this.$refs.flickity.next();
    },
    
    previous() {
      console.log("prev");
      this.$refs.flickity.previous();
    },

    makeArrWithAbsoluteImages(data) {
      return data.map(item => {
        const requiredPic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.avatar = requiredPic;

        return item;
      });
    },
  },

  created() {
    // this.commentsArr = this.makeArrWithRequiredImages(require("../data/comments.json"));
    axios
    .get("https://webdev-api.loftschool.com/reviews/205")
    .then(response => {
      const data = response.data;
      this.commentsArr = this.makeArrWithAbsoluteImages(data);
    });
  },

  mounted() {
    const items = document.querySelectorAll('.slider_comments__item')

    items.forEach((item) => {
      item.style.height = '100%'
    })
  }
});