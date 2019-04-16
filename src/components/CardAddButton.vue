<template>
  <div class="add-btn-container">
    <div v-if="!showForm" class="add-sign" @click="toggleForm">+</div>
    <div v-else>
      <label>Id</label>
      <input v-model="formData.id" disabled />
      <label>Name</label>
      <input v-model="formData.name" />
      <label>Color</label>
      <input v-model="formData.color" />
      <button type="button" @click="addDummy">Add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAddButton',
  data () {
    return {
      showForm: false,
      formData: {
        id: this.$store.getters.lastId + 1,
        name: null,
        color: null
      }
    }
  },
  methods: {
    toggleForm () {
      this.resetForm()
      this.showForm = !this.showForm
    },
    addDummy (formData) {
      this.$store.dispatch('addDummy', {
        id: this.formData.id,
        name: this.formData.name,
        color: this.formData.color
      })
      this.toggleForm()
    },
    resetForm () {
      this.formData.id = this.$store.getters.lastId + 1
      this.formData.name = null
      this.formData.color = null
    }
  }
}
</script>

<style>
.add-btn-container {
  text-align: center;
}
.add-sign {
  font-size: 72px;
  color: #9c9c9cc0;
  text-decoration: none;
  display: block;
  padding: 20px;
  border: 1px solid #cccccc;
  width: 144px;
  margin: auto;
}
.add-sign:hover {
  background-color: #cccccc;
  color: #ffffff;
  cursor: pointer;
}
.add-btn-container label {
  margin-right: 10px;
  margin-left: 10px;
}
button {
  margin-left: 10px;
}
</style>
