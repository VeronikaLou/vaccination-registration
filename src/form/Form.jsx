import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import React, { useState } from 'react';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import { CenterSelection } from './CenterSelection';
import { VaccinationDate } from './VaccinationDate';
import { KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const Form = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birtdate, setBirthdate] = useState(null);
  const [selectedCenter, setSelectedCenter] = useState('');
  const [vaccinationDate, setVaccinationDate] = useState(null);
  const [insurance, setInsurance] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumer] = useState('');
  const [gender, setGender] = useState('');

  return (
    <Container className={classes.root}>
      <TextField
        id="standard-basic"
        label="Jméno"
        onChange={(event) => {
          setName(event.target.value);
        }} />
      <TextField
        id="standard-basic"
        label="Příjmení"
        onChange={(event) => {
          setSurname(event.target.value);
        }}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Pohlaví</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          onChange={(event) => { setGender(event.target.value) }}
        >
          <MenuItem value="woman">Žena</MenuItem>)
          <MenuItem value="man">Muž</MenuItem>)
      </Select>
      </FormControl>
      <KeyboardDatePicker
        format="MM/dd/yyyy"
        margin="normal"
        disableToolbar
        disableFuture
        id="date-picker-dialog"
        label="Datum narození"
        value={birtdate}
        onChange={setBirthdate}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
      <TextField
        id="standard-basic"
        label="Adresa"
        onChange={(event) => {
          setAddress(event.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="E-mail"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Telefonní číslo"
        onChange={(event) => {
          setPhoneNumer(event.target.value);
        }}
      />
      <TextField
        id="standard-basic"
        label="Pojišťovna"
        onChange={(event) => {
          setInsurance(event.target.value);
        }}
      />
      <CenterSelection setSelectedCenter={setSelectedCenter} selectedCenter={selectedCenter} />
      <VaccinationDate
        setVaccinationDate={setVaccinationDate}
        vaccinationDate={vaccinationDate}
        disabled={selectedCenter === ''}
      />
      <Button variant="contained" color="primary">
        Registrovat
      </Button>
    </Container>
  );
}

