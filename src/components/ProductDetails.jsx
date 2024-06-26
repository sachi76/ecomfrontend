import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductService from '../ProductService';

const ProductDetails = () => {
     const { id } = useParams();
     const [product, setProduct] = useState(null);

    useEffect(() => {
        ProductService.getProductById(id).then(response => {
        setProduct(response.data);
        });
    }, [id]);

    if (!product) {
    return <div>Product Not found...</div>;
     }

  return (
    <div>
        <h1>{product.productName}</h1>
        <p>{product.productDescription}</p>
        <p>Price: ${product.productPrice}</p>
        <p>Quantity: {product.productQuantity}</p>
        <p>Brand: {product.productBrand}</p>
        <img src={product.productImage} alt={product.productName} />
    </div>
  )
}

export default ProductDetails;