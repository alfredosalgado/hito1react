import Navbar from './components/Navbar';
/* import Home from './components/Home'; */
import Footer from './components/Footer';
/* import Registerpage from './components/Registerpage'; */
/* import Loginpage from './components/Loginpage'; */
import Cart from './components/Cart';

const App = () => {
  // Simulación de autenticación (token) y total del carrito (valor fijo según el hito)
  const token = true; // Cambiar a false para simular usuario NO autenticado
  const total = 15000; // Valor fijo del total de la compra

  return (
    <div className="container-fluid bg-danger text-white p-0">
      <Navbar token={token} total={total} />
      <main className="container my-4">
         {/*      <Home /> */}
        {/*  <Registerpage/> */}
         {/* <Loginpage/> */}
         <Cart/>
      </main>
      <Footer />
    </div>
  );
};

export default App;