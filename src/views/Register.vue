<template>
  <form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{invalid: ($v.email.$dirty && !$v.email.required)
        || ($v.email.$dirty && !$v.email.email)}"
        >
        <label for="email">Email</label>
        <small class="helper-text invalid"
               v-if="$v.email.$dirty && !$v.email.required"
        >Поле не должно быть пустым</small>
        <small class="helper-text invalid"
               v-else-if="$v.email.$dirty && !$v.email.email"
        >Введен некорректный Email</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="pass"
          :class="{invalid: ($v.pass.$dirty && !$v.pass.required)
        || ($v.pass.$dirty && !$v.pass.minLength)}"
        >
        <label for="password">Пароль</label>
        <small class="helper-text invalid"
               v-if="$v.pass.$dirty && !$v.pass.required"
        >Поле не должно быть пустым</small>
        <small class="helper-text invalid"
               v-else-if="$v.pass.$dirty && !$v.pass.minLength"
        >Пароль должен быть не меньше {{$v.pass.$params.minLength.min}}
          символов, сейчас {{pass.length}} символа</small>
      </div>
      <div class="input-field">
        <input
          id="repeatPassword"
          type="password"
          v-model.trim="repeatPass"
          :class="{invalid: ($v.pass.$dirty && !$v.pass.required)
        || ($v.pass.$dirty && !$v.pass.minLength)}"
        >
        <label for="password">Повторите пароль</label>
        <small class="helper-text invalid"
               v-if="$v.pass.$dirty && !$v.pass.required"
        >Поле не должно быть пустым</small>
        <small class="helper-text invalid"
               v-else-if="!$v.repeatPass.sameAsPassword"
        >Пароль должен совпадать</small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{invalid: ($v.name.$dirty && !$v.name.required)}"
        >
        <label for="name">Имя</label>
        <small class="helper-text invalid"
               v-if="$v.name.$dirty && !$v.name.required"
        >Имя обязательно</small>
      </div>
      <p>
        <label>
          <input
            type="checkbox"
            v-model="agree"
          />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect blue-grey lighten-1 auth-submit"
          type="submit"
        >
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import {
  email, required, minLength, sameAs,
} from 'vuelidate/lib/validators';

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      pass: '',
      repeatPass: '',
      name: '',
      agree: false,
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    pass: {
      required,
      minLength: minLength(8),
    },
    repeatPass: {
      sameAsPassword: sameAs('pass'),
    },
    name: {
      required,
    },
    agree: {
      checked: (v) => v,
    },
  },
  methods: {
    async onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.pass,
        name: this.name,
      };
      try {
        await this.$store.dispatch('register', formData);
        this.$router.push('/');
      } catch (e) {
        console.log(e);
      }
      console.log(formData);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
