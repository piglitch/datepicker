import { Context } from './_states/Context';
import DatePicker from './Datepicker';
import { useContext, useState } from 'react';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AddIcon from '@mui/icons-material/Add';

const AddTask = () => {
  const clickedContext = useContext(Context);
  if (!clickedContext) {
    throw new Error('Context must be used within a DateProvider');
  }
  const { clicked, setClicked } = clickedContext;

  const dateContext = useContext(Context);  
  if (!dateContext) {
    throw new Error('Context must be used within a DateProvider');
  }
  const { date, setDate } = dateContext;
  
  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short'
  });

  const taskContext = useContext(Context); 
  if (!taskContext) {
    throw new Error('Context must be used within a DateProvider');
  }
  const {tasks, setTasks} = taskContext;

  const [taskText, setTaskText] = useState('')

  const addTask = () => {
    if (!taskText.trim()) {
      alert('Task text cannot be empty');
      return;
    }

    const task = {
      text: taskText,
      date: date,
    };

    setTasks((prev) => [...prev, task])
    // Here you would handle adding the task to your task list
    console.log('Task added:', task);

    // Clear the input field after adding the task
    setTaskText('');
  };

  return (
    <div className='mt-12 mx-96 p-10 rounded-xl max-w-5xl relative bg-slate-700 bg-opacity-20 shadow-md'>
      <div className='mx-20'>
        <h2 className='mb-5 text-2xl'>Add a task</h2>
        <div className='flex gap-2'>
          <div className='flex justify-start'>
            <input
              className='w-96 p-1 border border-r-0 rounded-lg rounded-r-none bg-slate-100 outline-none'
              placeholder='Add a task'
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
            />
            <input
              type="text"
              disabled
              value={formattedDate != 'Invalid Date' ? formattedDate : 'No Date'}
              className='w-20 p-1 border rounded-lg rounded-l-none text-xs bg-slate-100'
            />
          </div>
          <div className='my-auto cursor-pointer relative'>
            <div onClick={() => setClicked(!clicked)}><CalendarMonthIcon color='action' /></div>
            {clicked && (
              <div className='absolute top-6 left-0 bg-white shadow-lg border rounded-lg p-2 z-10'>
                <DatePicker />
              </div>
            )}
          </div>
          <div className='my-auto cursor-pointer' onClick={() => addTask()}><AddIcon color='action' /></div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
