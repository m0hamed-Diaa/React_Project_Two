const Nav = () => {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <a href="#" className="text-xl text-blue-700 hover:text-blue-500 duration-500 font-bold Logo">
        Mohamed Diaa
      </a>
      <div className="links flex items-center space-x-5">
        <a href="#" className="cursor-pointer text-white text-lg">
          Products
        </a>
        <a href="#" className="cursor-pointer text-white text-lg">
          Create a Product
        </a>
      </div>
    </div>
  );
};

export default Nav;
