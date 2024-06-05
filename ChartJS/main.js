document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('graphique').getContext('2d');
    var graphique = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Rouge', 'Bleu', 'Jaune', 'Vert', 'Violet', 'Orange'],
            datasets: [{
                label: ' Nombre aléatoire',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 0, 0, 0.2)',
                    'rgba(0, 0, 255, 0.2)',
                    'rgba(255, 255, 0, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(127, 0, 255, 0.2)',
                    'rgba(255, 128, 0, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(0, 0, 255, 1)',
                    'rgba(255, 255, 0, 1)',
                    'rgba(0, 255, 0, 1)',
                    'rgba(127, 0, 255, 1)',
                    'rgba(255, 128, 0, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: {
                duration: 2000,
                easing: 'easeInOutQuart'
            }
        }
    });
});