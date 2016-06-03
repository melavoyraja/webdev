/**
 * Created by pramod on 5/31/2016.
 */
(function(){
    angular
        .module("WebAppMaker")
        .factory("PageService",PageService);

    function PageService($http){

        var api = {
            findPagesforWebsiteId:findPagesforWebsiteId,
            findPageById:findPageById,
            deletePage: deletePage,
            updatePage:updatePage,
            createPage: createPage
        };
        return api;

        function createPage(websiteId, page) {
            var url = "/api/website/" + websiteId + "/page";
            return $http.post(url, page);
        }

        function findPageById(pageId){
            var url = "/api/page/" + pageId;
            return $http.get(url);
        }

        function findPagesforWebsiteId(websiteId){
            var url = "/api/website/"+websiteId+"/page";
            return $http.get(url);
        }

        function deletePage(pageId){
            var url = "/api/page/" + pageId;
            return $http.delete(url);
        }

        function updatePage(pageId, page){
            var url = "/api/page/" + pageId;
            return $http.put(url, page);
        }

    }
})();