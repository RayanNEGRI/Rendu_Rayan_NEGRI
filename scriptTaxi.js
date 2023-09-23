"use strict"; //signifie on va travailler avec java strict pour avoir aucune erreur

// Rendu Code Rayan NEGRI /  LE TAXI EX 1

//Infos pour John
let personnage = "John";
let santeMentalePersonnage = 10; //10

//Infos musique dans la radio
let musique = ["Anissa-Wejdene","Vamos a la playa-Loona","Si j'savais-Tiakola","Dernière Danse-Indila","DÁKITI-BAD BUNNY x JHAY CORTEZ"];

//infos pour le Trajet
let feuxRouges = 30; // 30
let nbChangementTaxi = 0;


//fonction
function nbTaxi() {
  nbChangementTaxi++; 
  
const radio = musique[Math.floor(Math.random() * musique.length)];

  // boucle du trajet qui teste si la radio diffuse la musique de wejdene ou pas
  if (radio == "Anissa-Wejdene") {
    santeMentalePersonnage -= 1;
    nbChangementTaxi += 1; 
  } else{
    feuxRouges -= 1; 
  } 

  console.log("la musique sur le trajet est " + radio + "le nombre de feux rouges restant est " + feuxRouges);
} //fin de la fonction

//tant que la santeMentale ou le feuxrouge n'est pas égal à 0 alors on re utilise la fonction , donc si l'un des deux égal à 0 on stop
while (santeMentalePersonnage != 0 && feuxRouges != 0) {
    const trajet = nbTaxi();
  }

//affichage de FIN !!!!   
if (santeMentalePersonnage == 0 && feuxRouges > 0) {
    console.log(personnage+ " EXPLOSE !!!!!!!!");
} else if (santeMentalePersonnage > 0 && feuxRouges == 0){
    console.log(personnage+" est rentrer chez lui en "+nbChangementTaxi +" changement de taxi");
}







// AUTRES TENTATIVES AVANT DE TROUVER LE BON CODE


/*
//Infos pour John
let personnage = "John";
let santeMentalePersonnage = 10; //10

//Infos musique dans la radio
let musique = ["Anissa-Wejdene","Vamos a la playa-Loona","Si j'savais-Tiakola","Dernière Danse-Indila","DÁKITI-BAD BUNNY x JHAY CORTEZ"];
const radio = musique[Math.floor(Math.random() * musique.length)];
//Trajet
let feuxRouges = 30; // 30
let nbChangementTaxi = 0;


//corps du code

while(feuxRouges == 0 || santeMentalePersonnage == 0){   
    switch(radio){          
        case "Anissa-Wejdene":         
            santeMentalePersonnage --;
            nbChangementTaxi ++;
            console.log("la musique sur le trajet est " +radio + "le nombre de feux rouges restant est " + feuxRouges);
                break;   
        case "Vamos a la playa-Loona":         
            feuxRouges --;
            console.log("la musique sur le trajet est " +radio + "le nombre de feux rouges restant est " + feuxRouges);
                break;  
        case "Si j'savais-Tiakola":         
            feuxRouges --;
            console.log("la musique sur le trajet est " +radio + "le nombre de feux rouges restant est " + feuxRouges);
                break;   
        case "Dernière Danse-Indila":         
            feuxRouges --;
            console.log("la musique sur le trajet est " +radio + "le nombre de feux rouges restant est " + feuxRouges);
                break;   
        case "DÁKITI-BAD BUNNY x JHAY CORTEZ":         
            feuxRouges --;
            console.log("la musique sur le trajet est " +radio + "le nombre de feux rouges restant est " + feuxRouges);
                break;
    }
}


//affichage de FIN !!!!
if(santeMentalePersonnage == 0 && feuxRouges > 0){
    console.log(personnage+" EXPLOSE !!!!!!!!");
    }
    

if(santeMentalePersonnage > 0 && feuxRouges == 0){
    console.log(personnage+" est rentrer chez lui en "+nbChangementTaxi +"changement de taxi");
    }
    */