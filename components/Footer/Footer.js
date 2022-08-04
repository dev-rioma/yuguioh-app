import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid d-flex justify-content-center">
        <Image src="/kuribuh.png" width={50} height={50} />
      </div>
    </nav>
  );
}

export default Footer;