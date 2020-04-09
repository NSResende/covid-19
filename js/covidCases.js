

(function () {
    var covidContainer = document.getElementById("covid-info");
    var btn = document.getElementById("btn");

    const request = new XMLHttpRequest();
    request.open('GET', 'https://api.coronaanalytic.com/brazil');
    request.onload = function () {
        const data = JSON.parse(request.responseText);
        var values = data.values;
        renderHtml(data);

        function TotalSuspects(val) {
            return values.reduce(function (elacc, el) {
                return elacc + el.suspects;
            }, 0);
        }
        function TotalDeaths(val) {
            return values.reduce(function (elacc, el) {
                return elacc + el.deaths;
            }, 0);
        }
        function TotalCases(val) {
            return values.reduce(function (elacc, el) {
                return elacc + el.cases;
            }, 0);
        }

        document.getElementById("content").innerHTML = `
            <div>
                <h2 class="TotalCases">${TotalCases(values)}</h2>
                <p class="Tcases">Cases</p>
            </div>
            <div>
                <h2 class="TotalDeaths">${TotalDeaths(values)}</h2>
                <p class="Tdeaths">Deaths</p>
            </div>
            <div>
                <h2 class="TotalSuspects">${TotalSuspects(values)}</h2>
                <p class="Tsuspects">Suspects</p>
            </div>`;

    };
    request.send();



    function renderHtml(data) {
        var htmlResult = document.getElementById('covidInfo');
        var list = document.createElement('ul');
        data.values.forEach((el) => {
            var item = document.createElement('li');
            item.innerHTML = `<div class="boxes">
                <h2 class="states">${el.state}</h2>
                <div class="indicadors">
                    <div>
                        <h2 class="Ndeaths">${el.deaths}</h2>
                        <p class="deaths">Deaths</p>
                    </div>
                    <div>
                        <h2 class="Ncases">${el.cases}</h2>
                        <p class="cases">Cases</p>
                    </div>
                    <div>
                        <h2 class="Nsuspects">${el.suspects}</h2>
                        <p class="suspects">Suspects</p>
                    </div>
                </div>
            </div>`;
            list.appendChild(item);
            item.classList.add('anotherclass');

        });
        htmlResult.appendChild(list);
    };
})();