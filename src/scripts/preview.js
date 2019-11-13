import Vue from "vue";
import axios from "axios";

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

  props: ['works', 'currentWork', 'currentIndex']
}

const skills = {
  template: "#slider-skills",

  props: ['skills']
}

const description = {
  template: "#slider-description",

  components: {skills},

  props: ['currentWork'],

  computed: {
    tagsArray() {
      console.log("ura!")
      return this.currentWork.techs.split(',');
    }
  }
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
    currentIndex: 0,
    maxLenghth: 4,
    indexStart: 0
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
    makeInfiniteLoop(value) {
      const worksLenghth = this.works.length - 1;
      if (value < 0) this.currentIndex = worksLenghth;
      if (value > worksLenghth) this.currentIndex = 0;
    },

    makeArrWithAbsoluteImages(data) {
      return data.map(item => {
        const absolutePic = `https://webdev-api.loftschool.com/${item.photo}`;
        item.photo = absolutePic;

        return item;
      });
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

    handleSlideByLink(workIndex) {
      this.currentIndex = workIndex-1;
    },
  },

  async created() {
    // const data = require('../data/preview.json');
    // this.works = this.makeArrayWithRequiredImages(data);

    await axios.get("https://webdev-api.loftschool.com/works/205")
      .then(response => {
        const data = response.data;
        this.works = this.makeArrWithAbsoluteImages(data);
      })
      .catch(error => console.error(error.message));
  }
})