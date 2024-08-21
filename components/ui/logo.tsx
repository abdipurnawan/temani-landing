/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import AssetPath from '@/lib/asset-path';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useCallback, useEffect, useState } from 'react';

type LogoProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  withText?: boolean;
  href?: string;
};

export const Logo = ({ withText = false, href }: LogoProps) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const logo = AssetPath.getImagePath('logo.png');
  const logoWithText = AssetPath.getImagePath('logo-with-text.png');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Link href='/' className='flex items-center gap-2 cursor-pointer h-10 w-auto'>
      <Image
        className='h-full w-auto'
        src={withText ? logoWithText : logo}
        alt='Logo'
        width={160}
        height={30}
        loading='lazy'
      />
    </Link>
  );
};
