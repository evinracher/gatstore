import React, { useContext } from "react";
import { Link } from "gatsby";
import { Button, StyledCart } from "../styles/components";
import priceFormat from "../utils/priceFormat";
import { CartContext } from "../context";

export default function Cart() {
  const { cart } = useContext(CartContext);
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
                <img src={item.product.images[0]} alt={item.name} />
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
          <small></small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
          <Button>Pay</Button>
        </div>
      </nav>
    </StyledCart>
  );
}
