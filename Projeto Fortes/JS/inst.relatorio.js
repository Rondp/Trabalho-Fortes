function showProject(projectId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(projectId).classList.add('active');
}

document.addEventListener('DOMContentLoaded', function () {
    showProject('projeto1');

    const chartData = [
        {
            labels: ['18 Mai.', '19 Mai.', '20 Mai.', '21 Mai.', '22 Mai.', '23 Mai.', '24 Mai.'],
            data: [1000, 500, 750, 250, 2000, 500, 1500]
        },
        {
            labels: ['18 Mai.', '19 Mai.', '20 Mai.', '21 Mai.', '22 Mai.', '23 Mai.', '24 Mai.'],
            data: [1500, 700, 900, 300, 2500, 600, 1700]
        },
        {
            labels: ['18 Mai.', '19 Mai.', '20 Mai.', '21 Mai.', '22 Mai.', '23 Mai.', '24 Mai.'],
            data: [2000, 800, 950, 350, 3000, 700, 1900]
        },
        {
            labels: ['18 Mai.', '19 Mai.', '20 Mai.', '21 Mai.', '22 Mai.', '23 Mai.', '24 Mai.'],
            data: [2500, 900, 1000, 400, 3500, 800, 2100]
        },
        {
            labels: ['18 Mai.', '19 Mai.', '20 Mai.', '21 Mai.', '22 Mai.', '23 Mai.', '24 Mai.'],
            data: [3000, 1000, 1050, 450, 4000, 900, 2300]
        },
        {
            labels: ['18 Mai.', '19 Mai.', '20 Mai.', '21 Mai.', '22 Mai.', '23 Mai.', '24 Mai.'],
            data: [3500, 1100, 1100, 500, 4500, 1000, 2500]
        }
    ];

    chartData.forEach((project, index) => {
        const ctx = document.getElementById(`chart${index + 1}`).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: project.labels,
                datasets: [{
                    label: 'Quantidade Arrecadada',
                    data: project.data,
                    backgroundColor: 'rgba(0, 79, 159, 0.6)',
                    borderColor: 'rgba(0, 79, 159, 1)',
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
    });
});




