import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import MainDetails from './MainDetails';
import ClientDetials from './ClientDetials';
import Dates from './Dates';
import Tables from './Tables';
import Notes from './Notes';
import Footer from './Footer';
import Button from 'react-bootstrap/Button'
import TableForm from './TableForm';
import { useSelector, useDispatch } from 'react-redux';
import { updateMyDetails } from '../StoreAndSlices/myDetailsSlice'
import { updateInvoiceDate } from '../StoreAndSlices/invoiceDateSlice'

const EditInvoice = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {ID} = useParams()
    console.log(ID);

    // const myDetails = useSelector(state => state.myDetails.myDetails)
    const invoiceDates = useSelector(state => state.invoiceDate.invoiceDates)

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

    const [description, setDescription] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()
    const [amount, setAmount] = useState()

    useEffect(()=>{
        const invoiceDate = invoiceDates.find((invoiceDate) => invoiceDate.ID === parseInt(ID))
        console.log(invoiceDate)
        if(invoiceDate){
          setInvoiceNumber(invoiceDate.invoiceNumber)
          setInvoiceDate(invoiceDate.invoiceDate)
          setDueDate(invoiceDate.dueDate)
        }
      },[ID,invoiceDates])

    //   useEffect(()=>{
    //     const myDetail = myDetails.find((myDetail) => myDetail.ID === parseInt(ID))
    //     console.log(myDetail)
    //     if(myDetail){
    //       setName(myDetail.name)
    //       setAddress(myDetail.address)
    //       setEmail(myDetail.email)
    //       setPhone(myDetail.phone)
    //       setBankName(myDetail.bankName)
    //       setBankAccount(myDetail.bankAccount)
    //       setWebsite(myDetail.website)
    //     }
    //   },[ID,myDetails])

      const handleUpdate = (e) => {
        e.preventDefault();
        const updatedInvoiceDate = {ID:parseInt(ID),invoiceNumber,invoiceDate,dueDate}
        dispatch(updateInvoiceDate({ID:parseInt(ID),updatedInvoiceDate}))
        navigate('/')
      }
      const handlePrint = () => {
        window.print()
    }

  return (
    <>
        <main className='main-container mb-5 mt-2 p-5 bg-white rounded shadow'>
            {showInvoice ? <div>
                <Header handlePrint={handlePrint} />
                <MainDetails name={name} address={address} />
                <ClientDetials clientName={clientName} clientAddress={clientAddress}  />
                <Dates invoiceNumber={invoiceNumber} invoiceDate={invoiceDate} dueDate={dueDate} />
                <Tables description={description} quantity={quantity} amount={amount} price={price} />
                <Notes notes={notes} />
                <Footer name={name} address={address} website={website} email={email} phone={phone} bankAccount={bankAccount} bankName={bankName} />

                <Button onClick={()=> setShowInvoice(false)} variant="secondary" className='shadow'>Edit Information</Button>

            </div> : (
                <>
                   <div className=''>
                        <Container fluid="lg" className='justify-content-md-center'>
                            <Form onSubmit={handleUpdate}>
                                <div className=''>
                                        <Row className='d-inline-block mb-2 me-2'>
                                            <Col className='d-block fw-bold'><Form.Label>Your Full Name</Form.Label></Col>
                                            <Col className='d-block'><Form.Control className='shadow' type="text" placeholder="Your Name" value={name} onChange={(e)=> setName(e.target.value)} /></Col>
                                        </Row>
                                        <Row className='d-inline-block mb-2'>
                                            <Col className='d-block fw-bold'><Form.Label>Enter Your Address</Form.Label></Col>
                                            <Col className='d-block'><Form.Control className='shadow' type="text" placeholder="Address" value={address} onChange={(e)=> setAddress(e.target.value)} /></Col>
                                        </Row>
                                </div>
                                
                                    <div className='mt-3'>
                                        <Row className='d-inline-block  mb-2 me-2'>
                                            <Col sm={10} className='fw-bold'><Form.Label>Enter Your Email</Form.Label></Col>
                                            <Col sm={20}><Form.Control className='shadow' type="email" placeholder="Enter Your Email" value={email} onChange={(e)=> setEmail(e.target.value)} /></Col>
                                        </Row>
                                        <Row className='d-inline-block  mb-2 me-2'>
                                            <Col sm={10} className='fw-bold'><Form.Label>Your Website</Form.Label></Col>
                                            <Col sm={20}><Form.Control className='shadow' type="text" placeholder="Website" value={website} onChange={(e)=> setWebsite(e.target.value)} /></Col>
                                        </Row>
                                        <Row className='d-inline-block mb-2'>
                                            <Col sm={10} className='fw-bold'><Form.Label>Enter Your Phone</Form.Label></Col>
                                            <Col sm={20}><Form.Control className='shadow' type="number" placeholder="Phone Number" value={phone} onChange={(e)=> setPhone(e.target.value)} /></Col>
                                        </Row>
                                    </div>
                                    <div className='mt-3'>
                                        <Row className='d-inline-block mb-2 me-2'>
                                            <Col sm={10} className='fw-bold'><Form.Label>Your Bank Name</Form.Label></Col>
                                            <Col sm={20}><Form.Control className='shadow' type="text" placeholder="Bank Name" value={bankName} onChange={(e)=> setBankName(e.target.value)} /></Col>
                                        </Row>
                                        <Row className='d-inline-block mb-2 me-2'>
                                            <Col sm={10} className='fw-bold'><Form.Label>Bank Account No</Form.Label></Col>
                                            <Col sm={20}><Form.Control className='shadow' type="number" placeholder="Bank Account Number" value={bankAccount} onChange={(e)=> setBankAccount(e.target.value)} /></Col>
                                        </Row>
                                    </div>
                                    <div className='mt-5'>
                                        <Row className='d-inline-block mb-2 me-2'>
                                            <Col xs={10} className='fw-bold'><Form.Label>Client Name</Form.Label></Col>
                                            <Col xs={20}><Form.Control className='shadow' type="text" placeholder="Client Name" value={clientName} onChange={(e)=> setClientName(e.target.value)} /></Col>
                                        </Row>
                                        <Row className='d-inline-block mb-2 me-2'>
                                            <Col xs={10} className='fw-bold'><Form.Label>Client Address</Form.Label></Col>
                                            <Col xs={20}><Form.Control className='shadow' type="text" placeholder="Client Address" value={clientAddress} onChange={(e)=> setClientAddress(e.target.value)} /></Col>
                                        </Row>
                                    </div>
                                    <div className='mt-3'>
                                        <Row className='d-inline-block mb-2 me-2'>
                                            <Col sm={10} className='fw-bold'><Form.Label>Invoice Number</Form.Label></Col>
                                            <Col sm={20}><Form.Control className='shadow' type="number" placeholder="Invoice Number" value={invoiceNumber} onChange={(e)=> setInvoiceNumber(e.target.value)} /></Col>
                                        </Row>
                                        <Row className='d-inline-block mb-2 me-2'>
                                            <Col sm={10} className='fw-bold'><Form.Label>Invoice Date</Form.Label></Col>
                                            <Col sm={20}><Form.Control className='shadow' type="date" placeholder="Invoice Date" value={invoiceDate} onChange={(e)=> setInvoiceDate(e.target.value)} /></Col>
                                        </Row>
                                        <Row className='d-inline-block mb-2 me-2'>
                                            <Col sm={10} className='fw-bold'><Form.Label>Due Date</Form.Label></Col>
                                            <Col sm={20}><Form.Control className='shadow' type="date" placeholder="Due Date" value={dueDate} onChange={(e)=> setDueDate(e.target.value)} /></Col>
                                        </Row>
                                    </div>
                                    <div className='mt-5'>
                                        <TableForm description={description} setDescription={setDescription} quantity={quantity} setQuantity={setQuantity} price={price} setPrice={setPrice} amount={amount} setAmount={setAmount} />
                                    </div>
                                    <div>
                                    <Row className='d-block mb-2 me-2'>
                                        <Col sm={20} className='fw-bold'><Form.Label>Additional Notes</Form.Label></Col>
                                        <Col sm={40}><Form.Control className='shadow' as="textarea" placeholder='Additional Notes To The Client' rows={3} value={notes} onChange={(e)=> setNotes(e.target.value)} /></Col>
                                    </Row>
                                    </div>

                                    <Button onClick={()=> setShowInvoice(true)} className='shadow py-2 px-8 m-2' variant="outline-primary">Preview Invoice</Button>
                                    <Button type='submit' onSubmit={()=>navigate('/')} className='shadow py-2 px-8 m-2' variant="outline-primary">Update Invoice</Button>
                            </Form>
                        </Container>
                   </div>
                </>
            )}
        </main>
    </>
  )
}

export default EditInvoice