
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopItem from './Pages/ShopCategory';
import Shop from './Pages/Shop'
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login_Singup from './Pages/Login_Singup';
import Footer from './Component/Footer/Footer';
import men_banner from './Component/Assets/banner_mens.png';
import woman_banner from './Component/Assets/banner_women.png';
import kid_banner from './Component/Assets/banner_kids.png';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>} />
       <Route path='/mens' element={<ShopItem banner={men_banner}  category="men"/>} />
       <Route path='/womens' element={<ShopItem banner={woman_banner} category="women"/>} />
       <Route path='/kids' element={<ShopItem banner={kid_banner} category="kid"/>} />

       <Route path='/Product' element={<Product />}>
     <Route path=":ProductId" element={<Product />} />
    </Route>

    <Route path='/cart' element={<Cart/>} />
    <Route path='/login' element={<Login_Singup />} />

      </Routes>
      <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
