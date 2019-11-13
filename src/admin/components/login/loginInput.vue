<template lang="pug">
  label(
    :class="{'error' : error}"
  ).login__form-block
    .login__form-block-title {{title}}
    input(
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ).login__form-block-input
    .login-input__error-tooltip
      error-tooltip(
        :errorText="error"
      )
</template>

<script>
export default {
  components: {
    errorTooltip: () => import("../common/errorTooltip")
  },
  props: {
    type: String,
    title: String,
    icon: String,
    value: String | Number,
    error: {
      type: String,
      default:""
    }
  }
}
</script>

<style lang="postcss" scoped>

  .login-input__error-tooltip {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
  }

  .login__form-block {
    border-bottom: 1px solid #414c63;
    width: 100%;
    padding-bottom: 10px;
    position: relative;

    &.error {
      .login-input__error-tooltip {
        display: block;
      }
    }

    &--user {
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

    &--key {
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

  /* .user {
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
  } */

  /* .key {
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
  } */

  .login__form-block-title {
    opacity: 0.3;
    color: #414c63;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .login__form-block-input {
    border: none;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #414c63;
    padding-left: 30px;
  }
</style>