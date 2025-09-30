import type { IProduct } from "../interfaces";
import { formatNumberStr, textSlice } from "../Utils/Functions";
import Image from "./image";
import Button from "./Ui/Button";
import CircleColor from "./CircleColor";

interface IProps {
  Product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEdit: () => void;
  index: number;
  setProductToEditIndex: (value: number) => void;
  openConfirmModal: () => void,
}

const ProductCard = ({
  Product,
  setProductToEdit,
  openEdit,
  index,
  setProductToEditIndex,
  openConfirmModal,
}: IProps) => {
  const onEdit = () => {
    setProductToEdit(Product);
    openEdit();
    setProductToEditIndex(index);
  };
  const onRemove = () => {
    setProductToEdit(Product);
    openConfirmModal();
  };
  return (
    <div className="p-2 rounded-xl border text-black flex flex-col max-w-sm md:max-w-lg mx-auto">
      <Image
        ImageUrl={Product.imageUrl}
        alt={Product.catogrey.name}
        className="rounded-md mb-2 hover:scale-103 duration-400 ease-in-out"
      />
      <span>{textSlice(Product.title, 25)}</span>
      <p>{textSlice(Product.describtion)}</p>
      <div className="flex items-center space-x-2 my-3">
        {!Product.colors.length ? (
          <span className="font-bold text-red-500">Not available colors!</span>
        ) : (
          Product.colors.map((c, i) => <CircleColor color={c} key={i} />)
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-bold text-indigo-600">
          ${formatNumberStr(Product.price)}
        </span>
        <div className="flex items-center space-x-2">
          <span className="font-bold mb-2">{Product.catogrey.name}</span>
          <Image
            ImageUrl={Product.catogrey.imageUrl}
            className="rounded-full mb-2 w-10 h-10 object-contain"
            alt={Product.catogrey.name}
          />
        </div>
      </div>
      <div className="flex space-x-2 items-center justify-between mt-2">
        <Button
          className="w-full bg-indigo-600 hover:bg-indigo-400"
          onClick={onEdit}
        >
          Edit
        </Button>
        <Button
          className="w-full bg-red-500 hover:bg-red-400"
          onClick={onRemove}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
