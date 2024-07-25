import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import  arrow from '../assets/arrow.png';
import star from '../assets/star-magic.svg';
import icon1 from '../assets/Icon (2).svg';
import activeCustomer from '../assets/activeCustomer.svg';
import trackboard from '../assets/Group 24.svg';
import Group2 from '../assets/Order Feature Card (1).svg'
import icon2 from '../assets/Icon (3).svg';
import icon3 from '../assets/Icon (4).svg';
import icon4 from '../assets/Icon 4.svg';
import icon9 from '../assets/Icon (1).svg'
import insightDemo from '../assets/Group 25.svg'
import rocketButton from '../assets/rocket-launch.svg'
import profile2 from '../assets/profile2.svg'
import envelop from '../assets/envelope.png'
import scissor from '../assets/scissors.svg'
import medal from '../assets/medal.svg'
import user from '../assets/user.svg'
import building from '../assets/buildings.svg'
import phone from '../assets/phone.svg'
import businessmail from '../assets/businessmail.svg'
import video from '../assets/Video.png'
import trophy from '../assets/trophy-star.svg'
import customerDashboard from '../assets/App Screenshot (1).png'
import inventory from '../assets/inventory.svg'
import Faq from '../assets/flask-round.svg'
import { benefit, faq } from '../data/data'
import SwiperNavbutton from "../component/SwiperNavbutton";
import Accordion from '../component/Accordion'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
import Contact from '../component/Contact' 

