import React, { ReactNode } from 'react';
import Navbar from '../SectionHome/Navbar';
import Footer from '../SectionHome/Footer';

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}
