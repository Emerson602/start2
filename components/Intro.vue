<template>
    <section class="lg:flex lg:flex-row h-auto border-b-8 border-gray-800">        
        <img class="lg:hidden w-full" src="~/assets/imgs/banner-1.webp" alt="banner">
        <div class="
            flex justify-center
            items-center
            flex-col
            h-auto
            w-full
            lg:w-1/2
            text-xl
            uppercase 
            text-balance             
            text-center
            py-20
            p-2
            bg-gradient-to-t from-slate-300 to-stone-50
            ">
            <h1 class="font-bold">Serviços de montagem e manutenção</h1>
            <h2 class="my-10">Elevadores, escadas rolantes, refrigeração comercial, geradores e automação industrial</h2>
            <ContactUsButton />        
        </div>
        <img class="hidden lg:block lg:w-1/2" src="~/assets/imgs/banner-1.webp" alt="banner">
    </section>
</template>
