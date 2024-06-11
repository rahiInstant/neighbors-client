import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
const CheckOutForm = () => {
  const paymentElementOptions = {
    layout: "tabs",
  };
  return (
    <div className="mt-3 p-5 border rounded-lg">
      <CardElement/>
    </div>
  );
};

export default CheckOutForm;
