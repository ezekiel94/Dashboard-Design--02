const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});


closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});





const chr = document.querySelector(".activity-chart");
const chr2 = document.querySelector(".second-activity-chart");

new Chart(chr, {
    type: "line",
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: "Earnings",
            data: [50, 80, 65, 12, 90, 11, 15, 70, 10, 10, 14, 90],
            borderColor: '#0891b2',
            tension: 0.2
        },
        {
            label: "Earnings",
            data: [65, 59, 80, 81, 56, 55, 40, 79, 87, 65, 37, 67],
            borderColor: '#ca8a04',
            tension: 0.2
            
        }

    ] 
    },
    options: {
        responsive: true,
        maintainAspectRation: true,
        scales: {
            x:{
                grid:{
                    display: false,
                }
            },
            y:{
                ticks: {
                    display: false,
                },
                // grid: {
                //     display: false, // Remove the dash-break line here
                //     drawOnChartArea: false // Prevent drawing on the chart area
                // },
                border: {
                    display: false,
                    dash: [5, 5],
                }
            }
        },
        plugins: [
            'backgroundFill' 
          ],
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                        }
                        return label;
                    }
                }
            },
            legend: {
                display: false
            },
            title: {
                display: true,
                text: '$36,567.08',
                padding: {
                    bottom: 20,
                },
                position: "top",
                align: 'start',
                font: {
                    size: 18,
                    weight: 'bold',
                    family: 'Arial, sans-serif' 
                }
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad'
        }
    }
});

new Chart(chr2, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Aug'],
        datasets: [{
          label: "Earnings",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
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



  




  


  