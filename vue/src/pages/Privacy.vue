<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">
      <PrivacyText />
    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>


<script>
import Header from '../partials/Header.vue'
import PrivacyText from '../partials/PrivacyText.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Privacy',
  props: ['title'],
  watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = 'Privacy Policy - Cyph3rs';
                }
            }
        },
        render () {
        },
  components: {
    Header,
    PrivacyText,
    Footer,
},
}
</script>