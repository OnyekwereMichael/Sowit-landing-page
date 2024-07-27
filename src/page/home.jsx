import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import { benefit, faq } from '../data/data'
import SwiperNavbutton from "../component/SwiperNavbutton";
import Accordion from '../component/Accordion'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import Contact from '../component/Contact' 
import {images} from '../component/Image'

function Home() {
  useEffect(() => {
    const getInputValue = () => {
      let join = document.getElementById('join');

      join.addEventListener('click', () => {
        let input1 = document.getElementById('input1');
        let input2 = document.getElementById('input2');
        const input1value1 = input1.value;
        localStorage.setItem('storedValue', input1value1);
        input2.value = localStorage.getItem('storedValue');
      });
    };

    getInputValue();
  }, []);

  const [contact, setContact] = useState(false)
  
  return (
    <div>
     { <Nav closeModal={setContact}/>}
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className=''>
      <div className='px-3 smi:px-1 sm:px-2 xsm:px-2 xmm:px-2'>
       <div className='gradient pt-6 pb-4 bg-gradient-to-t from-[#FFFFFF] to-[#F5F6F8] rounded-[50px] sm:rounded-[35px] smi:rounded-[25px] xmm:rounded-[35px] xsm:rounded-[35px] sm:py-3 xsm:py-3 xmm:py-3 lg:py-1' id='top'>
          <div className='text-center mt-10 sm:px-2 lg:px-2 sm:mt-2' >
            <h1 className='text-3xl  sm:text-[24px] smi:text-[18px] lg:text-[26px] xsm:text-[22px] font-Urbanist font-extrabold mt-14 smi:mt-0 xmm:mt-1 xsm:mt-0 sm:mt-0 lg:mt-3'>
              <span className = "text-transparent bg-clip-text bg-gradient-to-r from-[#237FFF] to-[#FF8A39] ">transform</span> and scale your business<br className='lg:hidden sm:hidden xlg:hidden'/> effectively with Sowwit
            </h1>
            <p className='mt-3 sm:text-sm sm:mt-2 sm:px-2 font-Lato'>
              join our waitlist and be one of the first to get access to our suite of business tools to<br className='sm:hidden lg:hidden'/>
              help you manage and scale your business once we launch publicly!
            </p>
            <div className='flex items-center justify-center my-5 mt-5 sm:px-5 xsm:px-2 xmm:px-1 smi:px-1'>
              <div className="bg-white p-[5px] w-[400px] rounded-full flex items-center justify-between border-[#227EFD] border-[2px] mx-auto sm:p-[8px]  smi:[430px] sm:w-[500px]">
                <input type="text" className="bg-transparent outline-none rounded-xl  font-Urbanist smi:w-[130px] smi:text-xs sm:text-sm xmm:text-sm xsm:text-sm px-1 " placeholder="enter your email address" id='input1'/>
                <div className='flex bg-[#227EFD] items-center rounded-full py-[10px] px-[15px] gap-3 sm:px-[11px]'>
                  <a  href ='#signup' className='text-[#FFFFFF] text-[12px] sm:text-[13px] xmm:text-[10px] smi:text-[9px]' id='join' onClick={() => {
                    getInputValue()
                  }} >join the Waitlist</a>
                  <div>
                      <img src={images.arrow} alt="arrow" className='smi-hidden'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Features Section */}
          <div className='px-2'>
            <div className='flex justify-center items-center gap-2 bg-[#E9F2FF] text-[#227EFD] mx-auto w-[10%] py-2 px-6 rounded-full mt-16 sm:w-[30%] sm:mt-10 sm:mb-3  xmm:w-[31%] smi:w-[36%] xlg:w-[16%]'>
              <img src={images.star} alt="star" />
              <p className='text-sm font-Urbanist font-semibold'>features</p>
            </div>
            <h1 className='text-center mt-2 text-2xl font-semibold sm:text-[20px] smi:text-[17px]'>
              manage and scale your business<br className='lg:hidden sm:hidden xlg:hidden'/> with Sowwit
            </h1>
            <p className='mt-3 text-center sm:text-sm sm:mt-2 sm:px-2 text-[#8E9096] font-Urbanist'>
              sowwit offers you easy-to-use and intuitive tools and features that help you streamline your<br className='sm:hidden lg:hidden'/>
              operations, manage clients effortlessly, and grow your business effectively.
            </p>
          </div>
        </div>

            {/* Features Cards */}
            <div className="flex justify-center items-center mt-3">
              <div className='grid grid-cols-3 justify-center lg:grid-cols-2 gap-5 px-12 py-4 sm:grid-cols-1 sm:px-4'>
                <div className=' p-3 rounded-3xl lin'>
                  <img src={images.icon1} alt="Client Management Icon" className='mx-auto my-3' />
                  <h1 className='text-black font-Urbanist font-extrabold text-center'>seamless Client Management</h1>
                  <p className='text-center my-2 font-Urbanist'>
                    Manage all your clients and their information in one place to enhance relationships<br className='sm:hidden lg:hidden'/> and service delivery.
                  </p>
                  <img src={images.activeCustomer} alt="Active Customer" className='mt-4 mx-auto' />
                </div>
                <div className="pt-3 rounded-3xl pl-4 lin flex flex-col ">
                    <img src={images.icon2} alt="Invoicing Icon" className="mx-auto my-3" />
                      <h1 className="text-black font-Urbanist font-extrabold text-center px-3">effortless Invoicing</h1>
                      <p className="text-center my-2 font-Urbanist px-3">
                          Create and manage invoices effortlessly to speed up billing and improve cash flow.
                      </p>
                    <div className="mt-auto flex justify-end rounded-xl">
                        <img src={images.trackboard} alt="Trackboard" />
                    </div>
                </div>
                <div className='p-3 rounded-3xl lg:w-[87vw] sm:w-[100%]  lin'>
                  <img src={images.icon3} alt="Order Tracking Icon" className='mx-auto my-3' />
                  <h1 className='text-black font-Urbanist font-extrabold text-center'>order Tracking & Management</h1>
                  <p className='text-center my-2 font-Urbanist'>
                    Track orders from start to finish with complete visibility for timely deliveries.
                  </p>
                  <div className='rounded-xl'>
                        <img src={images.Group2} alt="Trackboard" className='mt-4 mx-auto' />
                  </div>
                </div>
              </div>
            </div>
 
          {/* Analytics Section */}
          <div className="flex justify-center gap-3 mt-3  px-12 sm:flex-wrap sm:px-5 sm:mt-0 ">
            <div className='lin px-6 pt-6 rounded-3xl  sm:my-3'>
              <div className='flex items-center gap-2 sm:flex-wrap lg:flex-wrap'>
                <img src={images.icon4} alt="Analytics Icon" className='w-14 h-14' />
                <div>
                  <h1 className='text-black text-xl sm:text-lg lg:text-lg font-Urbanist font-extrabold'>AI Powered Business Intelligence & Analytics</h1>
                  <p className='text-sm lg:my-1 font-Urbanist'>
                    Gain valuable customized insights with analytics tools powered by AI for informed decision-making.
                  </p>
                </div>
              </div>
              <div className='mt-4'>
                    <img src={images.insightDemo} alt="insightDemo" />  
              </div>
            </div>

            {/* Inventory Section */}
            <div className='lin px-6 pt-3 rounded-3xl sm:my-3  flex flex-col'>
              <div className='flex items-center gap-2 sm:flex-wrap lg:flex-wrap py-3'>
                <img src={images.icon9} alt="Inventory Icon" className='w-14 h-14' />
                <div>
                  <h1 className='text-black  text-xl sm:text-lg lg:text-lg font-Urbanist font-extrabold'>advanced Inventory Management</h1>
                  <p className='text-sm lg:my-1 font-Urbanist'>
                    Monitor and manage inventory levels in real-time to avoid stockouts and overstocking.
                  </p>
                </div>
              </div>
              <div className=' mt-auto flex justify-end'>
                  <img src={images.inventory} alt="inventory" />
              </div>
            </div>
          </div>
        </section>
       
       {/* about sowwit  */}
        <section className='flex items-center  px-8 sm:px-0'>
            <div className='px-3 sm:px-0'>
                    <div className='flex items-center gap-2 bg-[#FEF2E6] text-[#F77D08] w-[150px]  py-2 px-4 rounded-full mt-16 sm:mx-3 sm:justify-center'>
                        <img src={images.scissor} alt="star" />
                        <p className='text-sm font-Urbanist font-semibold'>about sowwit</p>
                  </div>

                    <section className='flex items-center justify-center mx-auto '>
                            <div className='mx-auto '>
                                <div className='flex  lg:flex-row items-center justify-between gap-8 sm:flex-wrap sm:px-4 lg:flex-wrap xlg:flex-wrap'>
                                <div className='flex flex-col items-start'>
                                    <h1 className='text-black font-semibold text-3xl my-3 sm:text-2xl'>
                                    so what’s the deal — what really<br className='sm:hidden lg:hidden xlg:hidden' /> is Sowwit?
                                    </h1>
                                    <p className='max-w-[900px] text-[#8E9096]  font-Urbanist'>
                                    Sowwit is your all-in-one business management solution designed to streamline and simplify your operations. Whether you're a fashion designer, tailor, or entrepreneur, Sowwit provides powerful tools to manage clients, track orders, and optimize workflows. Our mission is to empower businesses with intuitive and comprehensive solutions, helping you focus on what you do best – creating and innovating. Join us in revolutionizing the way you manage and scale your business, and discover the future of seamless business management with Sowwit.
                                    </p>
                                    <div className='flex bg-[#227EFD] items-center rounded-full py-[9px] px-[15px] gap-3 w-auto my-2 sm:my-3'>
                                    <a href='#signup' className='text-white text-sm'>join the Waitlist</a>
                                    <img src={images.arrow} alt="arrow" />
                                    </div>
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <img src={images.video} alt="Sowwit video" className='xlg:w-screen' />
                                </div>
                                </div>
                            </div>
                </section>

                </div>
        </section>

   {/* benefit of sowwit  */}
        <section className='bg-[#F7FBFF] mt-8 sm:py-[0px]'>
            <div className='px-8 sm:p-[1px] py-5 lg:px-4 xlg:px-4'>
                <div className='flex items-center gap-2 bg-[#E9F2FF] text-[#227EFD]  w-[10%] py-2 px-6 rounded-full sm:w-[27%] mt-5 sm:px-0 sm:justify-center xmm:w-[30%] smi:w-[35%] lg:w-[16%] xlg:w-[13%] mx-4'>
                    <img src={images.rocketButton} alt="star" />
                    <p className='text-sm font-Urbanist font-semibold'>benefits</p>
                </div>

                <div className='px-4'>
                    <h1 className='text-black font-semibold text-3xl my-3 sm:text-2xl smi:text-xl'>unlock the full potential of your<br className='sm:hidden lg:hidden xlg:hidden'/> business</h1>
                    <p className='font-Urbanist'>discover how Sowwit’s powerful features can help transform your business operations and<br className='lg:hidden sm:hidden xlg:hidden'/> drive growth and improved customer retention.</p>
                </div>
         </div>
          
       
          <div className='grid grid-cols-4 p-8 rounded-lg   sm:hidden lg:hidden xlg:hidden'>
                {benefit.map((item, i) => {
                    return (
                        <div key={i} className=' lg:my-8  p-4 ml-4 border-l border-b border-gray-100'>
                          <div className='w-[14%] h-[14%] mb-5'>
                              <img src={item.img} alt="Icons"/>
                            </div>
                            <h1 className='text-[16px] font-bold my-1 mt-4 font-Urbanist'>{item.heading}</h1>
                            <p className='text-[14px] font-Urbanist text-[#8E9096]'>{item.paragraph}</p>
                        </div>
                    )
                })}
            </div>

            {/* mobile screen  */}
       <Swiper 
          spaceBetween={1}
          slidesPerView={1}
          breakpoints={{
            540: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
      className='slides'>
      <section className="grid grid-cols-3 sm:grid-cols-1">

        {benefit.map((item, index) => {
          return (
            <SwiperSlide>
                 <div key={index} className='my-5 sm:mb-3 sm:mt-6 sm:px-4 lg:px-8 lg:pt-6 xlg:px-8 xlg:pt-6 '>
                            <img src={item.img} alt="Icons" />
                            <h1 className='text-2xl font-bold font-Urbanist my-2 lg:text-lg sm:text-lg'>{item.heading}</h1>
                            <p className='text-[#8E9096 ] text-sm lg:text-[13px]  font-Urbanist sm:text-sm'>{item.paragraph}</p>
                     </div>
            </SwiperSlide>
          );
        })}
      </section>
          <SwiperNavbutton />
      </Swiper>
        </section>

{/* FAQ Section  */}
        <section>
        <div className='px-8 sm:px-4'>
                <div className='flex items-center gap-2 bg-[#EFE9FF] text-[#227EFD]  w-[9%] py-2 px-6 rounded-full mt-16 sm:w-[27%] sm:justify-center xmm:w-[30%] smi:w-[35%] lg:w-[15%] xlg:w-[12%]'>
                    <img src={images.Faq} alt="star" />
                    <p className='text-sm text-[#6F5DE6]'>FAQS</p>
                </div>

                <div>
                    <h1 className='text-black font-semibold text-3xl my-3 sm:text-2xl'>you probably have some questions;<br className='sm:hidden lg:hidden xlg:hidden'/>  we got you!</h1>
                    <p className='font-Urbanist text-[#8E9096]'>here are some of the most popular questions we’ve been asked by other [early] users of<br className='sm:hidden lg:hidden xlg:hidden'/> sowwit and business owners just like you have asked us in the past.</p>
                </div>

                <div className='grid grid-cols-2 justify-center items-center py-5 gap-5 rounded-lg   duration-300 sm:hidden  lg:my-6 lg:gap-6 lg:py-0' >
                {faq.map((item, index) => {
                    return (
                 <div key={index} className='my-5'>
                     <div className='flex  gap-2'>
                            <img src={item.img} alt="Analytics Icon" className='w-8 h-8' />
                            <div>
                            <h1 className='text-[#25262A] font-Urbanist text-lg font-bold'>{item.heading}</h1>
                            <p className='text-sm text-[#4F525A] font-Urbanist leading-6'>
                                {item.paragraph}
                            </p>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
         </div>
         <div class="accordion-container">
  <Accordion />
</div>
        </section>
 
  {/* contact section      */}
        <section className='flex justify-center items-center my-5 mb-10 sm:px-3 sm:my-10 lg:px-6 lg:my-10 '>
            <div className='flex justify-between items-center border-gray-200  border-solid border-[1px] mx-auto p-2 rounded-xl sm:flex-wrap sm:gap-4 lg:flex-wrap lg:p-4 xlg:p-4'>
                <div className='flex  gap-2 items-center lg:gap-4'>
                        <img src={images.profile2} alt="Analytics Icon"  />
                      <div>
                        <h1 className='text-[#25262A]  font-extrabold text-lg smi:text-[17px]'>still have questions?</h1>
                        <p className='text-sm text-[#25262A] font-Urbanist'>perhaps you didn't find the answer you're looking for; feel free to ask us anything! </p>
                    </div>
                </div>

                <div className='flex bg-[#227EFD] items-center rounded-full py-[12px] px-[15px] gap-3 mx-10 sm:w-[100%] sm:justify-center lg:w-[80%] lg:justify-center lg:mx-auto lg:my-1 cursor-pointer' onClick={() => {
                    setContact(true)
                  }}>
                  <img src={images.envelop} alt="arrow" />
                  <a className='text-[#FFFFFF] text-[12px] font-Lato font-bold'>Contact Us</a>
                </div>
             </div>
        </section>

     {/* joining waitlist  */}
        <section className='flex items-center justify-around  bg-[#1666D4] py-[2px] pb-0 sm:px-4 sm:py-[1px] sm:flex-wrap  xlg:px-4' id='signup'>
          <div>
            <div className='flex items-center gap-2 bg-[#4b8eec] text-[#fff]  w-[20%] py-2 px-6 mx-8 rounded-full mt-16 sm:w-[45%] sm:justify-center smi:w-[65%] lg:w-[45%] xlg:w-[27%] xsm:w-[50%] xmm:w-[50%] smi:mx-0 sm:mx-0 xmm:mx-0 xlg:mx-3'>
                    <img src={images.trophy} alt="star" />
                    <p className='text-sm font-semibold font-Urbanist'>join the waitlist</p>
            </div>

                <div className='px-8 smi:p-2 sm:p-2 xlg:p-4 lg:px-8'>
                    <h1 className='font-semibold text-3xl my-3 text-white sm:text-lg smi:text-[15px] lg:text-[20px]'>Be part of the first to experience<br className='sm:hidden lg:hidden xlg:hidden'/>  the future of business management<br className='xlg:hidden lg:hidden'/> with sowwit!</h1>
                    <p className='text-white font-Urbanist'>Join our waitlist for exclusive early access to Sowwit. Transform your business and stay ahead with<br className='sm-hidden lg:hidden xlg:hidden'/> our powerful tools.</p>
                </div>
                        <img src={images.customerDashboard} alt="" />    
          </div>

 {/* wait list form  */}
        <div className='mt-4 p-4 bg-white w-[30%] rounded-3xl sm:w-[95%] sm:mx-auto sm:my-6 lg:w-[45%]  xlg:w-[60%] '>
              <img src={images.medal} alt="" />
              <div className='my-2'>
                <h1 className='font-semibold text-xl'>sign up for early access</h1>
                <p className='text-sm text-[#8E9096] font-Urbanist mt-2'>Get exclusive early access to Sowwit and be among the first to transform your business.</p>
              </div>
                
                <div className='my-4'>
                <div className='grid grid-cols-2 items-center gap-2 smi:grid-cols-1'>
                  <div className='flex items-center border-gray-200  border-solid border-[1px] rounded-full p-[10px]  gap-2'>
                      <img src={images.user} alt="" />
                      <input type="text" placeholder='first name' required className='outline-none border-none bg-transparent text-xs  sm:w-[110px] xmm:w-[110px] xsm::w-[110px] font-Urbanist'/>
                  </div>
                  <div className='flex items-center border-gray-200  border-solid border-[1px]  rounded-full p-[10px]  gap-2'>
                      <img src={images.user} alt="" />
                      <input type="text" placeholder='last name' required className='outline-none border-none bg-transparent text-xs  sm:w-[110px] xmm:w-[110px]  xsm::w-[110px] font-Urbanist'/>
                  </div>
              </div>

                <div className='flex items-center border-gray-200  border-solid border-[1px]  rounded-full p-[10px]  gap-2 my-3'>
                      <img src={images.businessmail} alt="" />
                      <input type="text" placeholder='your business email' required className='outline-none border-none bg-transparent text-xs w-[200px] font-Urbanist' id='input2'/>
                  </div>

                <div className='flex items-center border-gray-200  border-solid border-[1px]  rounded-full p-[10px]  gap-2 my-3'>
                      <img src={images.phone} alt="" />
                      <input type="text" placeholder='your phone number' required className='outline-none border-none bg-transparent text-xs font-Urbanist'/>
                  </div>

                 <div className='flex items-center border-gray-200  border-solid border-[1px]  rounded-full p-[10px] gap-2 my-3'>
                     <img src={images.building} alt="" />
                    <select name="" id="" className="w-80 sm:w-full outline-none border-none bg-transparent  font-Urbanist">
                      <option value="" className="outline-none border-none bg-transparent  font-Urbanist">Industry</option>
                    </select>
                  </div>
                </div>
                
                  <div className='flex bg-[#227EFD] items-center justify-center rounded-full py-[9px] px-[15px] gap-3  my-3'>
                    <a  href ='#signup' className='text-[#FFFFFF] text-[14px] sm:text-[13px] xmm:text-[10px] smi:text-[7px] font-Urbanist font-bold' id='join'>join the waitlist</a>
                    <div>
                        <img src={images.arrow} alt="arrow" className='smi-hidden'/>
                    </div>
                  </div>

                  <div className='my-4'>
                    <p className='text-sm text-center font-Urbanist'>By joining the waitlist, you agree to our <span className='text-[#F77D08]'>Terms of  Service</span> and <span className='text-[#F77D08]'>Privacy Policy</span></p>
                  </div>
        </div>
        </section>
      </main>
      { <Footer closeModal={setContact}/>}
      {contact ? <Contact closeModal = {setContact}/> : ''}
    </div>
  );
}

export default Home;
