import React from "react";
import { Product } from "../components";

export default function ProductTemplate({ pageContext }) {
  return <Product {...pageContext} />;
}
