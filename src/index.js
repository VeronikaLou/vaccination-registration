import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form } from './form/Form.jsx';
import { Header } from './Header.jsx';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { CentersContext } from './CentersContext'

const CENTERS = [{
  centrumId: '1',
  name: 'Brno - Botanická',
  street: 'Botanická',
  number: '15',
  city: 'Brno',
  zip: '63800',
}, {
  centrumId: '2',
  name: 'Brno - Veveří',
  street: 'Veveří',
  number: '155',
  city: 'Brno',
  zip: '63800',
}, {
  centrumId: '3',
  name: 'Praha - Zbraslavská',
  street: 'Zbraslavská',
  number: '233',
  city: 'Praha',
  zip: '15200',
}, {
  centrumId: '4',
  name: 'Olomouc - Olomoucká',
  street: 'Olomoucká',
  number: '33',
  city: 'Olomouc',
  zip: '25600',
}, {
  centrumId: '5',
  name: 'Ostrava - Ostravská',
  street: 'Ostravská',
  number: '3333',
  city: 'Ostrava',
  zip: '79800',
}]

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <CentersContext.Provider value={CENTERS}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Form />
      </MuiPickersUtilsProvider>
    </CentersContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

