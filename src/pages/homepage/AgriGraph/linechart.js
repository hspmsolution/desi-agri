import { React, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Button as RbButton, ButtonGroup, ToggleButton } from "react-bootstrap";
import "./linechart.css";
import Table from "./Table";

Chart.register(...registerables);

const LineChart = () => {
  const [res, setres] = useState();
  // const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5000/products?productId=9"
      );
      const data = await response.json();
      setres(data);
    }
    fetchData();
  }, []);

  const data = {
    labels: res?.map((x) => x.time),
    datasets: [
      {
        label: "price",
        data: res?.map((x) => x?.price),
        fill: false,
        borderColor: ["#e76d67"],
        backgroundColor: ["#e76d67"],
        pointRadius: 1,
        pointHoverRadius: 6,
      },
    ],
  };

  const options = {
    // switch chart axis on basis of media screen size
    indexAxis: "x",
    interaction: {
      mode: "index",
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
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "index",
        intersect: false,
      },
    },
  };

  const radios = [
    { name: 'Top Gainers', value: '1' },
    { name: 'Top Losers', value: '2' }
  ];

  return (
    <>
        <div id="container" className="col-12">
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
                    const x = chart.tooltip._active[0]?.element.x;
                    const yAxis = chart.scales.y;
                    const ctx = chart?.ctx;
                    ctx.save();
                    ctx.beginPath();
                    ctx.setLineDash([5, 7]);
                    ctx.moveTo(x, yAxis.top);
                    ctx.lineTo(x, yAxis.bottom);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = "grey";
                    ctx.stroke();
                    ctx.restore();
                  }
                },
              },
            ]}
          />
          <div style={{ margin: 'auto' }}>
            <RbButton variant="outline-success" id="FOICH">
              For more details on indices click here
            </RbButton>
          </div>
        </div>

        <div id="Hometable">
          <div id="TgTl" style={{ minWidth: '100px'}} >
          <ButtonGroup className="col-12">
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx} TglButton`}
            type="radio"
            variant={idx % 2 ? 'outline-danger' : 'outline-success' }
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
             // , display: 'flex', justifyContent: 'center', alignItems: 'center' 
            className='d-flex justify-content-center align-items-center'
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
          </div>
          <Table />
        </div>
      </div>
    </>
  );
};

export default LineChart;
