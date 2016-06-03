/**
 * Created by pramod on 6/2/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("EditPageController",EditPageController);
    
    function EditPageController(PageService, $routeParams, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        function init(){
            PageService.findPageById($routeParams.pid).then(function (response) {
                vm.page = response.data;
            });
        }

        init();

        vm.updatePage = function (pageId, page) {
            PageService.updatePage(pageId, page)
                .then(function (response) {
                var page = response.data;
                    if(page){
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                    }
            })
        }

        vm.deletePage = function(pageId){
            PageService.deletePage(pageId)
                .then(function (response) {
                    var result = response.data;
                    if(result){
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId+"/page");
                    }
                });
        }


    }
    
})();