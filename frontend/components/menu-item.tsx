export interface IMenu {
  id: string;
  image: string;
  name: string;
  description: string;
  starter: string;
  desert: string;
  price: number;
}

const MenuItem = ({
  menu,
  handleAddToCart,
}: {
  menu: IMenu;
  handleAddToCart: (selectedMeal: IMenu) => void | boolean;
}) => {
  return (
    <div className="flex md:p-3 p-1 rounded md:my-3 ">
      <div className="flex-shrink-0 mt-2">
        <img
          className="md:w-32 rounded-full md:h-32 h-28 w-28 "
          src={menu.image}
          alt="food item"
        />
      </div>
      <div className="ml-3 max-w-[70%]">
        <div>
          <h3 className="md:text-2xl text-xl text-gray-800 font-semibold">
            {menu.name}
          </h3>
        </div>
        <div className="text-gray-600 w-full my-2 md:text-md text-sm">
          {menu.description}
        </div>
        <div className="flex flex-row md:text-md text-sm text-white justify-between py-1 bg-[#5f63bf] font-medium  px-2 my-1">
          <p>
            <i className="fa-solid fa-utensils pr-2"></i>Starter
          </p>
          <p>{menu.starter}</p>
        </div>
        <div className="flex flex-row justify-between md:text-md text-sm text-white py-1 bg-[#5f63bf] font-medium px-2 my-1">
          <p>
            <i className="fa-solid fa-cheese pr-2"></i>Desert
          </p>
          <p>{menu.desert}</p>
        </div>
        <div className="grid md:text-md text-md justify-items-end py-1 px-2 my-1 font-medium">
          <p className="">₹ {menu.price}</p>
        </div>
        <div className="flex justify-end">
          <div
            onClick={() => handleAddToCart(menu)}
            className="rounded-full w-10 h-10 flex items-center justify-center px-2 py-1 border shadow hover:bg-[#402d6a] text-white mr-3 my-2 bg-[#5f63bf]"
          >
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
