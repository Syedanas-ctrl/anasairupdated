const Success = ({ handleClose }: { handleClose: () => void }) => {
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
      </section>
    </main>
  );
};

export default Success;