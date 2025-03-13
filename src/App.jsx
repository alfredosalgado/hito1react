import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Registerpage from "./pages/Registerpage";
import Loginpage from "./pages/Loginpage";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CartProvider from "./context/CartContext";

const App = () => {
  const token = false; // Cambiar a TRUE para ver Profile/Logout

  return (
    <CartProvider>
      <Router>
        <div className="container-fluid bg-danger text-white p-0">
          <Navbar token={token} /> {/* Total se manejará desde el contexto */}
          <main className="container my-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Registerpage />} />
              <Route path="/login" element={<Loginpage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<NotFound />} /> {/* Página 404 */}
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;