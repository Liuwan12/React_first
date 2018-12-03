<template>
  <div>
    {{getName}}
    <button @click="changename" value="更名"></button>
  </div>
</template>

<script>
export default {
  computed: {
    getName () {
      return this.$store.state.name
    }
  },
  methods: {
    changename () {
      console.log(this.$store)
      this.$store.commit('updateName')
    }
  }
}
</script>
