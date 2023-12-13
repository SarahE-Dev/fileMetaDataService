const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const multer = require('multer');
const upload = multer()

require('dotenv').config()

const app = express();

app.post('/api/fileanalyse', upload.single('upfile'), (req, res)=>{
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});




const port = 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});