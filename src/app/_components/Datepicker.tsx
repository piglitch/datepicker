import DatePicker from "react-datepicker";
import { useState } from "react";
import 'react-datepicker/dist/react-datepicker.css';

function MyDatePicker() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => date ? setStartDate(date) : null} // Update the date state on change
      dateFormat="dd/MM/yyyy" // Optional: set a date format
      placeholderText="Select a date" // Optional: adds a placeholder
    />
  );
}

export default MyDatePicker;
