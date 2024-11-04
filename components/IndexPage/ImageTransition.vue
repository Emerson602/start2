<template>
    <img class="w-full lg:w-1/2" :src="currentImg" alt="banner">
</template>

<script setup lang="ts">

import { ref, onMounted, onBeforeUnmount} from 'vue';
import type { Ref } from 'vue'; 

const imgs: string[] = [
  new URL('@/assets/imgs/banner-1.webp', import.meta.url).href,
  new URL('@/assets/imgs/banner-2.webp', import.meta.url).href,
  new URL('@/assets/imgs/banner-3.webp', import.meta.url).href,
];

const currentImg: Ref<string> = ref(imgs[0]);
let currentIndex: number = 0;

const changeImage = (): void => {
  currentIndex = (currentIndex + 1) % imgs.length;
  currentImg.value = imgs[currentIndex];
};

let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  changeImage();
  intervalId = setInterval(changeImage, 5000);
});

onBeforeUnmount(() => {       
  clearInterval(intervalId);
});


</script>
