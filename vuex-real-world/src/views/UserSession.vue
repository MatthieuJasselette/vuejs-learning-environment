<template>
  <div class="d-flex flex-column">
    <h2>Login</h2>
    <b-form inline @submit.prevent="login">
      <label class="sr-only" for="inline-form-input-username">Username</label>
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="username" id="inline-form-input-username" placeholder="Username"></b-input>
      </b-input-group>

      <b-button type="submit" variant="primary">Login</b-button>
      <div v-if="error">
        <strong>Error :</strong>
        {{ error }}
      </div>
    </b-form>
    <span class="buffer mb-3"></span>
    <UserCreate></UserCreate>
  </div>
</template>

<script>
import UserCreate from '../components/UserCreate.vue'
export default {
  components: {
    UserCreate
  },
  data() {
    return {
      username: '',
      error: ''
    }
  },
  methods: {
    login() {
      this.error = ''
      if (this.username) {
        this.$store
          .dispatch('login', this.username)
          .then(() => {
            this.$router.push({ name: 'event-list' })
            this.username = ''
          })
          .catch(error => {
            console.log('There was a problem loging to your account.', error)
          })
      } else {
        this.error = 'Please enter a valid username.'
      }
    }
  }
}
</script>

<style scoped>
.buffer {
  height: 42px;
  width: 100%;
  border-bottom: solid 1px black;
}
</style>
