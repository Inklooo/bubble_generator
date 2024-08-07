// creation de la bulle en JS qui sera un span
const bubble = document.createElement(`span`);

// nous indiquons au body qu'il a un enfant qui est bubble
document.body.appendChild(bubble);

//ajout de la classe bubble du css au span
bubble.classList.add(`bubble`);

// donnons une taille à la bulle mais ALEATOIRE avec la methode Math.  random qui va générer un nombre aléatoire
// nous allons creer une variable pour la taille de la bulle
// Maintenant on veut un chiffre entre 100 et 300
// si math random selectionne 0 on aura : 200*0=0 => 0+100 = 100
// si math random selectionne 1 on aura : 200*1=200 => 200+100 = 300
const size = Math.random() *200 + 100 + "px";

// nous allons ajouter du style à la bulle avec les tailles aléatoires en hauteur ET en largeur
bubble.style.height = size
bubble.style.width = size
