/*------------------
LES FONCTIONS
 * 
 */
function Bonjour(){
    alert('Bonjour!');
}

/**
 * je vais executer ma fonction "bonjour"
 * et declencher ses instructions.
 * 
 * 
 * 
 * declarer une fonction qui prend des variables en parametre
 * @param {string} Prenom
 * @param {string} Nom
 * 
 * 
 */


Bonjour();
function ditBonjour(Prenom, Nom) {
   document.write("<p>Bonjour <strong>" + Prenom + " " + Nom + "</strong>!</p>");
}


/**appeler/executer une fonction avec des parametres.*/

ditBonjour("hugo","liegard");
/* ---------------------
  EXERCICE :
  Créez une fonction permettant d'effectuer l'addition de deux nombres passés en paramètre.
---------------------- */

function addition (nb1,nb2){

return nb1 + nb2;

    alert('addition!');
}
document.write("<p>" + addition(10, 5) +"</p>")

/**
 * je vais executer ma fonction "bonjour"
 * et declencher ses instructions.
 * 
 * 
 * 
 * declarer une fonction qui prend des variables en parametre
 * @param {string} nb1
 * @param {string} nb2
 * 
 * 
 */


addition();
function addition(nb1, Nb2) {
   document.write("<p>addition <strong>" + nb1 + " " + Nb2 + "</strong>!</p>");
}


/**appeler/executer une fonction avec des parametres.*/

addition("10","5");
