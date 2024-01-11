<template>
<div>
<app-header />

  <app-navigation :nav="0" />

  <app-banner />

  <app-cta />

  <app-services />

  <app-sticker-app />

  <app-contact />

<app-footer />
</div>
</template>

<script>
import Header from '~/components/global/Header.vue'
import Navigation from '~/components/global/Navigation.vue'
import Banner from '~/components/global/Banner.vue'
import Cta from '~/components/global/Cta.vue'
import Services from '~/components/global/Services.vue'
import StickerApp from '~/components/global/StickerApp.vue'
import Contact from '~/components/global/Contact.vue'
import Footer from '~/components/global/Footer.vue'

export default {
  name: 'IndexPage',
  components: {
    appHeader: Header,
    appNavigation: Navigation,
    appBanner: Banner,
    appCta: Cta,
    appServices: Services,
    appStickerApp: StickerApp,
    appContact: Contact,
    appFooter: Footer
  }
}
</script>
