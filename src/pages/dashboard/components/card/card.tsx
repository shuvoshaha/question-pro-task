import React from "react";
import "./card.scss";

type propstypes = {
  title: string;
  body: string;
};

const ProductCard: React.FC<propstypes> = ({ title, body }) => {
  return (
    <div className="card">
      <div className="title"> {title} </div>
      <div className="desc">{body}</div>
    </div>
  );
};

export default ProductCard;
