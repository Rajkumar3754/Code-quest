import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './components/Product';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Carts from './components/Carts';
import Rootlayout from './components/Rootlayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Rootlayout />}>
      <Route index element={<Dashboard />} />
      <Route path='cart' element={<Carts />} />
      <Route path='products' element={<Product />} />
    </Route>
  ));
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
