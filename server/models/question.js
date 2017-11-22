var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var QuestionSchema = new mongoose.Schema({
    question : {type : String, required: true, minlength:3},
    description : {type: String},
    answers : [{type: Schema.Types.ObjectId, ref: 'Answer'}]
})

var AnswerSchema = new mongoose.Schema({
    // _question : {type: Schema.Types.ObjectId, ref: "Question"},
    answer : {type: String},
    detail : {type : String},
    answerer : {type : String},
    likes : {type: Number},
})

mongoose.model('Question', QuestionSchema);
mongoose.model('Answer', AnswerSchema);