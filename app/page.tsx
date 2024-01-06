"use client";
import Image from 'next/image'
import './globals.css'
import { IoIosLogIn } from "react-icons/io";
import logo from '../public/Logo.png'
import { useState } from 'react'
import bg from '../public/Mesh.png'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Nuxt from '../public/Nux.png'
import Mir from '../public/miro.png'
import Lottie from '../public/Lottie.png'
import wise from '../public/wise.png'
import dribble from '../public/dribble.png'
import kinsta from '../public/Kinsta.png'
import angel from '../public/Angellist.png'
import behance from '../public/Behance.png'
import LanguageIcon from '@mui/icons-material/Language';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LockIcon from '@mui/icons-material/Lock';
import pht from '../public/phn.png'
import stat from '../public/stat.png'
import Vect from '../public/vect.png'
import profile from '../public/profile.png'
import StarIcon from '@mui/icons-material/Star';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HeadsetIcon from '@mui/icons-material/Headset';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Marquee from "react-fast-marquee";

export default function Home() {
  const [click,isclick] = useState(false)

  const toggleNav = () => {
    isclick(!click)
  }
  return (
    <main className='container-fluid m-0 p-0' >
  <section className='sm:p-2 sm:flex justify-center items-center'>
  <Marquee>
  <h2 className='pr-3 text-center text-lg sm:text-base md:text-xl lg:text-xl xl:text-2xl'>
  Announcement : 
</h2>
    <p className=' text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
  We are happy to announce that we raised $2 Million in Seed Funding
</p></Marquee>  </section>
  <section className='container-fluid flex justify-between sm:pr-10 s2'>
    <nav className="w-full">
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex items-center'>
            <div className='mr-1 md:flex-shrink-0 relative'>
              <a href='/'>
                <Image
                  src={logo}
                  width={144}
                  height={132}
                  alt="Picture of the author"
                />
              </a>
                  </div>
                </div>
                <div className=' hidden md:block ml-40'>
                  <div className='ml-5 flex justify-between item-center space-x-4'>
                    <a href='/' className='text-black pl-11 mt-4'>Card</a>
                    <a href='/' className='text-black pl-6 mt-4'>Banking</a>
                    <a href='/' className='text-black pl-5 mt-4'>Processing</a>
                    <a href='/' className='text-black pl-9 mt-4'>About</a>
                    <a href='/' className='text-black pl-9 mt-4'>Career</a>
                    <a href='/' className='text-black pl-9 mt-4'>Contact</a>
                  </div>
                  
                </div>
                <Button variant="contained" className=" bg-purple-800 h-7 mb-4  sm:w-32 sm:h-10 md:w-40 md:h-20 lg:w-28 lg:h-12 mt-2  flex justify-center items-center" endIcon={<ArrowForwardIcon/>}>
    LogIn
  </Button>
                <div className='md:hidden flex items-center '>
                  <button className='inline-flex  justify-end' onClick={toggleNav}>{click ?(<svg className='h-6 w-6' xmlns="https://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round'strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>):(<svg className='h-6 w-6' xmlns="https://www.w3.org/2000/svg" fill='none' viewBox="0 0 24 24" stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round'strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/></svg>)}</button>
                 
                </div>
              </div>
            </div>
            {click && (
              <div className='md:hidden'>
              <div className='ml-7 px-2 pt-2 pb-3 space-y-1'>
                <a href='/' className='block text-black'>Card</a>
                <a href='/' className='block text-black'>Banking</a>
                <a href='/' className='block text-black'>Processing</a>
                <a href='/' className='block text-black'>About</a>
                <a href='/' className='block text-black'>Career</a>
                <a href='/' className='block text-black'>Contact</a>
              </div>
            </div>
            
            )}
          </nav>
          {/* <div className="shadow-lg ml-20 flex">Login <IoIosLogIn /></div> */}
          
  


        </section>  
        <section>
  <div className='flex justify-center items-center pt-10'>
    <div className='m1-d relative w-[631px] h-[460px] item-center'>
      <div className='font-inter text-base font-medium leading-[20px] text-center text-purple-800 mt-5 mb-2'> Seamless experience</div>
      <div className='text-center max-w-[632px] sm:max-w-full sm:px-4 md:max-w-3/4 md:mx-auto lg:max-w-2/3'>
        <div className='font-manrope text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-[72px] tracking-normal'>
          Unleashing the Next Generation of Card Solutions
        </div>
      </div>
            <div><div className='font-inter text-base font-normal leading-[28px] text-center text-gray-700 mt-5'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div></div>
            <div className=' mt-5 md:mt-5 flex justify-center items-center'><Button variant="contained" className="bg-purple-800" endIcon={<ArrowForwardIcon/>}>
  Unlock your Card
</Button></div>
<div><div className='mt-3 md:font-inter text-base font-normal leading-[28px] text-center text-gray-700 '>*No credit card required</div></div>
</div>
          </div>
        </section>
        <section className='mt-9'>
      <div className='flex flex-wrap justify-between px-3 md:px-6 lg:px-8 xl:px-12 mt-3 sm:my-4'>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
          <Image src={Nuxt} width={104} height={40} alt="" className='m-3'/>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
          <Image src={Mir} width={114} height={40} alt="" className='m-3'/>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
          <Image src={Lottie} width={114} height={40} alt="" className='m-3'/>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
          <Image src={wise} width={114} height={40} alt="" className='m-3'/>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
          <Image src={dribble} width={114} height={40} alt="" className='m-3'/>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
          <Image src={kinsta} width={114} height={40} alt="" className='m-3'/>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
          <Image src={angel} width={114} height={40} alt="" className='m-3'/>
        </div>
        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 flex justify-center'>
          <Image src={behance} width={114} height={40} alt="" className='m-3'/>
        </div>
       
      </div>
    </section>
        <section  className='flex justify-center mt-7'>
  <div className='   items-center pt-10'>
    <div className='flex  flex-col'>
      <div className='flex justify-center font-manrope text-2xl font-semibold leading-[48px] text-center'>Elevating Card Programs with Cutting-Edge Technology</div>
      <div className='mt-5 md:mt-5'>
  <div className='font-inter font-normal leading-[38px] text-gray-700 h-[66px] mt-5 w-full md:w-auto text-sm text-center md:text-left'>
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div className='flex justify-center md:justify-center mt-6 text-purple-800'>
    <a href='' className=''>
      Compare all Pro features<ArrowForwardIcon />
    </a>
  </div>
</div>

    </div>
  </div>
</section>

        <section className='flex flex-wrap md:justify-center sm:ml-10 m-10 ml-7'>
          <div className=' justify-center gap-6 md:gap-26 ml-8 md:ml-0 '>
            <div className='flex justify-center'>       
        <LanguageIcon className='border border-solid border-purple-100 w-12 h-12  rounded-full  p-2 text-purple-800'/>
</div>
         <div className='font-medium p-2 text-center'>Globally Accepted</div>
            <div className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
          </div>
          <div className=' justify-center gap-6 md:gap-26 ml-9 md:ml-0 '>
            <div  className='flex justify-center'><VpnKeyIcon className='border border-solid border-purple-100 w-12 h-12 rounded-full ml-20% p-2 text-purple-800'/></div>
            <div className='font-medium p-2 text-center'>Biometric Integrated</div>
            <div className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
          </div>
          <div className=' justify-center gap-6 md:gap-26 ml-8 md:ml-0 '>
            <div  className='flex justify-center'><LockIcon className='border border-solid border-purple-100 w-12 h-12 rounded-full ml-20% p-2 text-purple-800 '/></div>
            <div className='font-medium p-2 text-center'>Fully Secured</div>
            <div className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
          </div>
          
        </section>
        <section  className='flex justify-center mt-7'>
  <div className='   items-center pt-10'>
    <div className='flex  flex-col'>
      <div className='flex justify-center font-manrope text-2xl font-semibold leading-[48px] text-center'>Elevating Card Programs with Cutting-Edge Technology</div>
      <div className='mt-5 md:mt-5'>
  <div className='md:font-inter font-normal leading-[38px] text-gray-700 h-[66px] mt-5 w-full md:w-auto text-sm text-center md:text-left'>
    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  </div>

  <div className='flex justify-center md:justify-center md:mb-7 mt-6 text-purple-800'>
    <a href='' className=''>
      Compare all Pro features<ArrowForwardIcon />
    </a>
  </div>
</div>

    </div>
  </div>
</section>
        <section>
          
        </section>
        <section>
          <div className='flex flex-wrap  justify-center items-center'>
            <Image src={pht} width={500} height={400} alt='' className='m-5'/>
            <Image src={stat} width={500} height={400} alt='' className='m-5'/>
          </div>
        </section>
        <section>
          <div className='flex flex-wrap m-9 pt-9 justify-center'>
          <div className='justify-center'>
            <div><h1 className='text-purple-800 font-manrope text-3xl font-semibold leading-[56px] text-center'>2 Million</h1></div>
            <div className='font-medium p-2 text-center'>Customer</div>
            <div className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
          </div>
          <div className=' justify-center '>
            <div><h1 className='text-purple-800 font-manrope text-3xl font-semibold leading-[56px] text-center'>1 K</h1></div>
            <div className='font-medium p-2 text-center'>Download</div>
            <div className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
          </div>
          <div className='justify-center'>
            <div><h1 className='text-purple-800 font-manrope text-3xl font-semibold leading-[56px] text-center'>$73 Million</h1></div>
            <div className='font-medium p-2 text-center'>Transaction</div>
            <div className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
          </div>
          <div className='justify-center'>
            <div><h1 className='text-purple-800 font-manrope text-3xl font-semibold leading-[56px] text-center'>2.0</h1></div>
            <div className='font-medium p-2 text-center'>Latest Version</div>
            <div className='p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </div>
          </div>
          </div>
        </section>
        <section className='flex flex-wrap justify-center '>
          <div>
            <div className='flex justify-center p-11'><Image src={Vect} width={100} height={25} alt=""/></div>
            <div className='font-manrope  text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-2xl font-medium leading-[40px] text-center justify-center ml-10'>
  I had the pleasure of experiencing the next generation of card solutions with this incredible product. Its refreshing to see such innovation in the financial industry.
</div>
            <div className='flex justify-center p-11'><Image src={profile} width={100} height={30} alt=""/></div>
            <div className='txt-6'>Nick Babich</div>
            <div className='txt-61'>Lead Designer</div>
            <div className='flex justify-center p-8'><StarIcon className='sub-5'/><StarIcon className='sub-5'/><StarIcon className='sub-5'/><StarIcon className='sub-5'/></div>
          </div>
        </section>
        <section className='justify-center'>
          <div className=' font-manrope text-2xl font-semibold leading-[48px] text-center justify-center'>Unlock Limitless Possibilities with Our New Card Solutions</div>
          <div className='flex flex-wrap justify-center'>
          <div className='flex justify-center items-center mr-6 p-5'><Button variant="contained" className="btn-c" endIcon={<CreditCardIcon/>}>Unlock your card</Button></div>
          <div className='flex justify-center items-center p-5'><Button variant="contained" className="bg-gray-200 text-gray-600" endIcon={<HeadsetIcon/>}>Customer support</Button></div>
          </div>
        </section>
        <section className='flex justify-center'>
          <div className='p-5'>
            <div className='flex justify-center'><Image
      src={logo}
      width={84}
      height={16}
      alt="Picture of the author"
      className='flex justify-center'
    /></div>
    <div className='text-gray-700 font-inter text-base font-medium leading-[28px] text-center md:w-62 h-82 '>Mode UI is a comprehensive design system that empowers designers and developers to create cohesive and visually stunning user interfaces across various platforms and devices</div>
          </div>
        </section>
        <section>
          <div className='flex flex-wrap justify-between m-10'>
            <div className=''>
              <p className='p-1 py-5'>Company</p>
              <p className='p1'>About Us</p>
              <p className='p1'> Pricing </p>
              <p className='p1'> Contact Us </p>
              <p className='p1'> Features </p>
            </div>
            <div className=''>
              <p className='p-1 py-5'>Product</p>
              <p className='p1'>Figma design system</p>
              <p className='p1'> Ios kit </p>
              <p className='p1'> Android kit</p>
              <p className='p1'> Wireframe </p>
            </div>
            <div className=''>
              <p className='p-1 py-5'>Resources</p>
              <p className='p1'>Templates</p>
              <p className='p1'> Landing pages </p>
              <p className='p1'> Documentation </p>
              <p className='p1'> Comp library </p>
            </div>
            <div className=''>
              <p className='p-1 py-5'>Legal</p>
              <p className='p1'>Privacy policy</p>
              <p className='p1'> Terms & Conditions</p>
              <p className='p1'> Disclaimer </p>
              <p className='p1'> Affiliate programme </p>
            </div>
            <div className=''>
              <p className='p-1 py-5'>Support</p>
              <p className='p1'>Help centre</p>
              <p className='p1'> Raise ticket </p>
              <p className='p1'> Report </p>
              <p className='p1'> Refund </p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <div className='flex justify-center mr-10'>
              <div className='m-5'><LinkedInIcon/></div>
              <div className='m-5'><GitHubIcon/></div>
              {/* <div><FontAwesomeIcon icon="fa-brands fa-discord" /></div> */}
            </div>
            <div className='flex justify-center'>
            <div className='p-9'>© 2023 Mode UI  Inc. All Rights Reserved.</div>
            </div>
           
          </div>
        </section>

     
    </main>
  )
}
