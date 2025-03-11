import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { POST, GET, DELETE } from "../../../Api/";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BannerTwoCp() {
  const [bannerTwo, setBannerTwo] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetchBannerTwo();
  }, []);

  const fetchBannerTwo = async () => {
    try {
      const response = await GET("/bannerTwo");
      setBannerTwo(response.data[0]); // Adjust according to actual response structure
    } catch (error) {
      console.error("Error fetching banner Two:", error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await POST("/bannerTwo", data);
      toast.success("Banner Two added successfully!");
      reset();
      fetchBannerTwo(); // Refetch banner data after adding
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add Banner Two.");
    }
  };

  const removeBanner = async (id) => {
    try {
      await DELETE(`/bannerTwo/${id}`);
      toast.success("Banner Two removed successfully!");
      setBannerTwo(null); // Clear the banner state
      fetchBannerTwo(); // Optionally refetch to ensure UI is up-to-date, might be redundant if you're sure it's deleted
    } catch (error) {
      toast.error("Failed to remove Banner Two.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Banner Section</h1>
      </div>
      <div className="flex justify-center min-h-screen mt-10">
        <div className="w-[50rem] items-center">
          <div className="bg-slate-100 p-5 rounded-lg shadow-md mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block mb-2 text-lg font-medium text-black">
                Banner Two
              </label>
              <input
                type="text"
                {...register("title", { required: "Enter Banner Two Content" })}
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Banner Two Content"
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
                Current Content of Banner Two
              </label>
              <div className="flex flex-row justify-between items-center bg-slate-50 p-2 rounded-lg shadow-lg">
                <div className="max-w-[30rem] text-justify">
                  <p>{bannerTwo ? bannerTwo.title : "No content available"}</p>
                </div>
                {bannerTwo && (
                  <button
                    onClick={() => removeBanner(bannerTwo._id)}
                    className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Remove Banner Two
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
