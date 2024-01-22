function animate(elem, start, end, maxDuration) { // je crée une fonction qui prend 4 parametres !
    elem = elem || document.querySelector(".numbers1"); // j'appelle ma div "numbers1"
  
    if (start < end) {    // Si la valeur "start" est plus petit que la valeur "end" 
      elem.innerText =  !elem.innerText ? start : start + 1; // Si l'élément est vide, il revient a la valeur de départ sinon, le texte est incrémenté de 1.
      return setTimeout( () => 
        animate( elem, start + 1, end, maxDuration ), 
          Math.floor( (Math.random() * maxDuration) ) );
    }
  }
  // appels de la fonction animate avec valeurs de départ, valeurs finales et durées maximales. 
  animate(document.querySelector(".numbers1"), 5, 12000, 1);
  animate(document.querySelector(".numbers2"), 5, 5000, 0);
  animate(document.querySelector(".numbers3"), 5, 7500, 3);