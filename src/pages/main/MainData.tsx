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
   
  ];

  export const locations = [
  { 
    id: 1, 
    name: 'Everest - Novza', 
    address: 'Tashkent, Gorasaroy Street, 107/2', 
    coords: { x: '45%', y: '48%' }, // Позиция пина на картинке
    img:  locationImg
  },
  { 
    id: 2, 
    name: 'Everest - Chilanzar', 
    address: 'Tashkent, Bunyodkor Avenue, 52', 
    coords: { x: '35%', y: '60%' },
    img: locationImg
  },
  { 
    id: 3, 
    name: 'Everest - Sergeli', 
    address: 'Tashkent, Yangi Sergeli Street, 21', 
    coords: { x: '55%', y: '80%' },
    img:locationImg},

    {id: 4, 
    name: 'Everest - Mirzo Ulugbek', 
    address: 'Tashkent, Mirzo Ulugbek Street, 12', 
    coords: { x: '40%', y: '70%' },
    img:locationImg },

{id: 5, 
    name: 'Everest - Yakkasaroy', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '60%', y: '50%' },
    img:locationImg},

    
{id:6 , 
    name: 'Everest - Xalqlar Do`stligi', 
    address: 'Tashkent, Xalqlar Do`stligi Street, 12', 
    coords: { x: '90%', y: '50%' },
    img:locationImg},

    
{id: 7, 
    name: 'Everest - Xalqlar Do`stligi-2y', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '10%', y: '90%' },
    img:locationImg },

    
{id: 8, 
    name: 'Everest - Alisher Navoiy', 
    address: 'Tashkent, Alisher Navoiy Street, 12', 
    coords: { x: '60%', y: '20%' },
    img:locationImg },
    
{id: 9, 
    name: 'Everest - Alisher Navoiy-2', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '60%', y: '70%' },
    img:locationImg },
    
    
{id: 10, 
    name: 'Everest - Integro', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '30%', y: '50%' },
    img:locationImg },
    
    
{id: 12, 
    name: 'Everest - Integro-B', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '60%', y: '20%' },
    img:locationImg },
     
    
{id: 13, 
    name: 'Everest - Minor', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '40%', y: '50%' },
    img:locationImg },
    
    {id: 14, 
    name: 'Everest - Amir Temur 1/3', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '60%', y: '30%' },
    img:locationImg },
    
     {id: 15, 
    name: 'Everest - Amir Temur 2', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '40%', y: '50%' },
    img:locationImg },

     {id: 16, 
    name: 'Everest - Amir Temur 1/3', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '60%', y: '10%' },
    img:locationImg },

     {id: 17, 
    name: 'Everest - Yunusobod', 
    address: 'Tashkent, Yunusobod Street, 12', 
    coords: { x: '60%', y: '60%' },
    img:locationImg },

     {id: 18, 
    name: 'Everest - Jahon Tillari', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '80%', y: '50%' },
    img:locationImg },

     {id: 19, 
    name: 'Everest - Ganga', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '80%', y: '35%' },
    img:locationImg },

     {id: 20, 
    name: 'Everest - Beruniy', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '78%', y: '59%' },
    img:locationImg },

     {id: 21, 
    name: 'Everest - Parkent', 
    address: 'Tashkent, Yakkasaroy Street, 12', 
    coords: { x: '10%', y: '10%' },
    img:locationImg },
    

  ];
 
const MainData = () => {
  return (
    <div>MainData</div>
  )
}

export default MainData