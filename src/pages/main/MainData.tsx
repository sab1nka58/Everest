/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import { CupIcon, DiamondIcon, HaqiqitOqishIcon, NarxlarIcon, QulayJoylashuvIcon, SifatliTalimIcon, TeleginIcon, TreeIcon, UserIcon, YuqoriNatijalarIcon } from "./MainIcon";
import IELTSimg from "../../assets/xizmatlar/IELTS.png";
import Multiimg from "../../assets/xizmatlar/multi.png";
import Computrimg from "../../assets/xizmatlar/Group 5.png";
import Examimg from "../../assets/xizmatlar/Visual part.png";
// import Card1 from "../../assets/goglobal/Card.png";
import locationImg from "../../assets/location/Image.png";

export interface GetFaqData {
  id: number;


}
export interface IGetCardsData {
  id: number;
  title: string;
  text: string;
  icon: ReactNode
}

export interface IStatsData {
    id: number;
    title: string;
    desc: string;
    icon?: ReactNode;
}
 export interface IBottomStats {
    id: number;
    value: string;
    label: string;
    watermark: string;
 }

 export interface IServices {
    id: number;
    title: string;
    description: string;
    image: string;
    bgColor: string;
    showLink?: boolean;
    path: string;
  }
 export interface IGetKidsData {
    title: string;
    age: string;
    desc: string;
 }

 export interface IImages { 
    id: number;
    src: string;
    className: string;

 }

 export interface IResults {
  id: number;
  name: string;
  date: string;
  score: number | string;
  isSpecial: boolean;
 }
  
 export interface ILocations {
  id: number;
  name: string;
  coords: string;
  address: string;
  img: string;
  mapUrl?: string;

 }


export const getCardsData = (t: any) => [
  { id: 1, title: t('card_price_title'), text: t('card_price_text'), icon: <NarxlarIcon /> },
  { id: 2, title: t('card_location_title'), text: t('card_location_text'), icon: <QulayJoylashuvIcon /> },
  { id: 3, title: t('card_quality_title'), text: t('card_quality_text'), icon: <SifatliTalimIcon /> },
  { id: 4, title: t('card_teachers_title'), text: t('card_teachers_text'), icon: <TeleginIcon /> },
  { id: 5, title: t('card_results_title'), text: t('card_results_text'), icon: <YuqoriNatijalarIcon /> },
  { id: 6, title: t('card_growth_title'), text: t('card_growth_text'), icon: <HaqiqitOqishIcon /> }
];

export const getStatsData = (t: any) => [
  { id: 1, title: "24", desc: t("stats_locations"), icon: <TreeIcon /> },
  { id: 2, title: "13", desc: t("stats_years"), icon: <DiamondIcon /> },
  { id: 3, title: "200+", desc: t("stats_teachers"), icon: <UserIcon /> },
  { id: 4, title: "x5", desc: t("stats_brand"), icon: <CupIcon /> },
];

export const getBottomStats = (t: any) => [
  { id: 1, value: "10", label: `IELTS 9.0 ${t("stats_ielts_students")}`, watermark: "9" },
  { id: 2, value: "20+", label: `IELTS 8.5 ${t("stats_ielts_students")}`, watermark: "8" },
  { id: 3, value: "400+", label: `IELTS 8.0 ${t("stats_ielts_students")}`, watermark: "8" },
  { id: 4, value: "1 000+", label: `IELTS 7.0-7.5 ${t("stats_ielts_students")}`, watermark: "7" },
  { id: 5, value: "10", label: `IELTS 9.0 ${t("stats_ielts_teachers")}`, watermark: "9" },
];


export const getServicesData = (t: any) => [
  {
    id: 1,
    title: "Computer Delivered Mock Exams",
    description: t("service_mock_desc"),
    image: Computrimg,
    path: '/services/cdi_mock_exams'
  },
  {
    id: 2,
    title: "Multi-Level Mock Exams",
    description: t("service_multi_desc"),
    image: Multiimg,
    path: '/services/cdi_mock_exams',
  },
  {
    id: 3,
    title: "Everest Examinations Centre",
    description: t("service_exam_desc"),
    image: Examimg,
    path:'/services/examinations_centre'
  },
  {
    id: 4,
    title: "IELTS Registration",
    description: t("service_reg_desc"),
    image: IELTSimg,
    path: '/services/ielts_registration_services'
  }
];

