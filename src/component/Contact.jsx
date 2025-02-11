import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact({closeModal}) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_2a3nvfj', 'template_2pf78fg', form.current, {
          publicKey: 'O-r2QUaEJRNUXmAWv',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log('message sent')
            e.target.reset();
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className='flex justify-center mx-auto items-center p-6'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col modalbg w-[100vw]'>
        <div className='bg-white flex-col flex p-4 rounded-3xl sm:w-[90vw]'>
            <div className='flex justify-end'>
                <button onClick={() => {
                    closeModal(false)
                }} className='flex  items-center justify-center bg-black text-white p-3 rounded-3xl w-[30px] h-[30px] text-center'>X
                </button>
            </div>
            <div>
                 <h1 className='text-[#25262A]  font-extrabold text-lg smi:text-[17px]'>Contact us</h1>
                   <p className='text-sm text-[#25262A] font-Urbanist'>perhaps you didn't find the answer you're looking for;<br /> feel free to ask us anything! </p>
                    </div>
        <label className='text-sm my-2 font-semibold text-[#333333]'>Name</label>
        <input type="text" name="user_name"  className='p-[13px] border-[1px] border-solid border-black w-[400px] rounded-xl text-sm outline-none sm:w-[320px] xsm:w-[310px] xmm:w-[310px] smi:w-[250px]'/>
        <label className='text-sm my-2 font-semibold text-[#333333]'>Email</label>
        <input type="email" name="user_email" className='p-[13px] border-[1px] border-solid border-black w-[400px] rounded-xl text-sm outline-none sm:w-[320px] xsm:w-[310px] xmm:w-[310px] smi:w-[250px]'/>
        <label className='text-sm my-2 font-semibold text-[#333333]'>Message</label>
        <textarea name="message" className='p-[10px] border-[1px] border-solid border-black w-[400px] rounded-xl text-sm outline-none sm:w-[320px] xsm:w-[310px] xmm:w-[310px] smi:w-[250px]'/>
        <input type="submit" value="Send" className='bg-black text-white border-[2px] border-solid border-black p-2 w-[400px] rounded-xl mt-10 sm:w-[320px] xsm:w-[310px] xmm:w-[310px] smi:w-[100px]'/>
        </div>
    </form>
  </div>
  )
}

export default Contact