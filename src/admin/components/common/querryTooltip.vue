<template lang="pug">
  .queryTooltip(
    v-if="show"
    :class="{'success': type === 'success', 'error': type === 'error'}"
  )
    span.queryTooltip__text {{text}}
    button(
      type="button"
      @click="CLOSE_TOOLTIP"
    ).btn.btn--close-tooltip
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  data() {
    return {
      timeout: 1500
    }
  },
  computed: {
      ...mapState("tooltip", {
        show: state => state.show,
        type: state => state.type,
        text: state => state.text
    })
  },
  methods: {
    ...mapMutations("tooltip", ["CLOSE_TOOLTIP"])
  },
  updated() {
    setTimeout(this["CLOSE_TOOLTIP"], this.timeout);
  }
}
</script>

<style lang="postcss" scoped>
  .queryTooltip {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 20px 30px;
    z-index: 1000;
    color: #fff;
    display: flex;
    align-items: center;
    
    &.success {
      background: rgba(green, 0.6);
    }
  
    &.error {
      background: rgba(red, 0.6);
    }
  }

  .queryTooltip__text {
    margin-right: 50px;
  }
</style>