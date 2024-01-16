 const express =require('express')
 const app = express()
 const { MongoClient } = require('mongodb');
const { render } = require('vue');
const fs = require('fs').promises; // Using the promises version for async/await

const port = 3000

// mongoose.connect(
//   'mongodb+srv://fahizk100:ex9Ho1Bdx81gqKxe@cluster0.q85sh6t.mongodb.net/',
// {
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// })

// const db= mongoose.connection
// db.on('error',console.error.bind(console,"mongodb connection error"))
// db.once('open',()=>{
//   console.log('Connected to MongoDB Atlas');

// }) 
// const vueSchema = new mongoose.Schema({

//   name:String,
//   age: Number,
//   email:String
//   // name:'Faiz',
//   // age:'21',
//   // email:"fahizk100@gmail,com"
// })


const uri ='mongodb+srv://fahizk100:ex9Ho1Bdx81gqKxe@cluster0.q85sh6t.mongodb.net/'
const client = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true})

client.connect(err=>{
  if(err){
    console.log('mongodb connnection error');
  }
})

const cullection = client.db('vue').collection('data')
cullection.insertOne({name:'fahiz'},(error,result)=>{
  if(err){
    console.log('eroor for insertion');
  }else{
    console.log('insert success',result.ops[0]);
  }
  client.close()
})
app.get('/',async(req,res)=>{
  const fileContent = await fs.readFile('index.html', 'utf-8');

  res.send(fileContent)
})


app.listen(port,()=>{
  console.log(`Server is running at http://localhost:${port}`);

})