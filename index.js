let tatooine;

async function getPlanet(number = '') {
  const response = await fetch(`https://swapi.co/api/planets/${number}`);
  const data = await response.json();
  console.log(data);
}

getPlanet();
