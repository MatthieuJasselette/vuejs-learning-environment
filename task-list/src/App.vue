<template>
  <div id="app">
    <h1>Yet another todo list</h1>
    <NewTask @create-new-task="updateTasks" class="mb-3"></NewTask>
    <h3>Tasks remaining : {{ updateCompletion() }} /{{ tasks.length }}</h3>
    <TaskItem
      v-for="task of tasks"
      :key="task.id"
      :task="task"
      @remove-task="removeTask"
      @update-completion="updateCompletion"
    ></TaskItem>
  </div>
</template>

<script>
import Tasks from './tasks.js';
import NewTask from './components/NewTask.vue';
import TaskItem from './components/TaskItem.vue';

export default {
  name: 'app',
  components: {
    NewTask,
    TaskItem
  },
  data() {
    return{
      tasks: [],
      completionNumber: "???"
    }
  },
  methods: {
    updateTasks(inputTitle) {
      const newTask = new Tasks(inputTitle);
      return this.tasks.push(newTask);
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    updateCompletion() {
      let foo =  this.tasks.filter(task => task.isCompleted == true)
      console.log(foo);
      return this.tasks.filter(task => task.isCompleted == true).length
    },  
  },
  computed: {
          
  },
  mounted() {
    const step1 = new Tasks("Make a task list.");
    const step2 = new Tasks("Create a form to add more tasks.");
    const step3 = new Tasks("Add task validation.");
    const step4 = new Tasks("Add task deletion.");
    const step5 = new Tasks("Track task completion.");
    this.tasks.push(step1, step2, step3, step4, step5);
  },
  updated() {
    // this.updateCompletion();
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
