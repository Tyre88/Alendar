define(
    [
        "/directives/performer.js"
    ],
    function()
    {
        app.controller('home', ["$scope", function($scope) 
        {
            LoadCss("./content/css/home.css");
            
            $scope.Performers = 
            [
                {
                    id: 1,
                    conpamyName: "Avalonskolan",
                    name: "Helena Öhrström",
                    street: "Röddingevägen 256",
                    city: "Sjöbo",
                    img: "http://www.bokadirekt.se/DisplayMediaFile.axd?id=63138"
                },                
                {
                    id: 2,
                    conpamyName: "Avalonskolan",
                    name: "Helena Öhrström",
                    street: "Röddingevägen 256",
                    city: "Sjöbo",
                    img: "http://www.bokadirekt.se/DisplayMediaFile.axd?id=63138"
                },                
                {
                    id: 3,
                    conpamyName: "Avalonskolan",
                    name: "Helena Öhrström",
                    street: "Röddingevägen 256",
                    city: "Sjöbo",
                    img: "http://www.bokadirekt.se/DisplayMediaFile.axd?id=63138"
                },                
                {
                    id: 4,
                    conpamyName: "Avalonskolan",
                    name: "Helena Öhrström",
                    street: "Röddingevägen 256",
                    city: "Sjöbo",
                    img: "http://www.bokadirekt.se/DisplayMediaFile.axd?id=63138"
                },                
                {
                    id: 5,
                    conpamyName: "Avalonskolan",
                    name: "Helena Öhrström",
                    street: "Röddingevägen 256",
                    city: "Sjöbo",
                    img: "http://www.bokadirekt.se/DisplayMediaFile.axd?id=63138"
                },                
                {
                    id: 6,
                    conpamyName: "Avalonskolan",
                    name: "Helena Öhrström",
                    street: "Röddingevägen 256",
                    city: "Sjöbo",
                    img: "http://www.bokadirekt.se/DisplayMediaFile.axd?id=63138"
                },
            ];
                
                
        }])
    });