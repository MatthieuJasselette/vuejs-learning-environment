<template>
  <div class="d-flex flex-column">
    <h2>Login</h2>
    <b-form inline @submi="login">
      <label class="sr-only" for="inline-form-input-username">Username</label>
      <b-input-group prepend="@" class="mb-2 mr-sm-2 mb-sm-0">
        <b-input id="inline-form-input-username" placeholder="Username"></b-input>
      </b-input-group>

      <b-button variant="primary">Save</b-button>
      <span class="buffer mb-3"></span>
      <UserCreate></UserCreate>
    </b-form>
  </div>
</template>

<script>
import UserCreate from '../components/UserCreate.vue'
export default {
  components: {
    UserCreate
  },
  methods: {
    login() {
      this.$store
        .dispatch('login', this.user)
        .then(() => {
          this.$router.push({ name: '/' })
          this.user = this.createFreshUser()
        })
        .catch(() => {
          console.log('There was a problem loging to your account.')
        })
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
