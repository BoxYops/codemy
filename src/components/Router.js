
import Header from './Header';
import Footer from './Footer';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import ProductDetails from '../pages/ProductDetails';
import { BrowserRouter ,Routes, Route, Outlet } from 'react-router-dom';

export default function Router () {
    const Layout = () => {}
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
    const BrowserRoutes = () => {
        return (
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product/:id" element={<ProductDetails />} />
          </Route> 
        </Routes>
        </BrowserRouter>
        )
    }
    return (
        <BrowserRoutes />
    )
}
