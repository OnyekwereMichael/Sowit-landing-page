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
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className='flex justify-center mx-auto items-center p-6'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col modalbg w-[100vw]'>
        <div className='bg-white flex-col flex p-4 rounded-3xl smm:w-[90vw]'>
            <button onClick={() => {
                closeModal(false)
            }} className='flex  items-center justify-end'>X</button>
        <label className='text-sm my-2 font-semibold text-[#333333]'>Name</label>
        <input type="text" name="user_name"  className='p-[13px] border-[1px] border-solid border-black w-[400px] rounded-xl text-sm outline-none smm:w-[320px] xsmm:w-[310px] xmm:w-[310px] smi:w-[250px]'/>
        <label className='text-sm my-2 font-semibold text-[#333333]'>Email</label>
        <input type="email" name="user_email" className='p-[13px] border-[1px] border-solid border-black w-[400px] rounded-xl text-sm outline-none smm:w-[320px] xsmm:w-[310px] xmm:w-[310px] smi:w-[250px]'/>
        <label className='text-sm my-2 font-semibold text-[#333333]'>Message</label>
        <textarea name="message" className='p-[10px] border-[1px] border-solid border-black w-[400px] rounded-xl text-sm outline-none smm:w-[320px] xsmm:w-[310px] xmm:w-[310px] smi:w-[250px]'/>
        <input type="submit" value="Send" className='bg-black text-white border-[2px] border-solid border-black p-2 w-[400px] rounded-xl mt-10 smm:w-[320px] xsmm:w-[310px] xmm:w-[310px] smi:w-[100px]'/>
        </div>
    </form>
  </div>
  )
}

export default Contact
