import React from 'react';
import CardPersonalTraining from '@/components/Cards/CardPersonalTraining';
import PTData from '@/JSON/personal-training-data.json';
import Layout from '@/components/Layout/layout';

const PTPage = () => {
  return (
    <>
      <Layout>
        <div className="w-full py-10 px-4 bg-black text-white">
          <h2 className="mb-4 text-4xl font-bold text-white ml-[450px] ">Fitness Program : Personal</h2>
          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
            {PTData.map((value) => (
              <CardPersonalTraining 
              name={value.trainer_name} 
              specialty={value.specialty} 
              experience={value.experience_years} 
              sessions1={value.training_sessions[0].session_name} 
              description1={value.training_sessions[0].description} 
              durations1={value.training_sessions[0].duration_minutes} 
              price1={value.training_sessions[0].price} 
              sessions2={value.training_sessions[1].session_name} 
              description2={value.training_sessions[1].description} 
              durations2={value.training_sessions[1].duration_minutes} 
              price2={value.training_sessions[1].price} 
              id={value.trainer_id} 
              
              />

            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PTPage;
