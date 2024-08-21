type LandingMenu = {
  title: string;
  href?: string;
  description?: string;
  children?: LandingMenu[];
};

export const landingMenu: LandingMenu[] = [
  {
    title: 'Beranda',
    href: '/'
  },
  {
    title: 'Cek Perkin',
    href: '/forums'
  },
  {
    title: 'Tentang',
    href: '/program'
  },
  {
    title: 'Artikel',
    href: '#gallery-section'
  },
  {
    title: 'Galeri',
    href: '/news'
  },
  {
    title: 'Kontak',
    href: '/news'
  },
];