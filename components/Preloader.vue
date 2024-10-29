<template>
    <div v-if="isLoading" class="flex flex-col fixed inset-0 flex items-center justify-center bg-gray-800 z-50">     
      <img class="w-24 h-24 m-4 lg:ml-8" src="~/assets/imgs/logo.webp" alt="logomarca">  
      <div class="flex">        
        <div class="w-6 h-6 mr-2 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
        <span class="text-white text-1xl uppercase">Carregando...</span>
      </div>    
    </div>    
</template>
  
<script setup lang="ts">

const isLoading: Ref<boolean> = ref(true);

const removePreloader = (): void => {
  isLoading.value = false;
};

defineExpose({ isLoading, removePreloader });

</script>

  