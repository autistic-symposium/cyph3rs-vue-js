<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <Hero />
      <Features />
      <Cta />
      <PressLogos />
      <Tiers />
      <Resources />


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
import Tiers from '../partials/Tiers.vue'
import Resources from '../partials/Resources.vue'
import Cta from '../partials/Cta.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Home',
  props: ['title'],
  watch: {
            title: {
                immediate: true,
                handler() {
                    document.title = 'CYPH3RS INTELLIGENCE ';
                }
            }
        },
        render () {
        },
  components: {
    Header,
    Hero,
    PressLogos,
    Features,
    Tiers,
    Resources,
    Cta,
    Footer,
},
}
</script>