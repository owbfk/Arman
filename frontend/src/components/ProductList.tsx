import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Product from '../types';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8000/products')
      .then(response => {
        console.log(response.data[0])
        setProducts(response.data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}><h3><a href={`/product/${product.id}`}>{product.name}</a></h3> <b>{product.description}</b> <p>{product.price} ₽</p></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;