import ProductCard from "./components/ProductCard";
import "./App.css";
import { ProductList, formInputList } from "./data";
import Nav from "./components/Nav/Nav";
import Model from "./components/Ui/Model";
import { useState } from "react";
import CustomInput from "./components/Ui/input";

const App = () => {
  {
    /* ----------State--------- */
  }
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  function open() {
    setIsOpen(true);
  }
  /* ----------Render--------- */
  const renderProductList = ProductList.map((product) => (
    <ProductCard Product={product} key={product.id} />
  ));
  const allRenderInputList = formInputList.map((input) => (
    <div className="flex flex-col my-2">
      <label className="font-bold" htmlFor={input.id}>
        {input.label}
      </label>
      <CustomInput type={input.type} name={input.name} id={input.id} />
    </div>
  ));
  return (
    <>
      <div className="min-h-dvh">
        <nav className="bg-blue-400 w-full p-2 fixed z-50">
          <Nav />
        </nav>
        <header className="px-2 md:px-0 text-center flex-col space-y-10 flex justify-center items-center top-60 relative">
          <h1 className="text-6xl font-bold">
            Learn ReactJS by <br /> Building <br />{" "}
            <span className="text-indigo-700">Product Builder</span> <br />{" "}
            <span className="text-indigo-700">Project</span>
          </h1>
          <p className="text-gray-800">
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
      <Model isOpen={isOpen} close={close} title="Add a new product">
        {allRenderInputList}
        <div className="mt-4 flex items-center space-x-4">
          <button className="w-full cursor-pointer p-1 duration-500 rounded-md bg-red-600 hover:bg-red-400">
            Cancel
          </button>
          <button className="w-full cursor-pointer p-1 duration-500 rounded-md bg-indigo-600 hover:bg-indigo-400">
            Submit
          </button>
        </div>
      </Model>
    </>
  );
};

export default App;
