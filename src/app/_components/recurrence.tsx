import { useContext, useState } from 'react';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Context } from './_states/Context';

const Reminder = () => {
  const recurrenceContext = useContext(Context);
  if (!recurrenceContext) {
    throw new Error('Context must be used within a DateProvider');
  }
  const {reminder, setReminder} = recurrenceContext;

  const handleReminderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReminder(event.target.value as string);
  };

  return (
    <div className="p-4 bg-white shadow-lg border rounded-lg">
      <h3 className="text-xl mb-4">Set Reminder</h3>
      <FormControl fullWidth>
        <InputLabel id="reminder-select-label">Reminder</InputLabel>
        <Select
          labelId="reminder-select-label"
          value={reminder}
          onChange={() => handleReminderChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Reminder
          </MenuItem>
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Reminder;
