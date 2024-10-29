<template> 
  <Preloader ref="preloaderRef" />   
  <NuxtPage />
</template>

<script setup lang="ts"> 

const contactLink: string = 'https://api.whatsapp.com/send?phone=5582999025007';
const preloaderRef = ref<{ removePreloader: () => void } | null>(null);

const finishLoading = () => {
  preloaderRef.value?.removePreloader();
};

onMounted(() => {
    finishLoading()
})

</script>