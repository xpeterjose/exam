<template>
  <div id="sticker-app">
    <div class="container">
      <div class="columns">
        <div class="column">
          <a :href="globalData?.download_app?.link" target="_blank">
            <img
              :src="globalData?.download_app?.img"
              alt="Sticker WhatsApp Gratis - Kongsi OLE777"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
img {
  padding: 30px 0px;
  vertical-align: bottom;
}
</style>
