const path = require('path');
const express = require('express');
const { stringify } = require('querystring');

const app = express();
//3000
app.get('/', function(req, res){
  const indexFilePath = path.join(__dirname, 'views', 'index.html')
  res.sendFile(indexFilePath)
})

app.get('/restaurants', function(req, res){
  const htmlFilePath = path.join(__dirname, 'views','restaurants.html')
  res.sendFile(htmlFilePath)
})

app.get('/recommend', function(req, res){
  const recommendFilePath = path.join(__dirname, 'views', 'recommend.html')
})

app.get('/confirm', function(req, res){
  const confirmFilePath = path.join(__dirname, 'views', 'confirm.html')
  res.sendFile(confirmFilePath)
})

app.get('/about', function(req, res){
  const aboutFilePath = path.join(__dirname, 'views', 'about.html')
  res.sendFile(aboutFilePath)
})




 
app.listen(3000)

