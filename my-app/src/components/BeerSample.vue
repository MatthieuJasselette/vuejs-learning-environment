<template>
    <b-col cols="6" md="4">
        <b-card
        :sub-title="name"
        :img-src="image_url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <b-card-text>
            {{ tagline }}
        </b-card-text>
        <div>
            <b-button v-b-modal="'modal-'+id" class="btn-custom">Launch demo modal</b-button>

            <b-modal :id="'modal-'+id" title="BootstrapVue">
                <p class="my-4">{{ description }}</p>
            </b-modal>
        </div>
        </b-card>
    </b-col>
</template>



<script>

export default {
    name: "BeerSample",
    components: {
    },
    props: {
        id: Number,
        name: String,
        tagline: String,
        image_url: String,
        description: String
    },

}
</script>

<style scoped>

</style>
