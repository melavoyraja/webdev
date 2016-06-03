/**
 * Created by pramod on 5/26/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);


    
    function WebsiteService($http) {
        var api = {createWebsite:createWebsite,
            findWebsitesForUserId:findWebsitesForUserId,
            findWebsiteById:findWebsiteById,
            updateWebsite:updateWebsite,
            deleteWebsite:deleteWebsite};
        return api;
        function findWebsitesForUserId(userId){
           var url = "/api/user/" + userId + "/website";
           return $http.get(url); 
        }
        
        function createWebsite(userId, website) {
            var url = "/api/user/" + userId + "/website";
            return $http.post(url,website);
        }
        
        function findWebsiteById(websiteId) {
            var url = "/api/website/"+websiteId;
            return $http.get(url);
        }
        
        function updateWebsite(websiteId, website) {
            var url = "/api/website/"+websiteId;
            return $http.put(url, website);
        }
        
        function deleteWebsite(websiteId) {
            var url = "/api/website/"+websiteId;
            return $http.delete(url);
        }
        
    }
})();