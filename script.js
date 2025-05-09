// TASK-1 display all the flags in the console

var list1 = new XMLHttpRequest();
list1.open("GET", "https://restcountries.com/v3.1/all", true);
list1.send();
list1.onload = function () {
  var data1 = list1.response;
  //   console.log(data1);
  var data2 = JSON.parse(data1);
  //   console.log(data2);
  for (i = 0; i < data2.length; i++) {
    console.log(data2[i].flags.svg);
  }
};

// TASK-2 use the same rest countries and print all countries names,regions,sub-region and population

var list2 = new XMLHttpRequest();
list2.open("GET", "https://restcountries.com/v3.1/all", true);
list2.send();
list2.onload = function () {
  var req1 = list2.response;
  //   console.log(req1);
  var req2 = JSON.parse(req1);
  //   console.log(req2);
  for (i = 0; i < req2.length; i++) {
    console.log(
      "Country Name :" + " " + req2[i].name.common,
      "Regions :" + " " + req2[i].region,
      "Sub-region :" + " " + req2[i].subregion,
      "Population :" + " " + req2[i].population
    );
  }
};
