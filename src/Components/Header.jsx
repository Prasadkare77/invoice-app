import React from 'react'
import Button from 'react-bootstrap/Button'

const Header = ({handlePrint}) => {
    
  return (
    <>
         <header className='d-flex mb-3 d-flex-row justify-content-between'>
            <div>
                <h1 className='fw-bold text-uppercase tracking-wide text-4xl mb-1'>Invoice</h1>
            </div>
            <div className='container text-end justify-content-center'>
                <Button onClick={handlePrint} className='btn btn-print ms-1 me-1 shadow' variant='outline-secondary'>Print</Button>
                <Button className='btn btn-print ms-1 me-1 shadow' variant="primary">Download</Button>
                <Button className='btn btn-print ms-1 me-1 shadow' variant="success">Send</Button>
            </div>
        </header>
    </>
  )
}

export default Header