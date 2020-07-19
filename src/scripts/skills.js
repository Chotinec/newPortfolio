console.log('this is skills module');
import Vue from "vue";

const skill = {
  template: "#skill",
  props: ["skillName", "skillParcent"],
  mounted() {
    const circle = this.$refs["color-circle"];
    circle.style.animationDelay="-" + this.skillParcent + "s";
  }
}

const skillsRow ={
  template: "#skills-row",
  components: {skill},
  props: ['skill']
}

new Vue({
  el: "#skills-component",
  template: "#skills-list",
  data: () => ({
    skills: []
  }),
  components: {skillsRow},
  created() {
    this.skills = require("../data/skills.json");
  }
})