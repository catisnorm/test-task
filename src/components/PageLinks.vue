<template>
  <div class="page-links">
    {{ currentPage }} / {{ pageCount }}
    <div class="prev" @click="previous">&lt;</div>
    <div class="next" @click="next">&gt;</div>
  </div>
</template>

<script>
export default {
  name: 'PageLinks',
  props: {
    pageSize: Number,
    total: Number,
    currentPage: Number
  },
  computed: {
    pageCount () {
      if (this.pageSize > 0) {
        let count = this.total / this.pageSize
        return Math.ceil(count)
      } else {
        return 1
      }
    }
  },
  methods: {
    previous () {
      if (this.currentPage <= 1) {
        return
      }
      this.$emit('update:currentPage', this.currentPage - 1)
    },
    next () {
      if (this.currentPage === this.pageCount) {
        return
      }
      this.$emit('update:currentPage', this.currentPage + 1)
    }
  }
}
</script>

<style>
.page-links {
  margin: 15px 0 0 0;
}
.prev {
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  width: 20px;
  text-align: center;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 10px;
}
.next {
  display: inline-block;
  width: 20px;
  text-align: center;
  border: 1px solid #cccccc;
  border-radius: 3px;
  padding: 10px;
}
.prev:hover {
  background-color: #cccccc;
  color: #ffffff;
  cursor: pointer;
}
.next:hover {
  background-color: #cccccc;
  color: #ffffff;
  cursor: pointer;
}
</style>
