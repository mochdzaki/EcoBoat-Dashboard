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

    new Chart(document.getElementById("Chart-8"), {
        type: "doughnut",
        data: {
            labels: ["Bad", "Good", "Better", "Perfect"],
            datasets: [{
                label: '72',
                data: [250, 250, 250, 250],
                backgroundColor: ['rgba(248, 0, 0, 0.7)', 'rgba(248, 139, 0, 0.7)', 'rgba(248, 232, 0, 0.7)', 'rgba(81, 229, 0, 0.7)'],
                borderColor: "rgba(225, 225, 255, 1)",
                borderWidth: 1,
                borderRadius: 5
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
                    text: '72',
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

    new Chart(document.getElementById("Chart-9"), {
        type: "line",
        data: {
            labels: ["Areas 1", "Areas 2", "Areas 3", "Areas 4", "Areas 5"],
            datasets: [{
                    fill: false,
                    tension: 0.3,
                    borderColor: "rgba(17, 104, 255, 1)",
                    data: [12, 10, 19, 21, 23],
                    pointRadius: 0
                },
                {
                    fill: false,
                    tension: 0.3,
                    borderColor: "rgba(147, 187, 255, 1)",
                    data: [8, 15, 23, 18, 20],
                    pointRadius: 0
                },
                {
                    fill: false,
                    tension: 0.3,
                    borderColor: "rgba(190, 214, 255, 1)",
                    data: [4, 12, 15, 10, 12],
                    pointRadius: 0
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
                    max: 25,
                    grid: {
                        display: true
                    },
                }
            }
        }
    });

    // const map = L.map('map').setView([-6.34185, 106.839582], 18);

    // // Base map
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   attribution: '© OpenStreetMap contributors'
    // }).addTo(map);

    // // Marker
    // L.marker([-6.34185, 106.839582]).addTo(map);

    // // Very small polygon (square around marker)
    // const polygon = L.polygon([
    //   [-6.34170, 106.83940],
    //   [-6.34170, 106.83980],
    //   [-6.34200, 106.83980],
    //   [-6.34200, 106.83940]
    // ], {
    //   color: "blue",
    //   fillColor: "cyan",
    //   fillOpacity: 0.5
    // }).addTo(map);

    // // Short line across marker
    // const polyline = L.polyline([
    //   [-6.34160, 106.83930],
    //   [-6.34185, 106.83958],
    //   [-6.34210, 106.83990]
    // ], {
    //   color: "red",
    //   weight: 4
    // }).addTo(map);

    const map = new maplibregl.Map({
        container: 'map',
        style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=BKVYJlYdA4K9hvOoNHGN',
        center: [106.839582, -6.34185], // [lng, lat]
        zoom: 14
    });

    // Add marker
    new maplibregl.Marker({
            color: 'red',
        }).setLngLat([106.840027, -6.342613])
        .addTo(map);

    new maplibregl.Marker({
            color: 'orange',
        }).setLngLat([106.837587, -6.341536])
        .addTo(map);

    map.on('load', () => {

        // Polyline
        map.addSource('line', {
            type: 'geojson',
            data: {
                type: 'Feature',
                geometry: {
                    type: 'LineString',
                    coordinates: [
                        [106.835413, -6.343964],
                        [106.836773, -6.342103],
                        [106.838199, -6.341284],
                        [106.839871, -6.342613],
                        [106.840807, -6.342369],
                        [106.841008, -6.341616],
                        [106.840674, -6.340951],
                        [106.839916, -6.340838],
                        [106.839328, -6.340643],
                        [106.839406, -6.339864],
                        [106.840389, -6.338585],
                        [106.840283, -6.337176],
                        [106.840404, -6.336025],
                        [106.840027, -6.335307],
                        [106.839739, -6.334964],
                        [106.840094, -6.332227],
                        [106.843200, -6.331889],

                    ]
                }
            }
        });
        map.addLayer({
            id: 'line-layer',
            type: 'line',
            source: 'line',
            paint: {
                'line-color': 'blue',
                'line-width': 6
            }
        });
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