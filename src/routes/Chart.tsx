import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ReactApexChart from "react-apexcharts";

interface IChartProps {
  coinId: string;
}

interface IData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart({ coinId }: IChartProps) {
  const { isLoading, data } = useQuery<IData[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ReactApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => price.close),
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            xaxis: {
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
              },
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
            yaxis: {
              labels: {
                show: false,
              },
            },
            fill: {
              type: "gradient",
              gradient: {
                gradientToColors: ["#3498db"],
              },
            },
            colors: ["#27ae60"],
            tooltip: {
              y: {
                formatter: (value) => `$${value.toFixed(5)}`,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
