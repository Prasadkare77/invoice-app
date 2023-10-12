import React from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
// To read data from store we need useSelector
import { useSelector, useDispatch } from "react-redux";
import { deleteInvoice } from "../StoreAndSlices/invoiceDetailsSlice";

const InvoiceList = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();


  const invoices = useSelector((state) => state.invoice.invoices);

  const handleDelete = (ID) => {
    dispatch(deleteInvoice(ID))
  }

  return (
    <>
      <Container className="mb-5 mt-2 p-5 text-center justify-content-center shadow">
        <header className="d-flex mb-3 d-flex-row justify-content-between">
          <div>
            <h1 className="fw-bold text-uppercase tracking-wide text-4xl mb-1">
              Invoices
            </h1>
          </div>
          <div className="container text-end justify-content-center">
            <Button
              onClick={() => navigate("/invoice")}
              className="btn btn-print ms-1 me-1 shadow"
              variant="outline-secondary"
            >
              New Invoice
            </Button>
          </div>
        </header>
        <div>
          <Col className="m-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Invoice Number</th>
                  <th>Invoice Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice, index) => (
                  <tr key={invoice.ID}>
                    <td>{index + 1}</td>
                    <td>{invoice.invoiceNumber}</td>
                    <td>{invoice.invoiceDate}</td>
                    <td>
                      <Button className="me-2" variant="primary">
                        View
                      </Button>
                      <Button className="me-2" variant="primary" onClick={() => navigate(`/editInvoice/${invoice.ID}`)}>
                        Edit
                      </Button>
                      <Button className='ms-2' variant="danger" onClick={() => handleDelete(invoice.ID)}>Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </div>
      </Container>
    </>
  );
};

export default InvoiceList;
