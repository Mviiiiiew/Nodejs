const express = require("express");
const mysql = require("mysql");
const bodyparser = require("body-parser");

const list = require("./model/car");

const app = express();
app.listen(9000);

app.use(bodyparser.urlencoded({extended : false}));


app.get("/api/list/:key", function(req, res){
    try {
        list.getcarin(req.params.key,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});



app.post("/api/list/numberbill", function(req, res){
    try{
        list.getlastbarcode(req,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get("/api/list", function(req, res){
    try{
        list.getCarinAll(req,function(err, data){
            if(err){
                throw err
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
});


app.post("/api/list/insertbill", function(req, res){
    try {
        list.inserbill(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                list.getBillInsert(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.post("/api/list/insertcarout", function(req, res){
    try {
        list.insertcarout(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                list.getCaroutInsert(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.post("/api/list", function(req, res){
    try {
        list.insertUser(req.body, function(err, data){
            if(err){
                throw err;
            }else{
                list.getUser(data.insertId, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
});

app.put("/api/list/:id", function(req, res){
    try {
        list.updateUser(req.params.id, req.body, function(err, data){
            if(err){
                throw err;
            }else{
                list.getUser(req.params.id, function(err, data){
                    if(err){
                        throw err;
                    }else{
                        res.send(data);
                    }
                })
            }
        })
    } catch (error) {
        res.status(500).send(error);

    }
})

app.delete("/api/list/:id", function(req, res){
    try {
        list.deleteCarin(req.params.id, function(err, data){
            if(err){
                throw err;
            }else{
                res.send(data);
            }
        })
    } catch (error) {
        res.status(500).send(error);
    }
})
