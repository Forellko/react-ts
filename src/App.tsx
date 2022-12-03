import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/Product';
import { useProducts } from './hooks/products.hook';

function App() {
  const { products, loading, error } = useProducts();
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <Modal />
    </div>
  );
}

export default App;
