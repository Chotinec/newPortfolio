<template lang="pug">
  .comments-cards
          ul.comments-cards__list
            li.comments-cards__item
              button(
                type="button"
                @click="showFormAdd"
              ).btn.btn--add-card
                .btn__card-icon
                .btn__card-title Добавить отзывы
            li.comments-cards__item(
              v-for="comment in comments"
              :key="comment.id"
            )
              comments-card(
                :comment="comment"
              )
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  components: {
    commentsCard: () => import("./commentsCard")
  },
  computed: {
    ...mapState("comments", {
      comments: state => state.comments
    })
  },
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    ...mapMutations("comments", ["SHOW_FORM"]),
    ...mapActions("comments", ["fetchComments"]),
    showFormAdd() {
      this.SHOW_FORM();
    }
  },
  
  async created() {
    try {
      await this.fetchComments();

      this.SHOW_TOOLTIP({
        type: "success",
        text: "Отзывы загружены"
      });
    } catch (error) {
      this.SHOW_TOOLTIP({
        type: "error",
        text: error.response.data.error
      });
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .comments-cards__list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    grid-gap: 30px;

     @include tablets {
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
     }

      @include big-phones {
        grid-template-columns: 1fr;
        grid-gap: 10px;
      }
  }

  .comments-cards__item {
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }
</style>