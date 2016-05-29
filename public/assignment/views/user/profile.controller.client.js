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
            vm.user = UserService.findUserById(id);
        }
        init();

        vm.updateUser = function (newUser) {
           
            var update = UserService.updateUser(id, newUser);

            if(update){
                vm.success = "Profile Saved Successfully!";
            }else{
                vm.error = "Failed to Update Profile!"
            }
            $location.url("/user/"+user._id);
        }
    }
})();