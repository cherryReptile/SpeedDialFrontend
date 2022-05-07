<template>
  <auth-wrapper @submit="submit">
    <div ref="form">
      <vs-input block v-model="form.name" placeholder="Имя">
        <template #icon>
          <i class='bx bx-user'></i>
        </template>
        <template v-if="errors.name" #message-danger>
          {{ errors.name }}
        </template>
      </vs-input>
      <vs-input block type="email" v-model="form.email" placeholder="Email">
        <template #icon>
          <i class='bx bx-injection'></i>
        </template>
        <template v-if="errors.email" #message-danger>
          {{ errors.email }}
        </template>
      </vs-input>
      <vs-input block type="password" icon-before v-model="form.password" placeholder="Пароль">
        <template #icon>
          <i class='bx bx-lock-open-alt'></i>
        </template>
        <template v-if="errors.password" #message-danger>
          {{ errors.password }}
        </template>
      </vs-input>
    </div>
    <template #description>
      <p class="text">
        Регистрируясь в нашем сервисе вы становитесь уникальным человеком, самым лучшим в мире
        таких посетителей как вы у нас еще не было, ты самый сладкий пирожочек, добро пожаловать к нам
      </p>
      <p>Уже зарегистрированы?</p>
      <vs-button @click="$store.commit('SET_COMPONENT', 'auth')" gradient>
        Авторизоваться
      </vs-button>
    </template>
    <template #title>
      Регистрация
    </template>
  </auth-wrapper>
</template>

<script>
import AuthWrapper from "./auth-wrapper";
export default {
  components: {AuthWrapper},
  methods: {
    resetErrors: function () {
      this.errors.name = ''
      this.errors.email = ''
      this.errors.password = ''
    },
    resetInputs: function () {
      this.form.name = ''
      this.form.email = ''
      this.form.password = ''
    },

    submit: function () {
      const loading = this.$vs.loading({
        target: this.$refs.form,
        color: 'primary',
      })

      this.$http.post('http://speeddial.loc/api/auth/register', this.form)
          .then(response => {
            this.resetErrors()
            this.resetInputs()
            loading.close()
            console.log(response.data)
          })
          .catch(error => {
            this.resetErrors()
            this.$vs.notification({
              icon: '<i class=\'bx bx-error\'></i>',
              color: 'danger',
              position: 'top-right',
              title: 'Ошибка регистрации',
              text: error.response.data.message
            })

            for (let key in error.response.data.errors) {
              this.errors[key] = error.response.data.errors[key][0]
            }
            loading.close()
          })
      loading.close()
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      },
      errors: {
        name: '',
        email: '',
        password: ''
      },
      active: 0
    }
  }
}
</script>
