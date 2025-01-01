// data varible
const tr = document.querySelectorAll("#tr1");
const tablebody = document.getElementById("tableBody");

let totalcase;
let totalrecovered;
let totaldeaths;
let i = 0, j;
snumber = [];
states = [];
active = [];
confirmed = [];
deaths = [];
recovered = [];
lastUpd = [];

const apidata = {
    "totalcase" : 44996732,
    "totalrecovered" :44463331,
    "totaldeaths":531926,

    "statewise" : [
              {
                state : "Andaman and Nicobar Islands",
                active : "0",
                confirmed : "10766",
                deaths : "129",
                recovered : "10637",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Andhra Pradesh",
                active : "0",
                confirmed : "2340676",
                deaths : "14733",
                recovered : "2325943",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Arunachal Pradesh",
                active : "0",
                confirmed : "67049",
                deaths : "296",
                recovered : "66753",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Assam",
                active : "0",
                confirmed : "746150",
                deaths : "8035",
                recovered : "738115",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Bihar",
                active : "0",
                confirmed : "855266",
                deaths : "12314",
                recovered : "842948",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Chandigarh",
                active : "0",
                confirmed : "100693",
                deaths : "1185",
                recovered : "99508",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Chhattisgarh",
                active : "0",
                confirmed : "1187694",
                deaths : "14190",
                recovered : "1173504",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Dadra and Nagar Haveli and Daman and Diu",
                active : "0",
                confirmed : "11592",
                deaths : "4",
                recovered : "11588",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Delhi",
                active : "0",
                confirmed : "2040861",
                deaths : "26666",
                recovered : "2014186",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Goa",
                active : "0",
                confirmed : "263338",
                deaths : "4014",
                recovered : "259320",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Gujarat",
                active : "0",
                confirmed : "1291373",
                deaths : "11079",
                recovered : "1280291",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Haryana",
                active : "0",
                confirmed : "1078890",
                deaths : "10755",
                recovered : "1068112",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Himachal Pradesh",
                active : "0",
                confirmed : "322893",
                deaths : "4241",
                recovered : "318644",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Jammu and Kashmir",
                active : "0",
                confirmed : "482023",
                deaths : "4792",
                recovered : "477231",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Jharkhand",
                active : "0",
                confirmed : "443825",
                deaths : "5334",
                recovered : "438491",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Karnataka",
                active : "0",
                confirmed : "4088741",
                deaths : "40357",
                recovered : "4048369",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Kerala",
                active : "0",
                confirmed : "6907181",
                deaths : "71947",
                recovered : "6834229",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Ladakh",
                active : "0",
                confirmed : "29597",
                deaths : "231",
                recovered : "29362",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Lakshadweep",
                active : "0",
                confirmed : "11415",
                deaths : "52",
                recovered : "11363",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Madhya Pradesh",
                active : "0",
                confirmed : "1056351",
                deaths : "10786",
                recovered : "1045565",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Maharashtra",
                active : "0",
                confirmed : "8170491",
                deaths : "148557",
                recovered : "8021807",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Manipur",
                active : "0",
                confirmed : "140034",
                deaths : "2149",
                recovered : "137884",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Meghalaya",
                active : "0",
                confirmed : "96973",
                deaths : "1628",
                recovered : "95341",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Mizoram",
                active : "0",
                confirmed : "239559",
                deaths : "734",
                recovered : "238825",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Nagaland",
                active : "0",
                confirmed : "36032",
                deaths : "782",
                recovered : "33757",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Odisha",
                active : "0",
                confirmed : "1348395",
                deaths : "9215",
                recovered : "1339122",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Puducherry",
                active : "0",
                confirmed : "177545",
                deaths : "1981",
                recovered : "175564",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Punjab",
                active : "0",
                confirmed : "793638",
                deaths : "19338",
                recovered : "773071",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Rajasthan",
                active : "0",
                confirmed : "1326463",
                deaths : "9736",
                recovered : "1316726",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Sikkim",
                active : "0",
                confirmed : "44911",
                deaths : "500",
                recovered : "44408",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Tamil Nadu",
                active : "0",
                confirmed : "3610641",
                deaths : "38081",
                recovered : "3572554",
                lastupdatedtime : "01/01/25"
              },
              {
                state : "Uttar Pradesh",
                active : "0",
                confirmed : "2145416",
                deaths : "23709",
                recovered : "2121650",
                lastupdatedtime : "01/01/25"
              }

            ]
}


