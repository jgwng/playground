<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    let searchText = '';
    let searchWordList = [];

    onMount(() => {

    });

    function onKeyDown(event){
        if(event.keyCode == 13){
            console.log(searchText);
            let ctrl = document.getElementById("searchField");
            ctrl?.blur();
            searchWordList = [searchText, ...searchWordList];
            searchText = '';
        }
    }
</script>


<div>
    <input id="searchField" placeholder="검색어를 입력하세요" width="100"
     on:keydown={onKeyDown} bind:value="{searchText}"/>

    {#each searchWordList as key}
         <li>{key}</li>
    {/each}
</div>