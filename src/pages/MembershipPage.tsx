import Layout from '@/components/Layout/layout';
import Link from 'next/link';

export default function MembershipPage() {
  return (
    <div>
      <Layout>

      <div className=" bg-black px-6 py-7">
        <div></div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#00df9a]">Membership</h2>
          <p className="mt-2 text-lg leading-8 text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates facilis molestias doloribus laudantium fugiat facere dolores corrupti veniam</p>
        </div>
        <form action="#" method="POST" className="mx-auto mt-16 max-w-xl ">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"

                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black "
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black "
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"

                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black "
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-black "
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                
                </div>
                <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                Message
              </label>
              <div className="mt-2.5">
                <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-black"></textarea>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2"></div>
          </div>
          <div className="mt-10">
            <button type="submit" className="block w-full rounded-md bg-[#00df9a] px-3.5 py-2.5 text-center text-sm font-semibold ">
              Send
            </button>
          </div>
        </form>
      </div>
   
      </Layout>
    </div>
  );
}
