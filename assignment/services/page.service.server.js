/**
 * Created by pramod on 5/31/2016.
 */
module.exports = function (app) {
    var pages = [
        { "_id": "321", "name": "Post 1", "websiteId": "456" },
        { "_id": "432", "name": "Post 2", "websiteId": "456" },
        { "_id": "543", "name": "Post 3", "websiteId": "456" }
    ];

    app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
    app.post("/api/website/:websiteId/page",createPage);
    app.get("/api/page/:pageId",findPageById);
    app.put("/api/page/:pageId",updatePage);
    app.delete("/api/page/:pageId",deletePage);

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        for(var i in pages){
            if(pages[i]._id===pageId){
                pages.splice(i,1);
                res.send(true);
                return;
            }
        }
        res.send(false);
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var page = req.body;

        for (var i in pages){
            if(pages[i]._id===pageId){
                pages[i].name = page.name;
                pages[i].title = page.title;
                res.send(true);
                return;
            }
        }
        res.send(false);
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        for(var i in pages){
            if(pages[i]._id===pageId){
                res.send(pages[i]);
                return;
            }
        }
        res.send({});
    }
    
    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        var newPage = {
            _id: (new Date()).getTime()+"",
            name: page.name,
            title: page.title,
            websiteId: websiteId
        };
        pages.push(newPage);
        res.send(newPage);
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var resultSet = [];
        for(var i in pages){
            if(pages[i].websiteId === websiteId){
                resultSet.push(pages[i]);
            }
        }
        res.send(resultSet);
    }
    
    
};