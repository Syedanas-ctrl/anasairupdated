import MainMenu from "../components/main-menu";
import Checkout, { IOrder } from "../components/checkout";
import Nav from "../components/nav";
import { useEffect, useRef, useState } from "react";
import { IMenu } from "../components/menu-item";
import Popup from "../components/popup";
import Modify from "../components/modify";
import Success from "../components/success";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { MealActions } from "../redux/actions/meals";
import { OrderActions } from "../redux/actions/orders";

function App() {
  const dispatch = useAppDispatch();
  const meals = useAppSelector((state) => state.meals.meals);
  const orders = useAppSelector((state) => state.orders.orders);
  const [cart, setCart] = useState<IOrder[]>([]);
  const filteredMenu = meals;

  const handleRemoveFromCart = (index: number) => {
    const newCart = cart.filter((_item, idx) => idx !== index);
    setCart(newCart);
  };
  const [launchSuccess, setLaunchSuccess] = useState(false);
  const [launchModal, setLaunchModal] = useState(false);
  const [startTimer, setStartTimer] = useState(false);
  const [modifyOrder, setModifyOrder] = useState(false);
  const [orderState, setOrderState] = useState("Order");
  const modifyRef = useRef(modifyOrder);
  const successRef = useRef(launchSuccess);
  modifyRef.current = modifyOrder;
  successRef.current = launchSuccess;

  const handleAddToCart = (newMeal: IMenu) => {
    const transformToOrder = {
      mealId: newMeal.id,
      meal: newMeal.name,
      mealPrice: newMeal.price,
    };
    setCart([...cart, transformToOrder]);
  };

  const handlePlaceOrder = () => {
    const formattedCart: any = {};
    formattedCart["items"] = cart.map((item) => item.mealId);
    formattedCart["passengerId"] = "A1";
    formattedCart["price"] = cart.reduce(
      (acc, curr) => acc + curr.mealPrice,
      0
    );
    dispatch(OrderActions.PlaceOrder(formattedCart));
    setStartTimer(true);
  };

  const handleModifyOrder = () => {
    const formattedCart: any = {};
    formattedCart["id"] = orders?.id;
    formattedCart["items"] = cart.map((item) => item.mealId);
    formattedCart["passengerId"] = "A1";
    formattedCart["price"] = cart.reduce(
      (acc, curr) => acc + curr.mealPrice,
      0
    );
    if (
      orders?.items?.length !== formattedCart?.items?.length ||
      !orders?.items?.every((element: string) =>
        formattedCart?.items?.includes(element)
      )
    ) {
      dispatch(OrderActions.ModifyOrder(formattedCart));
      setLaunchSuccess(true);
    } else {
      alert("No changes made to the order");
    }
  };

  useEffect(() => {
    if (startTimer) {
      setLaunchModal(true);
      setTimeout(() => {
        if (modifyRef.current || successRef.current) return;
        setStartTimer(false);
        setLaunchModal(false);
        setCart([]);
      }, 10000);
    }
  }, [startTimer]);

  useEffect(() => {
    if (modifyOrder && launchModal) {
      setLaunchModal(false);
    }
  }, [modifyOrder]);

  useEffect(() => {
    if (launchSuccess) {
      setCart([]);
      
    }
  }, [launchSuccess]);

  useEffect(() => {
    dispatch(MealActions.GetAllMeals());
  }, []);

  return (
    <>
      {launchModal && (
        <Popup
          handleConfirm={() => setLaunchSuccess(true)}
          handleClose={() => setLaunchModal(false)}
          handleModify={() => setModifyOrder(!modifyOrder)}
        />
      )}
      {modifyOrder && (
        <Modify
          setOrderState={setOrderState}
          handleModify={handleModifyOrder}
          handleClose={() => setModifyOrder(false)}
          orders={cart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      )}
      {launchSuccess && <Success handleClose={() => setLaunchSuccess(false)} />}
      <div className="flex">
        <div className="w-4/5">
          <Nav />
          <div className="w-full mt-6 flex items-center justify-center"></div>
          <MainMenu menuList={filteredMenu} handleAddToCart={handleAddToCart} />
        </div>
        <div className="w-1/5">
          <Checkout
            buttonLabel={orderState}
            orders={cart}
            handleRemoveFromCart={handleRemoveFromCart}
            handlePlaceOrder={
              orderState.toLowerCase() === "modify order"
                ? handleModifyOrder
                : handlePlaceOrder
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
