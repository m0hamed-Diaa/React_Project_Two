import type { InputHTMLAttributes } from "react";

type IProps = InputHTMLAttributes<HTMLInputElement>

const CustomInput = ({ ...rest}: IProps) => {
  return (
    <input
      {...rest}
      className="border-blue-900 border-2 shadow-xl shadow-blue-100 rounded-2xl mt-1.5 caret-blue-700 focus:border-blue-500 outline-none p-1"
    />
  );
};

export default CustomInput;
