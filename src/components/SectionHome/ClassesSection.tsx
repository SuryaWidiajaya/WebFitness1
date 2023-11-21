import React from 'react';
import Link from 'next/link';

const ClassesSection = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80" alt='/' />
        <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold '>FITNESS PROGRAMS</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Achieve Your Fitness Goals with Our Varied Programs</h1>
            <p>
                Whether you're looking to boost your cardio, build strength, or find inner peace, our fitness programs have you covered. Choose from Group Fitness, Personal Training, or Yoga to start your fitness journey today!
            </p>
            <Link href='/ClassesPage'>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </Link>
        </div>
    </div>
</div>
  );
};

export default ClassesSection;