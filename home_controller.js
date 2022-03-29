// module.exports.home = function(req, res){
//     console.log(req.cookies);
//     res.cookie('user_id', 25);
//     return res.render('home', {
//         title: "Home"
//     });
// }

module.exports.home = function(req, res){
    
    // return res.end('<h1>Hello!</h1>');
    return res.render('Home');
};
module.exports.teachers = function(req, res)
{
  return res.render('teachers');
}

module.exports.services = function(req, res)
{
  return res.render('Services');
};

// module.exports.actionName = function(req, res){}