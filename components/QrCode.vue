<template>                    
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
      QRCode.toCanvas(qrCanvas.value, url, (error) => {
        if (error) console.error(error)
        else console.log('QR Code generated successfully!')
      })
    }
  })
</script>
  

  