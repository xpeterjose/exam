<template>
  <div id="header">
    <div
      class="container is-flex is-justify-content-space-between is-align-items-center p-4"
    >
      <a href="/">
        <img :src="globalData?.logo" alt="Kongsi OLE777 Affiliate Bola" />
      </a>

      <div class="is-flex">
        <a class="login-btn" :href="globalData?.link.login">Login</a>
        <a class="register-btn"
           :href="globalData?.link.register"
          >Daftar sekarang</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
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
#header {
  background-color: #001e5a;
}

.login-btn {
  padding: 0px 10px;
  background-color: #ff7d00;
  color: #ffffff;
  font-size: 15px;
  font-family: Open Sans, sans-serif;
  border: 0px;
  border-radius: 5px;
  float: left;
  margin-right: 5px;
  height: 40px;
  width: auto;
  line-height: 40px;
}

.register-btn {
  padding: 0px 10px;
  margin-right: 0px;
  background-color: #999999;
  color: #ffffff;
  font-size: 15px;
  font-family: Open Sans, sans-serif;
  border: 0px;
  border-radius: 5px;
  float: left;
  margin-right: 5px;
  height: 40px;
  width: auto;
  line-height: 40px;
}
</style>
