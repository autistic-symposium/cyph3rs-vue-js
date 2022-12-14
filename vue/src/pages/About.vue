<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <AboutText />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import AboutText from '../partials/AboutText.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    AboutText,
    Footer,
},
}
</script>