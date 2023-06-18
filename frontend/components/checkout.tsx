export interface IOrder {
  mealId: string;
  meal: string;
  mealPrice: number;
}

export const OrderedMenuItem = ({
  order,
  handleRemoveFromCart,
  idx,
}: {
  order: IOrder;
  handleRemoveFromCart: (index: number) => void;
  idx: number;
}) => {
  return (
    <div
      className={`md:block md:flex md:flex-row md:justify-between flex flex-row justify-between bg-white pl-2 my-1`}
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
  );
};

const Checkout = ({
  buttonLabel,
  orders,
  handleRemoveFromCart,
  handlePlaceOrder,
}: {
  buttonLabel: string;
  orders?: IOrder[];
  handleRemoveFromCart: (index: number) => void;
  handlePlaceOrder: () => void;
}) => {
  const totalPrice: number =
    orders?.reduce(
      (acc: number, curr: IOrder) =>
        acc + (curr.mealPrice > 0 ? curr?.mealPrice : 0),
      0
    ) || 0;
  return (
    <section className="bg-indigo-900 h-full py-4 px-4">
      <p className="text-white text-2xl font-semibold">Your Orders</p>
      {orders?.map((order, idx) => (
        <OrderedMenuItem
          order={order}
          handleRemoveFromCart={handleRemoveFromCart}
          idx={idx}
        />
      ))}
      {totalPrice > 0 ? (
        <>
          <div className="flex my-4 flex-row justify-between text-white font-semibold">
            <p>Total</p>
            <p>₹{Math.round(totalPrice)}</p>
          </div>
          <div
            onClick={handlePlaceOrder}
            className="md:rounded-none rounded-full border-2 border-white  bg-[#5f63bf] hover:bg-[#434586] text-white py-2 px-6 font-semibold"
          >
            {buttonLabel}
          </div>
        </>
      ) : (
        <div className="flex my-4 flex-row justify-between text-white font-medium">
          <p>Empty stomach for now..... </p>
        </div>
      )}
    </section>
  );
};

export default Checkout;
