import axios from 'axios';
import config from '../config/environment';

const strapiAPI = axios.create({
  baseURL: `${config.strapiURL}/api`,
});

export const getBlogPosts = async () => {
  try {
    const response = await strapiAPI.get('/blog-posts', {
      params: {
        populate: '*',
        sort: 'publishedAt:desc',
      },
    });
    console.log('Blog posts response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
};

export const getBlogPost = async (slug) => {
  try {
    const response = await strapiAPI.get('/blog-posts', {
      params: {
        filters: {
          Slug: {
            $eq: slug,
          },
        },
        populate: '*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await strapiAPI.get('/categories', {
      params: {
        populate: '*',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export default strapiAPI; 