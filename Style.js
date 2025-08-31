window.onload = function() {
    var ctx = document.getElementById('Chart-1').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Blue', 'Orange'],
            datasets: [{
                data: [80, 25],
                borderradius: 200,
                backgroundColor: ['#36A2EB', '#FFCE56'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Fair',
                fontSize: 20
            },
            cutoutPercentage: 70,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI
        }
    });

    console.log(myChart);
};

const xValues = ["1week", "2week", "3week", "4week", "5week"];

new Chart("Chart-2", {
    type: "line",
    data: {
        labels: xValues,
        datasets: [{
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(0,0,255,0.7)",
            borderColor: "rgba(0,0,255,0.5)",
            data: [86, 90, 92, 40, 78]
        }, 
        {
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(255,0,0,0.7)",
            borderColor: "rgba(255,0,0,0.5)",
            data: [30, 90, 44, 60, 83]
        },
        {
            fill: false,
            lineTension: 0.3,
            backgroundColor: "rgba(0,255,0,0.7)",
            borderColor: "rgba(0,255,0,0.5)",
            data: [60, 65, 20, 70, 80]
        }]
    },  options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 0, max:100}}],
        },
    }
});

const xValues2 = [50,60,70,80,90,100];

new Chart("Chart-3", {
    type: "line",
    data: {
        labels: xValues2,
        datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(255,0,0,1.0)",
            borderColor: "rgba(255,0,0,0.1)",
            data: [7,8,8,9,9,9],
            borderWidth: 3
        }]
    },  options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 6, max:16}}],
        },
    }
});