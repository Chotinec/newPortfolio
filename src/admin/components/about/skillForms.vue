<template lang="pug">
  .skill-forms
            ul.skill-forms__list
              li(v-if="showAddForm").skill-forms__item
                skill-form-new(@closeNewSkillCard="$emit('closeNewSkillCard')")
              li.skill-forms__item(v-for="category in categories" :key="category.id")
                skill-form(
                  :category="category"
                )
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    skillFormNew: () => import("./skillFormNew"),
    skillForm: () => import("./skillForm")
  },
  props: {
    showAddForm: Boolean
  },
  created() {
    this.fetchCategories();
  }, 
  computed: {
    ...mapState("categories", {
      categories: state => state.categories 
    }),
  },
  methods: {
    ...mapActions("categories", ["addCategory", "fetchCategories"]),
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';
  
  .skill-forms__list {
    display: grid;
    grid-template-columns:  1fr 1fr;
    grid-gap: 30px;

    @include big-phones {
      grid-template-columns: 1fr;
      grid-gap: 30px 0;
    }
  }
  
  .skill-forms__item {
    box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
  }
</style>