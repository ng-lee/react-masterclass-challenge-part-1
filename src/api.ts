export function fetchCoins() {
  return fetch("https://api.coinpaprika.com/v1/coins")
    .then((resp) => resp.json())
    .then((json) => json.slice(0, 100));
}
