<template lang="pug">
  .works-card
                .works-card__picture
                  img(:src="remotePhotoPath" alt="work picture").works-card__img
                  .works-card__tags
                    .tags
                      ul.tags__list
                        li.tags__item(
                          v-for="tag in tagsArray"
                        ) {{tag}}                     
                .works-card__content
                  .works-card__title {{work.title}}
                  .works-card__desc
                    p {{work.description}}
                  a(href="#").works-card__link {{work.link}}
                  .works-card__btns
                    button(
                      type="button"
                      @click="editCurrentWork"
                    ).btn.btn--card-edit Править
                    button(
                      type="button"
                      @click="removeCurrentWork"
                    ).btn.btn--card-remove Удалить
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  props: {
    work: Object
  },
  computed: {
    remotePhotoPath() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`;
    }, 
    tagsArray() {
      return this.work.techs.split(",");
    }
  },
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    ...mapActions("works", ["removeWork"]),
    ...mapMutations("works", [
      "EDIT_MODE_ON",
      "SHOW_FORM",
      "SET_EDITED_WORK",
      "SET_EDITED_TAGS",
      "showForm"
    ]),
    async removeCurrentWork() {
      try {
        await this.removeWork(this.work.id);

        this.SHOW_TOOLTIP({
          type: "success",
          text: "Работа удалена"
        });
      } catch (error) {
        this.SHOW_TOOLTIP({
          type: "error",
          text: error.response.data.error
        });
      }
    },
    editCurrentWork() {
      this.EDIT_MODE_ON(this.work);
      this.SHOW_FORM();
      this.SET_EDITED_WORK(this.work);
      this.SET_EDITED_TAGS(this.work.techs.split(","));
    }
  }
}
</script>

<style lang="postcss" scoped>
   .works-card {
    height: 100%;
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

  .works-card__picture {
    position: relative;
  }

  .works-card__content {
    padding: 40px 30px;
  }

  .works-card__title {
    color: #414c63;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 25px;
  }

  .works-card__desc {
    opacity: 0.7;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    margin-bottom: 30px;
  }

  .works-card__link {
    color: #383bcf;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 45px;
    transition: .3s;

    &:hover {
      text-decoration: underline;
    }
  }

  .works-card__btns {
    display: flex;
    justify-content: space-between;
  }

  .works-card__tags {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }

  .tags__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .tags__item {
    opacity: 0.7;
    color: #283340;
    font-size: 13px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 15px;
    background-color: #ffffff;
    padding: 7px 13px;
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
</style>