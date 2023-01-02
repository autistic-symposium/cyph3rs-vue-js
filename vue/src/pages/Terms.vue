<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <TermsText />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import TermsText from '../partials/TermsText.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Terms',
  props: ['title'],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = 'Terms of Service - CYPH3RS INTELLIGENCE ';
      }
    }
  },
  render() {
  },

  components: {
    Header,
    TermsText,
    Footer,
  },
}
</script>
