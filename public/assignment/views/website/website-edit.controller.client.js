/**
 * Created by pramod on 6/1/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController",EditWebsiteController);

    function EditWebsiteController(WebsiteService,$routeParams, $location) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        function init(){
            WebsiteService.findWebsiteById($routeParams.wid).then(function (response) {
                vm.website = response.data;
            });
        }

        init();

        vm.updateWebsite = function (websiteId, website) {
            WebsiteService.updateWebsite(websiteId, website)
                .then(function (response) {
                var website = response.data;
                    if(website._id){
                        $location.url("/user/"+vm.userId+"/website");
                    }
            })
        }
        
        vm.deleteWebsite = function (websiteId) {
            WebsiteService.deleteWebsite(websiteId)
                .then(function (response) {
                    var result = response.data;
                    if(result){
                        $location.url("/user/"+vm.userId+"/website");
                    }
                });
        }
        

    }

})();