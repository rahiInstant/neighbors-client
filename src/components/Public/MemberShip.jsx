import { IoIosArrowDown } from "react-icons/io";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
// import CheckOutForm from "./CheckOutForm";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(
  "pk_test_51PNtchRqCMfc85qchC5i8PCcQ28tRw2seBsrnsSBzpyXLIndQsPkGWWZRzQdI2kAP1Kks62AsgRq7lYCwfh480C900gZFy4xPQ"
);

const MemberShip = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="shadow max-w-7xl mx-auto p-5 mt-5 flex">
        <div className="w-1/2">
          <h1 className="text-4xl font-semibold">Membership</h1>
          <p className="text-lg font-medium mt-2">
            Get more access by becoming a member.
          </p>
          <p className="mt-3 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            commodi repudiandae voluptatum aspernatur consequatur nemo,
            distinctio eos ipsa dolores mollitia dolorum laborum, recusandae
            exercitationem, quia deserunt facilis ea alias libero!
          </p>
        </div>
        <div className="h-50 px-3">
          <div className="w-0.5 h-full bg-slate-700"></div>
        </div>
        <div className="w-1/2">
          <Elements stripe={stripePromise}>
            <CheckOutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
