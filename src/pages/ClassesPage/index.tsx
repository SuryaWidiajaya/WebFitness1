import Layout from '@/components/Layout/layout';
import Link from 'next/link';

export default function ClassesPage() {
  return (
    <Layout>
      <div className=" py-8 px-4 bg-black text-white">
        <h2 className="ml-[100px] mb-4  text-4xl font-bold text-[#00df9a] dark:text-white">We're Program</h2>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#0b0b0b]">
            <img src="https://images.unsplash.com/photo-1614928228253-dc09cbc3b11c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className=" w-300 h-100 mx-auto m-3" alt="" />
            <div className="w-[80%] mx-auto">
              <p className="text-center text-2xl font-bold mt-4 py-2 border-b">Group Fitness</p>
              <div className=" font-medium">
                <p className="text-xl font-bold"></p>
                <p className=" pb-3 border-b"></p>
                <p className="  border-b"></p>
              </div>
            </div>
          <Link href={`/GFPage`} className="mx-auto">
            <button className="bg-[#00df9a] text-[#0b0b0b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Cek Details</button>
          </Link>
          </div>


          <div className="w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#0b0b0b]">
            <img src="https://images.unsplash.com/photo-1583969430754-a4ca5030bb21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-300 h-100  mx-auto m-3" alt="" />
            <div className="w-[80%] mx-auto">
              <p className="text-center text-2xl font-bold mt-4 py-2 border-b">Personal Training</p>
              <div className=" font-medium">
                <p className="text-xl font-bold"></p>
                <p className=" pb-3 border-b"></p>
                <p className="  border-b"></p>
              </div>
            </div>
          <Link href={`/PTPage`} className="mx-auto">
            <button className="bg-[#00df9a] text-[#0b0b0b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Cek Details</button>
          </Link>
          </div>


          <div className="w-full shadow-3xl shadow-green-900 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300  bg-[#0b0b0b]">
            <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="w-300 h-100 mx-auto m-3" alt="" />
            <div className="w-[80%] mx-auto">
              <p className="text-center text-2xl font-bold mt-4 py-2 border-b">Yoga</p>
              <div className=" font-medium">
                <p className="text-xl font-bold"></p>
                <p className=" pb-3 border-b"></p>
                <p className="  border-b"></p>
              </div>
            </div>
          <Link href={``} className="mx-auto">
            <button className="bg-[#00df9a] text-[#0b0b0b] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Cek Details</button>
          </Link>
          </div>
        </div>  
      </div>
    </Layout>
  );
}
