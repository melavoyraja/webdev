/**
 * Created by pramod on 5/26/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController",ProfileController);

    function ProfileController($routeParams,UserService, $location) {
        var vm = this;

        var id = $routeParams.id;
        function  init() {
            var promise = UserService.findUserById(id);
            promise.then(function (response) {
                vm.user = response.data;
            });

        }
        init();

        vm.deleteUser = function () {
            UserService.deleteUser(id).then(function (response) {
                $location.url("/login");
            })
        }

        vm.updateUser = function (newUser) {
            
            UserService.updateUser(id,newUser)
                .then(function (response) {
                    var update = response.data;
                    if(update){
                        vm.success = "Profile Saved Successfully!";
                    }else{
                        vm.error = "Failed to Update Profile!"
                    }
                    // $location.url("/user/"+user._id);

                });


        }
    }
})();