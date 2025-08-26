import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../../App";

const Cart = () => {
  const { cart } = useContext(cartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + cur.amount, 0));
  }, [cart]);

  return (
    <div>
      <h2>Cart List</h2>

      {cart.length > 0 ? (
        <div className="border mx-auto p-5 w-full my-20 lg:w-1/2">
          {cart.map((list) => (
            <div className="flex items-center gap-5 justify-center p-5">
              <div>
                <img src={list.image} alt="image" className="w-52 h-52" />
              </div>

              <div className="flex flex-col gap-5">
                <h2>{list.name}</h2>

                <p>Amount : {list.amount} </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2>No Cart List Data</h2>
        </div>
      )}

      <h2 className="font-bold text-3xl mx-auto mb-10 bg-yellow-400 p-5 w-fit">
        Total Amount : {total}{" "}
      </h2>
    </div>
  );
};

export default Cart;
