import React from "react";
import { useForm } from "react-hook-form";
import postRequest from "../../../Api/post";
import { Link } from "react-router-dom";

import zircon from "../../../assets/slection/matching.png";

export default function AdminEditSelections() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    try {
      const response = await postRequest("/product", data);
      console.log("Product created:", response);
    } catch (error) {
      console.error("Failed to create product:", error.message);
    }
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen mt-10">
        <div className="w-[40rem] items-center bg-slate-50 p-5 rounded-lg shadow-lg">
          <div>
            <h1 className="text-2xl font-bold text-center mb-10">Edit</h1>
          </div>
          <form action="">
            {/**Title */}
            <div>
              <label class="block mb-2 text-sm font-medium text-black">
                Title
              </label>
              <input
                type="text"
                {...register("title", {
                  required: "Title is required",
                })}
                id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-black mt-5">
                Upload Image
              </label>
              <input
                type="file"
                {...register("title", {
                  required: "Title is required",
                })}
                id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="Title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
            </div>

            <div className="flex justify-center items-center">
              <img src={zircon} alt="" className="w-40 h-40" />
            </div>

            <div className="flex justify-between">
              <div>
                <Link to="/admin?tab=selections">
                  <button class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                    Back
                  </button>
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
