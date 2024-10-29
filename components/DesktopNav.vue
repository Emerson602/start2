<template>
    <nav class="p-4 mr-6">
        <ul class="hidden md:flex space-x-6 text-white uppercase">
            <li><nuxt-link to="/" class="hover:text-gray-300">Inicio</nuxt-link></li>
            <li><nuxt-link to="/services" class="hover:text-gray-300">Serviços</nuxt-link></li>
            <li><nuxt-link to="/about" class="hover:text-gray-300">Sobre</nuxt-link></li>
            <a :href="useGlobalData()" target="_blank"><li class="hover:text-gray-300">Contato</li></a>
        </ul>
    </nav>
</template>

