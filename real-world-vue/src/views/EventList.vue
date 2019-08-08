<template>
  <div>
    <h1>Events Listing</h1>
    <EventCard
      v-for="event of events"
      :key="event.id"
      :event="event"
    ></EventCard>
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import eventService from "@/services/eventService.js";

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    eventService
      .getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.log("An error occured" + error.response);
      });
  }
};
</script>

<style></style>
