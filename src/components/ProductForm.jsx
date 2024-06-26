import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProductService from '../ProductService';

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({
    productName: '',
    productDescription: '',
    productPrice: 0,
    productQuantity: 0,
    productBrand: '',
    productImage: ''
  });

  useEffect(() => {
    if (id) {
      ProductService.getProductById(id)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.error('There was an error fetching the product!', error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      ProductService.updateProduct(id, product)
        .then((response) => {
          console.log('Product updated successfully:', response.data);
          navigate('/');
        })
        .catch((error) => {
          console.error('There was an error updating the product!', error);
        });
    } else {
      ProductService.createProduct(product)
        .then((response) => {
          console.log('Product created successfully:', response.data);
          navigate('/');
        })
        .catch((error) => {
          console.error('There was an error creating the product!', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="productName"
        value={product.productName}
        onChange={handleChange}
        placeholder="Product Name"
      />
      <input
        type="text"
        name="productDescription"
        value={product.productDescription}
        onChange={handleChange}
        placeholder="Product Description"
      />
      <input
        type="number"
        name="productPrice"
        value={product.productPrice}
        onChange={handleChange}
        placeholder="Product Price"
      />
      <input
        type="number"
        name="productQuantity"
        value={product.productQuantity}
        onChange={handleChange}
        placeholder="Product Quantity"
      />
      <input
        type="text"
        name="productBrand"
        value={product.productBrand}
        onChange={handleChange}
        placeholder="Product Brand"
      />
      <input
        type="text"
        name="productImage"
        value={product.productImage}
        onChange={handleChange}
        placeholder="Product Image URL"
      />
      <button type="submit">{id ? 'Update' : 'Create'} Product</button>
    </form>
  );
};

export default ProductForm;
