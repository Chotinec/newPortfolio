import Vue from "vue";
import axios from 'axios';

const thumbs = {
  template: "#slider-thumbs",

  props: ['works', 'currentWork']
}

const btns = {
  template: "#slider-btns"
}

const display = {
  template: "#slider-display",

  components: {thumbs, btns},

  props: ['works', 'currentWork', 'currentIndex'],

  methods: {
    handleSlide(direction) {
      this.$emit("slide", direction);
    },
    handleHover(state) {
      this.$emit("hover", state);
    }
  }
}

const skills = {
  template: "#slider-skills",

  props: {
    currentWork: Object
  },
  computed : {
    tagsArray () {
      return this.currentWork.techs.split(',');
    }
  }
}

const description = {
  template: "#slider-description",

  components: {skills},

  props: ['currentWork'],

}

new Vue({
  el: "#slider-component",
  template: "#slider-container",

  components: {
    display, 
    description
  },

  data: () => ({
    works: [],
    baseURL: "https://webdev-api.loftschool.com",
    userID: 205,
    currentIndex: 0,
    maxLenghth: 4,
    indexStart: 0,
    hoverState: "leave"
  }),

  computed: {
    currentWork() {
      return this.works[this.currentIndex];
    }
  },

  watch: {
    currentIndex(value) {
      this.makeInfiniteLoop(value);
    }
  },

  methods: {
    tick(sec) {
      setInterval(() => {
        if (this.hoverState === "leave") {
          this.currentIndex === this.works.length - 1
            ? (this.currentIndex = 0)
            : this.currentIndex++;
        }
      }, sec);
    },

    makeInfiniteLoop(value) {
      const worksLenghth = this.works.length - 1;
      if (value < 0) this.currentIndex = worksLenghth;
      if (value > worksLenghth) this.currentIndex = 0;
    },

    makeArrayWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/preview/${item.photo}`);
        item.photo = requiredPic;

        return item;
      })
    },

    handleSlide(direction) {
      switch(direction) {
        case "next":
          this.currentIndex++;
          break;
        case "prev":
          this.currentIndex--;
          break;
      }
    },

    handleHover(state) {
      switch (state) {
        case "enter":
          return (this.hoverState = "enter");
        case "leave":
          return (this.hoverState = "leave");

        default:
          break;
      }
    },

    handleSlideByLink(workIndex) {
      this.currentIndex = workIndex-1;
    },

    makeArrayRequirePhoto(data) {
      return data.map(item => {
        const requirePhoto = `${this.baseURL}/${item.photo}`;
        item.photo = requirePhoto;
        return item
      });
    },

    async getWorks() {
      await axios.get(`${this.baseURL}/works/${this.userID}`)
        .then(response => this.works = this.makeArrayRequirePhoto(response.data))
      console.log(this.works);
    }
  },

  created() {
    // const data = require('../data/preview.json');
    // this.works = this.makeArrayWithRequiredImages(data);
    this.getWorks();
  },

  mounted() {
    this.tick(5000);
  }
})