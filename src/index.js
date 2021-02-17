import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// const link = React.createElement(
//   "a",
//   { href: "reactjs.org", target: "_blank" },
//   "link"
// );

// const jsxLink = <a href="reactjs.org">link</a>;

// console.log(link);
// console.log(jsxLink);

// ReactDOM.render(link, document.getElementById("root"));

const painting = {
  id: "id-1",
  url: "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_150.jpg",
  title: "star",
  price: 500,
  author: {
    tag: "Bessi",
    url: "https://pixabay.com/users/ractapopulous-24766/",
  },
  quantity: 10,
};

const template = (
  <div>
    <img src={painting.url} alt={painting.title} />
    <h2>{painting.title}</h2>
    <p>Автор:  <a href={painting.author.url}>{painting.author.tag}</a></p>
    <p>Цена: {painting.price} кредитов</p>
    <button type="button">Добавить в корзину</button>
  </div>
);
console.log(template);

ReactDOM.render(template, document.getElementById("root"));
