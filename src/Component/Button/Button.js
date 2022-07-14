import React from "react";
import btnStyles from "./Button.module.css";

const Button = ({
  children,
  className,
  color,
  backgroundColor,
  padding,
  borderRadius,
  border,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${btnStyles.btn} ${className}`}
      style={{
        backgroundColor: backgroundColor,
        padding: padding,
        color: color,
        borderRadius: borderRadius,
        border: border,
        
      }}
    >
      {children}
    </button>
  );
};

export default Button;
