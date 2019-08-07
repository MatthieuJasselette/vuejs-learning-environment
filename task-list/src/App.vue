<template>
  <div id="app">
    <NewTask></NewTask>
    <h3 v-for="task of tasks" :key="task.id">{{ task.id }} | {{ task.title }} | {{ task.isCompleted }}</h3>
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
    const initialTask = new Tasks("Make a task list.");
    const secondTask = new Tasks("Create a form to add more tasks.");
    this.tasks.push(initialTask, secondTask);
    // this.tasks.push(secondTask);
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
