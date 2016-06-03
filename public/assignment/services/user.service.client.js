/**
 * Created by pramod on 5/26/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService",UserService);

    function UserService($http) {
        var api = {findUserByUsernameAndPassword:findUserByUsernameAndPassword,
            findUserById:findUserById,
            updateUser:updateUser,
            createUser:createUser,
            deleteUser:deleteUser};
        return api;

        function createUser(user){
            var url = "/api/user/";
            return $http.post(url,user);
        }

        function deleteUser(userId){
            var url = "/api/user/"+userId;
            return $http.delete(url);
            
           
        }

        function updateUser(id, newUser) {
            // console.log(newUser);
            var url = "/api/user/"+id;
            return $http.put(url, newUser);
        }

        function findUserById(id) {
            var url = "/api/user/"+id;
            return $http.get(url);
        }

        function findUserByUsernameAndPassword(username,password){
            var url = "/api/user?username="+username+"&password="+password;
            return $http.get(url);
        }
    }
})();