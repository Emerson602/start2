<template> 
  <Preloader ref="preloaderRef" />   
  <NuxtPage />
</template>

<script setup lang="ts"> 

import { ref, onMounted } from 'vue';

const preloaderRef = ref<{ removePreloader: () => void } | null>(null);

const finishLoading = () => {
  preloaderRef.value?.removePreloader();
};

onMounted(() => {
    finishLoading()
})

</script>