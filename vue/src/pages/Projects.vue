<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <ProjectsText />

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from '../partials/Header.vue'
import ProjectsText from '../partials/ProjectsText.vue'
import Footer from '../partials/Footer.vue'

export default {
  name: 'Projects',
  props: ['title'],
  watch: {
    title: {
      immediate: true,
      handler() {
        document.title = 'Projects - Cyph3rs';
      }
    }
  },
  render() {
  },
  components: {
    Header,
    ProjectsText,
    Footer,
  },
}
</script>