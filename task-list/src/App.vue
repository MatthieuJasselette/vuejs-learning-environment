<template>
  <div id="app">
    <NewTask>I'm a slot.</NewTask>
    <h3 v-for="task of tasks" :key="task.id">{{ task.title }}</h3>
  </div>
</template>

<script>
import Tasks from './tasks.js';
import NewTask from './components/NewTask.vue';

export default {
  name: 'app',
  components: {
    NewTask
  },
  data() {
    return{
      tasks: []
    }
  },
  mounted() {
    const initialTask = new Tasks("Make a task list.")
    this.tasks.push(initialTask)
  }
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
</style>
