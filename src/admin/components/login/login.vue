<template lang="pug">
  .login
      .login__content
        a(href="#").btn.btn--login-close
        .login__title Авторизация
        form(
          @submit.prevent="login"
        ).login__form
          .login__form-row
            .login__form-col
              login-input(
                type="text"
                title="Логин"
                icon="user"
                v-model="user.name"
              )
          .login__form-row
            .login__form-col
              login-input(
                type="password"
                title="Пароль"
                icon="key"
                v-model="user.password"
              )
          .login__form-row.login__form-row--btn
            button(
              type="submit"
            ).btn.btn--login-submit Отправить
</template>

<script>
import $axios from "../../requests";

export default {
  components: {
    loginInput: () => import("./loginInput")
  },
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      try {
        const response = await $axios.post('/login', this.user);
        const token = response.data.token;

        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
      
        this.$router.replace("/");
      } catch (error) {
        //error handling
        alert(error);
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
  @import '../../../styles/mixins';

  .login {
    background: linear-gradient(rgba(#2d3c4e, 0.5), rgba(#2d3c4e, 0.7)), 
      url('../../../images/content/bg/admin_bg.jpg') center center no-repeat;
    background-size: cover;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    z-index: 150;
  }

  .login__content {
    position: absolute;
    @include centered('both');
    background: #fff;
    padding: 50px 75px;
  
    @include phones {
      padding: 20% 15%;
    }
}

.login__title {
  color: #414c63;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 24px;
  text-align: center;

  @include phones {
    font-size: 30px;
  }
}

.login__form {
  width: 100%;
}

.login__form-row {
  width: 100%;
  display: flex;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  &--btn {
    justify-content: center;
  }
}

.login__form-block {
  border-bottom: 1px solid #414c63;
  width: 100%;
  padding-bottom: 10px;
  position: relative;

  &--login {
    .login__form-block-input {
      display: inline-block;
      background: svg-load(
        "user.svg", 
        fill=rgba(#414c63, 0.3), 
        width=100%, 
        height=100%
      ) 
      0 0 no-repeat;
    }
  }

  &--password {
    .login__form-block-input{
      display: inline-block;
      background: svg-load(
       "key.svg", 
        fill=rgba(#414c63), 
        width=100%, 
        height=100%
      ) 
      0 0 no-repeat;
    }
  }
}

.login__form-block-title {
  opacity: 0.3;
  color: #414c63;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}

.login__form-block-input {
  border: none;
  /* background: none; */
  width: 100%;
  font-size: 18px;
  font-weight: bold;
  color: #414c63;
  padding-left: 30px;
}
</style>