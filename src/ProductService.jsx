import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080'; 


const ProductService = {
  getAllProducts: () => axios.get(`${API_BASE_URL}/products`),
  getProductById: (productId) => axios.get(`${API_BASE_URL}/products/${productId}`),
  createProduct: (productData) => axios.post(`${API_BASE_URL}/products`, productData),
  updateProduct: (productId, productData) => axios.put(`${API_BASE_URL}/products/${productId}`, productData),
  deleteProduct: (productId) => axios.delete(`${API_BASE_URL}/products/${productId}`)
};

export default ProductService;