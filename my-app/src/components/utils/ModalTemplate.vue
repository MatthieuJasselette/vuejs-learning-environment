<template>
    <div>
        <b-button v-b-modal="'modal-'+id" class="btn-custom">More informations</b-button>

        <b-modal size="lg" :id="'modal-'+id" :title="name" class="d-flex">
            <img :src="image_url" alt="Beer image" class="w-33">
            <p class="my-4 w-33">{{ description }}</p>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: "ModalTemplate",
    props: {
        id: Number,
        name: String,
        image_url: String,
        description: String,
    },
}
</script>

<style>

</style>
