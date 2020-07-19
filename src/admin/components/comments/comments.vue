<template lang="pug">
  section.comments-section
      .container
        .section__header
          h2.admin__title Блок «Отзывы»
        comments-form(
          v-if="showForm"
        ) 
        comments-cards
</template>

<script>
import { mapState } from "vuex";

export default {
  components: {
    commentsForm: () => import("./commentsForm"),
    commentsCards: () => import("./commentsCards")
  },
  computed: {
    ...mapState("comments", ["showForm"])
  }
}
</script>

<style lang="postcss" scoped>
 .comments-section {
    background: url('../../../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    padding-top: 60px;
    padding-bottom: 30px;
  }

  .section__header {
     margin-bottom: 60px;
  }

</style>