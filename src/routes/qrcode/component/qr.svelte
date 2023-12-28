<script>
    import { onMount } from 'svelte';
    import QRCode from 'easyqrcodejs'
    // import * as QRCode from 'easyqrcodejs';
   
     export let codeValue;
     export let backgroundImage;
     let node;
     let qrCode;
     let options;

     $:{
      if(options){
          qrCode.clear();
          options = {
            text: codeValue,
            // ... your other options
            width: 100,
            height: 100,
            quietZone: 10,
            crossOrigin: 'anonymous',
            backgroundImage: backgroundImage
        };
        qrCode = new QRCode(node, options);
      }
      }
      
     onMount(() => {
        options = {
         text: codeValue,
         // ... your other options
         width: 100,
         height: 100,
         quietZone: 10,
         crossOrigin: 'anonymous',
         backgroundImage: backgroundImage
       };
       qrCode = new QRCode(node, options);
       console.log(qrCode.options);
     });
   </script>
   
   <div bind:this={node} id='qrcode'></div>
   
   <style>
    div {
      /* make QR-wrapper squared */
       width: 100%;
       position: relative;
       padding: 50%;
       z-index: 1;
     }
     div :global(canvas) {
       /* fit QR to wrapper */
       width: 100%;
       height: 100%;
       position: absolute;
       left: 0;
       top: 0;
     }
   </style>