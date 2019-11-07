<template lang="pug">
  .content-wrapper
    template
      admin-header
      admin-navigation
      router-view

</template>

<script>

export default {
  components: {
    adminHeader: () => import("./components/common/adminHeader"),
    adminNavigation: () => import("./components/common/adminNavigation")
  }
}
</script>

<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins";
  @import "../styles/layout/base";
  @import "./styles/*.pcss";

  .content-wrapper {
    display: grid;
    grid-template-rows: max-content max-content 1fr;
    height: 100%;
    min-height: 100vh;
  }
</style>