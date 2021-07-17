{/*Config*/}

var delayed;
const config = {
  type: 'bar',
  data: data,
  options: {
    animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  }
};

{/*Setup*/}

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Race 1',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Utils.CHART_COLORS.red,
    },
    {
      label: 'Race 2',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Utils.CHART_COLORS.blue,
    },
    {
      label: 'Race 3',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Utils.CHART_COLORS.green,
    },
    {
      label: 'Race 4',
      data: Utils.numbers(NUMBER_CFG),
      backgroundColor: Utils.CHART_COLORS.yellow,
    },
  ]
};


{/*Actions*/}

const actions = [
    {
      name: 'Randomize',
      handler(chart) {
        chart.data.datasets.forEach(dataset => {
          dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
        });
        chart.update();
      }
    },
  ];