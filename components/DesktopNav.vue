<template>

<nav class="p-4">
    <button id="menu-toggle" class="md:hidden text-white focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
    </button>

    <ul id="mobile-menu" class="hidden md:hidden flex flex-col space-y-2 p-4 bg-gray-700 text-white">
        <li><nuxt-link to="/" class="hover:text-gray-300">Home</nuxt-link></li>
        <li><nuxt-link to="/services" class="hover:text-gray-300">Services</nuxt-link></li>
        <li><nuxt-link to="/about" class="hover:text-gray-300">About</nuxt-link></li>
        <li><nuxt-link to="/contact" class="hover:text-gray-300">Contact</nuxt-link></li>
    </ul>
</nav>

</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>