/* ---------------------
incrémentation et decrementation
*/
//###incrementation ####//

var nb1 = 1;
nb1 = nb1 +1;
nb1 +=1;
/**ecriture simplifiée* */
nb1++;//toujours par pas de 1

//#### decrementation####//
var nb1 = 1;
nb1 = nb1 -1;
nb1 -=1;
/**ecriture simplifiée* */
nb1--;//toujours par pas de 1

//subtilité//

nb1 = 0;
console.log(nb1++);
console.log(nb1);

nb1 = 0;
console.log(++nb1);
