<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  async mounted () {
    await this.$store.dispatch('getApi')
  }
}
</script>
