<template lang="pug">
  .header-block
       .container.admin__container
        header.header
          .header__info
            .header__avatar
              img(src="../../../images/content/user.jpg" alt="user").header__img
            .header__content
              .header__name Хотинец Артем
              .header__title Панель администрирования
          a(
            href="#"
            @click="logout"
          ).header__btn Выйти
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$router.replace("/login");
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .admin__container {
    height: 100%;
  }

  .header-block {
    background-image: linear-gradient(to right, #3e3e59, #454573);
    height: 80px;
  }
  
  .header {
    height: 100%;
    color: $text-color;
    margin-right: 20px;
    display: grid;
    align-items: center;
    grid-template: "left right" 1fr / 1fr 1fr;
  }

  .header__info {
    grid-area: left;
    display: flex;
    align-items: center;
  }

  .header__avatar {
    width: 44px;
    height: 44px;
    margin-right: 20px;
  }

  .header__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .header__content {
    display: flex;
    align-items: center;
  }

  .header__name {
    font-size: 18px;
    font-weight: 400;
    margin-right: 30px;
  }

  .header__title {
    opacity: 0.5;
    font-size: 14px;
    font-weight: 400;
  }

  .header__btn {
    grid-area: right;
    justify-self: end;
    opacity: 0.7;
    font-size: 16px;
    font-weight: 400;
    text-decoration: underline;
    transition: .3s;

    &:hover {
       opacity: 1;
    }
  }

</style>