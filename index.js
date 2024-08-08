// une fois que la logique fonctionne pour la bulle nous pouvons créer une fonction pour cela
const bubbleMaker = () =>{

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

  // nous allons donner une hauteur et largeur aléatoire sur l'apparition de la bulle,
  bubble.style.top = Math.random() *100 + 50 + "%";
  bubble.style.left = Math.random() *100 + "%";

  //nous allons diriger la bulle aléatoirement grace a la variable que nous abons créé dans le css
  // nous allons creer une variable pour rendre aleatoire la direction des bulle pour pas que tout aille trop a droite

  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", Math.random() *100 + "%");

};

//la fonction bubbleMaker sera jouer en interval de 3 secondes
setInterval(bubbleMaker, 3000) ;
