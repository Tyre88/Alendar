require(
    [
        "angular",
        "app",
        "./routing.js"
    ],
    function(angular)
    {
        require(["domready!"], function(document)
                {
                    return angular.bootstrap(document, ["alendar"]);
                });
    });