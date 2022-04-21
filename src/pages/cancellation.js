import React from "react";
import { SEO } from "../components";
import { Button, Purchase } from "../styles/components";
import { Link } from "gatsby";

export default function Cancel() {
  return (
    <div>
      <SEO title="Order cancellation" />
      <Purchase>
        <h2>You have cancelled your order</h2>
        <span rol="img" aria-label="emoji">
          😞
        </span>
        <Link to="/">
          <Button>Back to home</Button>
        </Link>
      </Purchase>
    </div>
  );
}
