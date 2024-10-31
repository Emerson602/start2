<template>
    <div class="mt-10 lg:mt-0 text-center lg:text-start w-full lg:w-80">
        <div>
            <p class="font-bold text-2xl lg:text-lg">Nosso endereço:</p>
            <p class="mt-5 text-balance lg:w-3/4">Rua do comercio, 436, edf. Lobão Barreto - sala 507, Centro, Maceió - AL</p>                            
        </div>
        <div class="mt-5">
            <p  class="mb-5 font-bold text-2xl lg:text-lg">Localização:</p>
            <a :href="linkCoordinates" target="_blank">
                <img class="w-10/12 sm:w-6/12 h-auto lg:w-64 md:h-64 m-auto lg:m-0" src="~/assets/imgs/location-preview.webp">
            </a>    
        </div>
    </div>
</template>

<script setup lang="ts">

const linkCoordinates:string = 'https://www.google.com/maps/place/Condom%C3%ADnio+Lob%C3%A3o+Barreto/@-9.6648506,-35.752564,5556m/data=!3m1!1e3!4m6!3m5!1s0x701457fa477416d:0x4928ded8759c6b42!8m2!3d-9.6627764!4d-35.7377317!16s%2Fg%2F1tdlhh2r?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D'

</script>

