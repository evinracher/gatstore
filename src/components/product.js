import React, { useContext, useState } from "react";
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
import { SEO, Stars } from "../components";
import { CartContext } from "../context";

export default function Product({ id, unit_amount, product }) {
  const [size, setSize] = useState(2);
  const [quantity, setQuantity] = useState(1);
  const price = priceFormat(unit_amount);
  const { addToCart } = useContext(CartContext);

  const handleSubmit = () => {
    addToCart({
      id,
      quantity,
      price: unit_amount,
      name: product.name,
      image: product.images[0],
    });
  };

  return (
    <StyledProductDetail>
      <SEO title={product.name} />
      <img src={product.images[0]} alt={product.name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{product.name}</h2>
        <b>{price}</b>
        <Stars />
        <small>{product.description}</small>
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
              if (quantity > 1) {
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
        <Button onClick={handleSubmit}>Add to cart</Button>
      </div>
    </StyledProductDetail>
  );
}
