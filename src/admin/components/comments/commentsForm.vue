<template lang="pug">
  form.comments-form
          .admin__title.admin__title--form {{formTitle}}
          .comments-form__content
            .comments-form__photo
              label.comments-form__upload-block
                .comments-form__upload-photo-container(
                  :style="{'backgroundImage' : `url(${this.renderedPhoto})`}"
                  :class="{'filled' : this.renderedPhoto.length, 'error' : validation.firstError('renderedPhoto')}"
                )
                  input(
                    type="file"
                    @change="appendRenderPhoto"
                  ).comments-form__upload-photo-input
                  .form__upload-photo-error
                    error-tooltip(
                      :errorText="validation.firstError('renderedPhoto')"
                    )
                .btn.btn--upload-comment-photo Добавить фото  
            .comments-form__desc
              .comments-form__row
                .comments-form__col
                  label.comments-form__block(
                    :class="{'error' : validation.firstError('comment.author')}"
                  )
                    .comments-form__block-title Имя автора
                    input(
                      type="text" 
                      name="name"
                      placeholder="Введите Имя автора"
                      v-model="comment.author"
                    ).comments-form__field
                    .form__text-block-error
                      error-tooltip(
                        :errorText="validation.firstError('comment.author')"
                      )
                .comments-form__col
                  label.comments-form__block(
                    :class="{'error' : validation.firstError('comment.occ')}"
                  )
                    .comments-form__block-title Титул автора
                    input(
                      type="text" 
                      name="title"
                      placeholder="Основатель LoftSchool"
                      v-model="comment.occ"
                    ).comments-form__field
                    .form__text-block-error
                      error-tooltip(
                        :errorText="validation.firstError('comment.occ')"
                      )
              .comments-form__row.comments-form__row--comment
                .comments-form__col
                  label.comments-form__block(
                    :class="{'error' : validation.firstError('comment.text')}"
                  )
                    .comments-form__block-title Отзыв
                    textarea(
                      name="comment"
                      rows="4" 
                      placeholder="Введите отзыв"
                      v-model="comment.text"
                    ).comments-form__field.comments-form__field--textarea
                    .form__text-block-error
                      error-tooltip(
                        :errorText="validation.firstError('comment.text')"
                      )  
              .comments-form__row.works-form__row--btns
                .works-form__btns
                  button(
                    type="button"
                    @click="closeForm"
                  ).btn.btn--work-cancel Отмена
                  button(
                    v-if="!editMode"
                    type="button"
                    @click="addNewComment"
                  ).btn.btn--work-form Сохранить
                  button(
                    v-if="editMode"
                    type="button"
                    @click="editCurrentComment"
                  ).btn.btn--work-form Сохранить
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import { Validator } from "simple-vue-validator";

export default {
   mixins: [require("simple-vue-validator").mixin],
  validators: {
    "renderedPhoto": value => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "comment.author": value => {
      return Validator.value(value).required("Введите имя");
    },
    "comment.occ": value => {
      return Validator.value(value).required("Введите должность");
    },
    "comment.text": value => {
      return Validator.value(value).required("Введите отзыв");
    }
  },
  components: {
    errorTooltip: () => import("../common/errorTooltip")
  },
  data() {
    return {
      renderedPhoto: "",
      comment: {
        photo: "",
        author: "",
        occ: "",
        text: "",
      }
    }
  },
  computed: {
    ...mapState("comments", {
      editMode: state => state.editMode,
      editedComment: state => state.editedComment,
      
    }),
    formTitle() {
      switch (this.editMode) {
        case true:
          return "Редактирование отзыва";
          break;
        case false:
          return "Новый отзыв";
          break;
      }
    },
    remotePhoto() {
      return `https://webdev-api.loftschool.com/${this.comment.photo}`;
    }
  },
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    ...mapMutations("comments", [
      "CLOSE_FORM", 
      "EDIT_MODE_OFF"
    ]),
    ...mapActions("comments", ["addComment", "editComment"]),
    closeForm() {
      this.CLOSE_FORM();
      this.EDIT_MODE_OFF();
    },
    async addNewComment() {
      if ((await this.$validate()) === false) return;
      try {
        await this.addComment(this.comment);
        this.CLOSE_FORM();

        this.SHOW_TOOLTIP({
          type: "success",
          text: "Отзыв загружен"
        });
      } catch (error) {
        this.SHOW_TOOLTIP({
          type: "error",
          text: error.response.data.error
        });
      }
    },
    appendRenderPhoto (e) {
      const file = e.target.files[0];
      this.comment.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        console.log(error.message);
      }
    },
    async editCurrentComment() {
      if ((await this.$validate()) === false) return;
      try {
        const commentData = {
          id: this.comment.id,
          data: this.comment
        }

         await this.editComment(commentData);
         this.EDIT_MODE_OFF();
         this.CLOSE_FORM();

         this.SHOW_TOOLTIP({
          type: "success",
          text: "Коментарий Обновлен"
        });
      } catch (error) {
        this.SHOW_TOOLTIP({
          type: "error",
          text: error.response.data.error
        });
      }
    }
  },
  created() {
    if (this.editMode) {
      this.comment = this.editedComment;
      this.renderedPhoto = this.remotePhoto;
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .comments-form {
    width: 100%;
    box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    padding: 30px;
    margin-bottom: 30px;
  }

  .comments-form__content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 30px;

    @include big-phones {
      grid-template-columns: 1fr;
    }
  }

  .comments-form__upload-block {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .comments-form__upload-photo-container {
    width: 200px;
    height: 200px;
    background: #dee4ed;
    border-radius: 50%;
    position: relative;
    margin-bottom: 30px;

    &.error {
      .form__upload-photo-error {
        display: block;
      }
    }

    &.filled {
      background: center center no-repeat / cover;
      
      &:after {
        display: none;
      }
    }

    &:after {
      content: "";
      position: absolute;
      @include centered('both');
      width: 84px;
      height: 112px;
      background: svg-load("user.svg", fill=#fff, width=100%, height=100%)
        center center no-repeat;
    }

     @include big-phones {
      width: 150px;
      height: 150px;
    }
  }

  .comments-form__block {
    position: relative;
    
    &.error {
      .form__text-block-error {
        display: block;
      }
    }
  }

  
.form__text-block-error {
  display: none;
  position: absolute;
  top: 100%;
  z-index: 100;
}

  .form__upload-photo-error {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
}

  .comments-form__upload-photo-input {
    position: absolute;
    top: 0;
    left: -9999999px;
  }

  .comments-form__desc {
    width: 70%;

    @include tablets {
      width: 100%;
    }
  }

  .comments-form__row {
    width: 100%;
    margin-bottom: 25px;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }

    &--comment {
      margin-bottom: 50px;
    }

    &--btns {
      justify-content: flex-end;
    }
  }

  .comments-form__col {
    flex: 1;
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }

  .comments-form__block-title {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .comments-form__field {
    background: none;
    border: none;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 20px;
    border-bottom: 1px solid #414c63;

    &::placeholder {
      opacity: 0.3;
    }

    &--textarea {
      resize: vertical;
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      border: solid 1px rgba(#414c63, 0.3);
      border-bottom: 0;
    }
  }
</style>