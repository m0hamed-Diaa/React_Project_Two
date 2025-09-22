
const Nav = () => {
  return (
    <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="font-bold text-lg">Mohamed Diaa</a>
        <div className="links flex items-center space-x-4">
            <a href="#" className="cursor-pointer text-white">Products</a>
            <a href="#" className="cursor-pointer text-white">Create a Product</a>
        </div>
    </div>

  )
};

export default Nav;