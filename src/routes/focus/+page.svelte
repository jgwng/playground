<script>
    import { onMount } from "svelte";

    let isFocus = true;

   onMount(() => {
    window.addEventListener('focus',(event) => {
        console.log('focus');
        isFocus = true; 
    });

    window.addEventListener('blur',(event) => {
        console.log('blur');
        isFocus = false; 
    });
   });
</script>

<div class="container">
    <div id="focus-value">{ isFocus === true ? '포커스' : '포커스 아님'}</div>
</div>


<style>
    .container{
    width: 30%;
    display: flex;
    justify-content: center;
}
#focus-value{
    height: 50px;
    min-width: 120px;
    border-radius: 10px;
    background-color: rgba(255, 0, 0, 0.187);
    margin-top: 20px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>