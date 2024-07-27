const express = require('express');
// const cors = require('cors');
// const bodyParse = require('body-parse');

const app = express();

app.get('/',(req, res)=>{
  res.send('this is the server site');
})
app.listen(8080, console.log("server is running"));
