<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    console.log(msg.id : <slot></slot>)
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-shadow: #42b883 3px 2px;
  /* background-color: magenta; */
}
</style>