function Home() {
  const [contact, setContact] = useState(false)
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

  
  return (
    <div>
      <Nav />
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className=''>
      <div className='px-3 smi:px-1 smm:px-2 xsmm:px-2 xmm:px-2'>
       <div className='gradient pt-6 pb-4 bg-gradient-to-t from-[#FFFFFF] to-[#F5F6F8] rounded-[50px] smm:rounded-[35px] smi:rounded-[25px] xmm:rounded-[35px] xsmm:rounded-[35px] smm:py-3 xsmm:py-3 xmm:py-3' id='top'>
          <div className='text-center mt-10 smm:px-2 lgg:px-2 smm:mt-2' >
            <h1 className='text-3xl  smm:text-[24px] smi:text-[18px] lgg:text-[26px] xsmm:text-[22px] font-Urbanist font-extrabold mt-14 smi:mt-0 xmm:mt-1 xsmm:mt-0 smm:mt-0'>
              <span className = "text-transparent bg-clip-text bg-gradient-to-r from-[#237FFF] to-[#FF8A39] ">transform</span> and scale your business<br className='lgg:hidden smm:hidden xll:hidden'/> effectively with Sowwit
            </h1>
            <p className='mt-3 smm:text-sm smm:mt-2 smm:px-2 font-Lato'>
              join our waitlist and be one of the first to get access to our suite of business tools to<br className='smm:hidden lgg:hidden'/>
              help you manage and scale your business once we launch publicly!
            </p>
            <div className='flex items-center justify-center my-5 mt-5 smm:px-5 xsmm:px-2 xmm:px-1 smi:px-1'>
              <div className="bg-white p-[5px] w-[400px] rounded-full flex items-center justify-between border-[#227EFD] border-[2px] mx-auto smm:p-[8px] smi:[430px]">
                <input type="text" className="bg-transparent outline-none rounded-xl  font-Urbanist smi:w-[150px] smi:text-xs smm:text-sm xmm:text-sm xsmm:text-sm px-1" placeholder="enter your email address" id='input1'/>
                <div className='flex bg-[#227EFD] items-center rounded-full py-[9px] px-[15px] gap-3'>
                  <a  href ='#signup' className='text-[#FFFFFF] text-[12px] smm:text-[13px] xmm:text-[10px] smi:text-[9px]' id='join' onClick={() => {
                    getInputValue()
                  }} >join Waitlist</a>
                  <div>
                      <img src={arrow} alt="arrow" className='smi-hidden'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          {/* Features Section */}
          <div className='px-2'>
            <div className='flex justify-center items-center gap-2 bg-[#E9F2FF] text-[#227EFD] mx-auto w-[10%] py-2 px-6 rounded-full mt-16 smm:w-[30%] smm:mt-10 smm:mb-3  xmm:w-[31%] smi:w-[36%] xll:w-[16%]'>
              <img src={star} alt="star" />
              <p className='text-sm font-Urbanist font-semibold'>features</p>
            </div>
            <h1 className='text-center mt-2 text-2xl font-semibold smm:text-[20px] smi:text-[17px]'>
              manage and scale your business<br className='lgg:hidden smm:hidden xll:hidden'/> with Sowwit
            </h1>
            <p className='mt-3 text-center smm:text-sm smm:mt-2 smm:px-2 text-[#8E9096] font-Urbanist'>
              sowwit offers you easy-to-use and intuitive tools and features that help you streamline your<br className='smm:hidden lgg:hidden'/>
              operations, manage clients effortlessly, and grow your business effectively.
            </p>
          </div>
        </div>

            {/* Features Cards */}
            <div className="flex justify-center items-center mt-3">
              <div className='grid grid-cols-3 justify-center lgg:grid-cols-2 gap-5 px-12 py-4 smm:grid-cols-1 smm:px-4'>
                <div className=' p-3 rounded-3xl lin'>
                  <img src={icon1} alt="Client Management Icon" className='mx-auto my-3' />
                  <h1 className='text-black font-Urbanist font-extrabold text-center'>seamless Client Management</h1>
                  <p className='text-center my-2 font-Urbanist'>
                    Manage all your clients and their information in one place to enhance relationships<br className='smm:hidden lgg:hidden'/> and service delivery.
                  </p>
                  <img src={activeCustomer} alt="Active Customer" className='mt-4 mx-auto' />
                </div>
                <div className="pt-3 rounded-3xl pl-4 lin flex flex-col ">
                    <img src={icon2} alt="Invoicing Icon" className="mx-auto my-3" />
                      <h1 className="text-black font-Urbanist font-extrabold text-center px-3">effortless Invoicing</h1>
                      <p className="text-center my-2 font-Urbanist px-3">
                          Create and manage invoices effortlessly to speed up billing and improve cash flow.
                      </p>
                    <div className="mt-auto flex justify-end rounded-xl">
                        <img src={trackboard} alt="Trackboard" />
                    </div>
                </div>
                <div className='p-3 rounded-3xl lgg:w-[87vw] smm:w-[100%]  lin'>
                  <img src={icon3} alt="Order Tracking Icon" className='mx-auto my-3' />
                  <h1 className='text-black font-Urbanist font-extrabold text-center'>order Tracking & Management</h1>
                  <p className='text-center my-2 font-Urbanist'>
                    Track orders from start to finish with complete visibility for timely deliveries.
                  </p>
                  <div className='rounded-xl'>
                        <img src={Group2} alt="Trackboard" className='mt-4 mx-auto' />
                  </div>
                </div>
              </div>
            </div>
 
          {/* Analytics Section */}
          <div className="flex justify-center gap-3 mt-3  px-12 smm:flex-wrap smm:px-5 smm:mt-0 ">
            <div className='lin px-6 pt-6 rounded-3xl  smm:my-3'>
              <div className='flex items-center gap-2 smm:flex-wrap lgg:flex-wrap'>
                <img src={icon4} alt="Analytics Icon" className='w-14 h-14' />
                <div>
                  <h1 className='text-black text-xl smm:text-lg lgg:text-lg font-Urbanist font-extrabold'>AI Powered Business Intelligence & Analytics</h1>
                  <p className='text-sm lgg:my-1 font-Urbanist'>
                    Gain valuable customized insights with analytics tools powered by AI for informed decision-making.
                  </p>
                </div>
              </div>
              <div className='mt-4'>
                    <img src={insightDemo} alt="" />  
              </div>
            </div>

            {/* Inventory Section */}
            <div className='lin p-6 rounded-3xl smm:my-3'>
              <div className='flex items-center gap-2 smm:flex-wrap lgg:flex-wrap'>
                <img src={icon9} alt="Inventory Icon" className='w-14 h-14' />
                <div>
                  <h1 className='text-black  text-xl smm:text-lg lgg:text-lg font-Urbanist font-extrabold'>advanced Inventory Management</h1>
                  <p className='text-sm lgg:my-1 font-Urbanist'>
                    Monitor and manage inventory levels in real-time to avoid stockouts and overstocking.
                  </p>
                </div>
              </div>
              <div className='mt-4'>
                    <img src={inventory} alt="" />
              </div>
            </div>
          </div>
        </section>
       
       {/* about sowwit  */}
        <section className='flex items-center  px-8 smm:px-0'>
            <div className='px-3 smm:px-0'>
                    <div className='flex items-center gap-2 bg-[#FEF2E6] text-[#F77D08] w-[150px]  py-2 px-4 rounded-full mt-16 smm:mx-3 smm:justify-center'>
                        <img src={scissor} alt="star" />
                        <p className='text-sm font-Urbanist font-semibold'>about sowwit</p>
                  </div>

                    <section className='flex items-center justify-center mx-auto '>
                            <div className='mx-auto '>
                                <div className='flex  lg:flex-row items-center justify-between gap-8 smm:flex-wrap smm:px-4 lgg:flex-wrap xll:flex-wrap'>
                                <div className='flex flex-col items-start'>
                                    <h1 className='text-black font-semibold text-3xl my-3 smm:text-2xl'>
                                    so what’s the deal — what really<br className='smm:hidden lgg:hidden xll:hidden' /> is Sowwit?
                                    </h1>
                                    <p className='max-w-[900px] text-[#8E9096]  font-Urbanist'>
                                    Sowwit is your all-in-one business management solution designed to streamline and simplify your operations. Whether you're a fashion designer, tailor, or entrepreneur, Sowwit provides powerful tools to manage clients, track orders, and optimize workflows. Our mission is to empower businesses with intuitive and comprehensive solutions, helping you focus on what you do best – creating and innovating. Join us in revolutionizing the way you manage and scale your business, and discover the future of seamless business management with Sowwit.
                                    </p>
                                    <div className='flex bg-[#227EFD] items-center rounded-full py-[9px] px-[15px] gap-3 w-auto my-2 smm:my-3'>
                                    <a href='#signup' className='text-white text-sm'>join Waitlist</a>
                                    <img src={arrow} alt="arrow" />
                                    </div>
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <img src={video} alt="Sowwit video" className=' ' />
                                </div>
                                </div>
                            </div>
                </section>

                </div>
        </section>

   {/* benefit of sowwit  */}
        <section className='bg-[#F7FBFF]  py-1 mt-8 smm:py-[0px]'>
            <div className='px-8 smm:p-[1px] lgg:px-4 xll:px-4'>
                <div className='flex items-center gap-2 bg-[#E9F2FF] text-[#227EFD]  w-[10%] py-2 px-6 rounded-full mt-16 smm:w-[27%] smm:px-0 smm:justify-center xmm:w-[30%] smi:w-[35%] lgg:w-[16%] xll:w-[13%] mx-4'>
                    <img src={rocketButton} alt="star" />
                    <p className='text-sm font-Urbanist font-semibold'>benefits</p>
                </div>

                <div className='px-4'>
                    <h1 className='text-black font-semibold text-3xl my-3 smm:text-2xl smi:text-xl'>unlock the full potential of your<br className='smm:hidden lgg:hidden xll:hidden'/> business</h1>
                    <p className='font-Urbanist'>discover how Sowwit’s powerful features can help transform your business operations and<br className='lgg:hidden smm:hidden xll:hidden'/> drive growth and improved customer retention.</p>
                </div>
         </div>
          
       
          <div className='grid grid-cols-4 p-8 rounded-lg   smm:hidden lgg:hidden xll:hidden'>
                {benefit.map((item, i) => {
                    return (
                        <div key={i} className=' lgg:my-8  p-2 border-l border-b border-gray-100'>
                          <div className='w-[15%] h-[15%] mb-5'>
                              <img src={item.img} alt="Icons"/>
                            </div>
                            <h1 className='text-[15px] font-bold my-1 font-Urbanist'>{item.heading}</h1>
                            <p className='text-[13px] font-Urbanist text-[#8E9096]'>{item.paragraph}</p>
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
      <section className="grid grid-cols-3 smm:grid-cols-1">

        {benefit.map((item, index) => {
          return (
            <SwiperSlide>
                 <div key={index} className='my-5 smm:mb-3 smm:mt-6 smm:px-4 lgg:px-8 lgg:pt-6 xll:px-8 xll:pt-6 '>
                            <img src={item.img} alt="Icons" />
                            <h1 className='text-2xl font-bold font-Urbanist my-2 lgg:text-lg '>{item.heading}</h1>
                            <p className='text-[#8E9096 ] text-sm lgg:text-[13px]  font-Urbanist '>{item.paragraph}</p>
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
        <div className='px-8 smm:px-4'>
                <div className='flex items-center gap-2 bg-[#EFE9FF] text-[#227EFD]  w-[9%] py-2 px-6 rounded-full mt-16 smm:w-[27%] smm:justify-center xmm:w-[30%] smi:w-[35%] lgg:w-[15%] xll:w-[12%]'>
                    <img src={Faq} alt="star" />
                    <p className='text-sm text-[#6F5DE6]'>FAQS</p>
                </div>

                <div>
                    <h1 className='text-black font-semibold text-3xl my-3 smm:text-2xl'>you probably have some questions;<br className='smm:hidden lgg:hidden xll:hidden'/>  we got you!</h1>
                    <p className='font-Urbanist text-[#8E9096]'>here are some of the most popular questions we’ve been asked by other [early] users of<br className='smm:hidden lgg:hidden xll:hidden'/> sowwit and business owners just like you have asked us in the past.</p>
                </div>

                <div className='grid grid-cols-2 justify-center items-center py-5 gap-5 rounded-lg   duration-300 smm:hidden  lgg:my-6 lgg:gap-6 lgg:py-0' >
                {faq.map((item, index) => {
                    return (
                 <div key={index} className='my-5'>
                     <div className='flex  gap-2'>
                            <img src={item.img} alt="Analytics Icon" className='w-8 h-8' />
                            <div>
                            <h1 className='text-[#25262A] font-Urbanist text-lg font-bold'>{item.heading}</h1>
                            <p className='text-sm text-[#4F525A] font-Urbanist'>
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
        <section className='flex justify-center items-center my-5 mb-10 smm:px-3 smm:my-10 lgg:px-6 lgg:my-10 '>
            <div className='flex justify-between items-center border-gray-200  border-solid border-[1px] mx-auto p-2 rounded-xl smm:flex-wrap smm:gap-4 lgg:flex-wrap lgg:p-4 xll:p-4'>
                <div className='flex  gap-2 items-center lgg:gap-4'>
                        <img src={profile2} alt="Analytics Icon"  />
                        <div>
                        <h1 className='text-[#25262A]  font-extrabold text-lg smi:text-[17px]'>still have questions?</h1>
                        <p className='text-sm text-[#25262A] font-Urbanist'>perhaps you didn't find the answer you're looking for; feel free to ask us anything! </p>
                    </div>
                </div>

                <div className='flex bg-[#227EFD] items-center rounded-full py-[12px] px-[15px] gap-3 mx-10 smm:w-[100%] smm:justify-center lgg:w-[80%] lgg:justify-center lgg:mx-auto lgg:my-1 cursor-pointer' onClick={() => {
                    setContact(true)
                  }}>
                  <img src={envelop} alt="arrow" />
                  <a className='text-[#FFFFFF] text-[12px] font-Lato font-bold'>Contact Us</a>
                </div>
             </div>
        </section>

     {/* joining waitlist  */}
        <section className='flex items-center bg-[#1666D4]  py-[2px] pb-0 smm:px-4 smm:py-[1px] smm:flex-wrap  xll:px-4' id='signup'>
          <div>
            <div className='flex items-center gap-2 bg-[#4b8eec] text-[#fff]  w-[20%] py-2 px-6 mx-8 rounded-full mt-16 smm:w-[45%] smm:justify-center smi:w-[65%] lgg:w-[45%] xll:w-[30%] xsmm:w-[50%] xmm:w-[50%] smi:mx-0 smm:mx-0 xmm:mx-0 xll:mx-3'>
                    <img src={trophy} alt="star" />
                    <p className='text-sm font-semibold font-Urbanist'>join the waitlist</p>
            </div>

                <div className='px-8 smi:p-2 smm:p-2 xll:p-4 lgg:px-8'>
                    <h1 className='font-semibold text-3xl my-3 text-white smm:text-lg smi:text-[15px] lgg:text-[20px]'>Be part of the first to experience<br className='smm:hidden lgg:hidden xll:hidden'/>  the future of business management<br className='xll:hidden lgg:hidden'/> with sowwit!</h1>
                    <p className='text-white font-Urbanist'>Join our waitlist for exclusive early access to Sowwit. Transform your business and stay ahead with<br className='smm-hidden lgg:hidden xll:hidden'/> our powerful tools.</p>
                </div>
                    
                        <img src={customerDashboard} alt="" />
                    
          </div>

 {/* wait list form  */}
        <div className='mt-4 p-4 bg-white w-[30%] rounded-3xl smm:w-[95%] smm:mx-auto smm:my-6 lgg:w-[45%]  xll:w-[60%] '>
              <img src={medal} alt="" />
              <div className='my-2'>
                <h1 className='font-semibold text-xl'>sign up for early access</h1>
                <p className='text-sm text-[#8E9096] font-Urbanist mt-2'>Get exclusive early access to Sowwit and be among the first to transform your business.</p>
              </div>
                
                <div className='my-4'>
                <div className='grid grid-cols-2 items-center gap-2 smi:grid-cols-1'>
                  <div className='flex items-center border-gray-200  border-solid border-[1px] rounded-full p-[10px]  gap-2'>
                      <img src={user} alt="" />
                      <input type="text" placeholder='first name' required className='outline-none border-none bg-transparent text-xs  smm:w-[110px] xmm:w-[110px] xsmm::w-[110px] font-Urbanist'/>
                  </div>
                  <div className='flex items-center border-gray-200  border-solid border-[1px]  rounded-full p-[10px]  gap-2'>
                      <img src={user} alt="" />
                      <input type="text" placeholder='last name' required className='outline-none border-none bg-transparent text-xs  smm:w-[110px] xmm:w-[110px]  xsmm::w-[110px] font-Urbanist'/>
                  </div>
              </div>

                <div className='flex items-center border-gray-200  border-solid border-[1px]  rounded-full p-[10px]  gap-2 my-3'>
                      <img src={businessmail} alt="" />
                      <input type="text" placeholder='your business email' required className='outline-none border-none bg-transparent text-xs w-[200px] font-Urbanist' id='input2'/>
                  </div>

                <div className='flex items-center border-gray-200  border-solid border-[1px]  rounded-full p-[10px]  gap-2 my-3'>
                      <img src={phone} alt="" />
                      <input type="text" placeholder='your phone number' required className='outline-none border-none bg-transparent text-xs font-Urbanist'/>
                  </div>

                 <div className='flex items-center border-gray-200  border-solid border-[1px]  rounded-full p-[10px] gap-2 my-3'>
                     <img src={building} alt="" />
                    <select name="" id="" className="w-80 smm:w-full outline-none border-none bg-transparent  font-Urbanist">
                      <option value="" className="outline-none border-none bg-transparent  font-Urbanist">Industry</option>
                    </select>
                  </div>
                </div>
                
                  <div className='flex bg-[#227EFD] items-center justify-center rounded-full py-[9px] px-[15px] gap-3  my-3'>
                    <a  href ='#signup' className='text-[#FFFFFF] text-[14px] smm:text-[13px] xmm:text-[10px] smi:text-[7px] font-Urbanist font-bold' id='join'>join the waitlist</a>
                    <div>
                        <img src={arrow} alt="arrow" className='smi-hidden'/>
                    </div>
                  </div>

                  <div className='my-4'>
                    <p className='text-sm text-center font-Urbanist'>By joining the waitlist, you agree to our <span className='text-[#F77D08]'>Terms of  Service</span> and <span className='text-[#F77D08]'>Privacy Policy</span></p>
                  </div>
        </div>
        </section>
      </main>
      <Footer />
      {contact ? < Contact closeModal = {setContact}/> : ''}
    </div>
  );
}

export default Home;
