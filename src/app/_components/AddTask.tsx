import MyDatePicker from './Datepicker';
import { useState } from 'react';

const AddTask = () => {
  const [clicked, setClicked] = useState(false); 
  return (
    <div className='pt-12 mx-96 border-l border-r px-10 max-w-5xl'>
      <h1 className='mb-5 text-2xl'>Add a skill</h1>
      <div className='flex gap-2'>
        <input className='w-2/3 p-1 border rounded-lg bg-slate-100 outline-none' placeholder='add a skill' />
        <div className='my-auto cursor-pointer' onClick={() => setClicked(!clicked)}>📆</div>
        <div className='my-auto cursor-pointer'>➕</div>
      </div>
      <div className='ml-96 p-14'>
        {
          clicked === true ? <MyDatePicker /> : null
        }
      </div>
    </div>
  )
}

export default AddTask