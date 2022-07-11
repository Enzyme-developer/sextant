import React from 'react'
import Ipv4 from './Ipv4'
import Ipv6 from './Ipv6'

const Exhibit = () => {
  return (
    <div>
        <h1>IP Address</h1>
        <Ipv4 />
        <Ipv6 />
    </div>
  )
}

export default Exhibit