export const getFaqData = (t: any) => [
  {
    id: 1,
    question: t("faq_q1"),
    answer: t("faq_a1"),
  },
  {
    id: 2,
    question: t("faq_q2"),
    answer: t("faq_a2"),
  },
  {
    id: 3,
    question: t("faq_q3"),
    answer: t("faq_a3"),
  },
  {
    id: 4,
    question: t("faq_q4"),
    answer: t("faq_a4"),
  },
  {
    id: 5,
    question: t("faq_q5"),
    answer: t("faq_a5"),
  }
];
  export const getKidsData = (t: any) => [
  {
    title: "Youngsters",
    age: `1-3 ${t('kids_grades')}`,
    desc: t('kids_youngsters_desc'),
  },
  {
    title: "Juniors",
    age: `4-6 ${t('kids_grades')}`,
    desc: t('kids_juniors_desc'),
  },
  {
    title: "Teens",
    age: `7-9 ${t('kids_grades')}`,
    desc: t('kids_teens_desc'),
  },
];

export const results = [
    { id: 1, name: 'JASURBEK PULATOV', date: '23 January 2023', score: '8.5',  },
    { id: 2, name: 'JASURBEK PULATOV', date: '23 January 2023', score: '8.5', },
    { id: 3, name: 'JASURBEK PULATOV', date: '23 January 2023', score: '8.5',  },
    { id: 4, name: 'JASURBEK PULATOV', date: '23 January 2023', score: '8.5', },
   
  ];

  

