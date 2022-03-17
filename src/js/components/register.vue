<template>
  <div class="center">
    <div class="grid">
      <vs-row justify="center">
        <vs-col>
          <vs-input v-model="userName" placeholder="User name">
            <template #icon>
              <i class='bx bx-user'></i>
            </template>
          </vs-input>
          <vs-input type="email" v-model="email" placeholder="Email">
            <template #icon>
              <i class='bx bx-injection'></i>
            </template>
          </vs-input>
          <vs-input type="password" icon-before v-model="password" placeholder="Password">
            <template #icon>
              <i class='bx bx-lock-open-alt'></i>
            </template>
          </vs-input>
          <vs-button
              id="form-button"
              shadow
              :active="active == 0"
              @click="active = 0"
          >
            Send
          </vs-button>
        </vs-col>
      </vs-row>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      active: 0
    }
  }
}
</script>