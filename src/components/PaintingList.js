import React from "react";
import Painting from "./Painting";

const PaintingList = (paintings) => (
  <ul>
    {paintings.map((painting) => (
      <li key={painting.id}>
        <Painting
          url={painting.url}
          title={painting.title}
          price={painting.price}
          authorUrl={painting.author.url}
          tag={painting.author.tag}
          quantity={painting.quantity}
        />
      </li>
    ))}
  </ul>
);

export default PaintingList;
