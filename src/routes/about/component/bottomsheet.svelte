<!-- BottomPopupSheet.svelte -->
<script>
    export let isOpen = false;
  
    function toggleSheet() {
      isOpen = !isOpen;
    }
  </script>
  
  <style>

    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.3s, visibility 0.3s;
        z-index: 1201;
    }

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
      z-index: 1202;
    }
    .overlay.active {
        visibility: visible;
        opacity: 1;
    }
    .popup-container.open {
      transform: translateY(0);
    }
  </style>
  
  <div class="overlay" class:active={isOpen} on:click={toggleSheet}></div>

  <div class="popup-container" class:open={isOpen}>
    <!-- Your popup content goes here -->
    <p>This is a bottom popup sheet!</p>
    <button on:click={toggleSheet}>Close</button>
  </div>
  
  <button on:click={toggleSheet}>Open Bottom Popup Sheet</button>