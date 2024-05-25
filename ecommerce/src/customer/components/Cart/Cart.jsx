import React from "react";
import CartItem from "./CartItem";
import { Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {

const navigate = useNavigate();

const handleCheckOut=()=>{
  navigate('/checkout?step=2');
}


  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItem />)}
        </div>
        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider/>
              <div className="space-y-3 mb-10">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>$4678</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Discount</span>
                  <span className="text-green-600">-$466</span>
                </div>
                <div className="flex justify-between pt-3 text-black">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3 font-bold text-black">
                  <span>Total Amount</span>
                  <span className="text-green-600">$1276</span>
                </div>
              </div>
              <Button onClick={handleCheckOut}
                  variant="contained"
                  className="w-full mt-5"
                  sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
                >
                  CheckOut
                </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
