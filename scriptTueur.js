"use strict";

// Rendu Code Rayan NEGRI /  LE Tueur EX 2


//Rayan,Jon,Aule,Klaus,Naruto,Gon,Luffy,Harry,Thor,Toretto      / Listes des prénoms

let listeNom = ["Rayan","Jon","Aule","Klaus","Naruto","Gon","Luffy","Harry","Thor","Toretto"];
let caracteristiques = ["nerd","sportif","blond","brun"];

class Personnage {
    
    constructor(nom,caracteristiques, pointsDeVie, attaqueReussi, attaqueContrer, nombreDegat) {
      this.nom = nom;
      this.caracteristiques = caracteristiques;
      this.pointsDeVie = pointsDeVie; 
      this.attaqueReussi = attaqueReussi; 
      this.attaqueContrer = attaqueContrer; 
      this.nombreDegat = nombreDegat; 
    }




 // Les méthode attaquer et encaisserDegats de la classe Personnage
 
    attaquer(cible) {

    if (Math.random() < this.attaqueReussi) {
      console.log(`${this.nom} attaque ${cible.nom} et inflige ${this.nombreDegat} points de dégâts.`);
      cible.pointsDeVie -= this.nombreDegat;
    } else {
      console.log(`${this.nom} rate son attaque contre ${cible.nom}.`);
        if (Math.random() < cible.attaqueContrer) {
            console.log(`${cible.nom} contre-attaque et inflige ${15} points de dégâts.`);
            this.pointsDeVie -= 15;
        } else { 
            console.log(`${cible.nom} esquive et inflige ${10} points de dégâts.`);
            this.pointsDeVie -= 10;
        }


    }
  }

 


}

    
//Pour les Noms
const nomListe1 = listeNom[Math.floor(Math.random() * listeNom.length)];
const nomListe2 = listeNom[Math.floor(Math.random() * listeNom.length)];
const nomListe3 = listeNom[Math.floor(Math.random() * listeNom.length)];
const nomListe4 = listeNom[Math.floor(Math.random() * listeNom.length)];
const nomListe5 = listeNom[Math.floor(Math.random() * listeNom.length)];

//Pour les Caractéristiques
const nomcaracteristiques1 = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
const nomcaracteristiques2 = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
const nomcaracteristiques3 = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
const nomcaracteristiques4 = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
const nomcaracteristiques5 = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
const nomcaracteristiques6 = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
    
//Les 5 survivants et le tueur
let tueur = new Personnage("Jason", nomcaracteristiques1, 100, 0.7, 0.3, 20);
let survivant1 = new Personnage(nomListe1, nomcaracteristiques2, 100, 0.7, 0.3, 10);
let survivant2 = new Personnage(nomListe2, nomcaracteristiques3, 100, 0.7, 0.3, 10);
let survivant3 = new Personnage(nomListe3, nomcaracteristiques4, 100, 0.7, 0.3, 10);
let survivant4 = new Personnage(nomListe4, nomcaracteristiques5, 100, 0.7, 0.3, 10);
let survivant5 = new Personnage(nomListe5, nomcaracteristiques6, 100, 0.7, 0.3, 10);
  

console.log(survivant1);
console.log(survivant2);
console.log(survivant3);
console.log(survivant4);
console.log(survivant5);
console.log(tueur);


// Partie des Tours Combats

// Survivant 1
let tour = 1;
while (tueur.pointsDeVie > 0 && survivant1.pointsDeVie > 0) {
  console.log(`Tour ${tour}:`);

  console.log("Combat en cours entre " + tueur.nom + " et  " + survivant1.nom);

  tueur.attaquer(survivant1);
  

  if (survivant1.pointsDeVie <= 0) {
    console.log(`${tueur.nom} a vaincu l'un des survivants qui est !`+ survivant1.nom);
    break; 
  }

  survivant1.attaquer(tueur);

  if (tueur.pointsDeVie <= 0) {
    console.log(`${survivant1.nom} a vaincu le Tueur !`);
    break; 
  }

  
  console.log(`${tueur.nom} : ${tueur.pointsDeVie} points de vie restants`);
  console.log(`${survivant1.nom} : ${survivant1.pointsDeVie} points de vie restants`);
  tour++;
}