function apifetch() {

    const totalcase = "44996732";
    const totalrecovered = "44463331";
    const totaldeaths = "531926";

    // Adding Data To Array For Table
    apidata.statewise.forEach(element => {
        snumber.push(j);
        states.push(element.state);
        active.push(element.active);
        confirmed.push(element.confirmed);;
        deaths.push(element.deaths);
        recovered.push(element.recovered);

        lastUpd.push(element.lastupdatedtime);
        j++;
    });
    
    // Number Run Logic
    const numberRun = setInterval(numberMagic, 0.5);
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    function numberMagic() {
        count1++;
        count2++;
        count3++;
        document.getElementById("total-case").innerHTML = count1;
        document.getElementById("recovered-case").innerHTML = count2;
        document.getElementById("deaths-case").innerHTML = count3;

        if (count1 == 500) {
            clearInterval(numberRun);
            document.getElementById("total-case").innerHTML = totalcase;
            document.getElementById("recovered-case").innerHTML = totalrecovered;
            document.getElementById("deaths-case").innerHTML = totaldeaths;

        }
    }
    
    fetch("https://data.incovid19.org/v4/min/timeseries.min.json")
        // fetch("https://data.covid19india.org/data.json")
        .then((apidata) => {
            return apidata.json();
        }).then((apidata) => {

            // console.log(apidata);
            // // totalcase = apidata.statewise[0].active;
            // totalcase = "44996732";
            // totalrecovered = apidata.statewise[0].recovered;
            // totaldeaths = apidata.statewise[0].deaths;

            // console.log(totalcase);
            // // Number Run Logic
            // const numberRun = setInterval(numberMagic, 0.5);
            // let count1 = 0;
            // let count2 = 0;
            // let count3 = 0;
            // function numberMagic() {
            //     count1++;
            //     count2++;
            //     count3++;
            //     document.getElementById("total-case").innerHTML = count1;
            //     document.getElementById("recovered-case").innerHTML = count2;
            //     document.getElementById("deaths-case").innerHTML = count3;

            //     if (count1 == 500) {
            //         clearInterval(numberRun);
            //         document.getElementById("total-case").innerHTML = totalcase;
            //         document.getElementById("recovered-case").innerHTML = totalrecovered;
            //         document.getElementById("deaths-case").innerHTML = totaldeaths;

            //     }

            // }
            // End Here

            // Adding Data To Array For Table
            // apidata.statewise.forEach(element => {
            //     snumber.push(i);
            //     states.push(element.state);
            //     active.push(element.active);
            //     confirmed.push(element.confirmed);;
            //     deaths.push(element.deaths);
            //     recovered.push(element.recovered);

            //     lastUpd.push(element.lastupdatedtime);
            //     i++;
            // });
            // End Here



            // Show Table
            const showData = () => {
                // console.log("got it!");

                for (let j = 0; j < snumber.length; j++) {
                    const element = document.createElement("tr");
                    tablebody.appendChild(element);
                    // const Sno = document.createElement("td");
                    const statedata = document.createElement("td");
                    const activedata = document.createElement("td");
                    const confirmeddate = document.createElement("td");
                    const deathsdata = document.createElement("td");
                    const recovereddata = document.createElement("td");
                    const updatedata = document.createElement("td");

                    // Sno.innerHTML = snumber[j];
                    statedata.innerHTML = states[j];
                    activedata.innerHTML = active[j];
                    confirmeddate.innerHTML = confirmed[j];
                    deathsdata.innerHTML = deaths[j];
                    recovereddata.innerHTML = recovered[j];
                    updatedata.innerHTML = lastUpd[j];

                    // element.appendChild(Sno);
                    element.appendChild(statedata);
                    element.appendChild(activedata);
                    element.appendChild(confirmeddate);
                    element.appendChild(deathsdata);
                    element.appendChild(recovereddata);
                    element.appendChild(updatedata);

                }
            }
            showData();

            document.querySelector(".activeconfigdata").innerHTML = apidata.statewise[0].active;
            document.querySelector(".confirmconfigdata").innerHTML = apidata.statewise[0].confirmed;
            document.querySelector(".recoveredconfigdata").innerHTML = apidata.statewise[0].recovered;
            document.querySelector(".diedconfigdata").innerHTML = apidata.statewise[0].deaths;
            document.querySelector(".stateName").innerHTML = 'Total'
        })


    // End Here

}

