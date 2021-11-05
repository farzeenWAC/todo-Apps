import React from "react";
import { useQuery, gql } from "@apollo/client";

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

const ExchangeRates = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (error) {
    return <h1>ERROR</h1>;
  }
  return (
    <div>
      <h1>CURRENCIES</h1>
      <br />
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        <h1>
          {data.rates.map((item) => {
            return (
              <p key={item.currency}>
                {item.currency}:{item.rate}
              </p>
            );
          })}
        </h1>
      )}
    </div>
  );
};

export default ExchangeRates;