// Survivant 2
while (tueur.pointsDeVie > 0 && survivant2.pointsDeVie > 0) {
    console.log(`Tour ${tour}:`);

    console.log("Combat en cours entre " + tueur.nom + " et  " + survivant2.nom);
  
    tueur.attaquer(survivant2);
    
  
    if (survivant2.pointsDeVie <= 0) {
      console.log(`${tueur.nom} a vaincu l'un des survivants qui est !`+ survivant2.nom);
      break; 
    }
  
    survivant2.attaquer(tueur);
  
    if (tueur.pointsDeVie <= 0) {
      console.log(`${survivant2.nom} a vaincu le Tueur !`);
      break; 
    }
  
    
    console.log(`${tueur.nom} : ${tueur.pointsDeVie} points de vie restants`);
    console.log(`${survivant2.nom} : ${survivant2.pointsDeVie} points de vie restants`);
    tour++;
  }

// Survivant 3
while (tueur.pointsDeVie > 0 && survivant3.pointsDeVie > 0) {
    console.log(`Tour ${tour}:`);
  
    console.log("Combat en cours entre " + tueur.nom + " et  " + survivant3.nom);

    tueur.attaquer(survivant3);
    
  
    if (survivant3.pointsDeVie <= 0) {
      console.log(`${tueur.nom} a vaincu l'un des survivants qui est !`+ survivant3.nom);
      break; 
    }
  
    survivant3.attaquer(tueur);
  
    if (tueur.pointsDeVie <= 0) {
      console.log(`${survivant3.nom} a vaincu le Tueur !`);
      break; 
    }
  
    
    console.log(`${tueur.nom} : ${tueur.pointsDeVie} points de vie restants`);
    console.log(`${survivant3.nom} : ${survivant3.pointsDeVie} points de vie restants`);
    tour++;
  }

// Survivant 4
while (tueur.pointsDeVie > 0 && survivant4.pointsDeVie > 0) {
    console.log(`Tour ${tour}:`);
  
    console.log("Combat en cours entre " + tueur.nom + " et  " + survivant4.nom);

    tueur.attaquer(survivant4);
  
    if (survivant4.pointsDeVie <= 0) {
      console.log(`${tueur.nom} a vaincu l'un des survivants qui est !`+ survivant4.nom);
      break; 
    }
  
    survivant4.attaquer(tueur);
  
    if (tueur.pointsDeVie <= 0) {
      console.log(`${survivant4.nom} a vaincu le Tueur !`);
      break; 
    }
  
    
    console.log(`${tueur.nom} : ${tueur.pointsDeVie} points de vie restants`);
    console.log(`${survivant4.nom} : ${survivant4.pointsDeVie} points de vie restants`);
    tour++;
  }

// Survivant 5
while (tueur.pointsDeVie > 0 && survivant5.pointsDeVie > 0) {
    console.log(`Tour ${tour}:`);
  
    console.log("Combat en cours entre " + tueur.nom + " et  " + survivant5.nom);

    tueur.attaquer(survivant5);

    if (survivant5.pointsDeVie <= 0) {
      console.log(`${tueur.nom} a vaincu le dernier survivant !`+ survivant5.nom);
      break; 
    }
  
    survivant5.attaquer(tueur);
  
    if (tueur.pointsDeVie <= 0) {
      console.log(`${survivant5.nom} a vaincu le Tueur !`);
      break; 
    }
  
    
    console.log(`${tueur.nom} : ${tueur.pointsDeVie} points de vie restants`);
    console.log(`${survivant5.nom} : ${survivant5.pointsDeVie} points de vie restants`);
    tour++;
  }


// Affiche un message indiquant le résultat du combat
if (tueur.pointsDeVie <= 0) {
  console.log("Le tueur " + tueur.nom + " a été vaincu par les survivants donc les survivants gagne !!! gg");
} else if (survivant1.pointsDeVie <= 0 && survivant2.pointsDeVie <= 0 && survivant3.pointsDeVie <= 0 && survivant4.pointsDeVie <= 0 && survivant5.pointsDeVie <= 0 ) {
  console.log("Les survivants ont été vaincu par le tueur " + tueur.nom + "Le Tueur gagne !!!  gg 1vs5 EZ ");
} 

