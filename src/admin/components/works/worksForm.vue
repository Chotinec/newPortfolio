<template lang="pug">
  form.works-form
          .admin__title.admin__title--form {{formTitle}}
          .works-form__content
            .works-form__photo
              label.works-form__upload-block
                .form__upload-photo-container(
                  :class="{filled: renderedPhoto.length, 'error' : validation.firstError('renderedPhoto')}"
                  :style="{'backgroundImage' : `url(${this.renderedPhoto})`}"
                )
                  input(
                    type="file"
                    @change="appendRenderPhoto"
                  ).form__upload-photo-input
                  .form__upload-photo-content(:class="{filled: renderedPhoto.length}")
                    span.form__upload-photo-desc Перетащите или загрузите для загрузки изображения
                    .btn.btn--work-form ЗАГРУЗИТЬ
                  .form__upload-photo-error
                    error-tooltip(
                      :errorText="validation.firstError('renderedPhoto')"
                    )
            .works-form__desk
              .works-form__row
                .works-form__col
                  label.works-form__block(
                    :class="{'error' : validation.firstError('work.title')}"
                  )
                    .works-form__block-title Название
                    input(
                      type="text" 
                      name="name"
                      placeholder="Введите название"
                      v-model="work.title"
                    ).works-form__field
                    .form__text-block-error
                      error-tooltip(
                        :errorText="validation.firstError('work.title')"
                      )
              .works-form__row
                .works-form__col
                  label.works-form__block(
                    :class="{'error' : validation.firstError('work.link')}"
                  )
                    .works-form__block-title Ссылка
                    input(
                      type="text" 
                      name="link"
                      placeholder="Вставьте ссылку"
                      v-model="work.link"
                    ).works-form__field
                    .form__text-block-error
                      error-tooltip(
                        :errorText="validation.firstError('work.link')"
                      )
              .works-form__row
                .works-form__col
                  label.works-form__block(
                    :class="{'error' : validation.firstError('work.description')}"
                  )
                    .works-form__block-title Описание
                    textarea(
                      name="description"
                      rows="4" 
                      placeholder="Введите описание работы"
                      v-model="work.description"
                    ).works-form__field.works-form__field--textarea
                    .form__text-block-error
                      error-tooltip(
                        :errorText="validation.firstError('work.description')"
                      )
              .works-form__row.works-form__row--add-tags
                .works-form__col
                  label.works-form__block
                    .works-form__block-title Добавление тэга
                    input(
                      type="text" 
                      name="tags"
                      placeholder="Вставьте ссылку"
                      v-model="work.techs"
                      @change="ADD_TAGS(work.techs)"
                    ).works-form__field
              .works-form__row.works-form__row--tags
                .works-form__col(v-if="editMode")
                  .works-form__tags
                    form-tags
              .works-form__row.works-form__row--btns
                  .works-form__btns
                    button(
                      type="button"
                      @click="closeForm"
                    ).btn.btn--work-cancel Отмена
                    button(
                      v-if="!editMode"
                      type="button"
                      @click="addNewWork"
                    ).btn.btn--work-form Сохранить
                    button(
                      v-if="editMode"
                      type="button"
                      @click="editCurrentWork"
                    ).btn.btn--work-form Сохранить
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    renderedPhoto: value => {
      return Validator.value(value).required("Загрузите картинку");
    },
    "work.title": value => {
      return Validator.value(value).required("Введите название");
    },
    "work.link": value => {
      return Validator.value(value).required("Вставьте ссылку");
    },
    "work.description": value => {
      return Validator.value(value).required("Введите описание");
    },
    editedTags: value => {
      return Validator.value(value).required(
        "Работа должна содержать теги навыков"
      );
    }
  },
  components: {
    formTags: () => import("./formTags"),
    errorTooltip: () => import("../common/errorTooltip")
  },
  data() {
    return {
      renderedPhoto: "",
      work: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: ""
      }
    }
  },
  computed: {
    ...mapState("works", {
      editMode: state => state.editMode,
      editedTags: state => state.editedTags,
      editedWork: state => state.editedWork
    }),
    formTitle() {
      switch (this.editMode) {
        case true:
          return "Редактирование работы";
          break;
        case false:
          return "Новая работа";
          break;
      }
    },
    remotePhoto() {
      return `https://webdev-api.loftschool.com/${this.work.photo}`;
    },
    editedTagsString() {
      return this.editedTags.join(",");
    }
  },
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    ...mapMutations("works", [
      "CLOSE_FORM",
      "EDIT_MODE_OFF",
      "ADD_TAGS"
    ]),
    ...mapActions("works", ["addWork", "editWork"]),
    closeForm() {
      this.CLOSE_FORM();
      this.EDIT_MODE_OFF();
    },
    appendRenderPhoto(e) {
      const file = e.target.files[0];
      this.work.photo = file;

      const reader = new FileReader();

      try {
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.renderedPhoto = reader.result;
        };
      } catch (error) {
        alert(error);
      }
    },
    async addNewWork() {
      if ((await this.$validate()) === false) return;
      try {
        const formDataWork = this.createFormDataWork();
        await this.addWork(formDataWork); 
        this.CLOSE_FORM();

        this.SHOW_TOOLTIP({
          type: "success",
          text: "Работа добавлена"
        });
      } catch (error) {
        this.SHOW_TOOLTIP({
          type: "error",
          text: error.response.data.error
        });
      }
    },
    createFormDataWork() {
      const formData = new FormData();
      formData.append("title", this.work.title);
      
      if (this.editMode) {
        const editedTagsAsString = this.editedTags.join(",");
        formData.append("techs", editedTagsAsString);
        console.log(editedTagsAsString);
      } else {
        formData.append("techs", this.work.techs);
      }
      
      formData.append("photo", this.work.photo);
      formData.append("link", this.work.link);
      formData.append("description", this.work.description);
      
      return formData;
    },
    async editCurrentWork() {
      if ((await this.$validate()) === false) return;
      try {
        const workData = {
          id: this.work.id,
          data: this.createFormDataWork()
        }

         await this.editWork(workData);
        //  this.ADD_TAGS(this.work.techs);
         this.EDIT_MODE_OFF();
         this.CLOSE_FORM();

         this.SHOW_TOOLTIP({
          type: "success",
          text: "Работа обнавлена"
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
      this.work = { ...this.editedWork };
      this.renderedPhoto = this.remotePhoto;
      this.work.techs = "";
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .works-form {
    width: 100%;
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    margin-bottom: 30px;
    padding: 30px;

    @include phones {
      padding: 5%;
    }
  }

  .works-form__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;

     /* @include tablets {
       grid-template-columns: 1fr;
     } */
  }

  .works-form__content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

     @include tablets {
       grid-template-columns: 1fr;
     }
  }

  .works-form__upload-block {
    cursor: pointer;
  }

  .form__upload-photo-container {
    height: 50%;
    width: 100%;
    min-height: 250px;
    max-height: 350px;
    border: 1px dashed #a1a1a1;
    background-color: #dee4ed;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

     &.error {
      .form__upload-photo-error {
        display: block;
      }
    }

    &.filled {
      background: center center no-repeat / cover;
      z-index: 100;
      /* display: none; */
    }
  }

  .works-form__block {
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

  .form__upload-photo-input {
    position: absolute;
    top: 0;
    left: -9999999px;
  }

  .form__upload-photo-content {
    padding-left: 10%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.filled {
      display: none;
    }
  }

  .form__upload-photo-desc {
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    line-height: 33.89px;
    display: block;
    text-align: center;
    margin-bottom: 20px;
  }

  .works-form__desk {
    width: 100%;
  }

  .works-form__row {
    width: 100%;
    margin-bottom: 25px;
    display: flex;

    &:last-child {
      margin-bottom: 0;
    }

    &--add-tags {
      margin-bottom: 15px;
    }

    &--tags {
      margin-bottom: 40px;
    }

    &--btns {
      justify-content: flex-end;
    }
  }

  .works-form__col {
    flex: 1;
  }

  .works-form__block-title {
    opacity: 0.5;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .works-form__field {
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