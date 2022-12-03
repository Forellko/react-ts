import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import AboutPage from './Pages/AboutPage';
import ProductPage from './Pages/ProductPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
