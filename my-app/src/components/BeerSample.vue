<template>
    <b-col cols="4" md="3">
        <b-card
        :title="name"
        :img-src="img_url"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <b-card-text>
            {{ tagline }}
        </b-card-text>

        <b-button class="btn-custom">Go somewhere</b-button>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name: "BeerSample",
    props: {
        name: String,
        tagline: String,
        img_url: String,
        description: String
    },

}
</script>

<style scoped>

</style>
