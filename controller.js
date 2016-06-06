var model = require(__dirname + '/model');

exports.home = function (req, res) {
    model.getUsers(req, res, function (){
        res.render('index', {users: res.users, title:"users"});
        console.log(res.users);
    });


};
exports.about = function (req, res) {
    res.render('about');
};
