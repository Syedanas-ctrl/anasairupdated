import { IOrder } from "./checkout";

const Modify = ({
  setOrderState,
  handleModify,
  handleClose,
  orders,
  handleRemoveFromCart,
}: {
  setOrderState: any;
  handleModify: () => void;
  handleClose: () => void;
  orders?: IOrder[];
  handleRemoveFromCart: (index: number) => void;
}) => {
  const handleConfirm = () => {
    handleModify();
    handleClose();
  };
  const handleAddMore = () => {
    setOrderState("Modify Order");
    handleClose();
  };
  return (
    <main className="fixed w-full h-full inset-0 bg-black bg-opacity-40 z-50 flex flex-col justify-center items-center">
      <div className="flex my-3 w-96 justify-end">
        <i
          onClick={handleClose}
          className="fa-solid fa-xmark cursor-pointer rounded-full bg-white w-5 h-5 flex justify-center items-center"
        ></i>
      </div>
      <section className="bg-white w-96 px-6 py-4 flex flex-col items-center gap-2">
        <h1 className="text-xl font-semibold text-grey-800">Modify</h1>
        {orders?.map((order, idx) => (
          <div
            className={`flex flex-row justify-between bg-white pl-2 my-1 w-full`}
          >
            <div className="flex flex-col py-2 text-[#5f63bf] font-semibold">
              <p className="text-lg">{order.meal}</p>
            </div>
            <div
              onClick={() => handleRemoveFromCart(idx)}
              className="w-1/5 cursor-pointer flex justify-center items-center text-[#5f63bf] hover:text-white hover:bg-[#5f63bf] hover:border-2 hover-border-white"
            >
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-2 justify-items-stretch w-full mt-4">
          <button
            onClick={handleAddMore}
            className="bg-green-700 text-white px-5 py-2"
          >
            Add More
          </button>
          <button
            onClick={handleConfirm}
            className="bg-indigo-500 text-white px-4 py-2 rounded"
          >
            confirm
          </button>
        </div>
      </section>
    </main>
  );
};
export default Modify;
