import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({
  label,
  onClick,
  variant = "primary",
}: ButtonProps) {
  return (
    <button className={`custom-button ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
}
