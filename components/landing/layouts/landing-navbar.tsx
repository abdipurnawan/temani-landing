'use client';
import { motion, useAnimation } from 'framer-motion';
// import { LandingNavigationMenu } from './navigation-menu';
// import LandingMobileNavigationMenu from './mobile-navigation-menu';
// import LandingUserData from './landing-user-data';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import LandingNavigationMenu from './landing-navbar-menu';
import { Button } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import LandingMobileNavbarMenu from './landing-mobile-navbar-menu';

const LandingNavbar = () => {
  const [isFloating, setIsFloating] = useState(false);
  const controls = useAnimation();

  const checkScrollPosition = () => {
    const scrollPosition = window.scrollY;
    setIsFloating(scrollPosition > 100); // Ubah nilai ini sesuai kebutuhan
  };

  useEffect(() => {
    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  useEffect(() => {
    controls.start(isFloating ? 'floating' : 'normal');
  }, [isFloating, controls]);

  const variants = {
    normal: {
      width: '100%',
      maxWidth: '100%',
      borderRadius: 0,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
      backdropFilter: 'blur(0px)',
      y: 0
    },
    floating: {
      width: 'calc(100% - 2rem)', // Adjust based on your padding
      maxWidth: '68rem', // max-w-5xl equivalent
      borderRadius: '32px', // rounded-full equivalent
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slightly transparent
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(4px)', // Add backdrop blur
      y: 29
    }
  };
  return (
    <>
      <div className={`fixed left-0 right-0 top-0  bg-white shadow-soft-xl py-5 z-20 block lg:hidden`}>
        <div className='px-10'>
          <div className='flex flex-row justify-between items-center'>
            <Logo />
            <LandingMobileNavbarMenu />
          </div>
        </div>
      </div>

      <div className='fixed top-0 left-0 right-0 z-50 hidden lg:block'>
        <motion.div
          initial='normal'
          animate={controls}
          variants={variants}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className={`mx-auto px-1 ${!isFloating && 'py-2'}`}>
          <div className={
            cn([
              !isFloating && 'container'
            ])
          }>
            <div className={cn(['flex justify-between items-center py-3', isFloating && 'py-1'])}>
              <motion.div>
                <Logo />
              </motion.div>
              <motion.div>
                <LandingNavigationMenu />
              </motion.div>
              <motion.div>
                <Button size='lg'>
                  Adopsi Sekarang <Icons.arrowRight className='h-4 w-4 ml-1' />
                </Button>
                {/* <LandingUserData isFloating={isFloating} /> */}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LandingNavbar;


