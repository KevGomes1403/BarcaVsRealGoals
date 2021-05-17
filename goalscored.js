const labels = ['Barcelona', 'Real Madrid'];

const chartSetup = async() => {
  const b = await res(83);
  const r = await res(3468);

  const bStats = b.stats.data[0];
  const rStats = r.stats.data[0];

  const data = {
    labels: labels,
    datasets: [{
    label: 'Total',
    data: [bStats.avg_goals_per_game_scored.total, rStats.avg_goals_per_game_scored.total],
    backgroundColor: [
      'rgba(254, 19, 16, 0.5)'
    ],
    borderColor: [
      'rgb(0, 0, 0)'
    ],
    borderWidth: 1
  },
  {
      label: 'Home',
      data: [bStats.avg_goals_per_game_scored.home, rStats.avg_goals_per_game_scored.home],
      backgroundColor: [
        'rgba(168, 19, 62, 0.5)'
      ],
      borderColor: [
        'rgb(0, 0, 0)'
      ],
      borderWidth: 1
    },
    {
    label: 'Away',
    data: [bStats.avg_goals_per_game_scored.away, rStats.avg_goals_per_game_scored.away],
    backgroundColor: [
      'rgba(254, 190, 16, 0.5)'
    ],
    borderColor: [
      'rgb(0, 0, 0)'
    ],
    borderWidth: 1
  }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  var thisChart = new Chart(
   document.getElementById("myChart"),
   config
  );
};
chartSetup();
