import React, { useState } from "react";

const NewForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="  bg-white p-10 w-[30%] rounded-2xl shadow-2xl">
        <form className="space-y-4">
          <h1 className="font-bold text-center mb-5">
            {isSignUp ? "Sign Up" : "Log in"}
          </h1>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-600 text-lg font-medium"
            >
              User Name
            </label>

            <input
              className="block w-full border-2 shadow-2xl border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 "
              type="text"
              placeholder="Enter your name"
            />
          </div>

          {isSignUp && (
            <div>
              <label
                htmlFor="name"
                className="block text-gray-600 text-lg font-medium"
              >
                User Email
              </label>

              <input
                className="block border-2 w-full border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 "
                type="email"
                placeholder="Enter your email"
              />
            </div>
          )}

          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 text-lg font-medium"
            >
              Password
            </label>

            <input
              className="block border-2 w-full border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 "
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="block w-full bg-blue-600 text-center py-2 text-white rounded-lg shadow"
          >
            {isSignUp ? "Sign Up" : "Log In"}{" "}
          </button>

          <p>
            {isSignUp ? "Already Exits" : " New Register "}{" "}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
              }}
              className="text-blue-500 cursor-pointer"
            >
              {isSignUp ? "Login" : " Sign up"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default NewForm;
