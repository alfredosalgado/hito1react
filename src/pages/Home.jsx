import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useState, useEffect } from "react";
/* import { pizzas } from '../data/pizzas'; */

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
      }
    };

    fetchPizzas();
  }, []);
  return (
    <div>
      <Header />
      <div className="row justify-content-center g-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc} // Se pasa la descripción como prop
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
