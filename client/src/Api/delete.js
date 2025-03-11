import axiosInstance from "./axiosConfig";

const deleteRequest = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error in DELETE request:", error.response || error.message);
    throw error;
  }
};

export default deleteRequest;
