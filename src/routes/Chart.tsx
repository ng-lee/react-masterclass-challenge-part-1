import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";

interface IChartProps {
  coinId: string;
}

function Chart({ coinId }: IChartProps) {
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <div>Chart</div>;
}

export default Chart;
