<template>
<div>
<app-header />

 <app-navigation :nav="3" />

  <app-tab-info />

  <app-sticker-app />

  <app-contact />

<app-footer />
</div>
</template>

<script>
import Header from '~/components/global/Header.vue'
import Navigation from '~/components/global/Navigation.vue'
import TabInfo from '~/components/pertanyaanAndJawaban/TabInfo.vue'
import StickerApp from '~/components/global/StickerApp.vue'
import Contact from '~/components/global/Contact.vue'
import Footer from '~/components/global/Footer.vue'

export default {
  name: 'IndexPage',
  components: {
    appHeader: Header,
    appNavigation: Navigation,
    appTabInfo: TabInfo,
    appStickerApp: StickerApp,
    appContact: Contact,
    appFooter: Footer
  }
}
</script>
