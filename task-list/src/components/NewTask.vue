<template>
    <div class="d-flex justify-content-center">
        <b-form inline>
            <label class="sr-only" for="inline-form-input-task">Name</label>
            <b-input
            id="inline-form-input-task"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="stuff to do"
            ></b-input>

            <b-button class="btn-green" @click="submitTask">Submit</b-button>
        </b-form>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: "NewTask",
    props: {

    },
    data() {
        return {

        }
    },
    methods: {
        submitTask() {
            this.$emit('create-new-task', 'new task');
        }
    }
}
</script>

<style scoped>
.btn-green{
    background-color: #42b883;
}
</style>
