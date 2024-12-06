import { FaArrowRightLong } from "react-icons/fa6";

const Summary = () => {
  return (
    <div className="flex-[1_1_auto] max-w-[30%] w-auto px-6 bg-gray-200 p-14 shadow-lg shadow-gray-500/50 rounded-r-xl">
      <h2 className="text-2xl font-bold mt-10">Summary</h2>
      <div className="w-full h-[1px] bg-gray-400 my-4 rounded-xl" />
      <div className="flex items-center justify-between">
        <span className="font-bold">Items 3</span>
        <span className="font-bold">$ 132.00</span>
      </div>
      <div className="w-full mt-6">
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl">Shipping</h3>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">
                Pick the best delivery
              </span>
            </div>
            <select className="select select-bordered">
              <option disabled>Pick one</option>
              <option value="Express">Express</option>
              <option value="Fast">Fast</option>
              <option value="Normal">Normal</option>
            </select>
          </label>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-xl">Code</h3>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Enter Your Code"
              />
              <FaArrowRightLong />
            </label>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="w-full h-[1px] bg-gray-400 my-4 rounded-xl" />
        <div className="flex items-center justify-between">
          <span className="font-semibold">Total Price</span>
          <span className="font-semibold">$ 137.00</span>
        </div>
      </div>
      <button className="mt-6 btn btn-outline w-full">Check out</button>
    </div>
  );
};

export default Summary;
