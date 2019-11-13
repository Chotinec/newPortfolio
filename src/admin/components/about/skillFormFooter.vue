<template lang="pug">
  form(
    @submit.prevent="addNewSkill"
    :class={blocked: formBlocked}
  ).skill-form__footer
                      .skill__input--new-title-wrapper(
                         :class="{'error' : validation.firstError('skill.title')}"
                      )
                        input(
                          type="text" 
                          placeholder="Новый навык"
                          v-model="skill.title"
                        ).skill__input.skill__input--title.skill__input--new-title
                        .skill__input-error
                          error-tooltip(
                            :errorText="validation.firstError('skill.title')"
                          )
                      .skill__percent.skill__percent--new-skill(
                        :class="{'error' : validation.firstError('skill.percent')}"
                      )
                        input(
                          type="text" 
                          placeholder="100"
                          v-model="skill.percent"
                        ).skill__input.skill__input--percent.skill__input--new-percent
                        span.skill__percent-sign.skill__percent-sign--new-skill %
                        .skill__input-error
                          error-tooltip(
                            :errorText="validation.firstError('skill.percent')"
                          )
                      button(
                        type="submit"
                      ).btn.btn--add-skill +  
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "skill.title": value => {
      return Validator.value(value).required("Введите название навыка");
    },
    "skill.percent": value => {
      return Validator.value(value)
        .required("Введите значение")
        .digit("Значение должно быть числом")
        .between(0, 100, "Значение должно быть между 0 и 100");
    }
  },
  props: {
    category: Number
  },
  data() {
    return {
      formBlocked: false,
      skill: {
        title: "",
        percent: 0,
        category: this.category
      }
    }
  },
  components: {
     errorTooltip: () => import("../common/errorTooltip")
  },
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
       if ((await this.$validate()) === false) return;
      this.formBlocked = true;
      try {
        await this.addSkill(this.skill)
        this.skill.title = "";
        this.skill.percent = "";

        this.SHOW_TOOLTIP({
          type: "success",
          text: "Навык добавлен"
        });
      } catch (error) {
        this.SHOW_TOOLTIP({
          type: "error",
          text: error.response.data.error
        });
      } finally {
        this.formBlocked = false;
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

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

      &.error {
        .skill__input-error {
          display: block;
        }
      }
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

  .skill-form__footer.blocked {
    opacity: 0.5;
    filter: grayscale(100%);
    pointer-events: none;
    user-select: none;
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

      &.error {
        .skill__input-error {
          display: block;
        }
      }
    }
  }

  .skill__percent-sign {
    font-family: inherit;
    font-size: 16px;
    color: rgba(65, 76, 99, 0.7);
  }

  .skill__input-error {
    display: none;
    position: absolute;
    top: 100%;
    z-index: 100;
  }
</style>