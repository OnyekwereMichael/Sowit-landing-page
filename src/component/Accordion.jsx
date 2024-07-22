import React from 'react'
import {Accordio} from '../data/data'

function Accordion() {
  return (
    <div>
    {Accordio.map((item, i) => (
      <ul
        className='accordion mx-auto flex items-center justify-center flex-col lgg:w-[500px] smm:w-[380px] xsmm:w-[358px] xmm:w-[340px] smi:w-[300px]'
        key={i}
      >
        <li className='w-[100%] m-[11px] p-[10px] rounded-[8px] bg-[#1A1A1A]'>
          <input type="checkbox" name='accordion' id={item.id} />
          <label
            htmlFor={item.id}
            className='flex items-center justify-between p-[10px] font-semibold cursor-pointer label text-white text-[13px]'
          >
            {item.head}
            <span className='icon'>
              <i className="fas fa-plus"></i>
              <i className="fas fa-minus"></i>
            </span>
          </label>
          <div className='content text-[#fff] px-10 '>
            <p >{item.para}</p>
          </div>
        </li>
      </ul>
    ))}
  </div>
  )
}

export default Accordion;
