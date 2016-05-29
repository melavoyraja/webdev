/**
 * Created by pramod on 5/26/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);

    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];
    
    function WebsiteService() {
        var api = {createWebsite:createWebsite,
            findWebsitesForUserId:findWebsitesForUserId,
            findWebsiteById:findWebsiteById,
            updateWebsite:updateWebsite,
            deleteWebsite:deleteWebsite};
        return api;
        function findWebsitesForUserId(userId){
            var resultSet = [];
            for(var i in websites){
                if(websites[i].developerId === userId){
                    resultSet.push(websites[i]);
                }
            }
            return resultSet;
        }
        
        function createWebsite() {
            
        }
        
        function findWebsiteById() {
            
        }
        
        function updateWebsite() {
            
        }
        
        function deleteWebsite() {
            
        }
        
    }
})();