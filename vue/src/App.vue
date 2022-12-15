<template>
	<router-view></router-view>
</template>

<script setup lang="ts">

    import { onMounted } from "vue";
    import AOS from "aos";

    onMounted(() => {
        AOS.init({
          once: true,
          disable: 'phone',
          duration: 500,
          easing: 'ease-out-cubic',
          }
        );
    })
    
</script>
