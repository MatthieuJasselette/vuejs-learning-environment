<template>
    <div class="d-flex justify-content-center mb-2">
        <b-form-checkbox
        class="mt-1"
        :id="'checkbox-'+task.id"
        v-model="task.isCompleted"
        :name="'checkbox-'+task.id"
        ><h5>{{ task.title }}</h5>
        </b-form-checkbox>
        <b-btn class="ml-2" @click="removeTask">X</b-btn>
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
    }
}
</script>

<style scoped>

</style>
