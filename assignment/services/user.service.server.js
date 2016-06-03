/**
 * Created by pramod on 5/31/2016.
 */
module.exports = function (app) {

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
    ];

    app.get("/api/user",getUsers);
    app.post("/api/user",createUser);
    app.put("/api/user/:userId",updateUser);
    app.delete("/api/user/:userId",deleteUser);
    app.get("/api/user/:userId",findUserById);

    function deleteUser(req, res){
        var id = req.params.userId;

        for(var i in users){
            if(users[i]._id === id){
                users.splice(i);
                res.send(true);
                console.log(users);
                return;
            }
        }
        res.send(false);
        return;

    }


    function updateUser(req, res) {
        
        var newUser = req.body;
        console.log(newUser);
        var id = req.params.userId;
        for(var i in users) {
            if(users[i]._id === id) {
                users[i].firstName = newUser.firstName;
                users[i].lastName = newUser.lastName;
                users[i].email= newUser.email;
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }
    
    
    function createUser(req,res) {
        var user = req.body;
        users.push(user);
        res.send(user);
    }


    function getUsers(req,res) {
        var username = req.query['username'];
        var password = req.query['password'];
        if(username && password){
            findUserByCredentials(username,password,res);
        }else if(username){
            findUserByUsername(username, res);
        }else{
            res.send(users);
        }
    }

    function findUserByUsername(username, res) {
        for(var i in users){
            if(users[i].username === username){
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }

    function findUserByCredentials(username,password,res) {
        for(var i in users){
            if(users[i].username === username && users[i].password === password ){
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }


    function findUserById(req, res) {
        var id = req.params.userId;
        for(var i in users){
            if(users[i]._id === id){
                res.send(users[i]);
                return;
            }
        }
        res.send({});
    }
};