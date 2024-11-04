<template>
  <section ref="sectionRefs" class="w-full flex flex-row justify-center items-center flex-wrap py-52">
    <div 
      v-for="(item, index) in images" 
      :key="index" 
      class="relative group m-2"
    >
      <img 
        :src="item.img" 
        :alt="item.description" 
        class="m-0"
      />
    
      <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {{ item.description }}
      </span>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


interface ImageItem {
  img: string;
  description: string;
}


const images: ImageItem[] = [
  { img: new URL('@/assets/imgs/banner-1.webp', import.meta.url).href, description: 'Descrição do Banner 1' },
  { img: new URL('@/assets/imgs/banner-2.webp', import.meta.url).href, description: 'Descrição do Banner 2' },
  { img: new URL('@/assets/imgs/banner-3.webp', import.meta.url).href, description: 'Descrição do Banner 3' },
  { img: new URL('@/assets/imgs/banner-1.webp', import.meta.url).href, description: 'Descrição do Banner 4' },
  { img: new URL('@/assets/imgs/banner-2.webp', import.meta.url).href, description: 'Descrição do Banner 5' },
  { img: new URL('@/assets/imgs/banner-3.webp', import.meta.url).href, description: 'Descrição do Banner 6' },
];
</script>

<style scoped>
.tooltip-text {
  white-space: nowrap;
}
</style>
