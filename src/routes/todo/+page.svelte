<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    let searchText = '';
    let searchWordList = [];
    let IMG_END_POINT = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg';
    
    onMount(() => {
        let param = {};
        param.word = '이상해씨';
        param.snumber = 1;
        param.snumber = 1010;
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20').then(() => {
            console.log('${result}')
        });
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
         <li>
            <img src={IMG_END_POINT} alt='포켓몬 이미지' width="120" height="120"/>
         </li>
    {/each}
</div>