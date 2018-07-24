const mysql = require("mysql");

const db = mysql.createConnection({
    host    : "localhost",
    user    : "root",
    password    : "root",
    database    : "CarparkMB",
    port:8889
});

db.connect(function(err){
    if(err){
        console.log(err);
    }else{
        console.log("connected to database success");
    }
});


exports.getUser = function(id, callback){
    let sql = `SELECT * From Carin WHERE carin_id = ?`;
    db.query(sql,[id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getcarin = function(key, callback){
    let sql = `select * from Carin where carin_license like ? or carin_barcode LIKE  ?`;
    db.query(sql,['%' + key,'%' + key], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getBillInsert = function(id, callback){
    let sql = `SELECT * From Numberbill WHERE id_bill = ?`;
    db.query(sql,[id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getCaroutInsert = function(id, callback){
    let sql = `SELECT * From Carout WHERE carout_id = ?`;
    db.query(sql,[id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getlastbarcode = function(data, callback){
    let sql = `SELECT id_bill from Numberbill ORDER BY id_bill desc limit 1`;
    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.getCarinAll = function(data, callback){
    let sql = `SELECT * From Carin`;
    db.query(sql, function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.insertUser = function(data, callback){
    let sql = "INSERT into Carin set ?";

    db.query(sql, [data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}

exports.inserbill = function(data, callback){
    let sql = "INSERT into Numberbill set ?";

    db.query(sql, [data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}

exports.insertcarout = function(data, callback){
    let sql = "INSERT into Carout set ?";

    db.query(sql, [data], function(err, result){
        if(err){
            callback(err);
        }else{
            callback(null, result);
        }
    })
}

exports.updateUser = function(id, data, callback){
    let sql = "update Carin set ? where carin_id = ?";
    db.query(sql, [data, id], function(err, data){
        if(err){
            callback(err);
        }else{
            callback(null, data);
        }
    })
}

exports.deleteCarin = function(id, callback){
    let sql = "DELETE from Carin where carin_id = ?";
    db.query(sql, [id],function(err, data){
        if(err){
            callback(err);
        }else{
          status = "succeeded";
          callback(null, {status : status});
        

        }
    })
}
