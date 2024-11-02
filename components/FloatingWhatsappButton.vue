<template>
    <a 
        class="
            mr-2
            w-12
            h-12
            rounded-full
            bg-gray-300 
            fixed
            inset-y-1/2
            right-0
            z-10
            animate-bounce
            ease-out
            flex
            justify-center
            items-center
            " 
            :href="useGlobalData()"
             target="_blank"
             aria-label="Fale conosco pelo WhatsApp
            ">
        
            <img class="w-10 h-10" alt="whatsapp icon" src="~/assets/imgs/whatsapp-icon.webp">
 
    </a>
</template>

 