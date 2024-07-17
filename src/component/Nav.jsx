import React, {useState, useEffect} from 'react'
import SowwitLogo from '../assets/sowwitLogo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Nav() {
const [nav, setNav] = useState(false)

const [bgcolor, Setbgcolor] = useState('transparent')
const [textcolor, Settextcolor] = useState('white')

useEffect(() => {
  const changeColor = () => {
    if(window.scrollY >= 45){
      Setbgcolor('#fff')
      Settextcolor('#000')
    }else{
      Setbgcolor('transparent')
      Settextcolor('#fff')
    }
  }
  window.addEventListener('scroll', changeColor)
}, [])
  return (
    <div>
         {/* Navigation Bar */}
     <nav style={{backgroundColor: `${bgcolor}`}} className='p-4 flex items-center justify-between smm:px-3 shadow-md  fixed w-[100%] '>
         <img src={SowwitLogo} alt="" />
         <div style={{color: `${textcolor}`}} className='smm:hidden lgg:hidden'>
             <a href="" className='mx-5  text-[#4F525A] text-[16px] '>Features</a>
             <a href="" className='mx-5  text-[#4F525A] text-[16px]'>About Sowwit</a>
             <a href="" className='mx-5  text-[#4F525A] text-[16px]'>Benefits</a>
           <a href="" className='mx-5 text-[#4F525A] text-[16px]'>FAQs</a>
              <a href="" className='mx-5  text-[#4F525A] text-[16px]'>Contact Us</a>
        </div>
        <a href='#signup' className='  bg-[#227EFD] border-[#262626]  text-[#FFFFFF] py-[8px] px-[15px] rounded-full text-[14px] smm:hidden lgg:hidden'>Join Waitlist</a>

        <div className='dropdown'>
           {nav ? <AiOutlineClose  size={32} onClick={() => setNav(!nav)}/> : <AiOutlineMenu  onClick={() => setNav(!nav)} size={32}/>}
        </div>
      </nav>

        {/* mobile navigtion bar  */}
            <div className ={`${nav ? 'show-nav' : ''} toggle  shadow-2xl`}>
                    <a href="" className='mx-5 font-semibold '>Features</a>
                    <a href="" className='mx-5 font-semibold '>About Sowwit</a>
                    <a href="" className='mx-5 font-semibold '>Benefits</a>
                    <a href="" className='mx-5 font-semibold '>FAQs</a>
                    <a href="" className='mx-5 font-semibold '>Contact U</a>
                    <div className='  bg-[#227EFD] border-[#262626]  text-[#FFFFFF] py-[8px] px-[15px] rounded-full text-[14px]  smm:text-[16px] smm:w-[80%] smm:text-center lgg:w-[85%] lgg:text-center'>Join Waitlist</div>
                </div>

          {/* ends */}
    </div>
  )
}

export default Nav
