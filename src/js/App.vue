<template>
  <div>

    <vs-input v-model="text" placeholder="Введите текст">
      <template #icon>
        <i class='bx bx-injection'></i>
      </template>
    </vs-input>

    <div v-if="text === 'пидор'">
      Сам ты пидор
    </div>
    <div v-else>
      Текст, который вы ввели в инпуте: <b>{{ text }}</b>
    </div>

    <register></register>
  </div>
</template>

<script>
import Register from "./components/register.vue"

export default {
  components: {Register},
  props: [],
  data() {
    return {
      text: ''
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>