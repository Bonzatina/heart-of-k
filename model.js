var pg = require('pg');

var conString = "postgres://postgres:7sHINEtHEIR@192.168.201.99:5432/bringo4";

var client = new pg.Client(conString);

module.exports.getUsers = function(req, res, callback) {
    pg.connect(conString, function (err, client, done) {
        var oo = 'ee';
        if (err) {
            return console.error('error fetching client from pool', err);
        }
        var idd = 97564;
        client.query('SELECT *  FROM srv.user_extend  WHERE user_id=' + idd, function (err, result) {
            //call `done()` to release the client back to the pool
            var users = result.rows;

            res.users = users;
            console.log(users[0].user_id);

            callback();

            done();


            if (err) {
                return console.error('error running query', err);
            }
        });
    });
};



