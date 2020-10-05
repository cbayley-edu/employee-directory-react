import React from "react";
import "./style.css";

export default function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

