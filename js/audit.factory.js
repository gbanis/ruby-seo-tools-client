angular.module('rubySeoTools', [])

.factory('AuditFactory', function($http) {
  var api = "http://localhost:3000/audits/";
  var data = {
    "url": url,
    "keyword": keyword
  };
  var audit = {};

  var generateAudit = function() {
    $http.post(api, data).success(function(response){
      $http.get('http://localhost:3000/users').success(function(response) {
        audit = response;
      });
    });
  };

  return {
    audit: audit,
    generateAudit: generateAudit
  };
});
