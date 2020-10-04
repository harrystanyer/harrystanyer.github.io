var ctx = document.getElementById("myChart");

var data = [135850, 52122, 148825, 16939, 97663, 34534, 34534, 77634, 34534, 86565, 75632, 56345];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: months,
        datasets: [
            {
                label: "Graph",
                data: data,
                borderColor: "#eeeeee",
                backgroundColor: [
                    "#ff4763",
                    "#39ffb6",
                    "#4f5987",
                    "#f1b3d1",
                    "#f8cd46",
                    "#eeeeee",
                    "#ff4763",
                    "#39ffb6",
                    "#4f5987",
                    "#f1b3d1",
                    "#f8cd46",
                    "#eeeeee"
                ]
            }
        ]
    },
    options: {
        legend: {
            labels: {
                fontColor: "#39ffb6",
                fontSize: 32
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#39ffb6"
                },
                gridLines: {
                    display: false
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#39ffb6"
                },
                gridLines: {
                    display: false
                }
            }]
        }
    }
});