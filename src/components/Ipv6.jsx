import React, { useEffect, useState } from 'react'

const Ipv6 = () => {
    const [ip6 , setIp6] = useState('')
    useEffect(() => {
        fetch('https://api64.ipify.org?format=json')
        .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setIp6(data.ip)
            })
    }, [])

  return (
    <div>Ip6 : {ip6}</div>
  )
}

export default Ipv6