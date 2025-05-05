import React from "react";

export const StartedButton = ({
  text,
  icon,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles =
    "font-medium rounded-md flex items-center justify-center transition-colors duration-200";

  const variants = {
    primary: "bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2",
    secondary:
      "bg-transparent text-emerald-600 hover:text-emerald-700 border border-emerald-600 px-5 py-2",
    tertiary: "bg-transparent text-emerald-600 hover:text-emerald-700",
    link: "bg-transparent text-emerald-600 hover:underline p-0",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span>{text}</span>
      {icon && <span className="ml-2">{icon}</span>}
    </button>
  );
};
