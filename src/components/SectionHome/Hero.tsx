import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="text-white bg-home">
  <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center bg-opacity-75">
    <p className="text-[#00df9a] font-bold text-2xl">ACHIEVE YOUR FITNESS GOALS</p>
    <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 mb-[-15px] mt-[-10px]">Up Your Body</h1>
    <p className="md:text-4xl sm:text-4xl text-xl">Discover Fast and Flexible Workouts</p>
    <p className="md:text-1xl sm:text-1xl text-xl mt-10 text-gray-300 font-bold">
      Get ready to transform your body and improve your health with our fitness programs. 
    </p>
    <Link href='/ClassesPage'>
    <button className='bg-[#00df9a] w-[180px] rounded-lg font-medium my-6 mx-auto py-3 text-gray-800 text-xl mt-[50px] '>Get Started</button>
    </Link>
  </div>
</div>
  )
};

export default Hero;
