<template>
  <div class="card">
    <div class="header">
      <h1>Dummy</h1>
      <div class="edit">
        <a href="javascript:" @click="toggleEditForm">Edit</a>
      </div>
      <div class="remove">
        <a href="javascript:" @click="removeCard">Remove</a>
      </div>
    </div>
    <div v-if="!showEdit">
      {{ data }}
    </div>
    <div v-else>
      <label>Id</label>
      <input v-model="formData.id" disabled />
      <label>Name</label>
      <input v-model="formData.name" />
      <label>Color</label>
      <input v-model="formData.color" />
      <button type="button" @click="editDummy">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    data: Object
  },
  data () {
    return {
      showEdit: false,
      formData: {
        id: this.data.id,
        name: this.data.name,
        color: this.data.color
      }
    }
  },
  methods: {
    toggleEditForm () {
      this.showEdit = !this.showEdit
    },
    editDummy () {
      this.$store.dispatch('editDummy', this.formData)
      this.toggleEditForm()
    },
    removeCard () {
      this.$store.dispatch('removeDummy', this.data.id)
    }
  }
}
</script>

<style>
.card {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
  margin: 15px 0;
  padding: 10px;
}
.header {
  display: flex;
  flex-direction: row;
}
.header h1 {
  display: flex;
  flex-grow: 1;
}
.header .edit {
  margin-right: 10px;
}
.header .remove {
  display: flex;
}
</style>
