/**
 * Created by pramod on 5/31/2016.
 */
module.exports = function (app) {
    var websites = [
        { "_id": "123", "name": "Facebook",    "developerId": "456" },
        { "_id": "234", "name": "Tweeter",     "developerId": "456" },
        { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
        { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
        { "_id": "678", "name": "Checkers",    "developerId": "123" },
        { "_id": "789", "name": "Chess",       "developerId": "234" }
    ];

    app.get("/api/user/:userId/website",findAllWebsitesForUser);
    app.post("/api/user/:userId/website",createWebsite);
    app.get("/api/website/:websiteId",findWebsiteById);
    app.put("/api/website/:websiteId",updateWebsite);
    app.delete("/api/website/:websiteId",deleteWebsite);

    function deleteWebsite(req, res) {
        var websiteId = req.params.websiteId;
        for(var i in websites) {
            if(websites[i]._id === websiteId) {
                websites.splice(i);
                res.send(true);
                return;
            }
        }
        res.send(false);
    }

    function updateWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var website = req.body;
        for(var i in websites) {
            if(websites[i]._id === websiteId) {
                websites[i].name = website.name;
                websites[i].description = website.description;
                res.send(websites[i]);
                return;
            }
        }
        res.send({});
    }


    function findWebsiteById(req,res) {
        var websiteId = req.params.websiteId;
        var website = null;
        for(var web in websites){
            if(websites[web]._id === websiteId){
                website = websites[web];
                res.send(website);
                return;
            }
        }
        res.send({});

    }

    function createWebsite(req, res) {
        var id = req.params.userId;
        var website = req.body;
        var newWebsite = {
            _id: (new Date()).getTime()+"",
            name: website.name,
            description: website.description,
            developerId: id
        };
        websites.push(newWebsite);
        res.send(newWebsite);
    }
    
    
    function findAllWebsitesForUser(req, res) {
        var id = req.params.userId;
        var resultSet = [];
        for(var i in websites){
            if(websites[i].developerId === id){
                resultSet.push(websites[i]);
            }
        }
        res.send(resultSet);
    }

};