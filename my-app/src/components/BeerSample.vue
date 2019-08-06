<template>
    <b-col cols="6" md="4">
        <b-card
        :title="name"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <b-card-text>
            {{ tagline }}
        </b-card-text>
        <slot></slot>
        <b-button class="btn-custom">Go somewhere</b-button>
        </b-card>
    </b-col>
</template>

// :img-src="image_url"
// img-alt="Image"
// img-top

<script>
export default {
    name: "BeerSample",
    props: {
        name: String,
        tagline: String,
        image_url: String,
        description: String
    },

}
</script>

<style scoped>

</style>
