define([],
       function()
       {
           app.directive('performer', function()
                         {
                            return {
                                restrict: "E",
                                scope:
                                {
                                    ngModel: "="
                                },
                                templateUrl: "./directives/view/performer.html",
                                controller:
                                [
                                    "$scope",
                                    function ($scope)
                                    {
                                    }
                                ]
                            };
                         });
       });