import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import postRequest from "../../../Api/post";
import { Link } from "react-router-dom";

export default function AdminAddProducts() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const [imagesPreview, setImagesPreview] = useState([]);

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setThumbnailPreview(URL.createObjectURL(file));
    }
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length) {
      setImagesPreview(files.map((file) => URL.createObjectURL(file)));
    }
  };

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("itemid", data.itemid);
      formData.append("gemType", data.gemType);
      formData.append("shape", data.shape);
      formData.append("weight", data.weight);
      formData.append("measurements", data.measurements);
      formData.append("colour", data.colour);
      formData.append("clarity", data.clarity);
      formData.append("treatment", data.treatment);
      formData.append("origin", data.origin);
      formData.append("selection", data.selection);
      formData.append("price", data.price);
      formData.append("video", data.video);

      if (data.thumbnail[0]) {
        formData.append("thumbnail", data.thumbnail[0]);
      }
      if (data.images?.length > 0) {
        Array.from(data.images).forEach((image) => {
          formData.append("images", image);
        });
      }

      console.log("Submitting formData:", formData);

      const response = await postRequest("/product", formData);

      // Display success toast message
      toast.success("Product uploaded successfully!");

      // Reset form fields and previews
      reset();
      setThumbnailPreview(null);
      setImagesPreview([]);
      console.log("Product created:", response);
    } catch (error) {
      console.error("Failed to create product:", error.message);
      // Display error toast message
      toast.error("Failed to upload product. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold ">Add Products</h1>
      </div>
      <div className="flex items-center justify-center min-h-screen mt-10">
        <div className="w-[50rem] items-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
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

              {/* Item ID */}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Item ID
                </label>
                <input
                  type="text"
                  {...register("itemid", {
                    required: "Item ID is required",
                  })}
                  id="itemid"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Item ID"
                />
                {errors.itemid && (
                  <p className="text-red-500 text-sm">
                    {errors.itemid.message}
                  </p>
                )}
              </div>

              {/* Gem Type*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Select an Gem Type
                </label>
                <select
                  id="gemType"
                  {...register("gemType", {
                    required: "Gem type is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a Gem Type</option>
                  <option value="apatite">Apatite</option>
                  <option value="amethyst">Amethyst</option>
                  <option value="alexandrite">Alexandrite</option>
                  <option value="germany">Germany</option>
                </select>
                {errors.gemType && (
                  <p className="text-red-500 text-sm">
                    {errors.gemType.message}
                  </p>
                )}
              </div>

              {/* Shape*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Select an Shape
                </label>
                <select
                  id="shape"
                  {...register("shape", {
                    required: "Gem shape is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a Shape</option>
                  <option value="cushion">Cushion</option>
                  <option value="emerald">Emerald</option>
                  <option value="asscher">Asscher</option>
                  <option value="heart">Heart</option>
                </select>
                {errors.shape && (
                  <p className="text-red-500 text-sm">{errors.shape.message}</p>
                )}
              </div>

              {/* Weight*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Weight (CT)
                </label>
                <input
                  type="text"
                  id="weight"
                  {...register("weight", {
                    required: "Gem weight is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Weight (CT)"
                />
                {errors.shape && (
                  <p className="text-red-500 text-sm">
                    {errors.weight.message}
                  </p>
                )}
              </div>

              {/* Measurements*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Measurements
                </label>
                <input
                  type="text"
                  id="measurements"
                  {...register("measurements", {
                    required: "Gem measurements is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Measurements"
                />
                {errors.measurements && (
                  <p className="text-red-500 text-sm">
                    {errors.measurements.message}
                  </p>
                )}
              </div>

              {/* Colour*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Select an Colour
                </label>
                <select
                  id="colour"
                  {...register("colour", {
                    required: "Gem colour is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a Colour</option>
                  <option value="red">Red</option>
                  <option value="blue">Blue</option>
                  <option value="black">Black</option>
                  <option value="brown">Brown</option>
                </select>
                {errors.colour && (
                  <p className="text-red-500 text-sm">
                    {errors.colour.message}
                  </p>
                )}
              </div>

              {/* Clarity*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Select an Clarity
                </label>
                <select
                  id="clarity"
                  {...register("clarity", {
                    required: "Gem clarity is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a Clarity</option>
                  <option value="fs">FS</option>
                  <option value="if">IF</option>
                  <option value="vvs1">VVS1</option>
                  <option value="vvs2">VVS2</option>
                </select>
                {errors.clarity && (
                  <p className="text-red-500 text-sm">
                    {errors.clarity.message}
                  </p>
                )}
              </div>

              {/* Treatment*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Select an Treatment
                </label>
                <select
                  id="treatment"
                  {...register("treatment", {
                    required: "Gem treatment is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a Treatment</option>
                  <option value="africa">Africa</option>
                  <option value="australia">Australia</option>
                  <option value="brazil">Brazil</option>
                  <option value="congo">Congo</option>
                </select>
                {errors.treatment && (
                  <p className="text-red-500 text-sm">
                    {errors.treatment.message}
                  </p>
                )}
              </div>

              {/* origin*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Select an Origin
                </label>
                <select
                  id="origin"
                  {...register("origin", {
                    required: "Gem origin is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a Treatment</option>
                  <option value="africa">Africa</option>
                  <option value="australia">Australia</option>
                  <option value="brazil">Brazil</option>
                  <option value="congo">Congo</option>
                </select>
                {errors.origin && (
                  <p className="text-red-500 text-sm">
                    {errors.origin.message}
                  </p>
                )}
              </div>

              {/* Selection*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Select an Selection
                </label>
                <select
                  id="selection"
                  {...register("selection", {
                    required: "Gem selection is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                >
                  <option selected>Choose a Origin</option>
                  <option value="loose gemstones">Loose Gemstones</option>
                  <option value="matching gemstone pairs">
                    Matching Gemstone Pairs
                  </option>
                  <option value="gemstone sets">Gemstone Sets</option>
                  <option value="gemstone layouts">Gemstone Layouts</option>
                </select>
                {errors.selection && (
                  <p className="text-red-500 text-sm">
                    {errors.selection.message}
                  </p>
                )}
              </div>

              {/* Price*/}
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Price
                </label>
                <input
                  type="text"
                  id="price"
                  {...register("price", {
                    required: "Gem price is required",
                  })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Price"
                />
                {errors.price && (
                  <p className="text-red-500 text-sm">{errors.price.message}</p>
                )}
              </div>

              {/**Thumbnail image */}
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Upload Thumbnail
                </label>
                <input
                  type="file"
                  {...register("thumbnail", {
                    required: "Thumbnail is required",
                  })}
                  onChange={handleThumbnailChange}
                  accept="image/*"
                  className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5"
                />
                {errors.thumbnail && (
                  <p className="text-red-500 text-sm">
                    {errors.thumbnail.message}
                  </p>
                )}
                {thumbnailPreview && (
                  <img
                    src={thumbnailPreview}
                    alt="Thumbnail Preview"
                    className="mt-2 w-40 h-40 object-cover border"
                  />
                )}
              </div>

              {/* Images */}
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Upload Images
                </label>
                <input
                  type="file"
                  multiple
                  {...register("images", {
                    required: "At least one image is required",
                  })}
                  onChange={handleImagesChange}
                  accept="image/*"
                  className="bg-gray-50 border text-gray-900 rounded-lg block w-full p-2.5"
                />
                {errors.images && (
                  <p className="text-red-500 text-sm">
                    {errors.images.message}
                  </p>
                )}
                <div className="flex flex-wrap mt-2 gap-2">
                  {imagesPreview.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Preview ${index + 1}`}
                      className="w-24 h-24 object-cover border"
                    />
                  ))}
                </div>
              </div>
              <div>
                <label class="block mb-2 text-sm font-medium text-black">
                  Video URL
                </label>
                <input
                  type="text"
                  {...register("video", {
                    required: "Title is required",
                  })}
                  id="video"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Past video URL here"
                />
                {errors.video && (
                  <p className="text-red-500 text-sm">{errors.video.message}</p>
                )}
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <Link to="/admin?tab=productList">
                  <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">
                    Back
                  </button>
                </Link>
              </div>
              <div>
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </div>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}
