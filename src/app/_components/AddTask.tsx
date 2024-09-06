import { Context } from './_states/Context';
import DatePicker from './Datepicker';
import { useContext, useState } from 'react';

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

  return (
    <div className='pt-12 mx-96 border-l border-r px-10 max-w-5xl relative'>
      <div className='mx-20'>
        <h1 className='mb-5 text-2xl'>Add a task</h1>
        <div className='flex gap-2'>
          <div className='w-2/3 flex justify-end'>
            <input
              className='w-3/4 p-1 border border-r-0 rounded-lg rounded-r-none bg-slate-100 outline-none'
              placeholder='Add a task'
            />
            <input
              type="text"
              disabled
              value={formattedDate != 'Invalid Date' ? formattedDate : 'No Date'}
              className='w-20 p-1 border rounded-lg rounded-l-none text-xs bg-slate-100'
            />
          </div>
          <div className='my-auto cursor-pointer relative'>
            <div onClick={() => setClicked(!clicked)}>📆</div>
            {clicked && (
              <div className='absolute top-6 left-0 bg-white shadow-lg border rounded-lg p-2 z-10'>
                <DatePicker />
              </div>
            )}
          </div>
          <div className='my-auto cursor-pointer'>➕</div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
