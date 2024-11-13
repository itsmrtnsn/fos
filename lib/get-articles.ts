'use server';
import blog_2 from '@/app/assets/blog-2.png';
import blog_1 from '@/app/assets/blog-1.png';
import { StaticImageData } from 'next/image';

export type BlogPost = {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string | StaticImageData;
  imageAlt: string;
  authors: Array<{ name: string; title: string }>;
  category: string;
};

const getArticles = async () => {
  return blogs;
};
export default getArticles;

const blogs: BlogPost[] = [
  {
    id: 'HEWJHEYAEKJRFHWNE',
    title: 'Nòt Denonsiyasyon ak Kondanasyon',
    category: 'Politik ak Diplomasi',
    date: 'Pòtoprens, 29 oktòb 2024',
    content: `Federasyon Òganizasyon Sosyalis (FÒS) vle atire atansyon popilasyon ayisyèn nan ak tout peyi ki kwè nan libètè ak otodetèminasyon sou yon malè k ap toufe Ayiti.
Lè nou konsidere "ONU" kreye nan objektif pou lapè ak sekirite kapab taye banda nan tout mond lan, pou jounen jodi a peyi Etazini ki gen dwaveto epi ki fè pati de konsèy sekirite a, ki ta dwe yon ekzanp, tounen yon gwo founisè zam ak minisyon pou fè san koule sou tè libète papa Dessalines nan.

Federasyon Òganizasyon Sosyalis (FÒS) ap denonse anbasadè ameriken an ki sou yon tele nan kapital la t ap fè pwomosyon pou kriminalite kote li avwe bon jan kòkòday li ak moun ki gen zam ilegal yo. Nou menm nan FÒS nou kondane sa epi  pwofite  pou n deklare anbasadè a "persona non grata". Modèl konpòtman sa yo se yon menas pou lapè ak sekirite.

Federasyon Òganizasyon Sosyalis (FÒS) nou kwè nan lapè ak sekirite, nou kwè nan yon mond vivab kote dwa pou moun viv respekte san diskriminasyon ak fòs kote.`,
    imageUrl: blog_2,
    imageAlt: 'Kondanasyon',
    authors: [
      { name: 'Samuel JULES (Samy)', title: 'Prezidan' },
      { name: 'Ken-Rick Fernando JOSEPH', title: 'Sekretè' },
      { name: 'Bron-son PIERRE', title: 'Pòtpawòl' },
    ],
  },
  {
    id: 'JDSKFNEUIWHFUHWEINWCEWH',
    category: 'Politik ak Diplomasi',
    title: 'Kominke pou Laprès',
    date: 'Port-au-Prince,  10 oktòb 2024',
    content: `Federasyon Òganizasyon Sosyalis (FÒS), konstate avèk anpil lapenn tray ayisyen-èn ap pase nan lòtbò zile Ayiti a (Repiblik Dominikèn) anba nawè tout Eta manm nasyonzini. 

Li pa nòmal malgre tout jefò ak patisipasyon Ayiti te bay pou te rive mete loni kanpe nan lide pou lapè, libète ak dwa moun te kapab renye epi jounen jodi a yon dirijan nan foli rasis li vle jete byen lwen tout valè ak enterè ki ini nou ansanm.

Nou denonse ak tout fòs nou tout zak vyolans ayisyen-èn yo ap sibi nan Dominikani. Nou vle atire atansyon tout Eta sou sitiyasyon sila nan entansyon pou nou kapab evite yon lòt jenosid repete nan istwa mond lan.

Jodi a, li enpòtan pou Eta manm nasyonzini yo kontinye kole zepòl pou lapè, libète ak dwa moun. Nou dwe aji nan tèt asanm pou n leve defi yo. Viv yon mond ini nan lapè, libète ak dwa moun.`,
    imageUrl: blog_1,
    imageAlt: 'Kominke',
    authors: [
      { name: 'Samuel JULES (Samy)', title: 'Prezidan' },
      { name: 'Ken-Rick Fernando JOSEPH', title: 'Sekretè' },
      { name: 'Bron-son PIERRE', title: 'Pòtpawòl' },
    ],
  },
];
