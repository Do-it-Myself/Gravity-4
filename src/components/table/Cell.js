import React from "react";

export default function Cell({ value }) {
  let content = 0;
  if (value === 1) {
    content = 1;
  } else if (value === 2) {
    content = 2;
  }
  return <th><button type="button">{content}</button></th>;
}
