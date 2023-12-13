const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res)=>{
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  })
})









app.listen(3000, ()=>{
  console.log('Server started on Port: 3000');
})