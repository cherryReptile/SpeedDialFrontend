<template>
  <div class="container">
    <div class="grid">
      <vs-row justify="center" align="center">
        <vs-col ref="form" w="2">
          <form @submit.prevent="$emit('submit')" class="input-margin">
            <slot></slot>
            <vs-button
                class="center"
                style="margin-top: 5px"
                id="form-button"
                gradient
                type="submit"
            >
              <slot name="title"></slot>
            </vs-button>
          </form>
        </vs-col>
        <vs-col w="3" offset="1" class="registration-description">
          <h2>
            <slot name="title"></slot>
          </h2>
          <slot name="description"></slot>
        </vs-col>
      </vs-row>
    </div>


  </div>
</template>

<style lang="scss" scoped>
.registration-description {
  background: #ffffb0;
  padding: 10px 20px;
  border-radius: 10px;
  box-shadow: 8px 5px 8px rgba(0, 0, 0, .08);
}
</style>