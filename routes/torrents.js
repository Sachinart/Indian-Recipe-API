var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var path = require('path');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

    if(Object.keys(req.query).length === 0){
        res.send("No input given");
    } else {

        let query   = req.query.q;
		let page    = req.query.p;

        let SQLquery = 'SELECT * FROM torrents ';

        if(query){
            SQLquery += 'WHERE name LIKE "%' + query + '%"';
        }
        if(page){
            var startLimit = page*10;
            SQLquery += ' LIMIT 10 OFFSET ' + startLimit + '';
		} else {
			SQLquery += ' LIMIT 10';
		}
        //console.log(SQLquery);

        let result = [];

        var db = new sqlite3.Database(path.resolve(__dirname, '../torrent.db'));
        
        db.serialize(function() {
            db.each(SQLquery, (err, row) => {
                if (err) {
                    console.error(err.message);
                } else {
                    result.push(row); 
                }
            }, function(){
                //console.log(result);
                res.send(result);
            });
        });

        db.close();
    }
});

module.exports = router;
