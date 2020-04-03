(function () {
    var covidContainer = document.getElementById("covid-info");

    var btn = document.getElementById("btn");
    btn.addEventListener("click", function () {
        console.log('hey some stuffs happening') 
        var request = new XMLHttpRequest();
        request.open('GET', 'https://api.coronaanalytic.com/brazil');
        request.onload = function () {
            var data = request.responseText;
            console.log(data);

            request.getAllResponseHeaders([10]);
            request.send()
        };    
    });

    function renderHtml(data) {
        var htmlString = "test";
        for (i = 0; i < data.length; i++) {
            htmlString += "<p>" + data[i].state + "tem" + data[i].cases + ".</p>"
        }
        covidContainer.insertAdjacentHTML('beforeend', htmlString);
    };
})();