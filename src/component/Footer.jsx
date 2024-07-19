import React from 'react'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import linkedin from '../assets/linkedin.svg'
import instagram from '../assets/instagram.svg'
import SowwitLogo from '../assets/Logo.svg';
import topdown from '../assets/topdown.png'


function Footer() {
  return (
    <div>
      <footer className='flex flex-col items-center gap-6 mt-10 bg-[#F5F6F8] p-1'>
      <img src={SowwitLogo} alt="" className='my-3 w-[12%] smm:w-[18%] xmm:w-[30%] smi:w-[35%] lgg:w-[20%]'/>
        <div className='flex gap-8 my-2 items-center'>
            <img src={facebook} alt="" className='w-6'/>
            <img src={twitter} alt="" className='w-6'/>
            <img src={linkedin} alt="" className='w-6'/>
            <img src={instagram} alt="" className='w-6'/>
        </div>

        <div className='flex gap-8 my-2 smm:flex-wrap smm:justify-center'>
            <p className='font-semibold'>About Sowwit</p>
            <p  className='font-semibold'>Privacy Policy</p>
            <p  className='font-semibold'>Terms of Use</p>
            <p  className='font-semibold'>Contact Us</p>
        </div>

        <p className='my-2 text-[#8E9096] font-Urbanist'>&copy; 2024 Sowwit. Inc</p>

      </footer>
        <div className="flex justify-end px-10 smm:px-4 bg-[#F5F6F8] ">
              <a href="#top"><i class="fas fa-arrow-up"></i></a>
            </div>
    </div>
  )
}

export default Footer
