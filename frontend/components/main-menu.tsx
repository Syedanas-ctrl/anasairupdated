import MenuItem, { IMenu } from "./menu-item";

export const Labels = ({
  labels,
  handleFilter,
}: {
  labels: string[];
  handleFilter: (label: string) => void;
}) => {
  return (
    <div className="flex gap-4">
      <div
        onClick={() => handleFilter("All")}
        className="bg-indigo-900 rounded-full py-2 px-4 text-md text-white cursor-pointer hover:bg-indigo-800"
      >
        All
      </div>
      {labels?.map((label) => (
        <div
          onClick={() => handleFilter(label)}
          className="bg-indigo-900 rounded-full py-2 px-4 text-md text-white cursor-pointer hover:bg-indigo-800"
        >
          {label}
        </div>
      ))}
    </div>
  );
};

const MainMenu = ({
  menuList,
  handleAddToCart,
}: {
  menuList: IMenu[];
  handleAddToCart: (selectedMeal: IMenu) => void;
}) => {
  return (
    <section>
      <div className="grid grid-cols-2 gap-4 px-16 py-6">
        {menuList.map((menu) => (
          <MenuItem menu={menu} handleAddToCart={handleAddToCart} />
        ))}
      </div>
    </section>
  );
};
export default MainMenu;
