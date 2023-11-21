import React from 'react';
import CardGroupFitness from '@/components/Cards/CardGroupFitness';
import GFData from '@/JSON/group-fitness-data.json';
import Layout from '@/components/Layout/layout';

const GFPage = () => {
  return (
    <>
      <Layout>
        <div className="w-full py-10 px-4 bg-black text-white">
          <h2 className="mb-4 text-4xl font-bold text-white ml-[520px] ">Fitness Program : Group</h2>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
            {GFData.map((value) => (
              <CardGroupFitness name={value.class_name} instructor={value.instructor} description={value.description} day={value.schedule.day} time={value.schedule.time} id={value.class_id} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GFPage;
