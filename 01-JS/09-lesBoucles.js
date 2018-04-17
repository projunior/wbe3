/**
 * lesBoucles
 */
//--la boucle

/**
 * 
 */



for(let i= 0 ; i<=10 ; i++) {
    document.write('<p>Instruction executée : <strong>' + i +'</strong></p>');
  }

  document.write('<hr>');


  //-- la boucle while

  var j = 0;

  /**
   * tant que j'ai stictement inferieur ou égale à 10 ;alors j'execute mes instructions puis j'incremente j par pas de 1
   * 
   */
  while(j<= 10) {
  
  document.write('<p>Instruction executée : <strong>' + j +'</strong></p>');

  // -- attention l'incrementation
    j++;
  }



  /* -----------------------------
            EXERCICE
------------------------------ */

// -- Supposons le tableau suivant :
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];

/**
 * CONSIGNE : Grâce à une boucle FOR, affichez la liste des prénoms
 * du tableau ci-dessus dans la console, ou sur votre page.
 */
for(let  i= 0 ; i< 8 ; i++) {
    document.write('<p>prenoms : <strong>' + Prenoms +'</strong></p>');
  }

  document.write('<hr>');

  /**
   * correction
   */

console.log(Prenoms);
for(let  i= 0 ; i< 8 ; i++)
 {
    console.log(Prenoms[i]);
     }
/**
 *  /**
  * Pour découvrir toutes les autres possibilités
  * de boucle : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration
  *https://www.incredible-web.com/blog/performance-of-for-loops-with-javascript/
  */
console.log('------');
var j = 0;
while(j < Prenoms.length) {
    console.log(Prenoms[j]);
    j++;
}
console.log('for of---');


// boucle ForEach
Prenoms.forEach(affichePrenom);

function affichePrenom(valeur, i){
    console.log(i + '' + valeur);
}
console.log('for each---');

