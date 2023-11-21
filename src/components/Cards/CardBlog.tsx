import React from 'react';
import Link from 'next/link';

type Props = {
  title: string;
  author: string;
  imgUrl: string;
  date: string;
  content: string;
  id: number;
  link: string;
};

const Card1 = (props: Props) => {
  return (
    <div className="w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#0b0b0b]">
      <img src={props.imgUrl} className="w-40 rounded-full mx-auto m-3" alt="" />
      <div className="w-[80%] mx-auto">
        <p className="text-center text-2xl font-bold mt-4 py-2 border-b">{props.title}</p>
        <div className=" font-medium">
          <p className="text-xl font-bold">{props.author}</p>
          <p className=" pb-3 border-b">{props.date}</p>
          <p className="  border-b">{props.content}</p>
        </div>
      </div>
      <Link href={"/BlogPage/"+ props.id} className='mx-auto'>
        <button className="bg-[#00df9a] text-[#0b0b0b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Cek Details</button>
      </Link>
    </div>
    
  );
};

export default Card1;
