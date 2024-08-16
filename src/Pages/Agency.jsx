import Noyal from "../assets/img/Noyal.png";
import bgImage from "../assets/img/sarian.jpg";
import vannes from "../assets/img/vannes.png";
import "../global.css";

const Agency = () => {
  return (
    <div
      className="flex justify-around pt-20 pb-40 "
      id="agences"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover" }}
    >
      <div className="card bg-white w-96 shadow-2xl rounded-lg overflow-hidden">
        <figure>
          <img src={Noyal} alt="Noyal" className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">
            Agence de Kercado
          </h2>
          <p className="text-gray-600">17, rue Winston Churchill</p>
          <p className="text-gray-600">Mail : sarian.formations@wanadoo.fr</p>
          <p className="text-gray-600">Tél : 02.97.40.51.80</p>
        </div>
      </div>
      <div className="card bg-white w-96 shadow-2xl rounded-lg overflow-hidden">
        <figure>
          <a
            href="https://www.google.com/maps/place/Chris+Conduite+-+SARIAN+FORMATIONS/@47.6475477,-2.7706703,218m/data=!3m1!1e3!4m10!1m2!2m1!1s17,+rue+Winston+Churchill+kercado!3m6!1s0x48101c1edb741da7:0x1f3ee52acd675f45!8m2!3d47.6475551!4d-2.7700691!15sCiExNywgcnVlIFdpbnN0b24gQ2h1cmNoaWxsIGtlcmNhZG-SAQ90cmFpbmluZ19jZW50ZXLgAQA!16s%2Fg%2F1tffj51m?entry=ttu"
            target="_blank"
          >
            <img
              src={vannes}
              alt="Vannes"
              className="w-full h-48 object-cover"
            />
          </a>
        </figure>
        <div className="card-body p-6">
          <h2 className="card-title text-2xl font-bold text-gray-800 mb-4">
            Agence de Noyal sur Vilaine
          </h2>
          <p className="text-gray-600">
            ZA NOYAL SUD sur site Perrenot-LeCalvez
          </p>
          <p className="text-gray-600">Tél: 02.97.40.51.80</p>
          <p className="text-gray-600">Mail: sarian.formations@wanadoo.fr</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start max-w-md bg-transparent">
        <h1 className="text-3xl font-semibold mb-4 text-white bg-sky-300/50	 p-2 rounded">
          Nos Agences
        </h1>
        <h2 className="text-xl text-white bg-sky-300/50	 p-2 rounded">
          Jetez un coup doeil à nos agences pour venir nous rendre visite.
        </h2>
      </div>
    </div>
  );
};

export default Agency;
