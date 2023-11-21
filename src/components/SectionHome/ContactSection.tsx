import React from 'react';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want tips & tricks to optimize your flow?
          </h1>
          <div className='flex'>
          <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-4 text-[#00df9a] '>
            Contact Us
          </h1>
          <Link href="/ContactPage">
          <button className='bg-[#00df9a] text-black rounded-md font-medium w-[150px] ml-4 my-6 px-6 py-3'>
              Click Here
            </button>
          </Link>

          </div>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black'
              type='email'
              placeholder='Enter Email'
            />
            <Link href="/ContactPage">
            <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
            </Link>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;