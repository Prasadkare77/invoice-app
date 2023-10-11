import React from 'react'
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

const Tables = ({description, quantity, price, amount}) => {
  return (
    <>
        <Col sm={20}>
          <Table striped bordered hover variant="warning" className='shadow'>
            <thead>
              <tr className=''>
                <th>Item Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
    </>
  )
}

export default Tables