<template>
    <Header />  
    <main>
      <FloatingWhatsappButton />
      <section class="mt-5">
        <h1>Serviços</h1>
        <div v-for="(service, index) in services" :key="index" class="">
          <img :src="`~/assets/imgs/${service.img}.webp`" alt="Serviço imagem" class="w-full h-auto mb-3" />
          <p class="text-lg">{{ service.description }}</p>
        </div>
      </section>
    </main>  

    <Footer />
  </template>
  
  <script setup lang="ts">

  interface Service {
    img: string;
    description: string;
  }
  
  const services: Service[] = [
    {
      img: '1',
      description: "Serviços de montagem e manutenção de elevadores, esteiras e escadas rolantes."
    },
    {
      img: '2',
      description: "Serviços de montagem e manutenção de refrigeração e climatização comercial."
    },
    {
      img: '3',
      description: "Serviços de manutenção em geradores."
    },
    {
      img: '4',
      description: "Manutenção em inversores de frequência."
    },
    {
      img: '5',
      description: "Serviço de manutenção elétrica e automação industrial."
    }
  ];

  </script>
  