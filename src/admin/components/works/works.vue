<template lang="pug">
  section.section.works-section
      .container
        .section__header
          h2.admin__title Блок «Работы»
        works-form(
          v-if="showForm"
        ) 
        works-cards
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    worksForm: () => import("./worksForm"),
    worksCards: () => import("./worksCards")
  },
  computed: {
    ...mapState("works", ["showForm"])
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .works-section {
    background: url('../../../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .section__header {
    margin-bottom: 60px;
  }

</style>