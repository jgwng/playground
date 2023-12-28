<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { arrPokemon } from './pokestore';
    import { get } from 'svelte/store';

    let searchText = '';
    let searchWordList = [];
    let totalWordList = [];
    
    onMount(() => {
        searchWordList = get(arrPokemon);
        totalWordList = searchWordList;
    })
    function onKeyDown(event){
        if(event.keyCode == 13){
            searchWordList = totalWordList.filter((item) => {
                return item.name.toLowerCase().includes(searchText);
            });
            console.log($arrPokemon);
            // console.log(searchText);
            // let ctrl = document.getElementById("searchField");
            // ctrl?.blur();
            // searchWordList = [searchText, ...searchWordList];
            // searchText = '';
        }
    }
</script>
<svelte:window on:keydown|preventDefault={onKeyDown} />

<div>

    <div class="container">
        <h1>포켓몬 검색하기</h1>
        <input type="search" placeholder="Search..." bind:value="{searchText}" on:keydown={(e)=>onKeyDown(e)} class="center"/>
    </div>
    
    <div style="height:40px"></div>
    
    <ul class ="poke_list">
        {#each searchWordList as key}
        <div class="card">
            <span class="card--id">#{key.id}</span>
            <img class="card--image" src={key.image} alt={key.name} />
            <h1 class="card--name">{key.name}</h1>
        </div>
        {/each}
    </ul>
</div>

<style>
 
    .poke_list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        grid-gap: 10px;
        width: 100%;
    }

    .center {
        margin: auto;
        width: 50%;
        justify-content: center;
        display: flex;
        align-items: center;
        border: 3px solid green;
        padding: 10px;
    }

    .card {
        width: 12rem auto;
        background: #444;
        color: #e4c439;
        padding: 1rem;
        border-radius: 10px;
        border-top: 0.5px solid #cebf7b;
        border-bottom: 0.5px solid #cebf7b;
        text-align: center;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: 0.2s ease-in-out all;
    }
    
    .card--id {
        background: #cebf7b;
        width: 3rem;
        color: #333;
        padding: 0.1rem;
        font-weight: 700;
        position: absolute;
        border-radius: 0 0 10px 0;
        top: 0;
        left: 0;
    }

    .card--name {
        text-transform: capitalize;
        color: #fff;
        font-size: 2rem;
        font-weight: 500;
    }

    .card--image {
        width: 150px;
        height: 150px;
        display: block;
        margin: auto;
        padding: 10px;
    }
</style>