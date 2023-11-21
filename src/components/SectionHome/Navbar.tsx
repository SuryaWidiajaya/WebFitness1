import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const HandleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">MALEO FITNESS.</h1>
      <ul className="hidden md:flex">
        <Link href="/HomePage">
          <li className="p-4">Home</li>
        </Link>
        <Link href="/ClassesPage">
          <li className="p-4">Classes</li>
        </Link>
        <Link href="/MembershipPage">
          <li className="p-4">Membership</li>
        </Link>
        <Link href="/AboutPage">
          <li className="p-4">About</li>
        </Link>
        <Link href="/ContactPage">
          <li className="p-4">Contact</li>
        </Link>
      </ul>
      <div onClick={HandleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">MALEO FITNESS.</h1>
        <ul className=" uppercase p-4">
          <Link href="/Home">
            <li className="p-4 border-b border-gray-600">Home</li>
          </Link>
          <Link href="/ClassesPage">
            <li className="p-4">Classes</li>
          </Link>
          <Link href="/AboutMembership">
            <li className="p-4">Membership</li>
          </Link>
          <Link href="/AboutPage">
            <li className="p-4">About</li>
          </Link>
          <Link href="/ContactPage">
            <li className="p-4">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
