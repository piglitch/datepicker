import React from 'react'

const Periods = () => {
  return (
    <div className="mt-auto mb-8 mx-auto">
      <div className="flex p-3 justify-center gap-5 border rounded-full">
        <div className="py-1 px-3 rounded-full text-center my-auto cursor-pointer hover:bg-slate-200 bg-opacity-30">Day</div>
        <div className="py-1 px-3 rounded-full text-center my-auto cursor-pointer hover:bg-slate-200 bg-opacity-30">Week</div>
        <div className="py-1 px-3 rounded-full text-center my-auto cursor-pointer hover:bg-slate-200 bg-opacity-30">Month</div>
        <div className="py-1 px-3 rounded-full text-center my-auto cursor-pointer hover:bg-slate-200 bg-opacity-30">Year</div>
      </div>
    </div>
  )
}

export default Periods