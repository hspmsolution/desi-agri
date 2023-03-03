import { React } from 'react';
import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './ProductChart.css';
import Button from 'react-bootstrap/Button';

Chart.register(...registerables);

const LineChart = () => {
  const productInfo = useSelector((state) => state.products.productInfo);
  const data = {
    labels: productInfo?.map((x) => x.datetime.slice(0, 10)),
    datasets: [
      {
        label: 'price',
        data: productInfo?.map((x) => x?.price),
        fill: false,
        borderColor: ['#e76d67'],
        backgroundColor: ['#e76d67'],
        pointRadius: 1,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    // switch chart axis on basis of media screen size
    indexAxis: 'x',
    interaction: {
      mode: 'index',
      intersect: false,
    },
    responsive: true,

    maintainAspectRation: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },

    legend: {
      labels: {
        fontSize: 26,
      },
    },
    plugins: {
      tooltip: {
        mode: 'index',
        intersect: false,
      },
      hover: {
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <>
      <h1 className="ms-4">Commodity Snapshot</h1>
      <div id="buu">
        <Button variant="warning" className="Fbutton ">
          Futures
        </Button>
        <Button variant="outline-warning" className="Obutton">
          Options
        </Button>
      </div>

      <div id="ChartContainer">
        <div id="HomeChart">
          <span> Line Chart</span>
          <Line
            data={data}
            // width={600}
            // height={100}
            options={options}
            plugins={[
              {
                afterDraw: (chart) => {
                  if (chart.tooltip?._active?.length) {
                    const x = chart.tooltip._active[0].element.x;
                    const yAxis = chart.scales.y;
                    const ctx = chart.ctx;
                    ctx.save();
                    ctx.beginPath();
                    ctx.setLineDash([5, 7]);
                    ctx.moveTo(x, yAxis.top);
                    ctx.lineTo(x, yAxis.bottom);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = 'grey';
                    ctx.stroke();
                    ctx.restore();
                  }
                },
              },
            ]}
          />
        </div>
        <div id="HomeChart">
          <span> Line Chart</span>
          <Line
            data={data}
            // width={600}
            // height={100}
            options={options}
            plugins={[
              {
                afterDraw: (chart) => {
                  if (chart.tooltip?._active?.length) {
                    const x = chart.tooltip._active[0].element.x;
                    const yAxis = chart.scales.y;
                    const ctx = chart.ctx;
                    ctx.save();
                    ctx.beginPath();
                    ctx.setLineDash([5, 7]);
                    ctx.moveTo(x, yAxis.top);
                    ctx.lineTo(x, yAxis.bottom);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = 'grey';
                    ctx.stroke();
                    ctx.restore();
                  }
                },
              },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default LineChart;
