<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <PressLogos />
      <Features />
      <Tiers />
      <Features02 />
      <Resources />
      <Cta />

    </main>
    
    <!-- Site footer -->
    <Footer />    

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import Hero from '../partials/Hero.vue'
import PressLogos from '../partials/PressLogos.vue'
import Features from '../partials/Features.vue'
import Features02 from '../partials/Features02.vue'
import Tiers from '../partials/Tiers.vue'
import Resources from '../partials/Resources.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Hero,
    PressLogos,
    Features,
    Tiers,
    Features02,
    Resources,
    Cta,
    Footer,
},
}
</script>