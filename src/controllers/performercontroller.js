define(
    [
        
    ],
       function()
       {
           app.controller('performer', ["$scope", "$stateParams",
                function($scope, $stateParams)
                {
                    $scope.performer = new Performer(
                        {
                            id: 1,
                            name: "Helena Öhrström",
                            img: "http://www.bokadirekt.se/DisplayMediaFile.axd?id=63138",
                            company: 
                            {
                                id: 1,
                                name: "Avalonskolan",
                                street: "Röddingevägen 256",
                                city: "Sjöbo"
                            }
                        });
                }]);
       });