import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import MainDetails from './MainDetails';
import ClientDetials from './ClientDetials';
import Dates from './Dates';
import Table from './Table';
import Notes from './Notes';
import Footer from './Footer';
import Button from 'react-bootstrap/Button'

const Invoice = () => {
    const [showInvoice, setShowInvoice] = useState(false)
    const [name, setName] = useState()
    const [address, setAddress] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [bankName, setBankName] = useState()
    const [bankAccount, setBankAccount] = useState()
    const [website, setWebsite] = useState()
    const [clientName, setClientName] = useState()
    const [clientAddress, setClientAddress] = useState()
    const [invoiceNumber, setInvoiceNumber] = useState()
    const [invoiceDate, setInvoiceDate] = useState()
    const [dueDate, setDueDate] = useState()
    const [notes, setNotes] = useState()

    const handlePrint = () => {
        window.print()
}
    
  return (
    <>
        <main className='container mb-5 mt-2 p-5 bg-white rounded shadow'>
            {showInvoice ? <div>
                <Header handlePrint={handlePrint} />
                <MainDetails name={name} address={address} />
                <ClientDetials clientName={clientName} clientAddress={clientAddress}  />
                <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
                <Table/>
                <Notes notes={notes} />
                <Footer name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName} />

                <Button onClick={()=> setShowInvoice(false)} variant="secondary" className='shadow'>Edit Information</Button>

            </div> : (
                <>
                   <div className='text-center justify-content-center'>
                        <Container>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Enter Your Name</Form.Label></Col>
                                <Col sm={4}><Form.Control type="text" placeholder="Your Name" value={name} onChange={(e)=> setName(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Enter Your Address</Form.Label></Col>
                                <Col sm={4}><Form.Control type="text" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Enter Your Email</Form.Label></Col>
                                <Col sm={4}><Form.Control type="email" placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Enter Your Phone</Form.Label></Col>
                                <Col sm={4}><Form.Control type="number" placeholder="Phone NUmber" value={phone} onChange={(e)=> setPhone(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Your Bank Name</Form.Label></Col>
                                <Col sm={4}><Form.Control type="text" placeholder="Bank Name" value={bankName} onChange={(e)=> setBankName(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Bank Account No</Form.Label></Col>
                                <Col sm={4}><Form.Control type="number" placeholder="Bank Account Number" value={bankAccount} onChange={(e)=> setBankAccount(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Your Website</Form.Label></Col>
                                <Col sm={4}><Form.Control type="text" placeholder="Website" value={website} onChange={(e)=> setWebsite(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Client Name</Form.Label></Col>
                                <Col sm={4}><Form.Control type="text" placeholder="Client Name" value={clientName} onChange={(e)=> setClientName(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Client Address</Form.Label></Col>
                                <Col sm={4}><Form.Control type="text" placeholder="Client Address" value={clientAddress} onChange={(e)=> setClientAddress(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Invoice Number</Form.Label></Col>
                                <Col sm={4}><Form.Control type="number" placeholder="Invoice Number" value={invoiceNumber} onChange={(e)=> setInvoiceNumber(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Invoice Date</Form.Label></Col>
                                <Col sm={4}><Form.Control type="date" placeholder="Invoice Date" value={invoiceDate} onChange={(e)=> setInvoiceDate(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Due Date</Form.Label></Col>
                                <Col sm={4}><Form.Control type="date" placeholder="Due Date" value={dueDate} onChange={(e)=> setDueDate(e.target.value)} /></Col>
                            </Row>
                            <Row className='text-center justify-content-center mb-2'>
                                <Col sm={2}><Form.Label>Additional Notes</Form.Label></Col>
                                <Col sm={4}><Form.Control as="textarea" placeholder='Additional Notes To The Client' rows={3} value={notes} onChange={(e)=> setNotes(e.target.value)} /></Col>
                            </Row>

                            <Button onClick={()=> setShowInvoice(true)} className='py-2 px-8 m-2 transition-all duration-300' variant="outline-primary">Preview Invoice</Button>
                        </Container>
                   </div>
                </>
            )}
        </main>
    </>
  )
}

export default Invoice