import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { IoIosArrowDown } from "react-icons/io";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
const CheckOutForm = () => {
  const stripe = useStripe();
  const element = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const successMsg = (msg) => toast.success(msg);
  const errorMsg = (msg) => toast.error(msg);
  const [error, setError] = useState("");
  const [TrnxId, setTrnxId] = useState("");
  const [userData, setUserData] = useState("");
  const [subscriptionForTime, setSubscriptionForTime] = useState(0);

  // const { data: userData } = useQuery({
  //   queryKey: ["orderData", subscriptionForTime],
  //   queryFn: async () => {
  //     const result = await axiosSecure.post("/create-payment-intent", {
  //       pay: subscriptionForTime * 3,
  //     });
  //     return result.data;
  //   },
  //   enabled: subscriptionForTime > 0,
  // });
  // console.log(userData)
  const handleOnChange = (e) => {
    const payAmount = parseInt(e.target.value) * 3;
    console.log(payAmount);
    setSubscriptionForTime(e.target.value);
    axiosSecure
      .post("/create-payment-intent", { pay: payAmount })
      .then((res) => {
        if (res.status == 200) {
          setUserData(res?.data);
        }
        console.log(res.data);
      });
  };
  async function handleSubmitPay(e) {
    e.preventDefault();
    if(!user) {
      errorMsg('Please Login before getting membership.')
      return
    }
    if (!stripe || !element) return;
    const card = element.getElement(CardElement);
    if (card == null) return;
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setError(error.message);
      errorMsg(error.message);
    } else {
      setError("");
    }
    console.log("payment method", error ? error : paymentMethod);
    console.log(userData?.clientSecret);
    const { paymentIntent, error: transactionError } =
      await stripe.confirmCardPayment(userData?.clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
    console.log(paymentIntent);
    if (transactionError) {
      console.log("Transaction Error", transactionError);
      setError(transactionError.message);
      errorMsg(transactionError.message);
    } else {
      console.log("payment_intent", paymentIntent);
      if (paymentIntent.status == "succeeded") {
        setTrnxId(paymentIntent.id);
        const payment = {
          email: user?.email,
          payAmount: subscriptionForTime * 3,
          subscriptionFor: subscriptionForTime*30,
          transactionId: paymentIntent.id,
        };
        axiosSecure
          .post("/payment", payment)
          .then((res) => console.log(res.data));
        // console.log(paymentSaved)
      }
    }
  }
  return (
    <form onSubmit={handleSubmitPay} className="w-full">
      <label htmlFor="subscription" className="mb-2 text-xl font-medium block">
        Choose your subscription plan
      </label>
      <div className="w-full flex items-center gap-4">
        <div className="relative h-fit  border rounded-md w-full">
          <select
            // onChange={(e) => setSubscriptionForTime(parseInt(e.target.value))}
            onChange={handleOnChange}
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
            <option value="12">1 year</option>
          </select>
          <div className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none">
            <IoIosArrowDown className="text-2xl" />
          </div>
        </div>
        <div className="text-2xl font-semibold border px-5 py-3.5 rounded-lg">
          ${subscriptionForTime * 3}
        </div>
      </div>
      <div className="mt-3 p-5 border rounded-lg">
        <CardElement
          className="w-full mx-auto"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#9e2146" },
            },
          }}
        />
      </div>
      <button
        disabled={!stripe || !userData}
        className="py-3 px-5 w-full bg-[#1f89df] rounded-lg mt-3 text-lg font-medium text-[#f1f1f1]"
        type="submit"
      >
        Pay Now
      </button>
      {error && (
        <p className="text-red-600 text-lg text-center font-medium">{error}</p>
      )}
      {TrnxId && (
        <p className="text-green-600 text-lg text-center font-medium">
          TrnX: {TrnxId}
        </p>
      )}
    </form>
  );
};

export default CheckOutForm;
