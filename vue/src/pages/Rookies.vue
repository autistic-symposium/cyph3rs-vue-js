<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <RookiesText />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import RookiesText from '../partials/RookiesText.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Rookies',
  props: ['title'],
  watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = 'Rookies - Cyph3rs';
                }
            }
        },
        render () {
        },
  components: {
    Header,
    RookiesText,
    Footer,
},
}
</script>