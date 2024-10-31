<template>    
    <p class="my-5 font-bold text-2xl lg:text-lg text-center lg:text-start">Ou leia o QR Code:</p>                
    <div class="mt-5 flex justify-center lg:justify-start align-center">    
      <canvas class="h-48 w-48" ref="qrCanvas"></canvas>
    </div>
</template>
  
<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import QRCode from 'qrcode'
  

  const qrCanvas = ref<HTMLCanvasElement | null>(null)
  const url = useGlobalData();    

  onMounted(() => {
  if (qrCanvas.value) {
    QRCode.toCanvas(qrCanvas.value, url, (error: Error | null) => {
      if (error) console.error(error)
      else console.log('QR Code generated successfully!')
    })
  }
})
</script>
  

  