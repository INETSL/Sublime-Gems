import React from "react";
import { useForm } from "react-hook-form";
import { POST } from "../Api";

import { Link } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await POST("/product", data);
      console.log("Product created:", response);
    } catch (error) {
      console.error("Failed to create product:", error.message);
    }
  };
  return (
    <div>
      <div className="flex justify-center  mt-10 mb-52">
        <div className="w-[30rem] items-center bg-slate-50 p-5 rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl font-bold text-center mb-10">Sign in</h1>
          </div>
          <form action="">
            {/**Email */}
            <div>
              <label class="block mb-2 text-sm font-medium text-black">
                Email
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email is required",
                })}
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/**Password */}
            <div>
              <label class="block mb-2 text-sm font-medium text-black mt-5">
                Password
              </label>
              <input
                type="text"
                {...register("password", {
                  required: "Password is required",
                })}
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password.message}</p>
              )}
            </div>


            <div className="flex flex-col justify-center items-center gap-5">
              <div>
                <button
                  type="submit"
                  class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Sign in
                </button>
              </div>

              <div>
                <p>If you don't have an account?{" "}
                  <Link to="/register" className="text-blue-500">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
