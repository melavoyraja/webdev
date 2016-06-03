/**
 * Created by pramod on 6/2/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("NewPageController",NewPageController);

    function NewPageController(PageService, $routeParams, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.createPage = function (websiteId, page) {
            PageService.createPage(websiteId, page)
                .then(function (response) {
                    var createdPage = response.data;
                    if(createdPage._id){
                        $location.url("/user/"+vm.userId+"/website/"+vm.websiteId + "/page");
                    }
                })
        }

    }

})();