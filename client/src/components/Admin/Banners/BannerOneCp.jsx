import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { POST, GET, DELETE } from "../../../Api/";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BannerOneCp() {
  const [bannerOne, setBannerOne] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchBannerOne();
  }, []);

  const fetchBannerOne = async () => {
    try {
      const response = await GET("/bannerOne");
      setBannerOne(response.data[0]);
    } catch (error) {
      console.error("Error fetching banner one:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await POST("/bannerOne", data);
      toast.success("Banner One added successfully!");
      reset();
      fetchBannerOne();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add Banner One.");
    }
  };

  const removeBanner = async (id) => {
    try {
      await DELETE(`/bannerOne/${id}`);
      toast.success("Banner One removed successfully!");
      setBannerOne(null);
      fetchBannerOne();
    } catch (error) {
      toast.error("Failed to remove Banner One.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Banner One</h1>
      </div>
      <div className="flex justify-center min-h-screen mt-10">
        <div className="w-[50rem] items-center">
          <div className="bg-slate-100 p-5 rounded-lg shadow-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block mb-2 text-lg font-medium text-black">
                Banner One
              </label>
              <input
                type="text"
                {...register("title", { required: "Enter Banner One Content" })}
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Banner One Content"
              />
              {errors.title && (
                <p className="text-red-500 text-sm">{errors.title.message}</p>
              )}
              <button
                type="submit"
                className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add Banner One
              </button>
            </form>
            <div className="mt-5">
              <label className="block mb-2 text-sm font-medium text-black">
                Current Content of Banner One
              </label>
              <div className="flex flex-row justify-between items-center bg-slate-50 p-2 rounded-lg shadow-lg">
                <div className="max-w-[30rem] text-justify">
                  <p className="text-black">
                    {bannerOne ? bannerOne.title : "No content available"}
                  </p>
                </div>
                {bannerOne && (
                  <button
                    onClick={() => removeBanner(bannerOne._id)}
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove Banner One
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={5000} />
    </div>
  );
}
