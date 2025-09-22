import type { IProduct } from "../interfaces";
import { textSlice } from "../Utils/Functions";
import Image from "./image";
import Button from "./Ui/Button";


interface IProps {
  Product: IProduct
} 

const ProductCard = ({Product}: IProps) => {
  return (
    <div className="p-2 rounded-xl border text-black flex flex-col max-w-sm md:max-w-lg mx-auto">
      <Image
        ImageUrl={Product.imageUrl}
        alt={Product.catogrey.name}
        className="rounded-md mb-2 hover:scale-103 duration-400 ease-in-out"
      />
      <span>{Product.title}</span>
      <p>
        {textSlice(Product.describtion)}
      </p>
      <div className="flex items-center space-x-2 my-3">
        <span className="w-4 h-4 bg-indigo-500 rounded-full cursor-pointer"></span>
        <span className="w-4 h-4 bg-yellow-500 rounded-full cursor-pointer"></span>
        <span className="w-4 h-4 bg-red-500 rounded-full cursor-pointer"></span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold">{Product.price}</span>
        <Image
          ImageUrl={Product.catogrey.imageUrl}
          className="rounded-full mb-2 w-10 h-10 object-contain" alt={Product.catogrey.name} />
      </div>
      <div className="flex space-x-2 items-center justify-between mt-2">
        <Button width="w-fit" className=" bg-indigo-600 hover:bg-indigo-400">
          Edit
        </Button>
        <Button className="bg-red-500 hover:bg-red-400">
          Destroy
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
