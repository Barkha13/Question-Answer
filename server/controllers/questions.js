var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {

    show : function(req,res){
        console.log('in cont...')
        Question.find({}, function(err, questions){
            console.log(questions);
            res.json(questions);
        })
        
    },

    addQue : function(req,res){
        
        var question = new Question({
            question : req.body.question,
            description : req.body.description
        });

        question.save(function(err){
            if(err){
                console.log("something went wrong...");
            }
            else{
                console.log('added question in db...');
            }
        })
    }
  
}