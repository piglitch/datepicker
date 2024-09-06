import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { useState, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DateContext } from './_states/DateContext';

export default function FirstComponent() {
  const [accepted, setAccepted] = useState(false);
  
  // Use context and check for undefined
  const dateContext = useContext(DateContext);
  
  if (!dateContext) {
    throw new Error('FirstComponent must be used within a DateProvider');
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
            onAccept={() => setAccepted(true)} // Accept when user is done picking
          />
        </LocalizationProvider>  
        : <div>{date ? dayjs(date).format('DD/MM/YYYY') : "No Date Selected"}</div> // Format the date for display
      }
    </div>
  );
}
