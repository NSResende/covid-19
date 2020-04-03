(function () {
    var covidContainer = document.getElementById("covid-info");
    var btn = document.getElementById("btn");

    btn.addEventListener("click", function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.coronaanalytic.com/brazil');
        request.onload = function () {
            var data = JSON.parse(request.responseText);
           renderHtml(data);
        };
        request.send();
        
    });

    function totalSum(values) {
        return values.reduce(function(elacc, el) {
            console.log(elacc, el)
            return elacc + el.deaths;
        },0);
    }
    console.log(totalSum());

    function renderHtml(data) {
        var htmlResult = document.getElementById('covidInfo');
        var list = document.createElement('ul');
        console.log(totalSum(data.values));
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
                        <h2 class="Nrefuses">${el.refuses}</h2>
                        <p class="refuses">refuses</p>
                    </div>
                </div>
            </div>`;
            list.appendChild(item);
            item.classList.add('anotherclass');

        });
        htmlResult.appendChild(list);
    };
})();