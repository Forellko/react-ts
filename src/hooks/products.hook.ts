import { useState, useEffect } from 'react';
import { IProduct } from '../models';
import axios, { AxiosError } from 'axios';

export function useProducts() {

  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const addProduct = (product: IProduct) => {
    setProducts(prev => [product, ...prev])
  }

  async function fetchProducts() {
    try {
      setError('');
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        'https://fakestoreapi.com/products?limit=5'
      );
      setProducts(response.data);
      setLoading(false);
    } catch (error: unknown) {
      const err = error as AxiosError;
      setLoading(false);
      setError(err.message);
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return {products,  loading ,error, addProduct}
}