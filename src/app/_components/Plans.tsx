import React from 'react'

const Plans = () => {
  return (
    <div className='plan-div'>
      <div className='days grid grid-cols-7'>
        <div className='text-center'>Sun</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);"}} className='text-center'>Mon</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);"}} className='text-center'>Tue</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);"}} className='text-center'>Wed</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);"}} className='text-center'>Thu</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);"}} className='text-center'>Fri</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);"}} className='text-center'>Sat</div>
      </div>
      <div className='grid grid-cols-7 grid-rows-5'>
        <div style={{borderBottom: "1px solid rgba(0, 0, 0, 0.123);"}} className='h-32'>bsg</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);", borderBottom: "1px solid rgba(0, 0, 0, 0.123);"}} className='h-32'>bsf</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);", borderBottom: "1px solid rgba(0, 0, 0, 0.123);"}}>bsf</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);", borderBottom: "1px solid rgba(0, 0, 0, 0.123);"}}>bsf</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);", borderBottom: "1px solid rgba(0, 0, 0, 0.123);"}}>bsf</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);", borderBottom: "1px solid rgba(0, 0, 0, 0.123);"}}>bsf</div>
        <div style={{borderLeft: "1px solid rgba(0, 0, 0, 0.123);", borderBottom: "1px solid rgba(0, 0, 0, 0.123);"}}>bsf</div> 
      </div>
    </div>
  )
}

export default Plans