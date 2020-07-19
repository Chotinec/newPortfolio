<template lang="pug">
  .comments-card
                .comments-card__author
                  .comments-card__author-pic
                    img(:src=`remotePhotoPath` alt="author picture").comments-card__author-img
                  .comments-card__author-desc
                    .comments-card__author-name {{comment.author}}
                    .comments-card__author-position {{comment.occ}}
                .comments-card__desc 
                  p {{comment.text}}
                .comments-card__btns
                  button(
                    type="button"
                    @click="editCurrentComment"
                  ).btn.btn--card-edit Править
                  button(
                    type="button"
                    @click="removeCurrentComment"
                  ).btn.btn--card-remove Удалить
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  props: {
    comment: Object
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.comment.photo}`;
    }, 
  },
  methods: {
    ...mapMutations('tooltip', ['SHOW_TOOLTIP']),
    ...mapActions("comments", ["removeComment"]),
    ...mapMutations("comments", [
      "EDIT_MODE_ON", 
      "EDIT_MODE_OFF",
      "SHOW_FORM",
      "SET_EDITED_COMMENT"
    ]),
    async removeCurrentComment() {
      try {
        await this.removeComment(this.comment.id);

        this.SHOW_TOOLTIP({
          type: "success",
          text: "Отзыв удален"
        });
      } catch (error) {
        this.SHOW_TOOLTIP({
          type: "error",
          text: error.response.data.error
        });
      }
    },
    editCurrentComment() {
      this.EDIT_MODE_ON();
      this.SHOW_FORM();
      this.SET_EDITED_COMMENT(this.comment);
    }
  }
}
</script>

<style lang="postcss" scoped>
   @import '../../../styles/mixins';

  .comments-card {
    height: 100%;
    padding: 30px;
    position: relative;

    &--edit {
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .comments-card__desc {
    opacity: 0.7;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 30px;
  }

  .comments-card__btns {
    display: flex;
    justify-content: space-between;
  }

  .comments-card__author {
    display: flex;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(#1f232d, 0.15);
    margin-bottom: 30px;
  }

  .comments-card__author-pic {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    flex-shrink: 0;
    background: center center no-repeat;
    background-size: cover;
  }

  .comments-card__author-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .comments-card__author-name {
    color: #414c63;
    font-size: 18px;
    font-weight: 700;
  }

  .comments-card__author-position {
    font-size: 16px;
    font-weight: 600;
    color: rgba(65, 76, 99, 0.5);
  }
</style>