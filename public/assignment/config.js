/**
 * Created by pramod on 5/24/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(Config);
    
    function Config($routeProvider) {
        $routeProvider
            .when("/login",{templateUrl:"views/user/login.view.client.html",
             controller:"LoginController",
             controllerAs:"model"})
            .when("/",{templateUrl:"views/user/login.view.client.html",
             controller:"LoginController",
             controllerAs:"model"})
            .when("default",{templateUrl:"views/user/login.view.client.html",
             controller:"LoginController",
             controllerAs:"model"})
            .when("/register",{templateUrl:"views/user/register.view.client.html",
             controller:"RegisterController",
             controllerAs:"model"})
            .when("/user/:id",{templateUrl:"views/user/profile.view.client.html",
             controller:"ProfileController",
             controllerAs:"model"})
            .when("/user/:uid/website",{templateUrl:"views/website/website-list.view.client.html",
             controller:"WebSiteListController",
             controllerAs:"model"})
            .when("/user/:uid/website/new",{templateUrl:"views/website/website-new.view.client.html",
             controller:"NewWebsiteController",
             controllerAs:"model"})
            .otherwise({redirectTo:"/login"});


    }
})();