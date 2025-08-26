import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { cartContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { cart, setCart } = useContext(cartContext);
  const [product, setProduct] = useState([]);

  const navigate = useNavigate();

  const getAPI = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product");
      //   console.log("Product Data", response.data.data);
      setProduct(response.data.data);
    } catch (error) {
      console.log("Error in get api", error.message);
    }
  };

  console.log("Porduct list", product);

  const handleAddCart = (list) => {
    setCart([...cart, list]);
    // navigate("/cart");
    toast.success("Product Add Successfully");
    console.log("Add to cart", list.name);
  };

  const handleRemoveCArt = (id) => {
    setCart((list) => list.filter((value) => value._id != id));
    toast.error("Product Remove Successfully");
    console.log("Remove cart ID :", id);
  };

  useEffect(() => {
    getAPI();
  }, []);

  return (
    <div>
      <ToastContainer />
      <h1 className="text-center font-semibold text-xl py-8">
        Product Details
      </h1>

      {product.length > 0 ? (
        <div className="grid my-20 grid-cols-2 lg:grid-cols-3 w-full mx-auto gap-8  md:w-[80%]">
          {product.map((list) => (
            <div
              key={list._id}
              className="flex  border shadow-2xl p-5  flex-col items-center justify-center"
            >
              <div>
                <img src={list.image} alt="image" className="w-44 h-44" />
              </div>

              <h2>{list.name}</h2>

              <p>Amount : {list.amount}</p>

              {cart.find((items) => items._id === list._id) ? (
                <button
                  onClick={() => {
                    handleRemoveCArt(list._id);
                  }}
                  className="bg-red-500 p-3 rounded-xl"
                >
                  Remove to Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    handleAddCart(list);
                  }}
                  className="bg-green-500 p-3 rounded-xl"
                >
                  Add to Cart
                </button>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 className="font-medium">No Data Found</h2>
        </div>
      )}
    </div>
  );
};

export default Product;
