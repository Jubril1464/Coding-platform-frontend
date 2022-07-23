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
  width
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
        width:width
      
        
      }}
    >
      {children}
    </button>
  );
};

export default Button;
