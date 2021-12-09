// ./src/components/Countries/index.js
import React from "react";

export default function Countries(props) {
  const allCountries = props.allCountries;

  console.log(allCountries);

  return (
    <>
      {allCountries.map((e, index) => {
        return <p key={index}>{e.name.common}</p>;
      })}
    </>
  );
}
