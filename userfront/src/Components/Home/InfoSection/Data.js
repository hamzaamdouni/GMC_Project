import image1 from "../../../Assets/Visiteur/about.svg";
import image2 from "../../../Assets/Visiteur/contact_us.svg";
import image3 from "../../../Assets/Visiteur/inscrit.svg";

export const homeObjOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headLine: "À propos",
  description:
    "TakTak Service est  un site web Au service de votre vie quotidienne, vous avez besoinses de : Bricolage, Désinfection, Service de ménage à domicile , Aide à domicile .....N'hesitez pas à nous joindre",
  buttonLabel: "Commencer",
  imgStart: false,
  img: image1,
  alt: "About Image",
  dark: true,
  primary: true,
  darkText: true,
};

export const homeObjTwo = {
  id: "info",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headLine: "Nous sommes là pour vous aider",
  description:
    'En cas de besoin, consultez notre centre d"aide ou écrivez-nous via le formulaire de contact',
  buttonLabel: "Commencer",
  imgStart: true,
  img: image2,
  alt: "About Image",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "inscrit",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headLine: "inscrit",
  description:
    'Vous avez deux choix pour vous inscrire : En tant que simple client ayant besoin d"un service ou en tant que personne pouvant fournir un service',
  buttonLabel: "Commencer",
  imgStart: false,
  img: image3,
  alt: "About Image",
  dark: true,
  primary: true,
  darkText: false,
};
