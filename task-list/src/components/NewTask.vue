<template>
    <div>
        <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Name</label>
            <b-input
            id="inline-form-input-name"
            class="mb-2 mr-sm-2 mb-sm-0"
            placeholder="Jane Doe"
            ></b-input>

            <b-button variant="primary">Save</b-button>
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
}
</script>

<style scoped>

</style>
