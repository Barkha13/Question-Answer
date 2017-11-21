var questions = require('./../controllers/questions.js');
var path = require("path");

module.exports = function(app){

    app.post('/add_que', function(req,res){
        console.log('inside add que routes...');
        questions.addQue(req,res);
    });

    app.get('/all', function(req,res){
        console.log('display all the questions');
        questions.show(req,res);
    });

    app.get('/show_ans/:id',function(req,res){
        console.log('show answer');
        questions.showAns(req,res);
    })
    
}