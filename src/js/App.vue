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
  </div>
</template>

<script>
export default {
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