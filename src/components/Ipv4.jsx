import React, { useEffect, useState } from 'react'

const Ipv4 = () => {
    const [ip4, setIp4] = useState('')
    
    useEffect(() => {
        fetch('https://api.ipify.org?format=json')
        .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setIp4(data.ip)
            })
    }, [])
    
  return (
      <div>Ip4 : {ip4}</div>
  )
}

export default Ipv4