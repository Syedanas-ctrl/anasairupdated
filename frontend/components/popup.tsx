const Popup = ({
  handleConfirm,
  handleClose,
  handleModify,
}: {
  handleConfirm: () => void;
  handleClose: () => void;
  handleModify: () => void;
}) => {
  const confirm = () => {
    handleConfirm();
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
        <p className="text-2xl text-gray-800 font-semibold">
          Order has been placed successfully!
        </p>
        <p className="text-sm text-gray-800 font-semibold">
          You can modify your order within 30 seconds.
        </p>
        <div className="grid grid-cols-2 gap-2 justify-items-stretch w-full mt-4">
          <button
            onClick={() => {
              handleModify();
              handleClose();
            }}
            className="bg-green-700 text-white px-4 py-2 rounded"
          >
            Modify
          </button>
          <button
            onClick={confirm}
            className="bg-indigo-500 text-white px-4 py-2 rounded"
          >
            confirm
          </button>
        </div>
      </section>
    </main>
  );
};

export default Popup;
