<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <CareersText />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import CareersText from '../partials/CareersText.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Careers',
  components: {
    Header,
    CareersText,
    Footer,
},
}
</script>