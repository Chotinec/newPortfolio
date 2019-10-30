import Vue from 'vue'
import SimpleVueValidation from 'simple-vue-validator'

Vue.use(SimpleVueValidation)

import { Validator } from 'simple-vue-validator'

new Vue({
  el: '#form',
  template: '#form-template',
  mixins: [require('simple-vue-validator').mixin],
  data() {
    return {
      user: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  components: {
    errorTooltip: () => import('./common/errorTooltip.vue')
  },
  validators: {
    'user.name': (value) => {
      return Validator.value(value).required('Введите имя')
    },
    'user.email': (value) => {
      return Validator.value(value)
        .required('Введите Email')
        .email('Email введен неверно')
    },
    'user.message': (value) => {
      return Validator.value(value)
        .required('Введите сообщение')
        .minLength(20, 'Длина сообщения должна быть минимум 20 символов')
    }
  },
  methods: {
    async sendMessage() {
      if (await this.$validate()) {
        console.log("Validation works!");

        return;
      }

      console.log("Validation not passed!");
    }
  }
})