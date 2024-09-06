import { useContext } from 'react';
import { Context } from './_states/Context';
import { Task } from './_states/Context';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const TaskList = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error('Context must be used within a Provider');
  }
  const { tasks, setTasks } = context;

  const deleteTask = (index: number) => {
    setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="tasks max-w-5xl rounded-xl mt-10 mx-96 relative p-10 mb-20">
      <h2 className="text-2xl text-black mb-5">Task List</h2>
      {tasks.length === 0 ? (
        <p><i className='text-slate-700 ml-2'>No tasks added yet</i></p>
      ) : (
        <ul className="list-disc pl-5 text-slate-600">
          {tasks.map((task, index) => (
            <div className='flex justify-between mb-2 bg-slate-100 bg-opacity-60 p-2 rounded-lg shadow-md max-w-xl my-auto'>
              <ul key={index}>
              <strong>Task:</strong> {task.text} 
                &nbsp;
              </ul>
              <div className='text-sm flex'><i>Reminder on </i>
                <b className='ml-2'>{new Date(task.date).toLocaleDateString('en-IN', {
                    day: '2-digit',
                    month: 'short'
                  })}
                </b>
                <div onClick={() => deleteTask(index)}><DeleteOutlineIcon fontSize='small' className='ml-5 cursor-pointer'/></div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
