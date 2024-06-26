import React, { useEffect, useState } from 'react';
import ProductService from '../ProductService';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    ProductService.getAllProducts()
      .then((response) => {
        if (Array.isArray(response.data.content)) {
          setProducts(response.data.content);
        } else {
          console.error('Expected an array but got:', response.data.content);
        }
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleDelete = (productId) => {
    ProductService.deleteProduct(productId)
      .then(() => {
        setProducts(products.filter(product => product.id !== productId));
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
      });
  };

  return (
    <div>
      <h2>Product Lists</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.productName}</a>
            <button onClick={() => navigate(`/edit/${product.id}`)}>Edit</button>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
