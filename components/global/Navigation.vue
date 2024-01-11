<template>
  <div id="navigation">
    <div
      class="container is-flex is-justify-content-space-evenly is-align-items-center p-2"
    >
    <a v-for="(item, index) in navItems" :key="index" :href="item.href" :class="{ 'selected': nav === index }">
      {{ item.label }}
    </a>

    <a class="main-label" @click="isModal = true">OLE777 Official</a>
    </div>

    <app-contact-modal :is-modal="isModal" @close="isModal = false" />
  </div>
</template>

<script>
import ContactModal from '~/components/global/ContactModal.vue'

export default {
  name: 'NavigationComponent',
  components: {
    appContactModal: ContactModal
  },
  data () {
    return {
      isModal: false,
      navItems: [
        { label: 'Tentang OLE777', href: '/' },
        { label: 'Komisi', href: '/commission-system' },
        { label: 'Peraturan', href: '/rules-and-terms' },
        { label: 'Pertanyaan & Jawaban', href: '/common-problems' }
      ]
    }
  },
  props: {
    nav: {
      type: Number,
      default () {
        return 0
      }
    }
  }
}
</script>

<style scoped>
#navigation {
    background-color: #003C82;
}

#navigation .container .selected {
    color: #FAA41D;
    font-weight: bold;
}

#navigation .container a {
    color: #FFFFFF;
}

#navigation .container a:hover {
    color: #FAA41D;
}

.main-label {
    color: #001e5a !important;
    font-weight: 600;
    padding: 6px 15px;
    background: #faa41f;
    border-radius: 3px;
    box-shadow: 0px 2px 11px rgba(249, 247, 244, 0.22);
}
</style>
