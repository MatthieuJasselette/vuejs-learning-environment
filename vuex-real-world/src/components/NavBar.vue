<template>
  <div id="nav" class="nav">
    <router-link to="/" class="brand">Real World Events</router-link>
    <nav>
      <router-link :to="{ name: 'event-list' }">List</router-link>
      <span class="mx-1">|</span>
      <router-link :to="{ name: 'event-create' }">Create</router-link>
      <span class="mx-1">|</span>
      <span v-if="this.$store.state.session">
        <BaseIcon name="user">{{ this.$store.state.user[0].username }}</BaseIcon>
        <b-btn @click="logout" variant="outline-danger">Disconnect</b-btn>
      </span>
      <router-link v-else :to="{ name: 'user-session' }">Login</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$store.dispatch('logout').catch(() => {
        console.log('There was a problem.')
      })
    }
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}
.nav > .brand {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 1.5em;
  color: #39b982;
  text-decoration: none;
}
.nav .nav-item {
  box-sizing: border-box;
  margin: 0 5px;
  color: rgba(0, 0, 0, 0.5);
  text-decoration: none;
}
.nav .nav-item.router-link-exact-active {
  color: #39b982;
  border-bottom: solid 2px #39b982;
}
</style>
