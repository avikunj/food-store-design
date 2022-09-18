import { Button } from 'react-bootstrap'
import React from 'react'
import './home.scss'
const Buttons = () => {
  return (
    <div className='buttons'>
          <Button variant="outline-dark" className='btn'>6 units</Button>
          <Button variant="outline-dark" className='btn'>12 units</Button>
          <Button variant="outline-dark" className='btn'>24 units</Button>
    </div>
  )
}

export default Buttons