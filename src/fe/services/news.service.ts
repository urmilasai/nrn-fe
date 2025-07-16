import axiosFeInstance from "../axios/axiosintance";



export const getNews = async () => {
  try {
    const response = await axiosFeInstance.get(`/news`);
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const getNewsById = async (id: string) => {
  try {
    const response = await axiosFeInstance.get(`/news/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const getBreakingNews = async () => {
  try {
    const response = await axiosFeInstance.get(`/news/breaking`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTrendingNews = async () => {
  try {
    const response = await axiosFeInstance.get(`/news/trending`);
    return response.data;
  } catch (error) {
    throw error;
  }
};





