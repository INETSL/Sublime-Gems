import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { POST } from "../../../Api";
import { toast, ToastContainer } from "react-toastify";
import zircon from "../../../assets/gemstones/zircon.png";
import { Link } from "react-router-dom";

export default function AdminAddGemstones() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  // State for storing the preview URL of the selected image
  const [imagePreview, setImagePreview] = useState(null);

  // Watch for changes to the image file input
  const imageFile = watch("image");

  // Update the image preview when files are selected
  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setImagePreview(fileReader.result);
      };
      fileReader.readAsDataURL(imageFile[0]);
    }
  }, [imageFile]);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    if (data.image[0]) {
      formData.append("image", data.image[0]);
    }

    try {
      const response = await POST("/ctgryGemstones", formData);
      toast.success("Gemstone added successfully!");
      reset();
      setImagePreview(null); // Clear the image preview
    } catch (error) {
      toast.error("Failed to add gemstone: " + error.message);
    }
  };
  return (
    <div>
      <div className="flex justify-center min-h-screen mt-10">
        <div className="w-[40rem] h-auto max-h-[32rem] items-center bg-slate-50 p-5 rounded-lg shadow-lg overflow-hidden">
          <div>
            <h1 className="text-2xl font-bold text-center mb-10">
              Add Gemstone
            </h1>
          </div>
          <form action="" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("image", {
                  required: "image is required",
                })}
                id="image"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                placeholder="image"
              />
              {errors.image && (
                <p className="text-red-500 text-sm">{errors.image.message}</p>
              )}
            </div>

            {/* Image Preview */}
            <div className="flex justify-center items-center mt-4 -mb-[5rem]">
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="w-40 h-40" />
              ) : (
                <p>No image selected</p>
              )}
            </div>

            <div className="flex justify-between mt-[5rem]">
              <div>
                <Link to="/admin?tab=gemstones">
                  <button class="mt-5 text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
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
      <ToastContainer autoClose={5000} />
    </div>
  );
}
