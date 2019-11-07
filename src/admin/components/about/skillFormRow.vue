<template lang="pug">
  tr(:class="{'blocked': !editMode}").skill__row
                            td.skill__cell.skill__cell--title
                              input(
                                type="text" 
                                placeholder="Новый навык" 
                                v-model="editedSkill.title"
                              ).skill__input.skill__input--table.skill__input--title
                            td.skill__cell.skill__cell--percent
                              .skill__percent
                                input(
                                  type="text" 
                                  placeholder="100" 
                                  v-model="editedSkill.percent"
                                ).skill__input.skill__input--table.skill__input--percent
                                span.skill__percent-sign %
                            td.skill__cell.skill__cell--btns
                              .skill__btn
                                .skill__edit-btns(v-if="editMode==true")
                                    button(
                                      type='button'
                                      @click="editExistedSkill"
                                    ).btn.btn--save-skill
                                    button(
                                      type='button'
                                      @click="editMode = false"
                                    ).btn.btn--remove-skill
                                .skill__read-btns(v-if="editMode==false")
                                  button(
                                    type='button'
                                    @click="editMode = true"
                                  ).btn.btn--edit-skill
                                  button(
                                    type='button'
                                    @click="removeExistedSkill"
                                  ).btn.btn--trash-skill  
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    skill: {
      type: Object,
      default: () => ({}),
      required: true
    }
  },
  data() {
    return {
      editMode: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill({
          id: this.skill.id,
          category: this.skill.category
        });
      } catch (error) {
        
      }
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editMode = !this.editMode;
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .skill__row {

    &--edit {
      .skill__cell--title {
        border-bottom: 1px solid #000;
      }

      .skill__cell--percent {
        border-bottom: 1px solid #000;
      }

      /* .skill__edit-btns {
        display: inline-block;
      }

      .skill__read-btns {
        display: none;
      } */
    }
  }

  .skill__row.blocked {
    .skill__input {
      pointer-events: none;
      user-select: none;
    }
  }

  .skill__cell {

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
</style>