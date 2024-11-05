<template>
    <section ref="sectionRefs" class="w-full flex flex-row justify-center items-center flex-wrap py-32 text-xl uppercase">      

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
    path: new URL('@/assets/imgs/banner-1.webp', import.meta.url).href, 
    description: 'image-1', 
  },
  {
    path: new URL('@/assets/imgs/banner-2.webp', import.meta.url).href, 
    description: 'image-2', 
  },
  {
    path: new URL('@/assets/imgs/banner-3.webp', import.meta.url).href, 
    description: 'image-3', 
  },
  {
    path: new URL('@/assets/imgs/banner-1.webp', import.meta.url).href, 
    description: 'image-4', 
  },
];

const addImagesGrid = (): void => {
  imagesGrid.forEach(image => {
    sectionRefs.value!.innerHTML += `
           <div class="m-4 flex justify-center items-center">
            <img class="w-64 lg:w-96 h-64 lg:h-96" src="${image.path}" alt="imagem">
            <span class="
              flex
              justify-center
              items-center
              absolute
              p-4
              w-64
              lg:w-96
              h-64
              lg:h-96
              bg-transparent
              text-transparent
              hover:text-white
              hover:bg-gray-800
              ease-in
              duration-500
              text-balance
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
