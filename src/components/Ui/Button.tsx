import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`${className} ${width} cursor-pointer w-full p-2 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
