const team = (id) => {
  const result = {
    method: 'GET',
    url: 'https://football-pro.p.rapidapi.com/api/v2.0/teams/' + id,
    params: {tz: 'Europe/Amsterdam', include: 'stats', seasons: 16326},
    headers: {
      'x-rapidapi-key': APIKEY,
      'x-rapidapi-host': 'football-pro.p.rapidapi.com'
    }
  }
  return result;
};

const res = (id) => axios.request(team(id)).then(function(response) {
  	console.log(response.data.data);
    return response.data.data;
  }).catch(function (error) {
  	console.error(error);
  });

const teamSearch = (teamName) => {
  const search = {
    method: 'GET',
    url: 'https://football-pro.p.rapidapi.com/api/v2.0/teams/search/' + teamName,
    params: {tz: 'Europe/Amsterdam'},
    headers: {
      'x-rapidapi-key': APIKEY,
      'x-rapidapi-host': 'football-pro.p.rapidapi.com'
    }
  }

  return search;
};
