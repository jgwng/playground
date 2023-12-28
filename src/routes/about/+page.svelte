<script>
    import { onDestroy, onMount } from 'svelte';
	import BottomPopupSheet from './component/bottomsheet.svelte';
	import Timer from './component/timer.svelte';
	import { fade } from 'svelte/transition';
	let visible = true;

	let m = { x: 0, y: 0 };

	function toggleSheet(){
		visible = false;
	}

	function toggleDarkMode(){
		window.document.body.classList.toggle('dark-mode');
	}
	onMount(() => {
		window.addEventListener('wheel',wheelScrollEvent);
	});

	if (typeof window !== 'undefined') {
    	onDestroy(() => {
			window.removeEventListener('wheel',wheelScrollEvent);
		});
	}

function wheelScrollEvent(event){
	let wheel = event.wheelDeltaY;
  
	//스크롤 방향 위로 했을 경우
	if(wheel > 0) {
     visible = false;
    }
	//스크롤 방향 아래로 했을 경우
	else {
		visible = true;
    }
}


function handleMousemove(event) {
	m.x = event.clientX;
	m.y = event.clientY;
}
</script>

<svelte:window on:mousemove={handleMousemove}></svelte:window>
<BottomPopupSheet />

<Timer></Timer>

<button on:click={toggleDarkMode}>다크모드 전환</button>

<label>
  <input type="checkbox" bind:checked={visible}>
  visible
</label>

{#if visible}
  <p transition:fade>
    Fades in and out
  </p>
{/if}

<div class="floatingButton" class:open={visible}>
	<div class="dot"></div>
    <button on:click={toggleSheet}>Close</button>
  </div>

<div class="text-column">
	<h1>About this app</h1>

	<p>
		This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your owㅂn by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>
</div>

<div>
	The mouse position is {m.x} x {m.y}
</div>

<textarea class="paper overflow-y-hidden resize-none rounded-none halogen left min-h-[490px]" id="poem-textarea" style="height: 490px;"></textarea>

<style>
	.floatingButton{
		display: flex;
		position: fixed;
		right: 16px;
		bottom: 20px;
		flex-direction: column;
		transform: translateY(0) scale(0);
		transition-property: transform,scale;
		transition-duration: .25s;
		opacity: 100;
		z-index: 1200;
	}

	.floatingButton.open {
      transform: translateY(0);
    }

	.dot {
  		height: 40px;
  		width: 40px;
  		background-color: red;
  		border-radius: 50%;
  		display: inline-block;
	}

</style>