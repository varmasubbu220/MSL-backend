const express = require('express');
const router =require('./routes/route')
const app = express();
require("dotenv").config();
app.use(express.json());
console.log(process.env.PORT)
app.use(express.urlencoded({ extended: true }));
const PORT=process.env.PORT
app.use('/user',router)
const Start_connection=()=>{ 
try{
  app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
    });
}catch(err){
  console.log(err)
}
}
Start_connection()
 