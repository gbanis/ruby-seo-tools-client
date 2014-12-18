angular.module('myApp', [])

.constant('ENDPOINT_URI', 'http://api.rubyseotools.com/')
// .constant('ENDPOINT_URI', 'http://localhost:3000/')

.controller('MainCtrl', function (ENDPOINT_URI, $http) {
  var main = this;

  main.resultsVisible = false;

  var showResults = function(){
    main.resultsVisible = true;
  };

  main.generateAudit = function (){
    var request_uri = ENDPOINT_URI + 'audits/';
    var data = {
      url: main.url,
      keyword: main.keyword
    };

    $http.post(request_uri, data)
    .success(function(response) {
      main.results = response;
      showResults();
    });
  };

  main.getLastAudit = function(){
    var request_uri = ENDPOINT_URI + 'audits/';
    $http.get(request_uri)
    .success(function(response) {
      main.results = response;
      showResults();
    });
  };

  (function(){
    var request_uri = ENDPOINT_URI + 'descriptions/';
    $http.get(request_uri)
    .success(function(response) {
      main.descriptions = response;
    });
  })();

});
