import React from 'react'
import Col from 'react-bootstrap/Col';

const Notes = ({notes}) => {
  return (
    <>
        <section className='container mt-5 mb-5'> 
            <Col sm={5}><p className='text-justify'><strong>Notes:</strong> {notes}</p></Col>
        </section>
    </>
  )
}

export default Notes