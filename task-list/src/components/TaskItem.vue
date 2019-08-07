<template>
    <div>
        <b-form-checkbox
        :id="'checkbox-'+task.id"
        v-model="task.isCompleted"
        :name="'checkbox-'+task.id"
        value=true
        unchecked-value=false
        @change="toggleCompletion"
        ><h5>{{ task.title }}</h5>
        </b-form-checkbox>
        
        <b-btn @click="removeTask">X</b-btn>
    </div>
</template>

<script>
export default {
    name: "TaskItem",
    props: {
        task: Object
    },
    data() {
        return {

        }
    },
    methods: {
        removeTask() {
            this.$emit("remove-task", this.task.id);
        },
        toggleCompletion() {
            this.$emit("update-completion");
        }
    }
}
</script>

<style scoped>

</style>
