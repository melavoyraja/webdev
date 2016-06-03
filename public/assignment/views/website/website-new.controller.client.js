/**
 * Created by pramod on 5/28/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("NewWebsiteController",NewWebsiteController);

    function NewWebsiteController(WebsiteService, $routeParams, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        
        vm.createWebsite = function (userId, website) {
            WebsiteService.createWebsite(userId, website).then(function (response) {
                var createdWebsite = response.data;
                if(createdWebsite){
                    $location.url("/user/"+userId+"/website");
                }
            });

        }
        
    }

})();