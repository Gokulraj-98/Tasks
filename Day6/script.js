//console.log("Hey Ter... keep rocking..!");
//XML -HTTP request are used to interact with the server vias API
//step1 - To create a XHR request
var request = new XMLHttpRequest();
//step2 - open a request
//the purpose is which API, and which API method
//this will take 2 important string
//first in http method as well as API
request.open("GET", "https://restcountries.com/v3.1/all");
//step3 - initiate a request
request.send();
//step4 - once the data successfully loaded from the server the status should be 200 ok
request.onload = () => {
  //var res = request.response;
  /*
  const res = JSON.parse(request.response);
  var first = res[0].name.nativeName.eng.official;
  for (var i = 0; i < res.length; i++) {
    var name = res[i].name.common;
    var capital = res[i].capital;
    console.log(name + "  capital- " + capital);
  }
  */

  const res = JSON.parse(request.response);

  //using filter
  var countryNames = res
    .filter((pop) => pop.population <= 200000)
    .map((names) => names.name.common);
  //console.log(countryNames);

  //using reduce method
  var totalPop = res
    .map((pop) => pop.population)
    .reduce((acc, cv) => acc + cv, 0);
  //console.log(totalPop);

  //using for each
  /*  res.forEach((element) => {
   console.log(
      `Name :${element.name.common} 
Flag:${element.flag} 
Capital:${element.capital}`
    ); 
  });*/

  var countriesUsingDollars = res
    .map((pop) => pop.currencies)
    .forEach((element, index) => {
      console.log(element["USD"].name);
    });
  //.map((curr) => curr.currencies["USD"]);
  //.forEach((res) => res.currencies);
  // .filter((usd) => usd.symbol == "$");
  //.forEach((curren) => curren.currencies["USD"]);

  //.filter((aud) => aud.symbol == "$");
  // .map((aud) => aud.currencies.symbol);
  //.map((currencies) => currencies.currencies.AUD.symbol);
  console.log(countriesUsingDollars);
};
