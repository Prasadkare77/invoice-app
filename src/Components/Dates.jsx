import React from 'react'

const Dates = ({invoiceNumber, invoiceDate, dueDate}) => {
  return (
    <>
        <article className='my-5 d-flex text-start justify-content-end'>
                <ul>
                    <li className='p-1'><span className='fw-bold p-1'>Invoice Number: </span>{invoiceNumber}</li>
                    <li className='p-1'><span className='fw-bold p-1'>Invoice Date: </span>{invoiceDate}</li>
                    <li className='p-1'><span className='fw-bold p-1'>Due Date: </span>{dueDate}</li>
                </ul>
        </article>
    </>
  )
}

export default Dates