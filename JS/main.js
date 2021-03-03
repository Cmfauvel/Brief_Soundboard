//const designBouton = "";
//export default designBouton;


// import d'un module CSS
import classes from '../css/style.css';

export default() {
 
  //console.log(classes.style);
};

//Pour que lorsque parcel se met à jour il ne garde pas les anciennes informations
//mais remplace l'ancienne valeur par la nouvelle
//j'inscris la méthode suivante
if (module.hot) {
    module.hot.accept(function () {
        window.location.reload()
    })
};





