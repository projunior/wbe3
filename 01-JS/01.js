//alert('wow Tu es toujours avec moi...')
// deux slash pour faire un commentaire uniligne.
/*
ici,je peux faire un commentaire 
sur plusieurs lignes.

RACCOUrCI:

CTRL + /
 ou :ALT + SHIFT + A

*/


// --1.Declarer une variable en JS
var Prenom;

// --2.Affecter une valeur
Prenom = "boss";

// --3. Afficher la valeur de ma variable dans la console
console.log(Prenom)

/*----------------------------------------------------------------
|les types variables 
*/
// --ici typeof me permet de connaitre le type de ma variable.
console.log(typeof Prenom);

// -- declaration d'un nombre
var Age = 40;

// --afficher dans la console
console.log(Age);

// --connaitre son type
console.log(typeof Age);

/*---------------------
|la portée des variables

Les variables déclarées directement à la racine du fichier JS,
sont appelées variables globales
Elles sont disponibles dans l'ensemble de votre document,y compris dans les fonctions

###

les variables déclarées à l'intérieur d'une fonction sont appelées variables LOCALES.

Elles sont disponibles uniquement dans le contexte de la fonction,ou du block qui les contient.

Depuis ECMA 6 ;vous pouvez déclarer une variable avec le mot-clé "LET".

votre variable sera alors accessible uniquement dans le bloc dans lequel,elle est contenue.
Si elle est déclaré dans une condition,elle sera disponible uniquement dans le bloc de la condition.*/

// --les variables FLOAT

var uneDecimale = -2.984;
console.log(uneDecimale);
console.log(typeof uneDecimale);

// -- Les Booléens (vrai ou faux)
var unBooleen = false; // ou true;
console.log(unBooleen);
console.log(typeof unBooleen);

// --Les constantes 
/**
 * La déclaration CONST permet de créer une constante accessible uniquement en lecture.Sa valeur ne pourra pas etre modifiée par des réaffectations ultérieures.Une constante ne peut pas etre déclarée à nouveau.
 * Généralement,par convention,les constantes sont en majuscules.
 * 
 * Depuis ECMA 6,on recommande l'utilisation des constantes plutot que var ou let s'il n'y aura pas de modification de valeur à votre variable.
 * 
 * 
 */

 const HOST = "localhost";
 const USER = "root";
 const PASSWORD = "mysql";
 // -- je ne peux pas faire cela..
 USER = "boss";
 // Uncaught TypeError:Assignment to constant variable.

 const USER = "boss";
 // Uncaught SyntaxError; Identifier 'user' has already been declared


 /*----------------
| la minute info

Au fur et à mesure que l'on affecte ou ré-affecte des valeurs à une variable,celle-ci prend la nouvelle valeur et le nouveaau type.
En javascript (ECMA Script);les variables sont auto-typées.
Pour convertir une variable de type NUMBER en STRING et STRING en NUMBER je peux utiliser les fonctions natives de javascript.
*/

var unNombre = "24";
console.log(unNombre);
console.log(typeof unNombre);

/**
 * la fonction parseInt() pour retourner un entier à partir de mon string.
 */
unNombre = parseInt(unNombre)
console.log(unNombre);
console.log(typeof unNombre);

// --je réaffecte une valeur à ma variable

unNombre = "12.55";
console.log(unNombre);
console.log(typeof unNombre);

unNombre = parseFloat(unNombre);
console.log(unNombre);
console.log(typeof unNombre);

// -- conversion d'un nombre en string avec tostring()

unNombre = 10;
var monNombreEnString = unNombre.toString();
console.log(unNombre);
console.log(monNombreEnString)
console.log(typeof monNombreEnString);

