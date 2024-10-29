<template>
    <footer class="bg-gray-800 text-white text-xs md:text-sm py-2 text-center">
        © {{ currentYear }} | START2 - CNPJ 00.000.000/0000-00
    </footer>
</template>

<script setup lang="ts">

const currentYear:number = new Date().getFullYear(); 

</script>

