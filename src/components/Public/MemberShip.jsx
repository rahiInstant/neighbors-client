import { IoIosArrowDown } from "react-icons/io";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51PNtchRqCMfc85qchC5i8PCcQ28tRw2seBsrnsSBzpyXLIndQsPkGWWZRzQdI2kAP1Kks62AsgRq7lYCwfh480C900gZFy4xPQ"
);


const MemberShip = () => {
  const appearance = {
    theme: "stripe",
  };
  const options = {
    appearance,
  };
  return (
    <div className="shadow max-w-7xl mx-auto p-5 mt-5 flex">
      <div className="w-1/2">
        <h1 className="text-4xl font-semibold">Membership</h1>
        <p className="text-lg font-medium mt-2">
          Get more access by becoming a member.
        </p>
        <p className="mt-3 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro commodi
          repudiandae voluptatum aspernatur consequatur nemo, distinctio eos
          ipsa dolores mollitia dolorum laborum, recusandae exercitationem, quia
          deserunt facilis ea alias libero!
        </p>
      </div>
      <div className="h-50 px-3">
        <div className="w-0.5 h-full bg-slate-700"></div>
      </div>
      <div className="w-1/2">
        <Elements options={options} stripe={stripePromise}>
          <form className="w-full">
            <label
              htmlFor="subscription"
              className="mb-2 text-xl font-medium block"
            >
              Choose your subscription plan
            </label>
            <div className="w-full flex items-center gap-4">
              <div className="relative h-fit  border rounded-md w-full">
                <select
                  name="subscription"
                  required
                  className=" py-4 px-5 text-lg   appearance-none  rounded-lg outline-none w-full"
                >
                  <option className="hidden" value="">
                    -- subscription plan --
                  </option>
                  <option value="1">1 month</option>
                  <option value="3">3 month</option>
                  <option value="6">6 month</option>
                  <option value="1">1 year</option>
                </select>
                <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown className="text-2xl" />
                </div>
              </div>
              <div className="text-2xl font-semibold border px-5 py-3.5 rounded-lg">
                $5000
              </div>
            </div>
            <CheckOutForm />
            <button
              className="py-3 px-5 w-full bg-[#1f89df] rounded-lg mt-3 text-lg font-medium text-[#f1f1f1]"
              type="submit"
            >
              Pay Now
            </button>
          </form>
        </Elements>
      </div>
    </div>
  );
};

export default MemberShip;
