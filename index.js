const API = 'https://swapi.co/api/planets/';

let planets = [];

async function getPlanets(planetApi = API) {
  const response = await fetch(planetApi);
  const data = await response.json();
  planets = [...planets, ...data.results];
  if (data.next) {
    getPlanets(data.next);
  }
}

getPlanets();

console.log(planets);
