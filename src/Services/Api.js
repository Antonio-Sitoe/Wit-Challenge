const API_KEY = 'c07793cea0f9902ba32471530ce59ece';

export function BASE_URL(city = 'maputo') {
  return {
    url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`,
    options: {
      method: 'GET',
    },
  };
}
