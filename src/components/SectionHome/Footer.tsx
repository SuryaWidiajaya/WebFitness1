import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='border-t-[#00df9a] border-t-2'>
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">MALEO FITNESS.</h1>
          <p className="py-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={50} />
            <FaInstagramSquare size={50} />
            <FaTwitterSquare size={50} />
           
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h6 className="font-medium text-gray-400">Programs</h6>
            <ul>
              <li className="py-2 text-sm">Group Fitness</li>
              <li className="py-2 text-sm">Personal Training</li>
              <li className="py-2 text-sm">Yoga</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Support</h6>
            <ul>
              <li className="py-2 text-sm">Pricing</li>
              <li className="py-2 text-sm">FAQs</li>
              <li className="py-2 text-sm">Contact Us</li>
              <li className="py-2 text-sm">Customer Service</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">About Us</h6>
            <ul>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Our Story</li>
              <li className="py-2 text-sm">Join Our Team</li>
              <li className="py-2 text-sm">Press</li>
            </ul>
          </div>
          <div>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <ul>
              <li className="py-2 text-sm">Privacy Policy</li>
              <li className="py-2 text-sm">Terms &amp; Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
