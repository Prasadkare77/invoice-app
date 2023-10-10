import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Invoice = () => {
    const handlePrint = () => {
        window.print()
    }
  return (
    <>
        <main className=' container mb-5 mt-2 p-5 bg-white rounded shadow'>
            <header className='d-flex mb-5 d-flex-row justify-content-between'>
                <div>
                    <h1 className='fw-bold text-uppercase tracking-wide text-4xl mb-3'>Invoice</h1>
                </div>
                <div>
                    <ul className='d-flex d-flex-wrap text-start justify-content-center'>
                        <li><Button onClick={handlePrint} className='btn btn-print' variant="primary">Print</Button></li>
                        <li><Button onClick={handlePrint} className='btn btn-download' variant="primary">Download</Button></li>
                        <li><Button onClick={handlePrint} className='btn btn-send' variant="primary">Send</Button></li>
                    </ul>
                </div>
            </header>

            {/* Your Details */}
            <section className='flex flex-col text-end justify-content-end'> 
                <h2 className='text-4xl text-uppercase'>Prasad Kare</h2>
                <p>Address</p>
            </section>
            {/* CLient Details */}
            <section className='mt-5'>
                <h2 className='text-4xl text-uppercase'>Client's Name</h2>
                <p>Client's Address</p>
            </section>

            {/* date */}
            <article className='my-5 d-flex text-start justify-content-end'>
                <ul>
                    <li><span className='fw-bold'>Invoice Number:</span></li>
                    <li><span className='fw-bold'>Invoice Date:</span></li>
                    <li><span className='fw-bold'>Due Date:</span></li>
                </ul>
            </article>

            {/* Table */}
            <div className='my-5'>This is the table</div>

            {/* Notes */}
            <section className='mb-5'> 
                {/* text area */}
                <p>Notes to the Client</p>
            </section>

            {/* Footer */}
            <footer >
                <ul className='d-flex d-flex-wrap text-start jutify-content-center'>
                    <li><span className='fw-bold'>Your Name:</span> Prasad Kare</li>
                    <li><span className='fw-bold'>Your Email:</span> prasad@gmail.com</li>
                    <li><span className='fw-bold'>Phone Number:</span> 9876543210</li>
                    <li><span className='fw-bold'>Bank:</span> Bank Account</li>
                    <li><span className='fw-bold'>Account Holder:</span> Prasad Kare</li>
                    <li><span className='fw-bold'>Account Number:</span> 123 456 789</li>
                    <li><span className='fw-bold'>Website:</span> http://invoices.com</li>
                </ul>
            </footer>
        </main>
    </>
  )
}

export default Invoice