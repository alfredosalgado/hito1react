import { useState } from 'react';
import { pizzaCart } from '../data/pizzas';

const Cart = () => {
  // Asegurar que cada pizza tenga la propiedad count definida al iniciar
  const [cart, setCart] = useState(pizzaCart.map(pizza => ({ ...pizza, count: pizza.count || 1 })));

  const increaseQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(prevCart => 
      prevCart
        .map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
        .filter(item => item.count > 0) // Filtra los elementos con count > 0 para eliminarlos
    );
  };

  const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

  return (
    <div className="container bg-light p-4 rounded">
      <h2 className="text-dark">🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p className="text-dark">El carrito está vacío</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="d-flex align-items-center justify-content-between border-bottom py-2">
              <img src={item.img} alt={item.name} width="80" />
              <h5 className="m-0 text-dark">{item.name}</h5>
              <p className="m-0 text-dark">${item.price.toLocaleString("es-CL")}</p>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-secondary btn-sm" onClick={() => decreaseQuantity(item.id)}>-</button>
                <span className="fw-bold text-dark">{item.count}</span>
                <button className="btn btn-primary btn-sm" onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </div>
          ))}
          <h4 className="text-dark mt-3">Total: ${total.toLocaleString("es-CL")}</h4>
          <button className="btn btn-success w-100 mt-3">Pagar</button>
        </>
      )}
    </div>
  );
};

export default Cart;