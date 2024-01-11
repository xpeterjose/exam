<template>
  <div id="cta">
    <div class="container">
      <div class="columns is-centered">
        <div
          class="column is-4"
          v-for="(item, index) in homeData?.offers"
          :key="index"
        >
          <img :src="item.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtaComponent',
  computed: {
    homeData () {
      if (this.$store.state.homeData) {
        return this.$store.state.homeData
      }

      return null
    }
  }
}
</script>

<style scoped>
#cta .container {
  padding: 50px 0px;
}

#cta .container .col-3 {
  width: 384px;
}

img {
  width: 100%;
  max-width: 384px;
  border-radius: 8px;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.5);
}
</style>
