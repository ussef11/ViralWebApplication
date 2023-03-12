const articles= require("../models/articles")

const DisplayArticles =(req,res)=>{
    const data = articles.find().sort({createdAt : -1})
    .then((result)=>{
        res.json(result)
    }).catch((err)=>{
        res.json(err)
    })
}

const addarticles = (req , res)=>{
   const newarticles = articles(req.body);
   newarticles.save().then((result) => {
    res.status(200).json(`Article has added seccessfuly ${result}`);
 
  })
  .catch((err) => {
    res.status(500).json({ message: "Error: " + err });
  });
}
const countArticles = (req,res)=>{

  articles.count()
  .then((result)=>{
    res.json(result)
  }).catch((err)=>{
    res.json({message: "err" +err})
  })

}

const getContentbyid = (req,res) =>{
  let id = req.params.id
   articles.find({id_articles : id}).sort({createdAt : -1})
  .then((result)=>{
    res.json(result)
  }).catch((err)=>{
    res.json(err)
  })
}

module.exports = {DisplayArticles , addarticles ,countArticles , getContentbyid}