document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);

  var url = 'https://api.currentsapi.services/v1/search?' +
              'keywords=' + value + '&language=en&' +
              'apiKey=MFUn5D3s5sBrf8ac3Ln3sEArmpfzN47qgXU47fyZyXh2MiRU';
      var req = new Request(url);
      fetch(req)
          .then(function(response) {
              return response.json();
          }).then(function(json) {
            console.log(json);
            let results = "";

            for(let i = 0; i < 15; i++){
              results += "<h2>" + json.news[i].title + "</h2>";
              results += "<p>" + json.news[i].description + "</p>";
              if(json.news[i].image != "None"){
                //console.log(json.news[0].image);
                results += "<img src = " + json.news[i].image + ">";
              }
              results += "<br><br>";
            }


            document.getElementById("weatherResults").innerHTML = results;
          }).catch(() => {
            console.error('Do that');
          })

});

document.getElementById("potatoSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  console.log(value);

  var url = 'https://api.currentsapi.services/v1/search?' +
              'keywords=Potato&language=en&' +
              'apiKey=MFUn5D3s5sBrf8ac3Ln3sEArmpfzN47qgXU47fyZyXh2MiRU';
      var req = new Request(url);
      fetch(req)
          .then(function(response) {
              return response.json();
          }).then(function(json) {
            console.log(json);
            let results = "";

            for(let i = 0; i < 15; i++){
              results += "<h2>" + json.news[i].title + "</h2>";
              results += "<p>" + json.news[i].description + "</p>";
              if(json.news[i].image != "None"){
                //console.log(json.news[0].image);
                results += "<img src = " + json.news[i].image + ">";
              }
              results += "<br><br>";
            }


            document.getElementById("weatherResults").innerHTML = results;
          }).catch(() => {
            console.error('Do that');
          })

});

document.getElementById("amazonSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  console.log(value);

  var url = 'https://api.currentsapi.services/v1/search?' +
              'keywords=Amazon&language=en&' +
              'apiKey=MFUn5D3s5sBrf8ac3Ln3sEArmpfzN47qgXU47fyZyXh2MiRU';
      var req = new Request(url);
      fetch(req)
          .then(function(response) {
              return response.json();
          }).then(function(json) {
            console.log(json);
            let results = "";

            for(let i = 0; i < 15; i++){
              results += "<h2>" + json.news[i].title + "</h2>";
              results += "<p>" + json.news[i].description + "</p>";
              if(json.news[i].image != "None"){
                //console.log(json.news[0].image);
                results += "<img src = " + json.news[i].image + ">";
              }
              results += "<br><br>";
            }


            document.getElementById("weatherResults").innerHTML = results;
          }).catch(() => {
            console.error('Do that');
          })

});

document.getElementById("stockSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  console.log(value);

  var url = 'https://api.currentsapi.services/v1/search?' +
              'keywords=Stocks&language=en&' +
              'apiKey=MFUn5D3s5sBrf8ac3Ln3sEArmpfzN47qgXU47fyZyXh2MiRU';
      var req = new Request(url);
      fetch(req)
          .then(function(response) {
              return response.json();
          }).then(function(json) {
            console.log(json);
            let results = "";

            for(let i = 0; i < 15; i++){
              results += "<h2>" + json.news[i].title + "</h2>";
              results += "<p>" + json.news[i].description + "</p>";
              if(json.news[i].image != "None"){
                //console.log(json.news[0].image);
                results += "<img src = " + json.news[i].image + ">";
              }
              results += "<br><br>";
            }


            document.getElementById("weatherResults").innerHTML = results;
          }).catch(() => {
            console.error('Do that');
          })

});
