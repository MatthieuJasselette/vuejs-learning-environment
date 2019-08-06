<template>
    <b-col cols="6" md="4">
        <b-card
        :sub-title="name"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
        >
        <b-card-text>
            {{ tagline }}
        </b-card-text>
        <ModalTemplate
            :id="id"
            :name="name"
            :image_url="image_url"
            :description="description"
            >
        </ModalTemplate>
        </b-card>
    </b-col>
</template>



<script>
import ModalTemplate from './utils/ModalTemplate.vue'
export default {
    name: "BeerSample",
    components: {
        ModalTemplate
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
