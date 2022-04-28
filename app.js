 (function () {
     // Choisir entre X et O

     let choix = prompt("Choisissez entre X et O"); //C'est le joueur qui choisit en premier
     let choixBot;

     //les variables et les constantes

   // Récupération des cases à clicker
     const items = document.getElementsByClassName('grid-item');
     
    if (choix === "X") { // Si le joueur choisit X
        choixBot = "O"; // Le bot choisit automatiquement O
         
        for(let i = 0; i < items.length; i++) {
            let item = items[i];
            item.addEventListener('click', function () {
                item.textContent = "X";
        
         })
         } 
     } else if (choix === "O") { // Si le joueur choisit O
        choixBot = "X" // Le bot choisit automatiquement X
      for(let i = 0; i < items.length; i++) {
             let item = items[i];
            item.addEventListener('click', function () {
                item.textContent = "O";
            })
        }  
   } 

   

    

    // Vide le contenu de toute les cases
    
    reset.addEventListener('click', function () {
        for (let i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ' ';
        }
    });

   
 })();
 /*
 Algorith  D'abord le joueur choisit entre X e Après avoir choisit une fois, c'est au tour du CPU de choisir dans la prochaine par (il faut donc créer un compteur )

 */