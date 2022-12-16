<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <SearchersText />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import SearchersText from '../partials/SearchersText.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Searchers',
  props: ['title'],
  watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = 'Searchers - Cyph3rs';
                }
            }
        },
        render () {
        },
  components: {
    Header,
    SearchersText,
    Footer,
},
}
</script>