<template lang="pug">
  .navigation-block
    .container.admin__container
      nav.navigation
        ul.navigation__list
          li.navigation__item(v-for="tab in tabs")
            router-link(
              tag="button"
              :data-text="tab.title" 
              :to="tab.href"
              exact-active-class="active"
           ).navigation__link
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Отзывы", href: "/comments" },
        { title: "Работы", href: "/works" }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .navigation-block {
    height: 80px;
    display: flex;
    align-items: center;
  }

  .navigation {
    height: 100%;
    color: #414c63;
    display: flex;
    align-items: center;
  }

  .navigation__list {
    display: flex;
  }

  .navigation__item {
    margin-right: 60px;
    font-size: 16px;
    font-weight: 400;

    &:last-child {
      margin-right: 0;
    }

    &:hover {
      transition: .3s;
      color: #383bcf;
    }
  }

  /* .navigation__item.active {
    position: relative;

    &:after {
      position: absolute;
      top: 30px;
      @include centered('x');
      content: "";
      width: 110px;
      height: 2px;
      background-color: #383bcf;
    }
  } */

  .navigation__link {
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  width: 125px;
  justify-content: center;
  border-bottom: 2px solid transparent;
  text-decoration: none;

  @include phones {
    width: 100px;
  }

  &:before {
    content: attr(data-text);
  }

  &:hover,
  &.active {
    color: #383bcf;
    /* font-weight: 600; */
    border-color: currentColor;
  }
}
</style>