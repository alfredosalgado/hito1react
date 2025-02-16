const CardPizza = ({ name, price, ingredients, img, desc }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card shadow-lg">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body text-center bg-warning">
          <h5 className="card-title fw-bold text-dark">{name}</h5>
          <p className="card-text text-secondary">Precio: ${price.toLocaleString("es-CL")}</p>
          <p className="card-text text-muted">{desc}</p> {/* Descripción agregada */}
          <ul className="list-unstyled">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="text-muted">• {ingredient}</li>
            ))}
          </ul>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-dark">Ver más</button>
            <button className="btn btn-danger">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;