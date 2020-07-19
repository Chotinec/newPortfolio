import Vue from "vue";
import axios from "axios";

const skill = {
  template: "#skill",
  props: ['skill'],
  mounted() {
    const circle = this.$refs["color-circle"];
    circle.style.animationDelay="-" + this.skill.percent + "s";
  }
}

const skillsRow ={
  template: "#skills-row",
  components: {skill},
  props: ['category', 'skills']
}

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  data: () => ({
    skills: [],
    categories: []
  }),
  components: {skillsRow},
  methods: {
    getSkillsByCatedgory(categoryId) {
      return this.skills.filter(skill => skill.category === categoryId);
    }
  },
  created() {
    // this.skills = require("../data/skills.json");
    axios.get("https://webdev-api.loftschool.com/categories/205")
      .then(response => {
        this.categories = response.data;
      })
      .catch(error => console.error(error));

    axios.get("https://webdev-api.loftschool.com/skills/205")
      .then(response => {
        this.skills = response.data;
      })
      .catch(error => console.error(error));
  }
})