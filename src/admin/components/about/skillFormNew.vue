<template lang="pug">
  .skill-form.skill-form-edit
                    .skill-form__head-row(
                      :class="{'error' : validation.firstError('title')}"
                    )
                      input(
                        type="text" 
                        placeholder="Название новой группы"
                        v-model="title"
                      ).skill-form__title
                      .skill-form__title-error
                        error-tooltip(
                          :errorText="validation.firstError('title')"
                      )
                      .skill-form__head-btns
                        .skill-form__edit-btns
                          button(
                            type='button'
                            @click="addNewCategory"
                          ).btn.btn--save-skill
                          button(
                            type='button'
                            @click="$emit('closeNewSkillCard')"
                          ).btn.btn--remove-skill
                    .skill-form__table
                      skill-table
                    form(

                    ).skill-form__footer
                      .skill__input--new-title-wrapper
                        input(
                          type="text" placeholder="Новый навык"
                        ).skill__input.skill__input--title.skill__input--new-title
                      .skill__percent.skill__percent--new-skill
                        input(
                          type="text" 
                          placeholder="100" 
                        ).skill__input.skill__input--percent.skill__input--new-percent
                        span.skill__percent-sign.skill__percent-sign--new-skill %
                      button(
                        type="button"
                      ).btn.btn--add-skill +  
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "title": value => {
      return Validator.value(value).required("Введите название группы");
    }
  },
  components: {
    skillTable: () => import("./skillFormTable"),
    errorTooltip: () => import("../common/errorTooltip")
  },
  data: () => ({
    title: ""
  }),
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    ...mapActions("categories", ["addCategory"]),
    async addNewCategory() {
      if ((await this.$validate()) === false) return;
      try {
        await this.addCategory(this.title);
        this.$emit('closeNewSkillCard');

        this.SHOW_TOOLTIP({
          type: "success",
          text: "Категория добавлена"
        });
      } catch (error) {
        this.SHOW_TOOLTIP({
          type: "error",
          text: error.response.data.error
        });
      }
      
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .skill-form {
    padding: 30px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .skill-form__head-row {
    border-bottom: 1px solid rgba(#1f232d, .15);
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    position: relative;

    &.error {
      .skill-form__title-error {
        display: block;
      }
    }
  }

  .skill-form__title-error {
    display: none;
    position: absolute;
    top: 100%;
    z-index: 100;
  }

  .skill-form__head-btns {
    display: flex;
    align-items: center;
  }

  .skill-form__title {
    border: none;
    font-size: 18px;
    font-weight: 600;
    width: 60%;
    padding-bottom: 10px;
    pointer-events: auto;
    /* pointer-events: none; */

    @include tablets {
      width: 70%;
    } 

    @include phones {
      font-size: 16px;
    }
  }

  .skill-form__title.active {
    border-bottom: 1px solid #000;
  }

  /* .skill-form__edit-btns {
    display: none;
  } */

  .skill-form__read-btns {
    display: inline-block;
  }

  .skill-form__table {
    width: 100%;
    flex: 1;
    overflow: auto;
    min-height: 50px;
    margin-bottom: 20px;
  }

  .skill-table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 5px;
    overflow: auto;
  }

  .skill__row {

    &--edit {
      .skill__cell--title {
        border-bottom: 1px solid #000;
      }

      .skill__cell--percent {
        border-bottom: 1px solid #000;
      }

      .skill__edit-btns {
        display: inline-block;
      }

      .skill__read-btns {
        display: none;
      }
    }
  }

  .skill__cell {
    padding-top: 15px;
    padding-bottom: 5px;

    &--title {
      width: 60%;
    }

    &--percent {
      width: 45px;
    }

    &--btns {
      display: flex;
      justify-content: flex-end;
    }
  }


  .skill-form__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

  }

  .skill__input {
    border: none;
    font-family: inherit;
    font-size: 16px;
    color: #414c63;;

     &--table {
      width: 100%;
    }

    &--new-title-wrapper {
      width: 50%;
      position: relative;
      margin-right: 12px;
    }

    &--new-title {
      width: 100%;
      border-bottom: 1px solid #000;
      padding-bottom: 0.7rem;
      margin-right: 10px;
      padding-left: 10px;
    }

    &--new-percent {
      width: 100%;
    }
  }

  .skill__percent {
    display: flex;
    align-items: center;
    position: relative;

    &--new-skill {
      width: 45px;
      margin-right: 30px;
      border-bottom: 1px solid #000;
      padding-bottom: 9px;
    }
  }

  .skill__percent-sign {
    font-family: inherit;
    font-size: 16px;
    color: rgba(65, 76, 99, 0.7);
  }

  .skill__edit-mode-btns {
    display: none;
  }

  .skill__read-btns {
    display: inline-block;
  }

  .skill__read-btns {
    display: inline-block;
  }
</style>

