<template lang="pug">
  table.skill-table
    skill-row(
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
    )                      
</template>

<script>
export default {
  components: {
    skillRow: () => import("./skillFormRow")
  },
  props:{
    skills: {
      type: Array,
      // default: []
    }
  },
  data() {
    return {
      editMode: false
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

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

</style>