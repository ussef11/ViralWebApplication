const express = require('express');
const Route = express.Router();

const articlesroutes = require('../controllers/articles')

Route.get("/getAllArticles" , articlesroutes.DisplayArticles)
Route.get("/count" , articlesroutes.countArticles)
Route.post("/addarticles" , articlesroutes.addarticles)
Route.get("/getContentbyid/?:id" , articlesroutes.getContentbyid)

module.exports = Route