export const locations = [
  { 
    id: 1, 
    name: 'Everest - Novza', 
    address: 'Tashkent, Gorasaroy Street, 107/2', 
    metro: 'Novza',
    distance: '0.2 km',
    coords: { x: '45%', y: '48%' }, 
    img: locationImg,
    mapUrl: 'https://www.google.com/maps/dir/41.3139755,69.275822/Everest+Education+-+Integro,+Bunyodkor+Avenue+52,+100097,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2986428,69.1989429,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38ae8be046018735:0xcd5fd30c39b11d16!2m2!1d69.2056637!2d41.2772814?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D'
  },
  { 
    id: 2, 
    name: 'Everest - Chilanzar', 
    address: 'Tashkent, Bunyodkor Avenue, 52', 
    metro: 'Chilanzar',
    distance: '0.5 km',
    coords: { x: '35%', y: '60%' },
    img: locationImg,
    mapUrl: 'https://www.google.com/maps/dir/41.3139755,69.275822/Everest+Learning+Center,+8,+Istiqbal,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.31136,69.2723504,15.52z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38ae8b3fbed28bd5:0xb4c66dd84ef849dc!2m2!1d69.2827219!2d41.3077029?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D'
  },
  { 
    id: 3, 
    name: 'Everest - Sergeli', 
    address: 'Tashkent, Yangi Sergeli Street, 21', 
    metro: 'Sergeli',
    distance: '1.2 km',
    coords: { x: '55%', y: '80%' },
    img: locationImg,
    mapUrl: "https://www.google.com/maps/dir//6677%2BGP9+Everest+Sergeli,+Tashkent,+Tashkent+Region/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x38ae6100648b042d:0x9f32a83c87fb992f?sa=X&ved=1t:57443&ictx=111"
  },
  { 
    id: 4, 
    name: 'Everest - Mirzo Ulugbek', 
    address: 'Tashkent, Mirzo Ulugbek Street, 12', 
    metro: 'M. Ulugbek',
    distance: '0.8 km',
    coords: { x: '40%', y: '70%' },
    img: locationImg,
    mapUrl: "https://www.google.com/maps/dir//Everest+Mirzo+Ulug'bek,+Chapanata+Street+11,+100097,+Tashkent/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x38ae8b0031533603:0xa0dbccd1afd7343c?sa=X&ved=1t:57443&ictx=111" 
  },
  { 
    id: 5, 
    name: 'Everest - Yakkasaroy', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    metro: 'Kosmonavtlar',
    distance: '1.0 km',
    coords: { x: '60%', y: '50%' },
    img: locationImg,
    mapUrl: "https://www.google.com/maps/dir//Everest+Learning+Center,+8,+Istiqbal,+Tashkent/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x38ae8b3fbed28bd5:0xb4c66dd84ef849dc?sa=X&ved=1t:57443&ictx=111"
  },
  { 
    id: 6, 
    name: 'Everest - Xalqlar Do`stligi', 
    address: 'Tashkent, Xalqlar Do`stligi Street, 12', 
    metro: 'Xalqlar Do`stligi',
    distance: '0.3 km',
    coords: { x: '85%', y: '55%' },
    img: locationImg,
    mapUrl: "https://www.google.com/maps/dir/41.3171712,69.2781056/Everest+Academy+o%CA%BBquv+markazi,+Furkat+Street+33,+100027,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3159001,69.2178113,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38ae8b7333301225:0x8891c63b889b8d72!2m2!1d69.2409533!2d41.3138688?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
  },
  { 
    id: 8, 
    name: 'Everest - Alisher Navoiy', 
    address: 'Tashkent, Alisher Navoiy Street, 12', 
    metro: 'A. Navoiy',
    distance: '0.4 km',
    coords: { x: '65%', y: '25%' },
    img: locationImg,
    mapUrl: "https://www.google.com/maps/dir//Everest,+Navoi+Avenue+30b,+Tashkent/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x38ae8bba6167250b:0xc1678435377858be?sa=X&ved=1t:57443&ictx=111"
  },
  { 
    id: 10, 
    name: 'Everest - Integro', 
    address: 'Tashkent, Integro Mall, 2nd floor', 
    metro: 'Chilanzar',
    distance: '0.1 km',
    coords: { x: '30%', y: '50%' },
    img: locationImg,
    mapUrl: 'https://www.google.com/maps/dir/41.3139755,69.275822/Everest+Education+-+Integro,+Bunyodkor+Avenue+52,+100097,+Tashkent,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.2986428,69.1989429,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x38ae8be046018735:0xcd5fd30c39b11d16!2m2!1d69.2056637!2d41.2772814?entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D'
 
  },
  { 
    id: 13, 
    name: 'Everest - Minor', 
    address: 'Tashkent, Minor Street, 12', 
    metro: 'Minor',
    distance: '0.6 km',
    coords: { x: '40%', y: '40%' },
    img: locationImg,
    mapUrl: "https://www.google.com/maps/dir//Everest+-+Minor+2,+Osiyo+ko'chasi+16,+%D0%A2%D0%BEshkent/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x38aef59ba3085f97:0xfd4433b7f42cce99?sa=X&ved=1t:57443&ictx=111"  },
  { 
    id: 17, 
    name: 'Everest - Yunusobod', 
    address: 'Tashkent, Yunusobod Street, 12', 
    metro: 'Yunusobod',
    distance: '0.9 km',
    coords: { x: '60%', y: '65%' },
    img: locationImg,
mapUrl: "google.com/maps/dir//Everest,+й+проезд+Ифтихор+13,+100194,+Tashkent/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x38aef3da9777381d:0x6b80f115c14c558f?sa=X&ved=1t:57443&ictx=111"

  },
  { 
    id: 20, 
    name: 'Everest - Beruniy', 
    address: 'Tashkent, Beruniy Street, 12', 
    metro: 'Beruniy',
    distance: '0.7 km',
    coords: { x: '78%', y: '59%' },
    img: locationImg,
    mapUrl: "https://www.google.com/maps/dir//86V5%2BF76+Everest+Beruniy,+Farobi+ko'chasi,+%D0%A2%D0%BEshkent/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x38ae8d00305fc28d:0x249bc87c299af6cb?sa=X&ved=1t:57443&ictx=111"
  }
];
 
const MainData = () => {
  return (
    <div>MainData</div>
  )
}

export default MainData