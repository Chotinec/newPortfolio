<template lang="pug">
  section.section.about-section
      .container
        .about__header
          h2.admin__title.admin__title--about Блок «Обо мне»
          .about__header-add-group
            button(
              type="button"
              @click="togleShowAddForm"
            ).btn.btn--add-group Добавить группу
        .about__forms
          skill-forms(
            @closeNewSkillCard="showAddForm=false"
            :showAddForm="showAddForm"
          )
</template>

<script>
export default {
  components: {
    skillForms: () => import("./skillForms")
  },
  data() {
    return {
      showAddForm: false
    }
  },
  methods: {
    togleShowAddForm() {
      this.showAddForm = true;
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .about-section {
    background: url('../../../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .about__header {
    display: flex;
    margin-bottom: 60px;
  }

  .about__header-add-group {
    display: flex;
  }

  .about__add-text {
    color: #383bcf;
    font-size: 16px;
    font-weight: 700;
  }
</style>