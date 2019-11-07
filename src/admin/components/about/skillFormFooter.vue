<template lang="pug">
  form(
    @submit.prevent="addNewSkill"
    :class={blocked: formBlocked}
  ).skill-form__footer
                      .skill__input--new-title-wrapper
                        input(
                          type="text" 
                          placeholder="Новый навык"
                          v-model="skill.title"
                        ).skill__input.skill__input--title.skill__input--new-title
                      .skill__percent.skill__percent--new-skill
                        input(
                          type="text" 
                          placeholder="100"
                          v-model="skill.percent"
                        ).skill__input.skill__input--percent.skill__input--new-percent
                        span.skill__percent-sign.skill__percent-sign--new-skill %
                      button(
                        type="submit"
                      ).btn.btn--add-skill +  
</template>

<script>
import { mapActions } from 'vuex';

export default {
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
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      this.formBlocked = true;
      try {
        await this.addSkill(this.skill)
        this.skill.title = "";
        this.skill.percent = "";
      } catch (error) {
        alert(error);
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
    }
  }

  .skill__percent-sign {
    font-family: inherit;
    font-size: 16px;
    color: rgba(65, 76, 99, 0.7);
  }
</style>