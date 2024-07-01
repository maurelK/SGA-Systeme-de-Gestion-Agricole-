document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');
  
  // Fonction pour charger les statistiques
  function loadStats() {
    fetch('/stats')
      .then(response => response.json())
      .then(data => {
        const statsContent = document.getElementById('stats-content');
        statsContent.innerHTML = ''; // Vider le contenu avant de charger de nouvelles données
        for (const [key, value] of Object.entries(data)) {
          const statDiv = document.createElement('div');
          statDiv.innerHTML = `<h3>${key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                               <p>Nombre de requêtes: ${value.requetes}</p>`;
          statsContent.appendChild(statDiv);
        }
      })
      .catch(error => console.error('Error fetching statistics:', error));
  }

  // Charger les statistiques à l'initialisation
  loadStats();
});
