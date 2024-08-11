import Noyal from "../assets/img/Noyal.png";
import vannes from "../assets/img/vannes.png";
const Agency = () => {
  return (
    <div>
      <div className="flex justify-around pt-20 pb-20">
        <div className="card bg-base-100 w-96 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Agence de Kercado</h2>
            <p>17, rue Winston Churchill</p>

            <p>Mail : sarian.formations@wanadoo.fr</p>
            <p> Tél : 02.97.40.51.80</p>
          </div>
          <figure>
            <img src={Noyal} alt="Noyal" />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Agence de Noyal sur Vilaine</h2>
            <p>ZA NOYAL SUD sur site Perrenot-LeCalvez</p>

            <p>Tél: 02.97.40.51.80</p>
            <p>Mail: sarian.formations@wanadoo.fr</p>
          </div>
          <figure>
            <img src={vannes} alt="Disque" />
          </figure>
        </div>
        <div className="flex flex-col justify-center items-start max-w-md">
          <h1 className="text-2xl font-bold mb-2">Nos Agences</h1>
          <h2>
            Découvrez nos outils essentiels pour maîtriser le code et réussir
            votre permis poids lourd.
          </h2>
        </div>
      </div>
      <div className="w-full my-12 flex justify-center">
        <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default Agency;
