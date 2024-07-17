import React, { useEffect } from 'react';
import arrow from '../assets/arrow.png';
import star from '../assets/star-magic.png';
import icon1 from '../assets/Icon 1.png';
import activeCustomer from '../assets/activeCustomer.png';
import trackboard from '../assets/trackboard.png';
import Group2 from '../assets/Group2.png'
import icon2 from '../assets/Icon 2.png';
import icon3 from '../assets/icon 3.png';
import icon4 from '../assets/icon 4.png';
import icon9 from '../assets/icon 9.png'
import insightDemo from '../assets/insight.png'
import rocketButton from '../assets/rocket-launch.png'
import { benefit, faq } from '../data/data'
import profile2 from '../assets/profile2.png'
import envelop from '../assets/envelope.png'
import scissor from '../assets/scissors.png'
import medal from '../assets/medal.png'
import user from '../assets/user.png'
import building from '../assets/buildings.png'
import phone from '../assets/phone.png'
import businessmail from '../assets/businessmail.png'
import video from '../assets/Video.png'
import trophy from '../assets/trophy-star.png'
import customerDashboard from '../assets/customer.png'
import inventory from '../assets/inventory.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import SwiperNavbutton from "../component/SwiperNavbutton";
import Accordion from '../component/Accordion'
import Nav from '../component/Nav'
import Footer from '../component/Footer'
function Home() {
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

  return (
    <div>
      <Nav />
      {/* Main Content */}
      <main >
        {/* Hero Section */}
        <section>

       <div className='gradient py-3 pb-8'>
          <div className='text-center mt-10 smm:px-2 lgg:px-2 smm:mt-4' >
            <h1 className='text-3xl font-semibold smm:text-[22px] smi:text-[17px] lgg:text-[25px] mt-20'>
              <span className = "text-transparent bg-clip-text bg-gradient-to-r from-[#237FFF] to-[#FF8A39]">Transform</span> and scale your business<br className='lgg:hidden smm:hidden xll:hidden'/> effectively with Sowwit
            </h1>
            <p className='mt-3 smm:text-sm smm:mt-2 smm:px-2'>
              Join our waitlist and be one of the first to get access to our suite of business tools to<br className='smm:hidden lgg:hidden'/>
              help you manage and scale your business once we launch publicly!
            </p>
            <div className='flex items-center justify-center my-5 mt-5 smm:px-5 xsmm:px-2 xmm:px-1 smi:px-1'>
              <div className="bg-white p-[5px] w-[400px] rounded-full flex items-center justify-between border-[#227EFD] border-[2px] mx-auto smm:p-[8px] smi:[430px]">
                <input type="text" className="bg-transparent outline-none rounded-xl" placeholder="Enter your email address" id='input1'/>
                <div className='flex bg-[#227EFD] items-center rounded-full py-[9px] px-[15px] gap-3'>
                  <a  href ='#signup' className='text-[#FFFFFF] text-[12px] smm:text-[13px] xmm:text-[10px] smi:text-[7px]' id='join' onClick={() => {
                    getInputValue()
                  }}>Join Waitlist</a>
                  <div>
                      <img src={arrow} alt="arrow" className='smi-hidden'/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className='px-2'>
            <div className='flex justify-center items-center gap-2 bg-[#E9F2FF] text-[#227EFD] mx-auto w-[10%] py-2 px-6 rounded-full mt-16 smm:w-[27%] smm:mt-10 smm:mb-3  xmm:w-[30%] smi:w-[35%] xll:w-[15%]'>
              <img src={star} alt="star" />
              <p className='text-sm'>Features</p>
            </div>
            <h1 className='text-center mt-2 text-2xl font-semibold smm:text-[20px] smi:text-[17px]'>
              Manage and scale your business<br className='lgg:hidden smm:hidden xll:hidden'/> with Sowwit
            </h1>
            <p className='mt-3 text-center smm:text-sm smm:mt-2 smm:px-2'>
              Sowwit offers you easy-to-use and intuitive tools and features that help you streamline your<br className='smm:hidden lgg:hidden'/>
              operations, manage clients effortlessly, and grow your business effectively.
            </p>
          </div>
        </div>

            {/* Features Cards */}
            <div className="flex justify-center items-center mt-3">
              <div className='grid grid-cols-3 justify-center lgg:grid-cols-2 gap-5 px-12 py-4 smm:grid-cols-1 smm:px-4'>
                <div className='bg-gray-200 p-3 rounded-2xl'>
                  <img src={icon1} alt="Client Management Icon" className='mx-auto my-3' />
                  <h1 className='text-black font-semibold text-center'>Seamless Client Management</h1>
                  <p className='text-center my-2'>
                    Manage all your clients and their information in one place to enhance relationships<br className='smm:hidden lgg:hidden'/> and service delivery.
                  </p>
                  <img src={activeCustomer} alt="Active Customer" className='mt-4 mx-auto' />
                </div>
                <div className='bg-gray-200 p-3 rounded-2xl'>
                  <img src={icon2} alt="Invoicing Icon" className='mx-auto my-3' />
                  <h1 className='text-black font-semibold text-center'>Effortless Invoicing</h1>
                  <p className='text-center my-2'>
                    Create and manage invoices effortlessly to speed up billing and improve cash flow.
                  </p>
                  <div className='mt-4 flex justify-end rounded-xl'>
                    <img src={trackboard} alt="Trackboard" />
                  </div>
                </div>
                <div className='bg-gray-200 p-3 rounded-2xl lgg:w-[87vw] smm:w-[100%]'>
                  <img src={icon3} alt="Order Tracking Icon" className='mx-auto my-3' />
                  <h1 className='text-black font-semibold text-center'>Order Tracking & Management</h1>
                  <p className='text-center my-2'>
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
            <div className='bg-gray-200 px-6 pt-6 rounded-lg shadow-lg smm:my-3'>
              <div className='flex items-center gap-2 smm:flex-wrap lgg:flex-wrap'>
                <img src={icon4} alt="Analytics Icon" className='w-14 h-14' />
                <div>
                  <h1 className='text-black font-semibold text-xl smm:text-lg lgg:text-lg'>AI Powered Business Intelligence & Analytics</h1>
                  <p className='text-sm lgg:my-1'>
                    Gain valuable customized insights with analytics tools powered by AI for informed decision-making.
                  </p>
                </div>
              </div>
              <div className='mt-4'>
                    <img src={insightDemo} alt="" />  
              </div>
            </div>

            {/* Inventory Section */}
            <div className='bg-gray-200 p-6 rounded-lg shadow-lg smm:my-3'>
              <div className='flex items-center gap-2 smm:flex-wrap lgg:flex-wrap'>
                <img src={icon9} alt="Inventory Icon" className='w-14 h-14' />
                <div>
                  <h1 className='text-black font-semibold text-xl smm:text-lg lgg:text-lg'>Advanced Inventory Management</h1>
                  <p className='text-sm lgg:my-1'>
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

        <section className='flex items-center px-8 smm:px-0'>
            <div className='px-3 smm:px-0'>
                    <div className='flex items-center gap-2 bg-[#FEF2E6] text-[#F77D08] w-[150px]  py-2 px-4 rounded-full mt-16 smm:mx-5 smm:justify-center'>
                        <img src={scissor} alt="star" />
                        <p className='text-sm'>about sowwit</p>
             </div>

                    <section className='flex items-center justify-center mx-auto'>
                            <div className='mx-auto px-3'>
                                <div className='flex  lg:flex-row items-center justify-between gap-8 smm:flex-wrap smm:px-4 lgg:flex-wrap xll:flex-wrap'>
                                <div className='flex flex-col items-start'>
                                    <h1 className='text-black font-semibold text-3xl my-3 smm:text-2xl'>
                                    so what’s the deal — what really<br className='smm:hidden lgg:hidden xll:hidden' /> is Sowwit?
                                    </h1>
                                    <p className='max-w-[700px] text-gray-700 '>
                                    Sowwit is your all-in-one business management solution designed to streamline and simplify your operations. Whether you're a fashion designer, tailor, or entrepreneur, Sowwit provides powerful tools to manage clients, track orders, and optimize workflows. Our mission is to empower businesses with intuitive and comprehensive solutions, helping you focus on what you do best – creating and innovating. Join us in revolutionizing the way you manage and scale your business, and discover the future of seamless business management with Sowwit.
                                    </p>
                                    <div className='flex bg-[#227EFD] items-center rounded-full py-[9px] px-[15px] gap-3 w-auto my-2 smm:my-3'>
                                    <a className='text-white text-sm'>Join Waitlist</a>
                                    <img src={arrow} alt="arrow" />
                                    </div>
                                </div>
                                <div className=' flex justify-center items-center'>
                                    <img src={video} alt="Sowwit video" className='h-72 ' />
                                </div>
                                </div>
                            </div>
                </section>

                </div>
         
        </section>

        <section className='bg-[#F7FBFF] px-4 py-1 mt-8 smm:py-[0px]'>
            <div className='px-8 smm:p-[1px] '>
                <div className='flex items-center gap-2 bg-[#E9F2FF] text-[#227EFD]  w-[10%] py-2 px-6 rounded-full mt-16 smm:w-[27%] smm:px-0 smm:justify-center xmm:w-[30%] smi:w-[35%] lgg:w-[20%] xll:w-[15%]'>
                    <img src={rocketButton} alt="star" />
                    <p className='text-sm'>benefits</p>
                </div>

                <div>
                    <h1 className='text-black font-semibold text-3xl my-3 smm:text-2xl'>unlock the full potential of your<br className='smm:hidden lgg:hidden xll:hidden'/> business</h1>
                    <p className=''>discover how Sowwit’s powerful features can help transform your business operations and<br className='lgg:hidden smm:hidden xll:hidden'/> drive growth and improved customer retention.</p>
                </div>
         </div>
          
          <div className='grid grid-cols-4 justify-center items-center p-8 gap-5   rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300 smm:hidden lgg:hidden xll:hidden'>
                {benefit.map((item, i) => {
                    return (
                        <div key={i} className='my-5 lgg:my-8'>
                            <img src={item.img} alt="Icons" />
                            <h1 className='text-lg font-semibold my-2'>{item.heading}</h1>
                            <p className='text-[#8E9096 ] text-sm'>{item.paragraph}</p>
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
                 <div key={index} className='my-5 smm:mb-3 smm:mt-14'>
                            <img src={item.img} alt="Icons" />
                            <h1 className='text-xl font-semibold my-2'>{item.heading}</h1>
                            <p className='text-[#8E9096 ] text-sm'>{item.paragraph}</p>
                     </div>
            </SwiperSlide>
          );
        })}
      </section>
          <SwiperNavbutton />
      </Swiper>
        </section>

        <section>
        <div className='px-8 smm:px-4'>
                <div className='flex items-center gap-2 bg-[#EFE9FF] text-[#227EFD]  w-[10%] py-2 px-6 rounded-full mt-16 smm:w-[27%] smm:justify-center xmm:w-[30%] smi:w-[35%] lgg:w-[20%] xll:w-[15%]'>
                    <img src={rocketButton} alt="star" />
                    <p className='text-sm'>benefits</p>
                </div>

                <div>
                    <h1 className='text-black font-semibold text-3xl my-3 smm:text-2xl'>you probably have some questions;<br className='smm:hidden lgg:hidden xll:hidden'/>  we got you!</h1>
                    <p className=''>here are some of the most popular questions we’ve been asked by other [early] users of<br className='smm:hidden lgg:hidden xll:hidden'/> sowwit and business owners just like you have asked us in the past.</p>
                </div>

                <div className='grid grid-cols-2 justify-center items-center p-8 gap-5   rounded-lg shadow-md  hover:shadow-lg transition-shadow duration-300 smm:hidden  lgg:my-6 lgg:p-3'>
                {faq.map((item, index) => {
                    return (
                 <div key={index} className='my-5'>
                     <div className='flex  gap-2'>
                            <img src={item.img} alt="Analytics Icon" className='w-8 h-8' />
                            <div>
                            <h1 className='text-black font-semibold text-lg'>{item.heading}</h1>
                            <p className='text-sm'>
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

      
        <section className='flex justify-center items-center my-5 smm:px-3 smm:my-10 lgg:px-6 lgg:my-10'>
            <div className='flex justify-between items-center border-[gray] border-solid border-[1px] mx-auto p-2 rounded-lg shadow-md  transition-shadow duration-300 smm:flex-wrap smm:gap-4 lgg:flex-wrap'>
                <div className='flex  gap-2 items-center'>
                        <img src={profile2} alt="Analytics Icon"  />
                        <div>
                        <h1 className='text-black font-semibold text-lg'>still have questions?</h1>
                        <p className='text-sm'>perhaps you didn't find the answer you're looking for; feel free to ask us anything! </p>
                    </div>
                </div>

                <div className='flex bg-[#227EFD] items-center rounded-full py-[12px] px-[15px] gap-3 mx-10 smm:w-[100%] smm:justify-center lgg:w-[80%] lgg:justify-center lgg:mx-auto lgg:my-1'>
                  <a className='text-[#FFFFFF] text-[12px]'>Contact Us</a>
                  <img src={envelop} alt="arrow" />
                </div>
             </div>
        </section>

        <section className='flex items-center bg-[#1666D4] px-8 py-[2px] pb-0 smm:px-4 smm:py-[1px] shadow-md smm:flex-wrap lgg:flex-wrap ' id='signup'>
          <div>
            <div className='flex items-center gap-2 bg-[#4b8eec] text-[#fff]  w-[15%] py-2 px-6 rounded-full mt-16 smm:w-[29%] smm:justify-center smi:w-[35%] lgg:w-[20%] xll:w-[15%]'>
                    <img src={trophy} alt="star" />
                    <p className='text-sm font-semibold'>benefits</p>
            </div>

                <div>
                    <h1 className='font-semibold text-3xl my-3 text-white smm:text-xl'>Be part of the first to experience<br className='smm:hidden lgg:hidden xll:hidden'/>  the future of business management<br /> with sowwit!</h1>
                    <p className='text-white'>Join our waitlist for exclusive early access to Sowwit. Transform your business and stay ahead with<br className='smm-hidden lgg:hidden xll:hidden'/> our powerful tools.</p>
                    <img src={customerDashboard} alt="" />
                </div>
          </div>


        <div className='mt-4 p-4 bg-white w-[30%] rounded-xl smm:w-[95%] smm:mx-auto smm:my-6 lgg:w-[90%] lgg:mx-auto xll:w-[90%] xll:mx-auto'>
              <img src={medal} alt="" />
              <div className='my-2'>
                <h1 className='font-semibold text-xl'>sign up for early access</h1>
                <p className='text-sm text-[#8E9096]'>Get exclusive early access to Sowwit and be among the first to transform your business.</p>
              </div>
                
                <div className='my-4'>
                <div className='grid grid-cols-2 items-center gap-2 smi:grid-cols-1'>
                  <div className='flex items-center border-[2px] rounded-xl p-[10px]  gap-2'>
                      <img src={user} alt="" />
                      <input type="text" placeholder='first name' required className='outline-none border-none bg-transparent text-xs  smm:w-[110px] xmm:w-[110px] xsmm::w-[110px]'/>
                  </div>
                  <div className='flex items-center border-[2px] rounded-xl p-[10px]  gap-2'>
                      <img src={user} alt="" />
                      <input type="text" placeholder='last name' required className='outline-none border-none bg-transparent text-xs  smm:w-[110px] xmm:w-[110px]  xsmm::w-[110px]'/>
                  </div>
              </div>

                <div className='flex items-center border-[2px] rounded-xl p-[10px]  gap-2 my-3'>
                      <img src={businessmail} alt="" />
                      <input type="text" placeholder='your business email' required className='outline-none border-none bg-transparent text-xs w-[200px]' id='input2'/>
                  </div>

                <div className='flex items-center border-[2px] rounded-xl p-[10px]  gap-2 my-3'>
                      <img src={phone} alt="" />
                      <input type="text" placeholder='your phone number' required className='outline-none border-none bg-transparent text-xs'/>
                  </div>

                 <div className='flex items-center border-[2px] rounded-xl p-[10px] gap-2 my-3'>
                      <img src={building} alt="" />
                      <input type="text" placeholder='your indutry' required className='outline-none border-none bg-transparent text-xs'/>
                  </div>
                </div>
                
                  <div className='flex bg-[#227EFD] items-center justify-center rounded-full py-[9px] px-[15px] gap-3  my-3'>
                    <a  href ='#signup' className='text-[#FFFFFF] text-[14px] smm:text-[13px] xmm:text-[10px] smi:text-[7px] ' id='join'>Join Waitlist</a>
                    <div>
                        <img src={arrow} alt="arrow" className='smi-hidden'/>
                    </div>
                  </div>

                  <div className='my-4'>
                    <p className='text-sm text-center'>By joining the waitlist, you agree to our <span className='text-[#F77D08]'>Terms of  Service</span> and <span className='text-[#F77D08]'>Privacy Policy</span></p>
                  </div>
        </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
