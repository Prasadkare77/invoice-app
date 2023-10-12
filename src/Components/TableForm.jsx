import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const TableForm = ({description, quantity, price, amount, setDescription, setQuantity, setPrice, setAmount}) => {

    useEffect(()=>{
        const calculateAmount = (amount) =>{
            setAmount(quantity * price)
        }
        calculateAmount(amount)
    },[amount, quantity, price, setAmount])
   
    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
        <div className='d-block'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     <Row className='d-block mb-2 me-2'>
                        <Col className='d-block fw-bold'><Form.Label>Items Description</Form.Label></Col>
                        <Col className='d-block'><Form.Control className='shadow' type="text" placeholder="Description" value={description} onChange={(e)=> setDescription(e.target.value)} /></Col>
                    </Row>
                    <Row className='d-inline-block mb-2 me-2'>
                        <Col className='d-block fw-bold'><Form.Label>Quantity</Form.Label></Col>
                        <Col className='d-block'><Form.Control className='shadow' type="text" placeholder="Quantity" value={quantity} onChange={(e)=> setQuantity(e.target.value)} /></Col>
                    </Row>
                    <Row className='d-inline-block mb-2 me-2'>
                        <Col className='d-block fw-bold'><Form.Label>Price</Form.Label></Col>
                        <Col className='d-block'><Form.Control className='shadow' type="text" placeholder="Price" value={price} onChange={(e)=> setPrice(e.target.value)} /></Col>
                    </Row>
                    <Row className='d-inline-block mb-2 me-2'>
                        <Col className='d-block fw-bold'><Form.Label>Amount</Form.Label></Col>
                        <Col className='d-block'><Form.Label className=''>{amount}</Form.Label></Col>
                    </Row>
                    <Row className='d-inline-block ms-5 mb-2 me-2'>
                        {/* <Col className='d-block fw-bold'><Button className='shadow' onClick={handleSubmit} type="submit" variant="primary">Add Item</Button></Col> */}
                    </Row>
                </Form.Group>
            </Form> 
        </div>
    </>
  )
}

export default TableForm