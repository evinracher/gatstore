import React, { useState, useContext, useEffect, useMemo } from "react";
import { Link } from "gatsby";
import { Button, StyledCart } from "../styles/components";
import priceFormat from "../utils/priceFormat";
import { CartContext } from "../context";

export default function Cart() {
  const { cart } = useContext(CartContext);
  const [stripe, setStripe] = useState();

  const total = useMemo(
    _ => cart.reduce((total, curr) => total + curr.price * curr.quantity, 0),
    cart
  );

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PK));
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    const { error } = await stripe.redirectToCheckout({
      lineItems: cart.map(({ id, quantity }) => ({ price: id, quantity })),
      mode: "payment",
      successUrl: process.env.SUCCESS_REDIRECT,
      cancelUrl: process.env.CANCEL_REDIRECT,
    });
    if (error) {
      throw error;
    }
  };

  return (
    <StyledCart>
      <h2>Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>{priceFormat(item.price)}</td>
              <td>{item.quantity}</td>
              <td>{priceFormat(item.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small>{priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
          <Button onClick={handleSubmit} disabled={!cart.length}>
            Pay
          </Button>
        </div>
      </nav>
    </StyledCart>
  );
}
