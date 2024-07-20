import React, {useState, useEffect} from 'react'
import SowwitLogo from '../assets/Logo.svg';

function Nav() {
const [bgcolor, Setbgcolor] = useState('white')
const [textcolor, Settextcolor] = useState('white')

useEffect(() => {
  const changeColor = () => {
    if(window.scrollY >= 45){
      Setbgcolor('#fff')
      Settextcolor('#000')
    }else{
      Setbgcolor('white')
      Settextcolor('#fff')
    }
  }
  window.addEventListener('scroll', changeColor)
}, [])
  return (
    <div>
         {/* Navigation Bar */}
     <nav style={{backgroundColor: `${bgcolor}`}} className='p-4 flex items-center justify-between smm:px-3 fixed w-[100%] z-10'>
         <img src={SowwitLogo} alt="" />
         <div style={{color: `${textcolor}`}} className='smm:hidden lgg:hidden'>
             <a href="" className='mx-5  text-[#4F525A] text-[16px] '>Features</a>
             <a href="" className='mx-5  text-[#4F525A] text-[16px]'>About Sowwit</a>
             <a href="" className='mx-5  text-[#4F525A] text-[16px]'>Benefits</a>
           <a href="" className='mx-5 text-[#4F525A] text-[16px]'>FAQs</a>
              <a href="" className='mx-5  text-[#4F525A] text-[16px]'>Contact Us</a>
        </div>
        <a href='#signup' className='  bg-[#227EFD] border-[#262626]  text-[#FFFFFF] py-[8px] px-[15px] rounded-full text-[14px] '>join Waitlist</a>

        {/* <div className='dropdown'>
           {nav ? <AiOutlineClose  size={32} onClick={() => setNav(!nav)}/> : <AiOutlineMenu  onClick={() => setNav(!nav)} size={32}/>}
        </div> */}
      </nav>

      
    </div>
  )
}

export default Nav
