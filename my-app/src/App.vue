<template>
  <div id="app">
    <img v-if="!isShown" alt="Vue logo" src="./assets/logo.png">
    <img id="beer-logo" v-else alt="Beer logo" src="./assets/craft-beer-logo.jpg">
    <HelloWorld
      v-for="message of messages"
      v-bind:key="message.id"
      v-bind:msg="message.content"
      class="display">
      <h4 v-if="isShown && message.id === 2" class="announcement">Cheers mate !</h4>
    </HelloWorld>
    <b-btn v-on:click="click" class="btn-custom">
      <span v-if="!isShown">Alfred, get me a beer !</span>
      <span v-else>Thank you Alfred.</span>
    </b-btn>
    <b-container v-if="isShown" class="mt-3">
      <b-row>
        <BeerSample
          v-for="beer of beers"
          :key="beer.id"
          :id="beer.id"
          :name="beer.name"
          :tagline="beer.tagline"
          :image_url="beer.image_url"
          :description="beer.description">
        </BeerSample>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import BeerSample from './components/BeerSample.vue';
import { getBeers } from './api.js';

export default {
  name: 'app',
  components: {
    HelloWorld,
    BeerSample,
  },
  data: function () {
    return {
      messages: [{id: 1, content: "Hello stranger!"},
      {id: 2, content: "Do you want a beer ?"}],
      beers: null,
      isShown: false,
    }
  },
  methods: {
    click: function () {
      this.isShown = !this.isShown;
    }
  },
  async mounted () {
    this.beers = await getBeers();
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
.announcement {
  width: 50%;
  margin-left: 25%;
  padding: 0.25em 0;
  color: #42b883;
  border: #2c3e50 solid 1px;
}
.btn-custom {
  background-color:  #2c3e50 !important;
}
#beer-logo {
  height: 200px;
  width: 200px;
}
</style>