apifetch();//Calling the function




// 
$(document).ready(function () {
    $(".total-case").counterUp({ delay: 10, time: 1000 });
    // console.log(states);
    var covidChart = document.getElementById("covid-chart").getContext('2d');

    var chart = new Chart(covidChart, {
        type: 'line',
        data: {
            labels: states,
            datasets: [
                {
                    data: confirmed,
                    label: "confirmed",
                    backgroundColor: "#074632",
                    borderColor: '#78464d',
                    // backgroundColor: Utils.CHART_COLORS.blue,
                    // borderColor: Utils.CHART_COLORS.blue,
                    minBarLength: 100
                },
                {
                    label: "recovered",
                    data: recovered,
                    backgroundColor: '#0c9723',
                    borderColor: '#a41a2d',
                    minBarLength: 100
                },
                {
                    label: "deaths",
                    data: deaths,
                    backgroundColor: '#e53511',
                    borderColor: '#941b4c',
                    minBarLength: 100
                }]
        },
        options: {
            responsive: true,
            layout: {
                padding: {
                    top: 30,
                }
            },
            animation:
            {
                duration: 2500,

            },

        }
    }
    )
});

// Dark Mode
const checkbox = document.getElementById('checkbox');
checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    // document.querySelectorAll("h1").classList.toggle('colorChange_Heading');
    // document.querySelector('.total_Case_Box').style.color = '#00aeef';
    // document.querySelector('.recovered_Case_Box').style.color = '#006600';
    // document.querySelector('.deaths_Case_Box').style.color = '#630000';
    document.querySelector('.heading h1').style.textShadow = '#ff0000 0 1px 0';

});
// End Here


// Map Data
const stateData = (statename) => {

    

    

    for (var i in apidata.statewise) {
        if (apidata.statewise[i].state == statename) {
            document.querySelector(".stateName").innerHTML = apidata.statewise[i].state;
            document.querySelector(".activeconfigdata").innerHTML = apidata.statewise[i].active;
            document.querySelector(".confirmconfigdata").innerHTML = apidata.statewise[i].confirmed;
            document.querySelector(".recoveredconfigdata").innerHTML = apidata.statewise[i].recovered;
            document.querySelector(".diedconfigdata").innerHTML = apidata.statewise[i].deaths;
        }
    }

    fetch('https://data.covid19india.org/data.json')
        .then((mapdata) => {
            return mapdata.json();
        }).then((mapdata) => {

            // const stateData = (statename) => {

            for (var i in apidata.statewise) {
                if (apidata.statewise[i].state == statename) {
                    document.querySelector(".stateName").innerHTML = apidata.statewise[i].state;
                    document.querySelector(".activeconfigdata").innerHTML = apidata.statewise[i].active;
                    document.querySelector(".confirmconfigdata").innerHTML = apidata.statewise[i].confirmed;
                    document.querySelector(".recoveredconfigdata").innerHTML = apidata.statewise[i].recovered;
                    document.querySelector(".diedconfigdata").innerHTML = apidata.statewise[i].deaths;
                }
            }
            // }

        });

}
// End Here4
let statename;
stateData(statename);
//Calling the function






