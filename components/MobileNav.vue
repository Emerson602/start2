<template>

    <nav aria-label="Menu principal" class="p-4 md:hidden">  
        <button @click="toggleMenuVisibility" id="menu-toggle" class="text-white focus:outline-none" type="button">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
        </button>

        <div v-if="MenuIsVisible">
            <button @click="toggleMenuVisibility" type="button">   
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 fixed top-0 end-0 m-6 z-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>

            <ul class="flex flex-col justify-center items-center fixed top-0 start-0 w-full h-full p-4 bg-gray-700 text-white text-3xl uppercase">
                <li @click="toggleMenuVisibility" class="hover:text-gray-300"><nuxt-link to="/">Inicio</nuxt-link></li>
                <li @click="toggleMenuVisibility" class="hover:text-gray-300 mt-6"><nuxt-link to="/services">Serviços</nuxt-link></li>
                <li @click="toggleMenuVisibility" class="hover:text-gray-300 mt-6"><nuxt-link to="/about">Sobre</nuxt-link></li>
                <a href="https://api.whatsapp.com/send?phone=5582999025007" target="_blank">
                    <li @click="toggleMenuVisibility" class="hover:text-gray-300 mt-6">Contato</li>
                </a>
            </ul>
        </div>
    </nav>

</template>

<script setup lang="ts">

import { ref, onMounted } from 'vue';

const MenuIsVisible = ref<boolean>(true);

const toggleMenuVisibility = (): void => {
    MenuIsVisible.value = !MenuIsVisible.value;
};

onMounted(() => {
    toggleMenuVisibility();
});


</script>



