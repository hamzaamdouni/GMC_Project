import image1 from '../../../Assets/Visiteur/about.svg'
import image2 from '../../../Assets/Visiteur/contact_us.svg'
import image3 from '../../../Assets/Visiteur/inscrit.svg'

export const homeObjOne = {
    id : 'about', 
    lightBg : true,
    lightText : false,
    lightTextDesc : false,
    headLine : 'About',
    description : "Nous voulons que les gens trouvent le service parfait et prennent rendez-vous de la manière la plus simple. Le parcours de la personne doit être agréable, c'est pourquoi nous créons ce site internet : pour l'aider à trouver les meilleurs Agents possibles. N'importe quand n'importe où.",
    buttonLabel : 'Get Started',
    imgStart : false,
    img : image1,
    alt : 'About Image',
    dark : true,
    primary : true,
    darkText : true 
}

export const homeObjTwo = {
    id : 'contact', 
    lightBg : true,
    lightText : false,
    lightTextDesc : false,
    topLine : 'Hallo',
    headLine : 'Contact',
    description : 'When Webpack bundles your modules it follows the dependency chain of the module that you and pulls in all of its dependencies and also bundles them all the way down to the end of the chain. If theret know how to load in that dependency chain then this type of error will be thrown.',
    buttonLabel : 'Get Started',
    imgStart : true,
    img : image2,
    alt : 'About Image',
    dark : false,
    primary : false,
    darkText : true 
}

export const homeObjThree = {
    id : 'inscrit', 
    lightBg : false,
    lightText : true,
    lightTextDesc : true,
    topLine : 'Hallo',
    headLine : 'inscrit',
    description : 'When Webpack bundles your modules it follows the dependency chain of the module that you and pulls in all of its dependencies and also bundles them all the way down to the end of the chain. If theret know how to load in that dependency chain then this type of error will be thrown.',
    buttonLabel : 'Get Started',
    imgStart : false,
    img : image3,
    alt : 'About Image',
    dark : true,
    primary : true,
    darkText : false 
}