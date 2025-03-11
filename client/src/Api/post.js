import axiosInstance from "./axiosConfig";

const postRequest = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error in POST request:", error.response || error.message);
    throw error;
  }
};

export default postRequest;
