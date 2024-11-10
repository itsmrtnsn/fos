import {
  BookOpenText,
  Contact,
  FileUser,
  GraduationCap,
  Home,
  Newspaper,
} from 'lucide-react';

const navLinks = [
  { id: 1, name: 'Akèy', slug: 'home', icon: Home, path: '/' },
  {
    id: 2,
    name: 'Enfòmasyon',
    slug: 'information',
    icon: BookOpenText,
    path: '/enfomasyon',
  },
  {
    id: 3,
    name: 'Pwogram yo',
    slug: 'programs',
    icon: GraduationCap,
    path: '/pwogram-yo',
  },
  { id: 4, name: 'Blog', slug: 'blog', icon: Newspaper, path: '/blog' },
  {
    id: 5,
    name: 'Konsènan',
    slug: 'about-us',
    icon: FileUser,
    path: '/kontak',
  },
  {
    id: 6,
    name: 'Kontakte nou',
    slug: 'contact-us',
    icon: Contact,
    path: '/kontak',
  },
];

export default navLinks;
