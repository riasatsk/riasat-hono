import express from 'npm:express';

const app = express();
app.use((req,res)=>{
  res.send('Hello World')
})
app.listne(3000)