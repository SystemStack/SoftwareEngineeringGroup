angular
.module('junkBox.services.homeService',[])
.factory('Home', function($q, $http) {
    return{
      getRecentPurchases: function(user) {
          var deferred = $q.defer();
          $http.post('/Home/GetRecentPurchases/', {id: user})
                .success(function (data, status, headers, config) {
                     console.log(data);
                     deferred.resolve(data);
                }).error(function (error) {
                    console.log(error);
                    deferred.reject(error);
                });
            return deferred.promise;
        }
    };
});