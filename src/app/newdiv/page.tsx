"use client"

import DatePicker from "react-datepicker";
import "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Newdiv() {
  return (
    <div className="bg-black">
      <DatePicker dateFormat="yyyy/mm/dd"/>
    </div>
  )
}