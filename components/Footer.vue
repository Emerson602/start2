<template>
    <footer>
        <MoreInformation />
        <div class="bg-gray-800 text-white text-xs md:text-sm py-2 text-center">
            © {{ currentYear }} | START2 - CNPJ 53.212.062/0001-23 
        </div>        
    </footer>
</template>

<script setup lang="ts">

const currentYear:number = new Date().getFullYear(); 

</script>

    