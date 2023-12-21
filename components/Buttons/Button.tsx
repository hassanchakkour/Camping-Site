"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  title: string;
  small?: boolean;
  type: "submit" | "reset" | "button" | undefined;
  icon?: IconType | any;
  variant: string;
  full?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title,
  small,
  type,
  icon: Icon,
  variant,
  full,
}) => {
  return (
    <button
      type={type}
      className={`flexCenter  gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      <Icon size={24} />
      <label className="bold-16 cursor-pointer whitespace-nowrap">
        {title}
      </label>
    </button>
  );
};

export default Button;
