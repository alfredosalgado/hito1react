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

const App = () => {
  const token = false; // Cambiar a TRUE para ver Profile/Logout
  const total = 15000; // Simulación de total fijo

  return (
    <Router>
      <div className="container-fluid bg-danger text-white p-0">
        <Navbar token={token} total={total} />
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
  );
};

export default App;