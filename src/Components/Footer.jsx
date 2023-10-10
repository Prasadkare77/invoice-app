import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const Footer = ({name, email, phone, bankName, bankAccount, website }) => {
  return (
    <>
        <footer className='border-top  border rounded pt-3 mb-3'>
            <ul className="d-flex d-flex-wrap items-center justify-content-center p-3 shadow">
                    <li><span className='fw-bold '>Your Name:</span> {name}</li>
                    <li><span className='fw-bold'>Your Email:</span> {email}</li>
                    <li><span className='fw-bold'>Phone Number:</span> {phone}</li>
                    <li><span className='fw-bold'>Bank:</span> {bankName}</li>
                    <li><span className='fw-bold'>Account Holder:</span> {name}</li>
                    <li><span className='fw-bold'>Account Number:</span> {bankAccount}</li>
                    <li><span className='fw-bold'>Website:</span> <a href={website} target='_blank' rel='noopenner'>{website}</a></li>
            </ul>
                
            </footer>
    </>
  )
}

export default Footer