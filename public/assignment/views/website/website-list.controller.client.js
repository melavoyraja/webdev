/**
 * Created by pramod on 5/26/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebSiteListController",WebSiteListController);

    function WebSiteListController(WebsiteService,$routeParams) {
        var vm = this;

        function init(){
            vm.websites = WebsiteService.findWebsitesForUserId($routeParams.uid);
        }
        init();
        console.log(vm.websites);
    }
    
    
})();