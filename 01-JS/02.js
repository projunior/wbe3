// declarer un tableau indexé.

var monTableau = [];
var myArray = new Array;

monTableau[0] = "Rahma";
monTableau[1] = "freddy";
monTableau[2] = "ousmane";

// -- affiche toutes les données 
console.log(monTableau);

// -- affiche freddy 
console.log(monTableau[1]);

var NosPrenoms =["salim","greg","cheffia","glenn","julien"];
console.log(NosPrenoms);
// -- declarer et affecter des valeurs à un objet.
// PAS DE TABLEAU ASSOCIATIF EN JAVASCRIPT

var Coordonnée = {
    prenom : "hugo",
    nom : "liegard",
    age : "82"
};
console.clear();
console.log(Coordonnée);
console.log(['prenom']);
console.log(Coordonnée.nom);
console.log(Coordonnée.prenom);

// -- je vais créer 2 tableaux indexés
var listeDePrenoms =["ousmane","cheffia","hugo"];
var listeDeNoms =["mama","benallal","Liegeard"];
var annuaire = [ listeDePrenoms, listeDeNoms];
console.log(annuaire);
document.write( annuaire [0][1] );
document.write( '' );
document.write( annuaire [1][1] );

/**
 * 
 * exercice
 * 
 * creez un tableau à 2 dimensions appelé "annuaireDesStagiaires" qui contiendra toutes les coordonnées pour chaque stagiaire.
 * 
 * Ex.Nom, Prénom, Tel
 */  
var annuaireDesStagiaires = [ {}]


// -- Exemple 3D

var Contacts = [

    {
        prenom      :   "Hugo",
        nom         :   "LIEGEARD",
        coordonnees :   {
            email   :   "wf3@hl-media.fr",
            tel     :   {
                fixe    :   "0596 108 328",
                fax     :   "0596 108 632",
                port    :   {
                    prive   :   "07 83 97 10 15",
                    pro     :   "07 83 97 15 15"
                }
            },
            adresse :  {
                ville   :   "Ducos",
                cp      :   "97224",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Rodrigue",
        nom         :   "NOUEL",
        coordonnees :   {
            email   :   "rodrigue.nouel@hl-media.fr",
            tel     :   {
                fixe    :   "0596 56 78 89",
                fax     :   "0596 32 15 22",
                port    :   {
                    prive   :   "0696 78 89 56",
                    pro     :   "0696 89 23 45"
                }
            },
            adresse :  {
                ville   :   "Fort-de-France",
                cp      :   "97200",
                region  :   "Martinique",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    },

    {
        prenom      :   "Gregory",
        nom         :   "D'HAEM",
        coordonnees :   {
            email   :   "greg.dhaem@hl-media.fr",
            tel     :   {
                fixe    :   "0675 89 78 45",
                fax     :   "",
                port    :   {
                    prive   :   "0620 86 78 45",
                    pro     :   ""
                }
            },
            adresse :  {
                ville   :   "les Mesnuls",
                cp      :   "78490",
                region  :   "Ile de France",
                pays    :   {
                    code    :   "FR",
                    nom     :   "France"
                }
            }
            
        }
    }

];

console.log(Contacts);
console.log(Contacts[0].coordonnees.email);
console.log(Contacts[1].coordonnees.email);
console.log(Contacts[2].coordonnees.email);

// console.log(Contacts[0].coordonnees.adresse.pays.nom);


/*----------
AJOUTER UN ELEMENT
------------*/



var Couleurs = ['rouge','Jaune', 'vert'];

/**
 * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift
 * si je souhaite ajouter un élément dans mon tableau.Je fais appel à la fonction push()
 * qui me renvoie le nombre d'éléments.
 * 
 * 
 */

 console.clear();
 console.log(Couleurs);
 var nbElementsDeMonTableau = Couleurs.push('orange')

 console.log(Couleurs);
 console.log(nbElementsDeMonTableau);

 /**
  * https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/unshift
  * NB :la fonction unshift() permet d'ajouter un ou plusieurs éléments au début de mon tableau et d'en récuperer la valeur.
  * je peux accesoirement récuperer cette valeur dans une variable
  * 
  */
 /**
  * la fonction pop()me permet de supprimer un ou plusieurs éléments de mon tableau et d'en récuperer la valeur.je peux accesoirement récuperer cette valeur dans une variable.
  */
var monDernierElement = Couleurs.pop();
console.log(Couleurs);
console.log(monDernierElement);

/**
 * la meme chose est possible avec le remier élément
 * en utilisant la fonction shift.
 * ---
 * NB:la fonction splice()vous permet de sortir un ou plusieurs éléments de votre tableau.
 * 
 */
