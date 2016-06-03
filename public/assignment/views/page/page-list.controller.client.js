/**
 * Created by pramod on 6/2/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageListController",PageListController);

    function PageListController(PageService, $routeParams) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        function init(){
            PageService.findPagesforWebsiteId($routeParams.wid).then(function (response) {
                vm.pages = response.data;
            });
        }
        init();
    }


})();