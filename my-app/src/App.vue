<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld
      v-for="message of messages"
      v-bind:key="message.id"
      v-bind:msg="message.content"
      class="display">{{message.id}}</HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data: function () {
    return {
      messages: [{id: 1, content: "Hello world!"},
      {id: 2, content: "I'm hungry"},
      {id: 3, content: "I mean, i'm always hungry"}]
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.display {
  text-align: center;
}
</style>
