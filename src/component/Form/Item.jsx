import React from "react";

function Item({ children, label }) {
  return (
    <div>
      <label>{label}</label>
      <div>{children}</div>
    </div>
  );
}
export default Item;
