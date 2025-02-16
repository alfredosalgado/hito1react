import Header from './Header';
import CardPizza from './CardPizza';
import pizzas from '../data/pizzas';

const Home = () => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
