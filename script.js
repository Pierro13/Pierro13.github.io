// Fonction pour lire la valeur depuis le fichier JSON
function lireValeurDepuisJson() {
  fetch('compteur.json') // Ajustez le chemin si nécessaire
    .then(response => response.json())
    .then(data => {
      nombreClics = data.compteur[0].valeur;
      afficherNombreClics();
    })
    .catch(error => console.error('Erreur lors de la lecture du fichier JSON:', error));
}

// Initialisation
var nombreClics = 0;
lireValeurDepuisJson();

function comptage() {
  nombreClics++;
  localStorage.setItem('nombreClics', nombreClics);
  //update value in json
  fetch('compteur.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ compteur: [{ valeur: nombreClics }] }),
  })
    .then(() => console.log('Valeur mise à jour dans le fichier JSON'))
    .catch(error => console.error('Erreur lors de la mise à jour de la valeur dans le fichier JSON:', error));
  afficherNombreClics();
}

function afficherNombreClics() {
  document.getElementById("nombreClics").textContent = nombreClics;
}

document.getElementById("boutonClic").addEventListener("click", comptage);
