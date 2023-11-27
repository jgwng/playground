// @ts-nocheck
import { writable } from "svelte/store";

export const arrPokemon = writable([]);
const urls = [];
const fetchNum = 150;

for(let i = 0; i< fetchNum; i++){
    let url = `https://pokeapi.co/api/v2/pokemon-species/${i+1}`;
    urls.push(url);
}

let requests = urls.map(url => fetch(url));
Promise.all(requests).
then((responses) => {Promise.all(responses.map(res => res.json())).then((
    response => {
       const pokemonData = response.map((_,index) => {
        return {
            name: response[index].names[2].name,
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
        }
        });
        arrPokemon.set(pokemonData);
    }
))}
);