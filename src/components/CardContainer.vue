<template>
  <div class="card-container">
    <card v-for="obj in displayingDummies" :key="obj.id" :data="obj" />
    <add-card />
    <page-links :total="total" :page-size="perPage" :current-page.sync="currentPage" />
  </div>
</template>

<script>
import Card from './Card.vue'
import AddCard from './CardAddButton.vue'
import PageLinks from './PageLinks.vue'

export default {
  name: 'CardContainer',
  components: {
    Card,
    AddCard,
    PageLinks
  },
  props: {
    total: Number,
    perPage: Number,
    dummyObjects: Array
  },
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    displayingDummies () {
      let disp = []
      let take = this.perPage
      let skip = (this.currentPage - 1) * take
      let end = skip + take
      disp = this.dummyObjects.slice(skip, end)
      return disp
    }
  },
  watch: {
    perPage () {
      this.currentPage = 1
    }
  }
}
</script>

<style>
.card-container {
  background-color: white;
  margin-top: 10px;
  padding: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
</style>
