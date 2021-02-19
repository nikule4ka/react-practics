import React from "react";
import defaultImg from "./default-img.jpg";
import PropTypes from "prop-types";

const Painting = ({ url, title, authorUrl, tag, price, quantity }) => (
  <>
    <img src={url} alt={title} width="480" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={authorUrl}>{tag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>{quantity < 10 ? "заканчивается" : "есть в наличии"}</p>

    <button type="button">Добавить в корзину</button>
  </>
);

Painting.defaultProps = {
  url: defaultImg,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
