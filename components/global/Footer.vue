<template>
  <div id="footer">
    <div class="container">
      <div class="columns is-centered is-vcentered">
        <div
          class="column is-3 logo-mobile"
          v-for="(item, index) in globalData?.footer"
          :key="index"
        >
          <a :href="item.link" target="_blank">
            <img width="auto" :src="item.img" :alt="item.name" />'
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  computed: {
    globalData () {
      if (this.$store.state.globalData) {
        return this.$store.state.globalData
      }

      return null
    }
  }
}
</script>

<style scoped>
#footer {
  background-color: #001e5a;
}
</style>
