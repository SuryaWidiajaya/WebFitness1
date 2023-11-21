import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BlogDataJSON from '@/JSON/group-fitness-data.json';
import Layout from '@/components/Layout/layout';

type ScheduleType = {
  day: string;
  time: string;
};

type BlogDataType = {
  class_name: string;
  instructor: string;
  description: string;
  schedule: ScheduleType;
  class_id: number;
};

export default function DetailBlog() {
  const [blogData, setBlogData] = useState<BlogDataType>();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;
      const getData = BlogDataJSON.find((value) => value.class_id === parseInt(id));
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
            <div className="w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#0b0b0b]">
              <div className="w-[80%] mx-auto">
                <p className="text-center text-2xl font-bold mt-4 py-2 border-b">{blogData.class_name}</p>
                <div className="font-medium">
                  <p className="text-xl font-bold">Instructor: {blogData.instructor}</p>
                  <p className="pb-3 border-b">
                    Schedule: {blogData.schedule.day}, {blogData.schedule.time}
                  </p>
                  <p className="border-b">{blogData.description}</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
