import { useContext, useState } from 'react';
import CreateProduct from './components/CreateProduct';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/Product';
import { ModalContext } from './context/ModalContext';
import { useProducts } from './hooks/products.hook';
import { IProduct } from './models';

function App() {
  const { products, loading, error, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContext);

  const onCreate = (product: IProduct) => {
    close();
    addProduct(product);
  };

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {modal && (
        <Modal title="Create new product" onClose={close}>
          <CreateProduct onCreate={onCreate} />
        </Modal>
      )}

      <button
        className="fixed bottom-5 right-5  bg-green-700 text-white text-2xl px-5 py-2 rounded"
        onClick={open}
      >
        Add
      </button>
    </div>
  );
}

export default App;
