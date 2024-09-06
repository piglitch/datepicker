import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Context } from './_states/Context';

export default function DatePicker() {
  const [accepted, setAccepted] = useState(false);

  const clickedContext = useContext(Context);
  if (!clickedContext) {
    throw new Error('Context must be used within a DateProvider');
  }
  const { clicked, setClicked } = clickedContext;
  // Use context and check for undefined
  const dateContext = useContext(Context);
  
  if (!dateContext) {
    throw new Error('Datepicker must be used within a DateProvider');
  }

  const { date, setDate } = dateContext;

  return (
    <div>
      {
        !accepted ? 
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDatePicker
            value={date ? dayjs(date) : null} // Handle null or invalid date safely
            onChange={(newValue) => {
              if (newValue) {
                setDate(newValue.format('YYYY-MM-DD')); // Ensure date is stored as string
              }
            }}
            onAccept={() => 
              {
                setAccepted(!accepted);
                setClicked(false);
              }
            } // Accept when user is done picking
          />
        </LocalizationProvider>  
        : <div></div> // Format the date for display
      }
    </div>
  );
}
