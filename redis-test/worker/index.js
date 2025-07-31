import express from "express";
import { createClient } from "redis";

const app = express();
const client = createClient();

client.on('error', (err) => console.error('Redis Client Error', err));

async function StartWorker() {
  try {
    await client.connect(); 

    console.log("Worker started and connected to Redis");

    while (true) {
      const result = await client.brPop('plant', 0);
      console.log('Popped from Redis:', result);


      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error("Worker Error:", error);
  }
}

// Start the Express server
app.get('/', (req, res) => {
  res.send('Hi from server');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


StartWorker();
