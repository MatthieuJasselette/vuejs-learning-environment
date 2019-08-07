<template>
    <div class="d-flex justify-content-center">
        <b-form @submit.prevent="submitTask" inline>
            <label class="sr-only" for="inline-form-input-task">Name</label>
            <b-input
            id="inline-form-input-task"
            class="mb-2 mr-sm-2 mb-sm-0"
            v-model="value"
            ></b-input>

            <b-button type="submit" class="btn-green">Submit</b-button>
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
            value: "",
        }
    },
    methods: {
        submitTask() {
            if (this.value) {
                this.$emit('create-new-task', this.value);
                this.value = "";
            } else {
                alert("Please provide a task to add");
            }
        }
    }
}
</script>

<style scoped>
.btn-green{
    background-color: #42b883;
}
</style>
