<template>
  <auth-wrapper @submit="submit">
    <div ref="form">
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
      <p class="text">Пожалуйста,авторизуйтесь,если уже зарегистрированы</p>
      <p>Ещё не зарегистрированы?</p>
      <vs-button
          @click="$store.commit('SET_COMPONENT', 'register')"
          gradient>
        Регистрация
      </vs-button>
    </template>
    <template #title>
      Авторизация

    </template>
  </auth-wrapper>
</template>

<script>
import AuthWrapper from "./auth-wrapper";

export default {
  components: {AuthWrapper},
  methods: {
    resetErrors: function () {
      this.errors.email = ''
      this.errors.password = ''
    },
    resetInputs: function () {
      this.form.email = ''
      this.form.password = ''
    },

    submit: function () {
      const loading = this.$vs.loading({
        target: this.$refs.form,
        color: 'primary',
      })

      this.$http.post('http://speeddial.loc/api/auth/login', this.form)
          .then(response => {
            this.resetErrors()
            this.resetInputs()
            loading.close()
            if (!localStorage.getItem('token')) {
              localStorage.setItem('token', response.data.token)
              this.$store.commit('SET_COMPONENT', 'cabinet')
            }
            console.log(response.data)
          })
          .catch(error => {
            this.resetErrors()
            this.$vs.notification({
              icon: '<i class=\'bx bx-error\'></i>',
              color: 'danger',
              position: 'top-right',
              title: 'Ошибка авторизации',
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
        email: '',
        password: ''
      },
      errors: {
        email: '',
        password: ''
      },
      active: 0
    }
  },
  mounted() {
    if(localStorage.getItem('token')){
      return this.$store.commit('SET_COMPONENT', 'cabinet')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>