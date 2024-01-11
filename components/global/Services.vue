<template>
  <div id="services">
    <div class="container">
      <div v-html="homeData?.content" />

      <div class="columns is-centered mt-6">
        <div
          class="column is-3 has-text-centered"
          v-for="(item, index) in homeData?.services"
          :key="index"
        >
          <img :src="item.img" alt="Group Icon" />
          <h2>{{ item.title }}</h2>
          <p>
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesComponent',
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
#services {
  background-color: rgba(0, 0, 0, 0.03);
}

#services .container {
  padding: 50px 0px;
}

#services .steps {
  padding: 0;
}

#services ul.steps li {
  list-style: none;
  font-size: 17px;
  padding-top: 5px;
}

#services ul.steps li span {
  background: #faa41d;
  color: #fff;
  padding: 0px 7px;
  border-radius: 3px;
  margin-right: 4px;
}

#services .container img {
  margin-bottom: 20px;
}

#services .container h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #00276c;
  font-weight: bold;
}

#services .container p {
  font-size: 17px;
}
</style>
