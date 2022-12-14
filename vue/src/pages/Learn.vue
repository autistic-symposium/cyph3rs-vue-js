<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <LearnText />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import LearnText from '../partials/LearnText.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Learn',
  components: {
    Header,
    LearnText,
    Footer,
},
}
</script>