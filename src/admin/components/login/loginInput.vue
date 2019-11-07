<template lang="pug">
  label(:class="icon").login__form-block
    .login__form-block-title {{title}}
    input(
      :type="type"
      :value="value"
      @input="$emit('input', $event.target.value)"
  ).login__form-block-input
</template>

<script>
export default {
  props: {
    type: String,
    title: String,
    icon: String,
    value: String | Number
  }
}
</script>

<style lang="postcss" scoped>

  .login__form-block {
    border-bottom: 1px solid #414c63;
    width: 100%;
    padding-bottom: 10px;
    position: relative;
  }

  .user {
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

  .key {
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