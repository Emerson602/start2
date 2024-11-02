<template>
    <section class="lg:flex lg:flex-row h-auto border-b-8 border-gray-800">        
        <img class="lg:hidden w-full" :src="currentImg" alt="banner">
        <div class="
            flex justify-center
            items-center
            flex-col
            h-auto
            w-full
            lg:w-1/2
            text-xl
            uppercase 
            text-balance             
            text-center
            py-20
            p-2
            bg-gradient-to-t from-slate-300 to-stone-50
            ">             
            <h1 class="font-bold text-3xl">start2</h1>
            <h2 class="mt-10">Serviços de montagem e manutenção</h2>
            <h3 class="my-10">Elevadores, escadas rolantes, refrigeração comercial, geradores e automação industrial</h3>
            <ContactUsButton />        
        </div>
        <img class="hidden lg:block lg:w-1/2" :src="currentImg" alt="banner">
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'; 

const imgs = [ 

  new URL('@/assets/imgs/banner-1.webp', import.meta.url).href,
  new URL('@/assets/imgs/banner-2.webp', import.meta.url).href,  
  new URL('@/assets/imgs/banner-3.webp', import.meta.url).href,
]; 

const currentImg = ref(imgs[0]);
let currentIndex = 0;

const changeImage = () => {
  currentIndex = (currentIndex + 1) % imgs.length;
  currentImg.value = imgs[currentIndex];
};

let intervalId: ReturnType<typeof setInterval>;

onMounted(() => {
  changeImage()
  intervalId = setInterval(changeImage, 10000);
}); 

onBeforeUnmount(() => {       
  clearInterval(intervalId);
});
</script>


