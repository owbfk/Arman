import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../types';
import NavBar from '../../components/NavBar/NavBar';

const ProductPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`)
      .then(response => {
        console.log(response.data)
        setProduct(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  return(
    <>
      <NavBar></NavBar>
      {loading ? (
        <p>Loading...</p>
      ) : (
          product && (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <b>{product.description}</b>
              <p>{product.price} ₽</p>
            </div>
          )
        )}
    </>
  )
}

export default ProductPage;