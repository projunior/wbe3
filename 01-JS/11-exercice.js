/* --
    CONSIGNE : A partir du tableau fourni, vous devez mettre en place un système d'authentification.
     Après avoir demandé à votre utilisateur son EMAIL et MOT DE PASSE, et après avoir vérifié ses informations,
      vous lui souhaiterez la bienvenue avec son nom et prénom (document.write);
            
    En cas d'échec, vous afficherez une ALERT pour l'informer de l'erreur.  
-- */

var BaseDeDonnees = [
    {'prenom':'Hugo','nom':'LIEGEARD','email':'wf3@hl-media.fr','mdp':'wf3'},
    {'prenom':'Rodrigue','nom':'NOUEL','email':'rodrigue@hl-media.fr','mdp':'wf3'},
    {'prenom':'Nathanael','nom':'DORDONNE','email':'nathanael.d@hl-media.fr','mdp':'wf3'}
];
        
// -- LesFlemards.js
function l(e) {
    console.log(e);
}

function w(f) {
    document.write(f);
}


let nom = prompt("<<veuillez saisir votre nom>>")
document.write("bonjour "+ nom);
let prenom = prompt("<<veuillez saisir votre prenom>>")
document.write(+ prenom);
let email = prompt("<<veuillez saisir votre courriel>>");
document.write( + email);
let password =prompt("<<veuillez saisir votre mdp>>");
document.write(+ password)
for (var i = 0; i < BaseDeDonnees.length; i++) {
    nom[i]   }