/**
 * Created by pramod on 5/28/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService",PageService);
    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" }
    ];
    function PageService() {
        var api = {createPage:createPage,
            findPageByWebsiteId:findPageByWebsiteId,
            findPageById:findPageById,
            updatePage:updatePage,
            deletePage:deletePage};
        return api;
        
        function createPage() {
            
        }
        
        function findPageByWebsiteId() {
            
        }
        
        function findPageById() {
            
        }
        
        function updatePage() {
            
        }
        
        function deletePage() {
            
        }
    }

})();