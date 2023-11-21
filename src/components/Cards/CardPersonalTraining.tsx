import React from 'react';
import Link from 'next/link';

type Props = {
  name: string;
  specialty: string;
  experience: number;
  sessions1: string;
  description1: string;
  durations1: number;
  price1: number;
  sessions2: string;
  description2: string;
  durations2: number;
  price2: number;
  id: number;
};

const CardPersonalTraining = (props: Props) => {
  return (
      <div className="w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#0b0b0b]">
        <div className="w-[80%] mx-auto">
          <p className=" text-2xl font-bold mt-4 py-2 border-b">Trainer : {props.name}</p>
          <div className=" font-medium">
            <p className="text-xl font-bold">Specialty : {props.specialty}</p>
            <p className=" pb-3 border-b mb-5"> Experience : {props.experience} Years</p>
            <p className=" text-xl font-bold pb-3">Sessions 1</p>
            <p className=" pb-3 ">Name Sessions : {props.sessions1}</p>
            <p className=" pb-3 ">Descriptions : {props.description1}</p>
            <p className=" pb-3 ">Durations : {props.durations1} minutes</p>
            <p className=" pb-3 border-b mb-5">Price : ${props.price1}</p>
            <p className=" text-xl font-bold pb-3">Sessions 2</p>
            <p className=" pb-3 ">Name Sessions : {props.sessions2}</p>
            <p className=" pb-3 ">Descriptions : {props.description2}</p>
            <p className=" pb-3 ">Durations : {props.durations2} minutes</p>
            <p className=" pb-3 ">Price : ${props.price2}</p>
            
          </div>
        </div>
        <Link href={'/PTPageDetails/' + props.id} className="mx-auto">
          <button className="bg-[#00df9a] text-[#0b0b0b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Cek Details</button>
        </Link>
      </div>
  );
};

export default CardPersonalTraining;
