

(function () {
    var covidContainer = document.getElementById("covid-info");
    var att = [];
    var values = att.values;

    fetch('https://covid19-brazil-api.now.sh/api/report/v1')
        .then(function (response) {
            if (!response) throw new Error("error");
            return response.json();
        }).then(function (data) {
            handleRequest(data.data)
        });

    function handleRequest(data) {
        att = data
        renderCityData(att);
        renderHeaderElements();
    };

    function TotalSuspects(val) {
        return att.reduce(function (elacc, el) {
            return elacc + el.suspects;
        }, 0);
    }
    function TotalDeaths(val) {
        return att.reduce(function (elacc, el) {
            return elacc + el.deaths;
        }, 0);
    }
    function TotalCases(val) {
        return att.reduce(function (elacc, el) {
            return elacc + el.cases;
        }, 0);
    }

    function renderHeaderElements() {
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
            </div>`
    };

    function renderCityData(att) {
        var htmlResult = document.getElementById('covidInfo');
        var list = document.createElement('ul');
        att.forEach((el) => {
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
