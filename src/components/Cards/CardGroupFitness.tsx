import React from 'react';
import Link from 'next/link';

type Props = {
  name: string;
  instructor: string;
  description: string;
  day: string;
  time: string;
  id: number;
};

const CardGroupFitness = (props: Props) => {
  return (
    <div className="w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#0b0b0b]">
      <div className="w-[80%] mx-auto">
        <p className="text-center text-2xl font-bold mt-4 py-2 border-b">{props.name}</p>
        <div className=" font-medium">
          <p className="text-xl font-bold"> instructor : {props.instructor}</p>
          <p className=" pb-3 border-b">{props.day} , {props.time}</p>
          <p className="  border-b">{props.description}</p>
        </div>
      </div>
      <Link href={'/GFPageDetails/' + props.id} className="mx-auto">
        <button className="bg-[#00df9a] text-[#0b0b0b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Cek Details</button>
      </Link>
    </div>
  );
};

export default CardGroupFitness;
