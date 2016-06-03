/**
 * Created by pramod on 5/26/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebSiteListController",WebSiteListController);

    function WebSiteListController(WebsiteService,$routeParams) {
        var vm = this;
        vm.userId = $routeParams.uid;
        function init(){
            WebsiteService.findWebsitesForUserId($routeParams.uid).then(function (response) {
                vm.websites = response.data;
            });
        }
        init();
    }


})();