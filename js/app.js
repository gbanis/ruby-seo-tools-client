angular.module('myApp', ['ngMaterial'])

.constant('ENDPOINT_URI', 'http://localhost:3000/')

.controller('MainCtrl', function (ENDPOINT_URI, $http) {
  var main = this;

  this.generateAudit = function (){
    var request_uri = ENDPOINT_URI + 'audits/';
    var data = {
      url: this.url,
      keyword: this.keyword
    };

    $http.post(request_uri, data)
    .success(function(response) {
      main.results = response;
    });
  };

  this.getLastAudit = function(){
    var request_uri = ENDPOINT_URI + 'audits/';
    $http.get(request_uri)
    .success(function(response) {
      main.results = response;
    });
  }

});
