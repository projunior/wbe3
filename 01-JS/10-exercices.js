/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****
II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

//tableau nom
var table = new Array();


var noms = new Array("Pierre vincent", "Paul cool", "Jacques brel","hugo liegard","boss dev");


var eleves = [{
    noms: "vincent",
    prenoms:"pierre",
    francais : "12",
    math : "19",
    physique: "4",
},

{
    noms: "cool",
    prenoms:"paul",
    francais : "14",
    histoire : "19",
    physique: "14", },

{
    noms: "brel",
    prenoms:"jacques",
    francais : "2",
    eps : "9",
    physique: "14",
}
,
{
    noms: "liegeard",
    prenoms:"hugo",
    francais : "4",
    histoire : "19",
    eps: "20"
},
{
    noms: "boss",
    prenoms:"dev",
    francais : "15",
    math : "18",
    physique: "14",
}
]
console.log(eleves);

for(let  i= 0 ; i< eleves.length ; i++) {
    document.write('<p>eleves : <strong>' + eleves +'</strong></p>');
  }


  document.write('<hr>');

//tableau moyenne générale

var PremierTrimestre =[
{
  prenom :"hugo",
  nom    :"liegeard",
  moyenne :  {

  }
}
];

/**
 * correction
 * 
*/
var PremierTrimestre = [
    {

        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais    : 4,
            math        : 7,
            physique    : 4,
            gestinfq    : 18,
            musique     : 19
        }
    },
    {
        prenom  : "Salim",
        nom     : "SOUMARE",
        moyenne : {
            francais    : 4,
            math        : 12,
            physique    : 10,
            anglais     : 15
        }
    },
    {
        prenom  : "Rachma",
        nom     : "SALIM",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 16,
            espagnol    : 16,
            philo       : 14,
        }
    },
    {
        prenom  : "Ousmane",
        nom     : "MAMA",
        moyenne : {
            francais    : 8,
            math        : 13,
            anglais     : 16,
            espagnol    : 16,
            philo       : 6,
        }
    },
    {
        prenom  : "Cheffia",
        nom     : "BENALLAL",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 13,
            allemand    : 12,
            latin       : 10
        }
    },
];
{


    // -- Les Flemards.js
    
    function l(e) {
        console.log(e);
    }
    
    function w(e) {
        document.write(e);
    }

w('<ol>')
for(let i =0 ; i <PremierTrimestre.length ; i++)
 {
 let Etudiant = PremierTrimestre[i];
 w('<li>' + Etudiant.prenom + '' +Etudiant.nom + '</li>');



}



/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.
    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créer au minimum 5 étudiants ****

 II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

var PremierTrimestre = [
    {
        prenom  : "Hugo",
        nom     : "LIEGEARD",
        moyenne : {
            francais    : 4,
            math        : 7,
            physique    : 4,
            gestinfq    : 18,
            musique     : 19
        }
    },
    {
        prenom  : "Salim",
        nom     : "SOUMARE",
        moyenne : {
            francais    : 4,
            math        : 12,
            physique    : 10,
            anglais     : 15
        }
    },
    {
        prenom  : "Rachma",
        nom     : "SALIM",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 16,
            espagnol    : 16,
            philo       : 14,
        }
    },
    {
        prenom  : "Ousmane",
        nom     : "MAMA",
        moyenne : {
            francais    : 8,
            math        : 13,
            anglais     : 16,
            espagnol    : 16,
            philo       : 6,
        }
    },
    {
        prenom  : "Cheffia",
        nom     : "BENALLAL",
        moyenne : {
            francais    : 12,
            math        : 11,
            anglais     : 13,
            allemand    : 12,
            latin       : 10
        }
    },
];

console.log(PremierTrimestre);

// -- Les Flemards.js

function l(e) {
    console.log(e);
}

function w(e) {
    document.write(e);
 }












