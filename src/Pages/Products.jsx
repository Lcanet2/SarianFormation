import disque from "../assets/img/disque.jpg";
import livre from "../assets/img/livre.png";
const Products = () => {
  return (
    <div>
      <div className="flex justify-around pt-20 pb-20">
        <div className="flex flex-col justify-center items-start max-w-md">
          <h1 className="text-2xl font-bold mb-2">Nos Produits</h1>
          <h2>
            Découvrez nos outils essentiels pour maîtriser le code et réussir
            votre permis poids lourd.
          </h2>
        </div>
        <div className="card bg-base-100 w-96 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Mon premier code de la route</h2>
            <p>
              Une petite voiture rouge apprend aux enfants la sécurité routière
              à travers des panneaux de signalisation.
            </p>
          </div>
          <figure>
            <img src={livre} alt="Livre" />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Disque de stationnement Zone Bleue</h2>
            <p>
              Dimensions 15 x 15 cm Conforme à la nouvelle réglementation
              (décret 2007-1503 / arrêté du 06/12/2007) Article livré sous
              sachet transparent.
            </p>
          </div>
          <figure>
            <img src={disque} alt="Disque" />
          </figure>
        </div>
      </div>
      <div className="w-full my-12 flex justify-center">
        <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default Products;
