/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    codePostal: "",
    ville: "",
    adresse: "",
    email: "",
    message: "",
    permisPossession: {
      A: false,
      B: false,
      C1: false,
      C: false,
    },
    permisDemande: "",
    file: null,
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name.startsWith("permisPossession")) {
        setFormData({
          ...formData,
          permisPossession: {
            ...formData.permisPossession,
            [name.split(".")[1]]: checked,
          },
        });
      } else {
        setFormData({ ...formData, [name]: checked });
      }
    } else if (type === "file") {
      setFormData({ ...formData, file: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();

    for (const [key, value] of Object.entries(formData)) {
      if (
        typeof value === "object" &&
        value !== null &&
        key === "permisPossession"
      ) {
        for (const [subKey, subValue] of Object.entries(value)) {
          form.append(subKey, subValue);
        }
      } else {
        form.append(key, value);
      }
    }

    fetch("https://formsubmit.co/angelina@sarian-formations.com", {
      method: "POST",
      body: form,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        alert("Votre message a été envoyé avec succès!");
      })
      .catch(() => {
        alert("Une erreur est survenue lors de l'envoi de votre message.");
      });
  };

  return (
    <form
      id="contact"
      onSubmit={handleSubmit}
      className="p-8 shadow-2xl

 rounded-lg max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-bold mb-6 text-center">Contactez-nous !</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium">Nom*</label>
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Prénom*</label>
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Téléphone*</label>
          <input
            type="text"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Code postal*</label>
          <input
            type="text"
            name="codePostal"
            value={formData.codePostal}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Ville*</label>
          <input
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Adresse*</label>
          <input
            type="text"
            name="adresse"
            value={formData.adresse}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium">Message*</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          rows="4"
        ></textarea>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-medium mb-2">
          Vous souhaitez passer votre permis ? Remplissez les champs suivants :
        </h3>
        <div className="flex space-x-4">
          {["A", "B", "C1", "C"].map((permis) => (
            <label key={permis} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name={`permisPossession.${permis}`}
                checked={formData.permisPossession[permis]}
                onChange={handleChange}
                className="checkbox checkbox-primary"
              />
              <span>{`Permis ${permis}`}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium">Permis demandé</label>
        <select
          name="permisDemande"
          value={formData.permisDemande}
          onChange={handleChange}
          className="select select-bordered w-full"
          required
        >
          <option value="" disabled>
            Choisissez un permis
          </option>
          {["BE", "B96", "C1", "C1E", "C", "CE", "D"].map((permis) => (
            <option key={permis} value={permis}>
              {permis}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium">Pièce à joindre</label>
        <input
          type="file"
          name="file"
          onChange={handleChange}
          className="file-input file-input-bordered w-full"
        />
      </div>

      <div className="mt-6 flex items-center space-x-2">
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
          className="checkbox checkbox-primary"
          required
        />
        <span>
          En soumettant vos données via ce formulaire, vous confirmez avoir lu
          et compris la Politique de protection des données personnelles et la
          Politique de cookies et vous acceptez la collecte, l’utilisation et le
          traitement de vos informations personnelles.
        </span>
      </div>

      <button type="submit" className="btn btn-primary mt-6">
        Envoyer
      </button>
    </form>
  );
};

export default Contact;
