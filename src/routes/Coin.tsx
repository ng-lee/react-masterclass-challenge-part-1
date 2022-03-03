import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
  font-weight: 600;
`;

interface RouteState {
  state: {
    name: string;
  };
}

function Coin() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState();
  const [priceInfo, setPriceInfo] = useState();
  const { coinId } = useParams();
  const {
    state: { name },
  } = useLocation() as RouteState;
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{name}</Title>
      </Header>
      {loading ? "Loading..." : null}
    </Container>
  );
}

export default Coin;
