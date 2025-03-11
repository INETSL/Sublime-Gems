import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { POST, GET, DELETE } from "../../../Api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SlideThree() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [bannerImage, setBannerImage] = useState(null); // Initially no image

  useEffect(() => {
    fetchSlideOne();
  }, []);

  const fetchSlideOne = async () => {
    try {
      const response = await GET("/slideThree");
      if (response.data && response.data.slideThree) {
        setBannerImage(response.data.slideThree);
      } else {
        setBannerImage(null); // No image in the database
      }
    } catch (error) {
      console.error("Error fetching Slide One:", error);
      setBannerImage(null); // Ensure it's null if there's an error
    }
  };

  // Example of how you might handle the form submission in React
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("slideThree", data.slideThree[0]);

    try {
      const response = await POST("/slideThree", formData);
      toast.success("Slide One updated successfully!");
      setBannerImage(URL.createObjectURL(data.slideThree[0]));
      reset();
    } catch (error) {
      console.error("Failed to update Slide One:", error);
      toast.error(
        error.response?.data?.message || "Failed to update Slide One."
      );
    }
  };

  // Example of handling the deletion in React
  const removeBanner = async () => {
    try {
      await DELETE("/slideThree");
      toast.success("Slide Three removed successfully!");
      setBannerImage(null); // Optionally reset to a default image
    } catch (error) {
      console.error("Failed to remove Slide Three:", error);
      toast.error("Failed to remove Slide Three.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold">Slide Three Management</h1>
      </div>
      <div className="flex justify-center min-h-screen mt-10">
        <div className="w-[50rem] items-center ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-5 bg-slate-100 p-5 rounded-lg shadow-lg"
          >
            <label className="block mb-2 text-lg font-medium text-black">
              Upload New Image for Slide Three
            </label>
            <input
              type="file"
              {...register("slideThree", { required: "A file is required" })}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            {errors.slideThree && (
              <p className="text-red-500 text-xs mt-1">
                {errors.slideThree.message}
              </p>
            )}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
            >
              Upload Image
            </button>
            <button
              type="button"
              onClick={removeBanner}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4"
            >
              Remove Current Image
            </button>
          </form>
          <div className="mt-5">
            <label className="block mb-2 text-sm font-medium text-black">
              Current Image:
            </label>
            {bannerImage ? (
              <img
                src={bannerImage}
                alt="Slide Three"
                className="max-w-md rounded-lg shadow-md"
              />
            ) : (
              <p>No Slide Three image available.</p>
            )}
          </div>
          <ToastContainer autoClose={5000} />
        </div>
      </div>
    </div>
  );
}
