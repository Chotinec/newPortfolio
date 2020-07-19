<template lang="pug">
  .skill-form(:class="{'blocked': !editMode}")
                    .skill-form__head-row(
                      :class="{'error' : validation.firstError('editedCategory.category')}"
                    )
                      input(
                        type="text" 
                        placeholder="Название новой группы"
                        v-model="editedCategory.category"
                      ).skill-form__title
                      .skill-form__title-error
                        error-tooltip(
                          :errorText="validation.firstError('editedCategory.category')"
                      )
                      .skill-form__head-btns
                        .skill-form__edit-btns(v-if="editMode==true")
                          button(
                            type='button'
                            @click="editExistedCategory"
                          ).btn.btn--save-skill
                          button(
                            type='button'
                            @click="removeExistedCategory"
                          ).btn.btn--remove-skill
                        .skill-form__read-btns(v-if="editMode==false")
                          button(
                            type='button'
                            @click="editMode=true"
                          ).btn.btn--edit-skill-form
                    .skill-form__table
                      skill-table(
                        :skills="editedCategory.skills"
                      )
                    skill-footer(
                       :category="editedCategory.id"
                    )
</template>

<script>
import { mapActions, mapMutations } from 'vuex';
import { Validator } from "simple-vue-validator";

export default {
  mixins: [require("simple-vue-validator").mixin],
  validators: {
    "editedCategory.category": value => {
      return Validator.value(value).required("Введите название категории");
    }
  },
  components: {
    skillTable: () => import("./skillFormTable"),
    skillFooter: () => import("./skillFormFooter.vue"),
    errorTooltip: () => import("../common/errorTooltip")
  },
  props: {
    category: {
      type: Object,
      default: () => ({}),
      required: true
    },
  },
  data() {
    return {
      editMode: false,
      editedCategory: this.category
    }
  },
  methods: {
    ...mapMutations("tooltip", ["SHOW_TOOLTIP"]),
    ...mapActions("categories", ["removeCategory", "editCategory"]),
    async removeExistedCategory() {
      try {
         await this.removeCategory(this.category);

        this.SHOW_TOOLTIP({
          type: "success",
          text: "Категории удалена"
        });
      } catch (error) {
        this.SHOW_TOOLTIP({
          type: "error",
          text: error.response.data.error
        });
      }
    },
    async editExistedCategory() {
      if ((await this.$validate("editedCategory.category")) === false) {
        return;
      }
      try {
        await this.editCategory(this.editedCategory);
        this.editMode = !this.editMode;

        this.SHOW_TOOLTIP({
          type: "success",
          text: "Категория обнавлена"
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

  .skill-form.blocked {
    .skill-form__title {
      pointer-events: none;
      user-select: none;
    }
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

  .skill-form__table {
    width: 100%;
    flex: 1;
    overflow: auto;
    min-height: 50px;
    margin-bottom: 20px;
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

</style>