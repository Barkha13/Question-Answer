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
    },

    showAns : function(req,res){
        console.log('in cont showAns',req.params.id);
        Question.findOne({_id: req.params.id}).populate({path: 'answers', options: {sort : {'likes':-1}}}).exec(function(err, question){
            res.json(question);
        })


        // Post.find({}).sort('test').exec(function(err, docs) { ... });
    },

    addAns : function(req,res){
        
            Question.findOne({_id: req.params.q_id}, function(err, question){
                // data from form on the front end
                var answer = new Answer({
                    answer : req.body.answer,
                    detail : req.body.detail,
                    answerer : req.body.answerer,
                    likes : 0
                });
                //  set the reference like this:
                // answer._question = req.body.q_id;
                // now save both to the DB
                answer.save(function(err){
                        question.answers.push(answer);
                        question.save(function(err){
                             if(err) {
                                  console.log('Error');
                             } else {
                                  console.log('success');
                             }
                         });
                 });
            });
    },

    addLike : function(req,res){
        console.log('answer id--------',req.params.ans_id);
        Answer.findById(req.params.ans_id, function(err, answer){
            answer.likes = answer.likes + 1;
            answer.save(function(err){
                if(err){
                    console.log("something went wrong...");
                }
                else{
                    console.log('added like in db...');
                }
            })
        })
    }
  
}