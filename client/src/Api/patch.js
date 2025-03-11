import axiosInstance from "./axiosConfig";

const patchRequest = async (endpoint, data) => {
  try {
    const response = await axiosInstance.patch(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error in PATCH request:", error.response || error.message);
    throw error;
  }
};

export default patchRequest;
