import React from 'react';
import Cardblog from '../Cards/CardBlog';
import BlogData from '@/JSON/blog-data.json';

const BlogSection = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-black text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {BlogData.map((value) => (
          <Cardblog
            title={value.title}
            author={value.author}
            imgUrl={value.imgUrl}
            date={value.date_published}
            content={value.content}
            id={value.post_id}
            link={value.link}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
