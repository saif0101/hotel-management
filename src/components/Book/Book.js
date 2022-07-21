import React from 'react';
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import Box from '@mui/material/Box';

const Book = () => {
  const { bedType } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [value, setValue] = React.useState([null, null])
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>WelCome {loggedInUser.name} Let's  book a {bedType} Room for you.</h1>
      <p>Want a <Link to="/home">different room?</Link> </p>

     <div style={{marginLeft: '450px' }}>
     <LocalizationProvider
        dateAdapter={AdapterDateFns}
        localeText={{ start: 'Check-in', end: 'Check-out' }}
      >
        <DateRangePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
     </div>
    </div>
  );
};

export default Book;