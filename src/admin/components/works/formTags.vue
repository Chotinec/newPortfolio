<template lang="pug">
  .tags
    ul.tags__list
      li.tags__item(v-for="tag in editedTags")
        span.tags__name {{tag}}
        button(
          type="button"
          @click="REMOVE_TAG(tag)"
        ).btn.btn--remove-tag
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("works", ["editedTags"])
  },
  methods: {
     ...mapMutations('works', ['REMOVE_TAG'])
  },
}
</script>

<style lang="postcss" scoped>
  .tags__list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  .tags__item {
    border-radius: 14.9px;
    padding: 7px 13px;
    background-color: #f4f4f4;
    font-size: 13px;
    font-weight: 600;
    color: rgba(40, 51, 64, 0.7);
    margin-right: 8px;
    margin-bottom: 5px;
  }

  .tags__name {
     margin-right: 10px;
  }

</style>