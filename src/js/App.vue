<template>
  <div>
    <transition name="fade" mode="out-in">
      <component :is="this.$store.getters.GET_COMPONENT"></component>
    </transition>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      user: null
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>