<template lang="pug">
  .content-wrapper
    template
      admin-header(v-if="userIsLogged")
      admin-navigation(v-if="userIsLogged")
      router-view
    query-tooltip

</template>

<script>
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    adminHeader: () => import("./components/common/adminHeader"),
    adminNavigation: () => import("./components/common/adminNavigation"),
    queryTooltip: () => import("./components/common/querryTooltip")
  },
  computed: {
    ...mapGetters('user', ['userIsLogged'])
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