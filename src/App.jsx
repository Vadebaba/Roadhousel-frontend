import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './pages/Home';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Product from "./pages/Product";
import Footer from "./components/Footer";

/*import images */
import bannermens from './assets/bannermens.png'
import bannerwomens from './assets/bannerwomens.png'
import bannerkids from './assets/bannerkids.png'
import Advert from "./components/Advert";


export default function App() {
  return (
    <main className="bg-primary text-tertiary">
      <BrowserRouter>
        <Header />
        <Advert/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Category category='men' banner={bannermens} />} />
          <Route path="/women" element={<Category category='women' banner={bannerwomens} />} />
          <Route path="/kiddies" element={<Category category='kid' banner={bannerkids} />} />

          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart-page" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </BrowserRouter>


    </main>
  )
}