import axiosInstance from "./axiosConfig";

/**
 * Makes a GET request to the specified endpoint with optional query parameters.
 *
 * @param {string} endpoint - The API endpoint (e.g., "/products").
 * @param {Object} params - An object containing query parameters (optional).
 * @returns {Promise<Object>} - The response data from the server.
 */
const getRequest = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error("Error in GET request:", error.response || error.message);
    throw error;
  }
};

export default getRequest;
