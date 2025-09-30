import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...rest }: IProps) => {
  return (
    <span
      {...rest}
      style={{ backgroundColor: color }}
      className={`w-4 h-4 rounded-full cursor-pointer mb-1`}
    ></span>
  );
};

export default CircleColor;
