import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Invoice from './Components/Invoice';
import InvoiceList from './Components/InvoiceList';
import EditInvoice from './Components/EditInvoice';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route exact path='/' element={<InvoiceList/>}></Route>
            <Route exact path='/invoice' element={<Invoice/>}></Route>
            <Route exact path='/editInvoice/:ID' element={<EditInvoice/>}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
