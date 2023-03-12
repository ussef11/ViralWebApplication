const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const articlesSchema = new Schema({

    id_articles : {
        type : Number,
        required : true,
    },
    
    creator : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true,
    },

    description : {
        type : String,
    
    },
    createdate:{
        type : Date,
        required : true,
    }
    ,
    articleimg :{
        type: String,
        required : true,
    }
    ,content : {
        type: String,
        required: true,
    }
    
}, {timestamps : true})
const articles = mongoose.model('myarticlesbi' , articlesSchema);
module.exports = articles;