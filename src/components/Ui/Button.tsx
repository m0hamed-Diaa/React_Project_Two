import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
  width?: string;
}

const Button = ({ children, className, width, ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`${className} ${width} cursor-pointer p-2 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
