const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
 
 
//use middleware
 
app.use(cors());
app.use(express.json());
 
 

 
app.get('/', (req, res) => {
    res.send('Running Hello Doctor Uncle!');
});
 
app.listen(port, () =>{
    console.log(`Doctors App listening on port ${port}`);
});