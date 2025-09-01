window.onload = function () {
    var ctx = document.getElementById('Chart-1').getContext('2d');

    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Blue', 'Orange'],
            datasets: [{
                data: [80, 25],
                borderradius: 200,
                backgroundColor: ['#6ca2ff', '#c8ced7'],
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
                // pointradius: 1,
                backgroundColor: "rgba(17, 104, 255, 1)",
                borderColor: "rgba(17, 104, 255, 1)",
                data: [86, 90, 92, 40, 78]
            },
            {
                fill: false,
                lineTension: 0.3,
                backgroundColor: "rgba(147, 187, 255, 1)",
                borderColor: "rgba(147, 187, 255, 1)",
                data: [30, 90, 44, 60, 83]
            },
            {
                fill: false,
                lineTension: 0.3,
                backgroundColor: "rgba(190, 214, 255, 1)",
                borderColor: "rgba(190, 214, 255, 1)",
                data: [60, 65, 20, 70, 80]
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        backgroundColor: "rgba(0, 0, 0, 0)",
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 100
                }
            }],
            // x: { // useless?
            //     grid: {
            //         display: false
            //     }
            // },
            // y: {
            //     grid: {
            //         display: false
            //     }
            // }
        },
    }
});

const xValues2 = [2015, 2016, 2017, 2018, 2019, 2020];

new Chart("Chart-3", {
    type: "line",
    data: {
        labels: xValues2,
        datasets: [{
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(24, 222, 231, 0.6)",
            borderColor: "rgba(24, 222, 231, 1)",
            data: [8, 8.3, 8, 9, 9, 9],
            borderWidth: 3
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 6,
                    max: 10
                }
            }],
        },
    }
});

new Chart("Chart-4", {
    type: "line",
    data: {
        labels: ["2m", "4m", "8m", "12m", "24m", "48m"],
        datasets: [{
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(255, 97, 70, 0.7)",
            data: [2, 4, 5, 7, 8, 7,]
        },
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(255, 187, 91, 0.7)",
            data: [5, 5, 7, 8, 10, 8,]
        },
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(211, 255, 91, 0.7)",
            data: [7, 8, 10, 12, 11, 9,]
        },
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(91, 255, 142, 0.7)",
            data: [10, 9, 12, 15, 15, 14,]
        },
        {
            fill: true,
            lineTension: 0,
            backgroundColor: "rgba(57, 222, 255, 0.7)",
            data: [15, 14, 18, 18, 18, 17,]
        }
        ]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 30
                }
            }],
        },
    }
});

xValues3 = [0, 5, 10, 15, 20, 25];

new Chart("Chart-5", {
    type: "line",
    data: {
        labels: xValues3,
        datasets: [{
            label: 'Volt Pass',
            backgroundColor: "rgba(108, 162, 255, 0.7)",
            data: [20, 25, 30, 22, 17, 20, 27, 30, 25, 20, 18, 15]
        },
        {
            label: 'DO',
            backgroundColor: "rgba(200, 206, 215, 0.7)",
            data: [15, 18, 20, 15, 10, 12, 15, 18, 20, 22, 25, 30]
        }
        ]
    },
    options: {
        legend: {
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                    max: 40
                }
            }],
        },
    }
});