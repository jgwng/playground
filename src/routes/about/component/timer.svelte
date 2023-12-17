<script>
    import { createEventDispatcher, onDestroy } from 'svelte'
	import { tweened } from 'svelte/motion';



    // 하위 컴포넌트에서 상위 컴포넌트의 함수를 호출해 사용 할 수 있습니다.
    // 사용 방법 : ex) dispatch('new'); 
    const dispatch = createEventDispatcher();
    let original = 5 * 60; // TYPE NUMBER OF SECONDS HERE
    let timer = tweened(original)

    let interval = setInterval(() => {
        if ($timer > 0) $timer--;
    }, 1000);

    $: minutes = Math.floor($timer / 60);
    $: minname = minutes > 1 ? "mins" : "min";
    $: seconds = Math.floor($timer - minutes * 60)

    onDestroy(() => {
        clearInterval(interval);
    });

</script>

<div>
    <span class="mins">{minutes}</span>{minname} 
	<span class="secs">{seconds}</span>s!
</div>

<style>
  .mins {
		color: darkgoldenrod;
	}
</style>
