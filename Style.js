window.onload = function () {
    new Chart(document.getElementById("Chart-1"), {
        type: 'doughnut',
        data: {
            labels: ['Blue', 'Orange'],
            datasets: [{
                label: 'Good',
                data: [80, 20],
                borderRadius: 20,
                backgroundColor: ['rgba(107, 209, 255, 1)', 'rgba(200, 206, 215, 0.7)'],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%',
            rotation: -90, // ensures top half
            circumference: 180, // draw 180° more (bottom half)
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Fair',
                    font: {
                        size: 20
                    }
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
        }
    });


    const xValues = ["1week", "2week", "3week", "4week", "5week"];

    new Chart(document.getElementById("Chart-2"), {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                    fill: false,
                    tension: 0.3,
                    borderColor: "rgba(17, 104, 255, 1)",
                    data: [86, 90, 92, 40, 78]
                },
                {
                    fill: false,
                    tension: 0.3,
                    borderColor: "rgba(147, 187, 255, 1)",
                    data: [30, 90, 44, 60, 83]
                },
                {
                    fill: false,
                    tension: 0.3,
                    borderColor: "rgba(190, 214, 255, 1)",
                    data: [60, 65, 20, 70, 80]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    min: 0,
                    max: 100,
                    grid: {
                        display: true
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });

    const xValues2 = [2015, 2016, 2017, 2018, 2019, 2020];

    new Chart(document.getElementById("Chart-3"), {
        type: "line",
        data: {
            labels: xValues2,
            datasets: [{
                fill: true,
                tension: 0,
                backgroundColor: "rgba(24, 222, 231, 0.6)",
                borderColor: "rgba(24, 222, 231, 1)",
                data: [8, 8.3, 8, 9, 9, 9],
                borderWidth: 3
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    min: 6,
                    max: 10,
                    grid: {
                        display: true
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });

    new Chart(document.getElementById("Chart-4"), {
        type: "line",
        data: {
            labels: ["2m", "4m", "8m", "12m", "24m", "48m"],
            datasets: [{
                    fill: true,
                    tension: 0,
                    backgroundColor: "rgba(255, 97, 70, 0.7)",
                    borderColor: "rgba(255, 97, 70, 1)",
                    borderWidth: 1,
                    data: [2, 4, 5, 7, 8, 7]
                },
                {
                    fill: true,
                    tension: 0,
                    backgroundColor: "rgba(255, 187, 91, 0.7)",
                    borderColor: "rgba(255, 187, 91, 1)",
                    borderWidth: 1,
                    data: [5, 5, 7, 8, 10, 8]
                },
                {
                    fill: true,
                    tension: 0,
                    backgroundColor: "rgba(211, 255, 91, 0.7)",
                    borderColor: "rgba(255, 225, 91, 1)",
                    borderWidth: 1,
                    data: [7, 8, 10, 12, 11, 9]
                },
                {
                    fill: true,
                    tension: 0,
                    backgroundColor: "rgba(91, 255, 142, 0.7)",
                    borderColor: "rgba(91, 225, 142, 1)",
                    borderWidth: 1,
                    data: [10, 9, 12, 15, 15, 14]
                },
                {
                    fill: true,
                    tension: 0,
                    backgroundColor: "rgba(57, 222, 255, 0.7)",
                    borderColor: "rgba(57, 225, 225, 1)",
                    borderWidth: 1,
                    data: [15, 14, 18, 18, 18, 17]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    min: 0,
                    max: 30,
                    grid: {
                        display: true
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });

    const xValues3 = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

    new Chart(document.getElementById("Chart-5"), {
        type: "line",
        data: {
            labels: xValues3,
            datasets: [{
                    fill: true,
                    label: 'Volt Pass',
                    backgroundColor: "rgba(108, 162, 255, 0.7)",
                    borderColor: "rgba(108, 162, 255, 1)",
                    data: [20, 25, 30, 22, 17, 20, 27, 30, 25, 20, 18, 15]
                },
                {
                    fill: true,
                    label: 'DO',
                    backgroundColor: "rgba(127, 244, 255, 0.7)",
                    borderColor: "rgba(127, 244, 255, 1)",
                    data: [25, 30, 35, 30, 27, 25, 30, 35, 30, 28, 25, 22]
                }
            ]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    min: 0,
                    max: 80,
                    grid: {
                        display: true
                    },
                    ticks: {
                        display: false
                    }
                }
            }
        }
    });

    const Chart6 = new Chart(document.getElementById("Chart-6"), {
        type: "bar",
        data: {
            labels: ['Progress'],
            datasets: [{
                label: 'Completion',
                data: [75],
                backgroundColor: "rgba(108, 162, 255, 0.7)",
                borderColor: "rgba(255, 255, 255, 1)",
                borderWidth: 3,
                borderRadius: 30,
                borderSkipped: false,
            }, {
                label: 'full',
                data: [100],
                backgroundColor: "rgba(200, 206, 215, 0.7)",
                borderColor: "rgba(255, 255, 255, 1)",
                borderWidth: 3,
                borderRadius: 30,
                borderSkipped: false,
            }]
        },
        options: {
            plugins: {
                title: {
                    display: true,
                    text: '75%',
                    font: {
                        size: 20
                    },
                    position: 'right',
                    align: 'center',

                },
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
            scales: {
                x: {
                    display: false,
                    min: 0,
                    max: 100

                },
                y: {
                    display: false,
                    min: 0,
                    max: 100,
                    stacked: true,
                }
            },
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y'
        }
    });

    // Update Chart6 data and refresh
    Chart6.data.datasets[0].data[0] = 85;
    Chart6.update();

    new Chart(document.getElementById("Chart-7"), {
        type: "line",
        data: {
            labels: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
            datasets: [{
                label: 'pH',
                tension: 0.4,
                data: [7, 7, 7, 7.6, 8, 9, 5, 6.5, 6, 7, 7.2, 7],
                backgroundColor: "rgba(108, 162, 255, 0.7)",
                borderColor: "rgba(108, 162, 255, 1)",
                borderSkipped: false,
            }, {
                label: 'DO',
                tension: 0.4,
                data: [5, 6, 7, 6.5, 6, 5.5, 4, 3.5, 4, 5, 5.5, 6],
                backgroundColor: "rgba(200, 206, 215, 0.7)",
                borderColor: "rgba(200, 206, 215, 1)",
                borderSkipped: false,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    font: {
                        size: 20
                    },
                    position: 'right',
                    align: 'center',

                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                },
                y: {
                    min: 0,
                    max: 10,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                }
            }
        }
    });
};

const dashboardPage = document.getElementById('Dash-page');
const dashboardNav = document.getElementById('nav-Dash');
const AiAnalyticsPage = document.getElementById('AI-Analy-page');
const AiAnalyticsNav = document.getElementById('nav-AI');

function showPage(page) {
    if (page === "dashboard") {
      dashboardPage.classList.remove("hidden");
      AiAnalyticsPage.classList.add("hidden");
      dashboardNav.classList.add("active");
      AiAnalyticsNav.classList.remove("active");
    } else if (page === "analytics") {
      dashboardPage.classList.add("hidden");
      AiAnalyticsPage.classList.remove("hidden");
      dashboardNav.classList.remove("active");
      AiAnalyticsNav.classList.add("active");
    }
}

dashboardNav.addEventListener("click", () => showPage("dashboard"));
AiAnalyticsNav.addEventListener("click", () => showPage("analytics"));

showPage("dashboard");
