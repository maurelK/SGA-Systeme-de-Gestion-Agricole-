// scripts.js

// Initialisation des compteurs de clics
let clickCounts = {
    riz: 10,
    manioc: 10,
    mais: 10,
    tomate: 10,
    haricot: 10
};

// Fonction pour enregistrer les clics et rediriger l'utilisateur
function handleClick(product, url) {
    recordClick(product);
    window.location.href = url;
}

// Fonction pour enregistrer les clics
function recordClick(product) {
    clickCounts[product]++;
    updateChart();
}

// Configuration et initialisation du graphique
let ctx = document.getElementById('clickChart').getContext('2d');
let clickChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Riz', 'Manioc', 'Maïs', 'Tomate', 'Haricot'],
        datasets: [{
            label: 'Nombre de clics',
            data: [
                clickCounts.riz,
                clickCounts.manioc,
                clickCounts.mais,
                clickCounts.tomate,
                clickCounts.haricot
            ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Fonction pour mettre à jour le graphique
function updateChart() {
    clickChart.data.datasets[0].data = [
        clickCounts.riz,
        clickCounts.manioc,
        clickCounts.mais,
        clickCounts.tomate,
        clickCounts.haricot
    ];
    clickChart.update();
}
