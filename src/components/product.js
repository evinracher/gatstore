import React, { useState } from "react";
import priceFormat from "../utils/priceFormat";
import {
  Tag,
  SizeButton,
  QtyButton,
  SizeSelect,
  Button,
  StyledProductDetail,
  QtySelect,
} from "../styles/components";
import { SEO } from "../components";

export default function Product({ name, sku: id, unit_amount, product }) {
  const [size, setSize] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const price = priceFormat(unit_amount);
  return (
    <StyledProductDetail>
      <SEO title={name} />
      <img src={product.images[0]} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>{price}</b>
        {product.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>X</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Quantity: </p>
        <QtySelect>
          <button
            onClick={() => {
              if (quantity) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <input type="text" disabled={true} value={quantity} />
          <button
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </QtySelect>
      </div>
    </StyledProductDetail>
  );
}
