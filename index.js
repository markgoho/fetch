let planets = [];
let planetApi = 'https://swapi.co/api/planets/';

async function getPlanets(api = planetApi) {
  const response = await fetch(api);
  const data = await response.json();
  addPlanets(data.results);
  if (data.next) {
    getPlanets(data.next);
  }
}

getPlanets();

const addPlanets = data => {
  planets = [...planets, ...data];
  console.log(planets);
};
