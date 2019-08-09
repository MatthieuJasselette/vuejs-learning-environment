<template>
  <div>
    <h2>Create a new account</h2>
    <b-form inline @submit="createUser">
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

      <b-button variant="primary">Save</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.createFreshUser()
    }
  },
  methods: {
    createUser() {
      this.$store
        .dispatch('createUser', this.user)
        .then(() => {
          this.$router.push({ name: '/' })
          this.user = this.createFreshUser()
        })
        .catch(() => {
          console.log('There was a problem creating your account.')
        })
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
