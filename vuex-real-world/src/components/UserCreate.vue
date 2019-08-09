<template>
  <div>
    <h2>Create a new account</h2>
    <b-form inline @submit.prevent="createUser">
      <label class="sr-only" for="inline-form-input-name">Name</label>
      <b-input
        v-model="user.name"
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Jane Doe"
      ></b-input>

      <label class="sr-only" for="inline-form-input-username">Username</label>
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="user.username" id="inline-form-input-username" placeholder="Username"></b-input>
      </b-input-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <strong v-if="errors.length">Please fix the following error(s)</strong>
    <div v-for="(error, index) of errors" :key="index">{{ error }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.createFreshUser(),
      errors: []
    }
  },
  methods: {
    createUser() {
      this.errors = []
      if (this.user.id && this.user.name && this.user.username) {
        this.$store
          .dispatch('createUser', this.user)
          .then(() => {
            this.user = this.createFreshUser()
          })
          .catch(() => {
            console.log('There was a problem creating your account.')
          })
      } else {
        if (!this.user.name) this.errors.push('Missing name')
        if (!this.user.username) this.errors.push('Missing username')
      }
    },
    createFreshUser() {
      const userId = Math.floor(Math.random() * 100000)

      return {
        id: userId,
        name: '',
        username: ''
      }
    }
  }
}
</script>

<style scoped>
</style>
