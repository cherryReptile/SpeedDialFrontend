<template>
  <auth-wrapper>
    asdasdasd
    <template #description>
      test
      <vs-button @click="$store.commit('SET_COMPONENT', 'register')">
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
  components: {AuthWrapper}
}
</script>

<style lang="scss" scoped>

</style>