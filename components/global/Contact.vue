<template>
  <div id="contact">
    <div class="container">
      <div class="columns is-centered">
        <div
          class="column is-4"
          v-for="(item, index) in globalData?.contact"
          :key="index"
        >
          <div class="is-flex is-align-items-center">
            <img :src="item.img" />
            <span class="ml-3">
              {{ item.label }}: <a hrefs="#">{{ item.value }}</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
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
#contact {
  background-color: #003c82;
}
#contact .container {
  padding: 15px 0px;
}

#contact .container span {
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
  padding-top: 4px;
}

#contact .container a {
  font-weight: normal;
  color: #faa41d;
}
</style>
