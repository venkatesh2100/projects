'use client'
import React from "react";

import { useEffect, useState } from 'react'


export default function Home() {

  const [socket, setScoket] = useState<WebSocket | null>(null)


  useEffect(() => {
    const newSocket = new WebSocket('ws://localhost:8080');

    newSocket.onopen = () => {
      console.log('Connection Est');

      newSocket.send('Hello Server');
    }



    newSocket.onmessage = (message) => {
      console.log('Message Recived', message.data);
    }

    setScoket(newSocket);


    return () => newSocket.close();
  }, [])
  return (
    <div>
      HOme page
    </div>
  );
}
