import api from "../services/axios.js";

export const sendEmail = async (payload) => {
  try {
    const response = await api.post("/send-email", payload);
    return response.data;
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response?.data || error.message,
    );
  }
};
