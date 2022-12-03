import React, { useEffect, useState } from 'react';
import Product from './components/Product';
import { useProducts } from './hooks/products.hook';
import { IProduct } from './models';

function App() {
  const {products, loading, error} = useProducts()
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-700">Error</p>}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
