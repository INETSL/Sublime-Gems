import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoTrashBinSharp } from "react-icons/io5";
import getRequest from "../../../Api/get";
import deleteRequest from "../../../Api/delete";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function AdminProductList() {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getRequest("/product");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.message);
      toast.error("Failed to fetch products. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await deleteRequest(`/product/${id}`);
        toast.success("Product deleted successfully!");
        setProducts(products.filter((product) => product._id !== id));
      }
    } catch (error) {
      console.error("Error deleting product:", error.message);
      toast.error("Failed to delete product. Please try again.");
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-2xl font-bold">Product List</h1>
        </div>
        <div>
          <Link to="/admin?tab=addProduct">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add Product
            </button>
          </Link>
        </div>
      </div>
      <div>
        {products.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-gray-600 text-lg">No products found.</p>
          </div>
        ) : (
          <table className="w-[21rem] md:w-[30rem] mt-5 font-sans text-sm md:text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead>
              <tr className="border-b border-gray-200 text-[11px] dark:border-gray-700">
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Image
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Item ID
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Gem Type
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Shape
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Weight (CT)
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Measurements
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Colour
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Clarity
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Treatment
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Origin
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Selection
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Price
                </th>
                <th className="px-6 py-4 font-medium text-gray-900 bg-gray-50 dark:text-white dark:bg-gray-800">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b text-xs text-black font-sans border-gray-200 dark:border-gray-700"
                >
                  <td className="px-6 py-4">
                    <img
                      src={product.thumbnail}
                      alt="Product"
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">{product.itemid}</td>
                  <td className="px-6 py-4">{product.gemType}</td>
                  <td className="px-6 py-4">{product.shape}</td>
                  <td className="px-6 py-4">{product.weight}</td>
                  <td className="px-6 py-4">{product.measurements}</td>
                  <td className="px-6 py-4">{product.colour}</td>
                  <td className="px-6 py-4">{product.clarity}</td>
                  <td className="px-6 py-4">{product.treatment}</td>
                  <td className="px-6 py-4">{product.origin}</td>
                  <td className="px-6 py-4">{product.selection}</td>
                  <td className="px-6 py-4">${product.price}</td>
                  <td>
                    <div className="flex justify-evenly items-center ">
                      <Link to={`/admin?tab=editProduct&id=${product._id}`}>
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-1 py-1 rounded">
                          <FaRegEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold px-1 py-1 rounded"
                      >
                        <IoTrashBinSharp />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}
