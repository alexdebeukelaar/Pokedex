getPokemon();

const api_url= 'https://pokeapi.co/api/v2/'
async function getPokemon(){
    const response = await fetch('https://pokeapi.co/api/v2/');
    const data = await response.json();
    console.log(data)


const pokemon = {};
pokemon['image'] = data.sprites.font_default;
pokemon['id'] = data.id;
pokemon['name'] = data.name;
pokemon ['moves'] = data.moves;

console.log(pokemon);
}