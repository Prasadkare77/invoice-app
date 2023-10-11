import React from 'react'

const Footer = ({name, email, phone, bankName, bankAccount, website }) => {
  return (
    <>
        <footer className='border-top  border rounded pt-3 mb-3 shadow'>
            <ul className="text-start justify-content-center p-2 ">
                    <li className='d-inline-block'><span className='fw-bold m-2'>Your Name:</span> {name},</li>
                    <li className='d-inline-block'><span className='fw-bold m-2'>Your Email:</span> {email}</li>
                    <li className='d-inline-block'><span className='fw-bold m-2'>Phone Number:</span> {phone}</li>
                    <li className='d-inline-block'><span className='fw-bold m-2'>Bank:</span> {bankName}</li>
                    <li className='d-inline-block'><span className='fw-bold m-2'>Account Holder:</span> {name}</li>
                    <li className='d-inline-block'><span className='fw-bold m-2'>Account Number:</span> {bankAccount}</li>
                    <li className='d-inline-block'><span className='fw-bold m-2'>Website:</span> <a href={website} target='_blank' rel="noreferrer">{website}</a></li>
            </ul>
                
            </footer>
    </>
  )
}

export default Footer