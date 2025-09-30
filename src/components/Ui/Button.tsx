import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  width?: string;
}

const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`${className} ${width} cursor-pointer p-2 rounded-md text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
