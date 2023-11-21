import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BlogDataJSON from '@/JSON/personal-training-data.json';
import Layout from '@/components/Layout/layout';

type SessionType = {
  session_id: number;
  session_name: string;
  description: string;
  duration_minutes: number;
  price: number;
};

type BlogDataType = {
  trainer_id: number;
  trainer_name: string;
  specialty: string;
  experience_years: number;
  training_sessions: SessionType[];
};

export default function DetailBlog() {
  const [blogData, setBlogData] = useState<BlogDataType>();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;
      const getData = BlogDataJSON.find((value) => value.trainer_id === parseInt(id));
      if (getData) {
        setBlogData(getData);
      }
    }
  }, [router.query.id, router.isReady]);

  return (
    <Layout>
    <div className="text-white w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 bg-[#0b0b0b]">
      {blogData && (
        <>
          <div className="w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#0b0b0b]">
            <div className="w-[80%] mx-auto">
              <p className="text-2xl font-bold mt-4 py-2 border-b">Trainer : {blogData.trainer_name}</p>
              <div className="font-medium">
                <p className="text-xl font-bold">Specialty : {blogData.specialty}</p>
                <p className="pb-3 border-b mb-5">Experience : {blogData.experience_years} Years</p>
                <p className="text-xl font-bold pb-3">Session 1</p>
                <p className="pb-3">Name Sessions : {blogData.training_sessions[0].session_name}</p>
                <p className="pb-3">Descriptions : {blogData.training_sessions[0].description}</p>
                <p className="pb-3">Durations : {blogData.training_sessions[0].duration_minutes} minutes</p>
                <p className="pb-3 border-b mb-5">Price : ${blogData.training_sessions[0].price}</p>
                <p className="text-xl font-bold pb-3">Session 2</p>
                <p className="pb-3">Name Sessions : {blogData.training_sessions[1].session_name}</p>
                <p className="pb-3">Descriptions : {blogData.training_sessions[1].description}</p>
                <p className="pb-3">Durations : {blogData.training_sessions[1].duration_minutes} minutes</p>
                <p className="pb-3">Price : ${blogData.training_sessions[1].price}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    </Layout>
  );
}
