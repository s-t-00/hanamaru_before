var chartColors = {
  red: '#EF8971',
  orange: '#E5A361',
  grey: '#707070'
};
var chartDatas = {
  datasets: {
    data: [50, 25, 25],
    backgroundColor: [ chartColors.grey, chartColors.orange, chartColors.red ],
  },
  labels: ["該当なし", "子ども", "妻"]
};
var chartOptions = {
  responsive: false,
  legend: {
    display: false
  },
  animation: {
    animateScale: false,
    animateRotate: false
  }
};

window.onload = function() {
  var ctx = document.getElementById('distributionChart').getContext('2d');
  window.myDoughnut = new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [chartDatas.datasets],
      labels: chartDatas.labels
    },
    options: chartOptions
  });
};