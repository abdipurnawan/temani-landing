import React from 'react';
import LandingNavbar from './landing-navbar';
// import LandingNavbar from './landing-navbar';

const LandingContainer = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='main-font w-screen overflow-x-hidden min-h-screen'>
      <LandingNavbar />
      <div className='flex flex-col justify-between min-h-screen custom-container mt-16 lg:mt-20 2xl:mt-24'>
        <div>{children}</div>
        {/* <LandingFooter /> */}
        <div>
          sda
        </div>
      </div>
    </div>
  );
};

export default LandingContainer;
