import React from 'react'
import Col from 'react-bootstrap/Col';

const Notes = ({notes}) => {
  return (
    <>
        <section className='container mb-5'> 
            <Col sm={5}><p className='text-justify'>{notes}</p></Col>
        </section>
    </>
  )
}

export default Notes