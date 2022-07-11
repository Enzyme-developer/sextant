import React, {useEffect, useState} from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";


const client = new W3CWebSocket('ws://localhost:55455');
const Packet = () => {
    const [latency, setLatency] = useState('')

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
          }
          client.onmessage = (message) => {
              console.log(message);
              setLatency(message.timeStamp)
        }
    }, [])
    

    
  return (
      <div>Packet latency : {latency}</div>
  )
}

export default Packet