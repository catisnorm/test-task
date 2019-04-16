<template>
  <div id="app">
    <navbar />
    <div class="container">
      <label for="per-page" style="margin-right: 5px;">Items per page:</label>
      <input id="per-page" v-model="perPage" type="number" :max="totalCount" min="1" />
      <card-container :dummy-objects="dummies" :total="totalCount" :per-page="pageSize" />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import CardContainer from './components/CardContainer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    CardContainer
  },
  data () {
    return {
      perPage: 2
    }
  },
  computed: {
    dummies () {
      return this.$store.getters.dummyObjects
    },
    totalCount () {
      return this.dummies.length
    },
    pageSize () {
      return parseInt(this.perPage)
    }
  }
}
</script>

<style>
body {
  width: 100%;
  margin: 0;
  background-color: #f8f8f8;
  overflow: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding-bottom: 30px;
}
.container {
  margin: 0 100px;
}
</style>
