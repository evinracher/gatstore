import React from "react";
import { SEO } from "../components";
import { Button, Purchase } from "../styles/components";
import { Link } from "gatsby";

export default function Success() {
  return (
    <div>
      <SEO title="Your payment was successful" />
      <Purchase>
        <h2>Thanks for your purchase</h2>
        <p>Enjoy it!</p>
        <span rol="img" aria-label="emoji">
          ❤️
        </span>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </Purchase>
    </div>
  );
}
