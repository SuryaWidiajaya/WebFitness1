import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BlogDataJSON from '@/JSON/blog-data.json';
import Layout from '@/components/Layout/layout';

type BlogDataType = {
  id: number;
  title: string;
  author: string;
  date_published: string;
  content: string;
  link: string;
  imgUrl: string;
};

export default function DetailBlog() {
  const [blogData, setBlogData] = useState<BlogDataType>();

  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      const id = router.query.id as string;
      const getData = BlogDataJSON.find((value) => value.post_id === parseInt(id));
      if (getData) {
        setBlogData(getData);
      }
    }
  }, [router.query.id, router.isReady]);

  return (
    <Layout>
      <div className=" text-white w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4  bg-[#0b0b0b]">
        {blogData && (
          <>
            <img src={blogData.imgUrl} className="w-40 rounded-full mx-auto m-3" alt="" />
            <div className="w-[80%] mx-auto">
              <p className="text-center text-2xl font-bold mt-4 py-2 border-b">{blogData.title}</p>
              <div className="font-medium">
                <p className="text-xl font-bold">{blogData.author}</p>
                <p className="pb-3 border-b">{blogData.date_published}</p>
                <p className="border-b">{blogData.content}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
}
