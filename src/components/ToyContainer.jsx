import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {
  return (
    <div id="toy-collection">
      {toys.map((toy) => (
        <ToyCard
          key={toy.id}
          toy={toy}
          toys={toys}
          setToys={setToys}
        />
      ))}
    </div>
  );
}

export default ToyContainer;