var app = undefined;

LoadCss(["./content/css/base.css", "./content/css/font.css"]);

define(
    [
        "angular",
        "ui-router",
        "ui-bootstrap"
    ],
    function(angular)
    {
        app = angular.module('alendar', ['ng', 'ui.router', 'ui.bootstrap'])
        .controller('application', ["$scope", "$state", function($scope, $state)
        {
            $scope.ApplicationName = "Alendar";
            $state.go("home");
        }])
        .config(
            [
				"$controllerProvider",
				"$compileProvider",
				"$filterProvider",
				"$provide",
				function ($controllerProvider, $compileProvider, $filterProvider, $provide)
				{
					app.value = function (id, args)
					{
						$provide.value(id, args);
						
						return app;
					};
                    
					app.constant = function (id, args)
					{
						$provide.constant(id, args);
						
						return app;
					};

					app.service = function (id, args)
					{
						$provide.service(id, args);
						
						return app;
					};

					app.factory = function (id, args)
					{
						$provide.factory(id, args);

						return app;
					};

					app.controller = function(id, args)
					{
						$controllerProvider.register(id, args);

						return app;
					};

					app.directive = function (id, args)
					{
						$compileProvider.directive(id, args);

						return app;
					};
				}
			]);
            
            return app;
    });