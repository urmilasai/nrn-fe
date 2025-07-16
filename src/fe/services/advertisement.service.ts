import axiosFeInstance from "../axios/axiosintance";



export const getAdvertisement = async () => {
  try {
    const response = await axiosFeInstance.get(`/advertisement`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
