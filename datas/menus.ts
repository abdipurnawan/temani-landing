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
    href: '/#'
  },
  {
    title: 'Tentang',
    href: '/#'
  },
  {
    title: 'Artikel',
    href: '/#'
  },
  {
    title: 'Galeri',
    href: '/#'
  },
  {
    title: 'Kontak',
    href: '/#'
  },
];