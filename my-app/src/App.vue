<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld
      v-for="message of messages"
      v-bind:key="message.id"
      v-bind:msg="message.content"
      class="display">
      <h4 v-if="message.id === 3" class="announcement">Coming soon, an app to choose beers !</h4>
    </HelloWorld>
    {{data}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import { getBeers } from './api.js';

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data: function () {
    return {
      messages: [{id: 1, content: "Hello world!"},
      {id: 2, content: "I'm hungry."},
      {id: 3, content: "I 'm thirsty too, I should get a beer."}],
      data: null
    }
  },
  async mounted () {
    this.data = await getBeers();
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
.announcement{
  width: 50%;
  margin-left: 25%;
  padding: 1em 0;
  color: #42b883;
  border: #2c3e50 solid 1px;
}
</style>
