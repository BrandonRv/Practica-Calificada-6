import React from "react";

const Button = (props) => {
  console.log("hago click");
  return (
    <div>
      <button className="btn-all">{props.value}</button>
    </div>
  );
};

export default Button;
