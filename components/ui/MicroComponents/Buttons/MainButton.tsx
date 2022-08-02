import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  align?: string;
  bgColor?: string;
  color?: string;
  handleClick?:()=>void
}

export const MainButton: FC<Props> = ({
  children,
  type = "button",
  bgColor,
  handleClick
}) => {
  const ButtonStyles = {
    background: `${bgColor === "invert" ? "#fff" : "#f5222d"}`,
    color: `${bgColor === "invert" ? "#f5222d" : "#fff"}`,
    padding: ".7em 1em",
    border: "none",
    borderRadius: "8px",
    fontSize: "1em",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "1px 1px 3px 0px rgba(0,0,0,0.75)",
  };

  return (
    <button style={ButtonStyles} type={type} onClick={handleClick}>
      {children}
    </button>
  );
};
