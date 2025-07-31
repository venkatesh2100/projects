import express from 'express'

import { createClient } from 'redis'


const app = express()

app.use(express.json());

const client = createClient();


client.on('error', (err) => console.log("Redis Clinet Error", err))
app.get('/test',async(req,res)=>{
  res.send('Hi from cakll')
})
app.post('/test', async (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const size = req.body.size;


  try {
    await client.lPush('plant', JSON.stringify({ name, price, size }));
    res.status(200).send('Submisison recived and Stored');

  } catch (err) {
    console.error("redis Error", err)
  }
  res.status(500).send("Failed to store in Redis");
})


async function startServer() {
  try {
    await client.connect();
    console.log("connected to Redis");
    app.listen(3000,()=>console.log('Redis is Running on port 3000'))

  } catch (err) {
    console.error('Failed to connec Redis');
  }
}


startServer();
