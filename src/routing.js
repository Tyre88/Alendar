define(
	[
		"app",
        "controllers"
	],
	function(app)
	{
		app.config(
			[
				"$stateProvider",
				"$urlRouterProvider",
				function($stateProvider, $urlRouterProvider)
				{
                    $stateProvider
                        .state('home',
                        {
                            url: "/",
                            templateUrl: "./views/home.html",
                            controller: "home"
                        })
                        .state('performer',
                        {
                            url: "/performer/:id",
                            templateUrl: "./views/performer.html",
                            controller: "performer"
                        });
                }
			]
        );
	});