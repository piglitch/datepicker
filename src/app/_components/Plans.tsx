"use client"

import React from 'react';

const Plans = () => {
  return (
    <div className='plan-div'>
      <div className='days grid grid-cols-7'>
        <div className='text-center'>Sun</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123)"}} className='text-center'>Mon</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123)"}} className='text-center'>Tue</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123)"}} className='text-center'>Wed</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123)"}} className='text-center'>Thu</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123)"}} className='text-center'>Fri</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123)"}} className='text-center'>Sat</div>
      </div>
      <div className='grid grid-cols-7 grid-rows-5'>
        {Array.from({ length: 35 }).map((_, index) => (
          <div
            key={index}
            className="p-2 h-32"
            style={{border: "1px solid rgba(0, 0, 0, 0.123)"}}
          >
            {/* You can leave cells empty if needed */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Plans