<!-- BottomPopupSheet.svelte -->
<script>
    export let isOpen = false;
  
    function toggleSheet() {
      isOpen = !isOpen;
    }
  </script>
  
  <style>
    .popup-container {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: #fff;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      padding: 16px;
      box-sizing: border-box;
      transition: transform 0.3s ease-out;
      transform: translateY(100%);
    }
  
    .popup-container.open {
      transform: translateY(0);
    }
  </style>
  
  <div class="popup-container" class:open={isOpen}>
    <!-- Your popup content goes here -->
    <p>This is a bottom popup sheet!</p>
    <button on:click={toggleSheet}>Close</button>
  </div>
  
  <button on:click={toggleSheet}>Open Bottom Popup Sheet</button>