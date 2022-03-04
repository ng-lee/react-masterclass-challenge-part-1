import styled from "styled-components";
import { IPriceData } from "./Coin";

const Item = styled.div<{ isMinus: boolean }>`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  div {
    padding-left: 20px;
    width: 50%;
    color: ${(props) => props.theme.bgColor};
  }
  div:last-child {
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => (props.isMinus ? "#e74c3c" : "#2ecc71")};
  }
`;

interface IPriceProps {
  coinId: string;
  data: IPriceData;
}

function Price({ coinId, data }: IPriceProps) {
  return (
    <div>
      <Item isMinus={data.quotes.USD.percent_change_12h < 0}>
        <div>Percent Change in 12h</div>
        <div>{data.quotes.USD.percent_change_12h}%</div>
      </Item>
      <Item isMinus={data.quotes.USD.percent_change_24h < 0}>
        <div>Percent Change in 24h</div>
        <div>{data.quotes.USD.percent_change_24h}%</div>
      </Item>
      <Item isMinus={data.quotes.USD.percent_change_7d < 0}>
        <div>Percent Change in 7d</div>
        <div>{data.quotes.USD.percent_change_7d}%</div>
      </Item>
      <Item isMinus={data.quotes.USD.percent_change_30d < 0}>
        <div>Percent Change in 30d</div>
        <div>{data.quotes.USD.percent_change_30d}%</div>
      </Item>
    </div>
  );
}

export default Price;
