import React from "react";

import { Line } from "react-chartjs-2";

//style
import "../pagesStyle/chart.scss";

//import iamges
import logophoto from "../images/logophoto.png";

const Chart = () => {
  const data = {
    labels: ["jan", "feb", "mar", "apr", "may"],
    datasets: [
      {
        label: "24h FURU Price in $ (By Uniswap)",
        data: [3, 2, 2, 1, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
      },
    ],
  };
  return (
    <div className="chartSectionWrapper">
      <img src={logophoto} />
      <div className="infoCoinSection">
        <div>
          <p>Token Supply: 3M</p>
        </div>
        <div>
          <p>Trades in Last 24 Hrs: 14</p>
        </div>
        <div>
          <p>Current Price: $0,1</p>
        </div>
        <div>
          <p>Market Cap: $77.131,5</p>
        </div>
      </div>
      <div className="info2wrap">
        <div>
          <p>24 hr High: 20</p>
        </div>
        <div>
          <p>24 hr Low: 12</p>
        </div>
      </div>

      <div className="chartWrapper">
        <div className="chart">
          <Line data={data} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
