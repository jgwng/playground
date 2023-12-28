<script>
    let drawing = false;
    let canvas;
    let ctx;
    export let signatureImage;

    function startDrawing(event) {
      drawing = true;
      ctx.beginPath();
      ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    }
  
    function draw(event) {
      if (!drawing) return;
      ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
      ctx.stroke();
    }
  
    function stopDrawing() {
      drawing = false;
      signatureImage = canvas.toDataURL();
      console.log(signatureImage);
    }
  
    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    import { onMount } from 'svelte';
  
    onMount(() => {
      ctx = canvas.getContext('2d');
    });
  </script>
  
  <style>
    canvas {
      border: 1px solid #ccc;
      cursor: crosshair;
    }
  
    button {
      margin-top: 10px;
    }
  </style>
  
  <canvas
    bind:this={canvas}
    width="400"
    height="200"
    on:mousedown={startDrawing}
    on:mousemove={draw}
    on:mouseup={stopDrawing}
    on:mouseleave={stopDrawing}
  ></canvas>
  
  <button on:click={clearCanvas}>Clear Canvas</button>
  