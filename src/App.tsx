import ProductCard from "./components/ProductCard";
import "./App.css";
import { Colors, ProductList, categories, formInputList } from "./data";
import Nav from "./components/Nav/Nav";
import Model from "./components/Ui/Model";
import { useState, type ChangeEvent, type FormEvent } from "react";
import CustomInput from "./components/Ui/input";
import type { IProduct } from "./interfaces";
import { productValidation } from "./Validation";
import ErrorMessage from "./components/ErrorMessage";
import CircleColor from "./components/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/Ui/select";
import type { TypesOfProductsName } from "./components/Types";
import toast, { Toaster } from "react-hot-toast";

const App = () => {
  /* ----------State--------- */
  const defaultProductObj = {
    title: "",
    describtion: "",
    imageUrl: "",
    price: "",
    catogrey: {
      name: "",
      imageUrl: "",
    },
    colors: [],
  };
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);

  const [productToEditIndex, setProductToEditIndex] = useState<number>(0);

  const [errors, setErrors] = useState({
    title: "",
    describtion: "",
    imageUrl: "",
    price: "",
  });

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  //  خاص بعرض الالوان فى form
  const [tempColors, setTempColor] = useState<string[]>([]);

  /* ----------Handler--------- */

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenEditModel, setIsOpenEditModel] = useState(false);
  const [isOpenConfirmModal, setIsOpenConfirmModel] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  const closeEdit = () => setIsOpenEditModel(false);
  const openEdit = () => setIsOpenEditModel(true);

  const closeConfirmModal = () => setIsOpenConfirmModel(false);
  const openConfirmModal = () => setIsOpenConfirmModel(true);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onCancel = () => {
    setProduct(defaultProductObj);
    setTempColor([]);
    close();
  };
  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, describtion, imageUrl, price } = product;
    const errors = productValidation({ title, describtion, imageUrl, price });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColors,
        catogrey: selectedCategory,
      },
      ...prev,
    ]);
    setProduct(defaultProductObj);
    setTempColor([]);
    close();
  };
  const submitEditHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, describtion, imageUrl, price } = productToEdit;
    const errors = productValidation({ title, describtion, imageUrl, price });

    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    const updateProducts = [...products];
    updateProducts[productToEditIndex] = {
      ...productToEdit,
      colors: tempColors.concat(productToEdit.colors),
    };
    setProducts(updateProducts);

    setProductToEdit(defaultProductObj);
    setTempColor([]);
    closeEdit();
  };

  const removeProductHandler = () => {
    const filterd = products.filter(
      (product) => product.id !== productToEdit.id
    );
    setProducts(filterd);
    closeConfirmModal();
    toast("Product has been deleted", {
      duration: 3000,
      icon: "✅",
      style: {
        backgroundColor: "black",
        color: "white",
      }
    });
  };

  /* ----------Render--------- */
  const renderProductList = products.map((product, index) => (
    <ProductCard
      Product={product}
      key={product.id}
      setProductToEdit={setProductToEdit}
      openEdit={openEdit}
      setProductToEditIndex={setProductToEditIndex}
      index={index}
      openConfirmModal={openConfirmModal}
    />
  ));
  const allRenderInputList = formInputList.map((input) => (
    <div className="flex flex-col my-2" key={input.id}>
      <label className="font-bold" htmlFor={input.id}>
        {input.label}
      </label>
      <CustomInput
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderProductColors = Colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColors.includes(color)) {
          setTempColor((prev) => prev.filter((item) => item !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));
  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: TypesOfProductsName
  ) => {
    return (
      <div className="flex flex-col my-2">
        <label className="font-bold" htmlFor={id}>
          {label}
        </label>
        <CustomInput
          type={"text"}
          name={name}
          id={id}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };
  return (
    <>
      <div className="min-h-dvh border-b-indigo-400 border-b-2">
        <nav className="bg-blue-400 w-full p-2 fixed z-50">
          <Nav />
        </nav>
        <header className="px-2 md:px-0 text-center flex-col space-y-10 flex justify-center items-center top-60 relative">
          <h1 className="text-4xl md:text-6xl font-bold">
            Learn ReactJS by <br /> Building <br />
            <span className="text-indigo-700">Product Builder</span> <br />{" "}
            <span className="text-indigo-700">Project</span>
          </h1>
          <p className="text-gray-800 text-base/relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
            itaque dignissimos nesciunt accusantium explicabo ad doloremque
            blanditiis eveniet fugit sit.
          </p>
          <button
            onClick={open}
            className="w-fit cursor-pointer text-white py-1.5 px-2 duration-500 rounded-md bg-indigo-700 hover:bg-indigo-400"
          >
            Build now
          </button>
        </header>
      </div>
      <div className="sm:px-5 px-2 flex items-center mt-5 justify-between container mx-auto">
        <h1 className="font-bold text-4xl">
          Latest <span className="text-indigo-700">Products</span>
        </h1>
        <button
          onClick={open}
          className="w-fit cursor-pointer py-1.5 px-2 duration-500 rounded-md bg-red-600 hover:bg-red-400"
        >
          Add Product
        </button>
      </div>
      <main className="container mx-auto">
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {renderProductList}
        </div>
      </main>
      {/* Add Product Model */}
      <Model isOpen={isOpen} close={close} title="Add a new product">
        <form action="" onSubmit={submitHandler}>
          {allRenderInputList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex my-3 flex-wrap items-center space-x-1">
            {renderProductColors}
          </div>
          <div className="flex my-3 flex-wrap items-center space-x-1">
            {tempColors.map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className={`p-1 mb-1 text-sm rounded-md text-white`}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <button className="w-full cursor-pointer p-2 duration-500 rounded-md bg-indigo-600 hover:bg-indigo-400">
              Submit
            </button>
            <button
              onClick={onCancel}
              className="w-full cursor-pointer p-2 duration-500 rounded-md bg-red-600 hover:bg-red-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </Model>

      {/* Edit Product Model */}
      <Model
        isOpen={isOpenEditModel}
        close={closeEdit}
        title="Edit a new product"
      >
        <form action="" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "describtion",
            "Product Describtion",
            "describtion"
          )}
          {renderProductEditWithErrorMsg(
            "imageUrl",
            "Product  ImageUrl",
            "imageUrl"
          )}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}
          <Select
            selected={productToEdit.catogrey}
            setSelected={(value) =>
              setProductToEdit({ ...productToEdit, catogrey: value })
            }
          />
          <div className="flex my-3 flex-wrap items-center space-x-1">
            {renderProductColors}
          </div>
          <div className="flex my-3 flex-wrap items-center space-x-1">
            {tempColors.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className={`p-1 mb-1 text-sm rounded-md text-white`}
              >
                {color}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center space-x-4">
            <button className="w-full cursor-pointer p-2 duration-500 rounded-md bg-indigo-600 hover:bg-indigo-400">
              Submit
            </button>
            <button
              onClick={onCancel}
              className="w-full cursor-pointer p-2 duration-500 rounded-md bg-red-600 hover:bg-red-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </Model>

      {/* Delete Product From Model */}
      <Model
        isOpen={isOpenConfirmModal}
        close={closeConfirmModal}
        title="Are you sure to remove this product from your Store?"
        description="Deleting this product will remove it permanently from your inventory. Are associated data, sales history, and other related information will also be deleted. please make sure this is the intended action."
      >
        <div className="flex items-center space-x-2">
          <button
            className="bg-[#c2344d] w-full cursor-pointer p-1.5 rounded-lg text-black hover:bg-red-800 duration-500"
            onClick={removeProductHandler}
          >
            Yes, remove it
          </button>
          <button
            className="bg-[#f5f5fa] w-full cursor-pointer p-1.5 rounded-lg text-black hover:bg-gray-300 duration-500"
            onClick={closeConfirmModal}
          >
            Cancel
          </button>
        </div>
      </Model>
      <Toaster />
    </>
  );
};

export default App;
