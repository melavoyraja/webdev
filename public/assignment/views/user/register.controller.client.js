/**
 * Created by pramod on 5/26/2016.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController",RegisterController);
    
    function RegisterController($location, UserService) {
        var vm = this;


        vm.register = function (username,password,verifypassword) {

            if(password !== verifypassword){
                vm.error = "Password Mismatch. Please reenter the password";
                return;
            }

            var user = {};
            user._id = new Date().getTime() + "";
            user.username = username;
            user.password = password;
            var user = UserService.createUser(user);

            if(user){
                $location.url("/user/"+user._id);
            }else{
                vm.error = "User registration failed";
            }

        }
    }
    
})();