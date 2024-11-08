// ButtonComponent.tsx
import React from "react";
import "./Button.scss";

interface ButtonComponentProps {
  onClick: () => void;
  children?: string;
  isClicked?: boolean;
}

const Button: React.FC<ButtonComponentProps> = ({
  children,
  ...props
}) => {
  const handleClick = () => {
    props.onClick();
  };

  const buttonClass = props.isClicked ? "clicked" : "";

  return (
    <button
      {...props}
      className={`common--button ${buttonClass}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
