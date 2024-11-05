<template>
    <section 
    ref="sectionRefs"
    class="
      w-full
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      gap-8 
      md:gap-10
      lg:gap-8 
      2xl:gap-20      
      justify-center
      items-center
      py-28
      lg:py-32
      2xl:py-40
      px-8
      md:px-10
      lg:px-8
      lg:px-32 
      2xl:px-40     
      text-xl
      uppercase
      ">      
    </section>
</template>

<script lang="ts" setup>

import { ref, onMounted } from 'vue';

interface ImagesGridType {
  path: string;
  description: string;
};

const sectionRefs = ref<HTMLElement | null>(null);

const imagesGrid: ImagesGridType[] = [
  {
    path: new URL('@/assets/imgs/image-1.webp', import.meta.url).href, 
    description: 'Geradores', 
  },
  {
    path: new URL('@/assets/imgs/image-2.webp', import.meta.url).href, 
    description: 'Esteiras rolante', 
  },
  {
    path: new URL('@/assets/imgs/image-3.webp', import.meta.url).href, 
    description: 'Elevadores', 
  },
  {
    path: new URL('@/assets/imgs/image-4.webp', import.meta.url).href, 
    description: 'Frio alimentar', 
  },
  {
    path: new URL('@/assets/imgs/image-5.webp', import.meta.url).href, 
    description: 'Escadas rolante', 
  },
  {
    path: new URL('@/assets/imgs/image-6.webp', import.meta.url).href, 
    description: 'Climatização comercial', 
  },
];

const addImagesGrid = (): void => {
  imagesGrid.forEach(image => {
    sectionRefs.value!.innerHTML += `
    <div class="relative flex justify-center items-center">
      <img src="${image.path}" alt="${image.description}">
      
      <span 
        class="
          absolute
          inset-0
          flex
          justify-center
          items-center
          p-4
          bg-gray-800
          bg-opacity-75
          text-white
          text-center
          text-balance
          opacity-0
          hover:opacity-100
          transition-opacity
          duration-500
        ">

        ${image.description}
      </span>
    </div>
    `;
  });
};

onMounted(() => {
  if (sectionRefs.value) {     
    addImagesGrid();    
  }
});

</script>
