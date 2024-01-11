<template>
  <div id="banner">
    <img src="https://kongsiole777.com/images/banner-new.webp" alt="Banner" />
    <div class="banner-text">
      <div class="container">
        <div>
          <h2 class="banner-header">
            <span class="banner-gradient">50% INSTANT KOMISI AFILIASI</span>
            <span class="banner-white">TAMBAH PENGHASILAN ANDA,</span>
            <span class="banner-white">PASSIVE INCOME MENGGIURKAN!</span>
          </h2>
          <a class="banner-button" href="#">INFO LENGKAP</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerComponent'
}
</script>

<style scoped>
#banner {
  position: relative;
}

#banner img {
  width: 100%;
  height: auto;
  vertical-align: middle;
}

.banner-text {
  width: 100%;
  position: absolute;
  left: 0;
  top: 14%;
  color: #fff;
  font-family: "Montserrat", sans-serif;
}

.banner-text .banner-header {
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
}

.banner-text .banner-header .banner-gradient {
  background: #faa41f;
  background: linear-gradient(to top, #faa41f 0%, #fef85a 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 8px;
}

.banner-text .banner-header span {
  display: block;
}

.banner-text .banner-header .banner-white {
  font-size: 30px;
  font-weight: bold;
  color: #fff;
}

.banner-text .banner-button {
  display: inline-block;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #ff7d00;
  color: #00143c;
  margin-top: 15px;
  text-decoration: none;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.2s;
}
</style>
