<template>
  <div id="tab-info">
    <div class="container">
      <b-tabs type="is-boxed">
        <b-tab-item v-for="(item, index) in peraturanData" :key="index" :label="item?.title"> <div v-html="item?.content" /> </b-tab-item>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 0
    }
  },
  computed: {
    peraturanData () {
      if (this.$store.state.peraturan) {
        return this.$store.state.peraturan
      }

      return null
    }
  }
}
</script>

<style scoped>
#tab-info {
    min-height: 70vh;
    min-height: -webkit-calc(100vh - 300px);
    min-height: -moz-calc(100vh - 300px);
    min-height: calc(100vh - 300px);
}

#tab-info .container {
    padding-top: 50px;
    padding-bottom: 50px;
    display: block;
}

#tab-info >>> .tabs.is-boxed a {
    background-color: #00276C;
    color: #FFFFFF;
    border: none;
    outline: none;
    cursor: pointer;
    float: left;
    padding: 14px 0px;
    margin-right: 10px;
    font-family: Open Sans, sans-serif;
    font-size: 15px;
    width: 210px;
    border-radius: 8px 8px 0px 0px;
}

#tab-info >>> .tabs.is-boxed li.is-active a {
background-color: #FF7D00;
}

#tab-info >>> .b-tabs .tab-content {
    background-color: #FFFFFF;
    border-radius: 0px 8px 8px 8px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    padding: 40px;
}

#tab-info .container >>> .tab-content h3 {
    color: #505050;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 20px;
}

#tab-info .container >>> .tab-content table thead tr:first-child th {
    background-color: #00276C;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    border-radius: 8px 8px 0px 0px;
    height: 50px;
}

#tab-info .container >>> .tab-content .table-desc, #tab-info .container .tabcontent .table-desc {
    width: 100%;
    max-width: 992px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
}

#tab-info .container >>> .tab-content table {
    width: 100%;
    max-width: 992px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    border-spacing: 0px;
    text-align: center;
}

#tab-info .container >>> .tab-content table thead tr:first-child th {
    background-color: #00276C;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: bold;
    border-radius: 8px 8px 0px 0px;
    height: 50px;
}

#tab-info .container >>> .tab-content table thead tr:last-child th {
    color: #505050;
    font-size: 20px;
    height: 40px;
    font-weight: bold;
    border-bottom: 1px solid #d2d2d2;
    border-left: 1px solid #d2d2d2;
}

#tab-info .container >>> .tab-content table tfoot tr {
    text-align: center;
}

#tab-info .container >>> .tab-content table tfoot tr td {
    color: #505050;
    font-size: 15px;
    height: 40px;
    border-bottom: 1px solid #d2d2d2;
    border-left: 1px solid #d2d2d2;
}

#tab-info .container >>> .tab-content ol li {
    margin-bottom: 22px;
}

#tab-info .container >>> .tab-content table tfoot tr:last-child td:last-child {
    border-radius: 0px 0px 8px 0px;
}

#tab-info .container >>> .tab-content table tfoot tr:last-child td:first-child {
    border-radius: 0px 0px 0px 8px;
}

#tab-info .container >>> .tab-content table tfoot tr td {
    color: #505050;
    font-size: 15px;
    height: 40px;
    border-bottom: 1px solid #d2d2d2;
    border-left: 1px solid #d2d2d2;
}
</style>
