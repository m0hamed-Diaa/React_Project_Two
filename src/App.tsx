import ProductCard from "./components/ProductCard";
import "./App.css";
import { ProductList } from "./data";
import Nav from "./components/Nav/Nav";
const App = () => {
  // ** Renderconst
  const renderProductList = ProductList.map((product) => (
    <ProductCard Product={product} key={product.id} />
  ));
  return (
    <>
      <nav className="bg-blue-400 w-full p-2">
        <Nav />
      </nav>
      <main className="container mx-auto">
        <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {renderProductList}
        </div>
      </main>
    </>
  );
};

export default App;
