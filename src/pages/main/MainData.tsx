/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import { CupIcon, DiamondIcon, HaqiqitOqishIcon, NarxlarIcon, QulayJoylashuvIcon, SifatliTalimIcon, TeleginIcon, TreeIcon, UserIcon, YuqoriNatijalarIcon } from "./MainIcon";
import IELTSimg from "../../assets/xizmatlar/IELTS.png";
import Multiimg from "../../assets/xizmatlar/multi.png";
import Computrimg from "../../assets/xizmatlar/Group 5.png";
import Examimg from "../../assets/xizmatlar/Visual part.png";
import Card1 from "../../assets/goglobal/Card.png";

export interface IFaqData {
  id: number;


}
export interface ICardsData {
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
 export interface IKidsData {
    title: string;
    age: string;
    desc: string;
 }

 export interface IImages { 
    id: number;
    src: string;
    className: string;

 }
  

export const cardsData =[
    {id: 1, title: 'Hamyonbop narxlar', text: 'Sifatli ta’lim — hamyonbop va barqaror narxlar asosida.', icon: <NarxlarIcon/>},
     {id: 2, title: 'Qulay joylashuv', text: 'Toshkent va viloyatlarda joylashgan ko‘plab manzillar.', icon: <QulayJoylashuvIcon />},
      {id: 3, title: 'Sifatli ta’lim', text: 'Yagona tizim, sinalgan metodika va nazoratli o‘quv jarayoni.', icon: <SifatliTalimIcon />},
       {id:4, title: 'Kuchli ustozlar', text: 'IELTS 7.5–9.0 real natijalarga ega, tajribali va talabchan ustozlar.', icon: <TeleginIcon />},
        {id: 5, title: 'Yuqori natijalar', text: 'Har yili 1000 dan ortiq IELTS 7.0+ o‘quvchilar natijasi.', icon: <YuqoriNatijalarIcon />},
         {id: 6, title: 'HHaqiqiy o‘sish', text: 'Har bir darajada yakunida 0.5–1.5 band IELTS natija o‘sishi.', icon: <HaqiqitOqishIcon />}
]

export const statsData = [
  { id: 1, title: "24", desc: "Manzillar soni", icon: <TreeIcon /> },
  { id: 2, title: "13", desc: "Yillik faoliyat", icon: <DiamondIcon /> },
  { id: 3, title: "200+", desc: "Ustoz va mentorlar", icon: <UserIcon /> },
  { id: 4, title: "x5", desc: '"Yil brendi" sovrindori', icon: <CupIcon /> },
   
];

export const bottomStats = [
  { id: 1, value: "10", label: "IELTS 9.0 o'quvchilar", watermark: "9" },
  { id: 2, value: "20+", label: "IELTS 8.5 o'quvchilar", watermark: "8" },
  { id: 3, value: "400+", label: "IELTS 8.0 o'quvchilar", watermark: "8" },
  { id: 4, value: "1 000+", label: "IELTS 7.0-7.5 o'quvchilar", watermark: "7" },
  { id: 5, value: "10", label: "IELTS 9.0 o'qituvchilar", watermark: "9" },
];



export const services = [
    {
      id: 1,
      title: "Computer Delivered Mock Exams",
      description: "Haqiqiy IELTS imtihon muhitini, original materiallar asosida his qilib ko'ring.",
      image: Computrimg,
      bgColor: "bg-gray",
      path: '/services/cdi_mock_exams'
    },
    {
      id: 2,
      title: "Multi-Level Mock Exams",
      description: "CEFR (Multi-level) imtihoni uchun mo'ljallangan namunaviy testlar.",
      image: Multiimg,
      bgColor: "bg-pink-gradient",
      path: '/services/cdi_mock_exams',
      showLink: true,
    },
    {
      id: 3,
      title: "Everest Examinations Centre",
      description: "Imtihon qulay, bosh og'riqsiz va sifatli bo'lishini ta'minlaymiz.",
      image: Examimg, // твои синие наушники
      bgColor: "bg-gray",
      path:'/services/examinations_centre'
    },
    {
      id: 4,
      title: "IELTS Registration",
      description: "Xizmatimiz yordamida IELTS imtihoniga bir necha daqiqa ichida ro'yxatdan o'ting.",
      image: IELTSimg,
      bgColor: "bg-white-shadow",
       path: '/services/ielts_registration_services'
    }
  ];

export const faqData = [
    {
      id: 1,
      question: "How do I become an Everester?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
    },
    {
      id: 2,
      question: "Are there any discounts?",
      answer: "Everest o'quv markazida turli xil chegirmalar mavjud, masalan, bitta oiladan ikki kishi o'qisa yoki bir vaqtning o'zida bir nechta kursga yozilsangiz."
    },
    {
      id: 3,
      question: "Are there only classes of IELTS at Everest?",
      answer: "Yo'q, bizda General English, Kids English, Matematika va boshqa ko'plab fanlar bo'yicha sifatli darslar tashkil etilgan."
    },
    {
      id: 4,
      question: "When was Everest founded?",
      answer: "Everest o'quv markazi ko'p yillik tajribaga ega va o'z faoliyati davomida minglab talabalarga yordam berib kelmoqda."
    },
    {
      id: 5,
      question: "When was Everest founded?",
      answer: "Everest o'quv markazi ko'p yillik tajribaga ega va o'z faoliyati davomida minglab talabalarga yordam berib kelmoqda."
    },
    {
      id: 6,
      question: "How can I get 9.0?",
      answer: "Everest o'quv markazi ko'p yillik tajribaga ega va o'z faoliyati davomida minglab talabalarga yordam berib kelmoqda."
    }
  ];

  export const KidsData = [
    
              {
                title: "Youngsters",
                age: "1-3 sinflar",
                desc: "O‘yin va interaktiv mashg‘ulotlar orqali ingliz tilining asoslarini o‘rganish.",
              },
              {
                title: "Juniors",
                age: "4-6 sinflar",
                desc: "Mantiqiy fikrlash, grammatika va lug‘at boyligini rivojlantirishga yo‘naltirilgan darslar.",
              },
              {
                title: "Teens",
                age: "7-9 sinflar",
                desc: "Akademik ingliz tili, maktab fanlari bilan uyg‘unlashgan va rasmiy til imtihonlariga tayyorlov.",
              },
  ]
  export const images = [
    { id: 1, src: Card1, className: "col-span-2 row-span-1 rounded-[30px]" }, // Верхнее левое широкое
    { id: 2, src: "../../assets/go global/2.png", className: "col-span-2 row-span-1 rounded-[30px]" }, // Верхнее правое широкое
    { id: 3, src: "../../assets/go global/3.png", className: "col-span-1 row-span-1 rounded-[25px]" }, // Маленькое квадратное
    { id: 4, src: "../../assets/go global/4.png", className: "col-span-2 row-span-2 rounded-[40px]" }, // Центральное большое (с девушкой)
    { id: 5, src: "../../assets/go global/5.png", className: "col-span-1 row-span-2 rounded-[25px]" }, // Узкое высокое справа
    { id: 6, src: "../../assets/go global/6.png", className: "col-span-1 row-span-1 rounded-[25px]" }, // Нижнее левое
    { id: 7, src: "../../assets/go global/7.png", className: "col-span-1 row-span-1 rounded-[25px]" }, // Нижнее центральное
    { id: 8, src: "../../assets/go global/8.png", className: "col-span-1 row-span-1 rounded-[25px]" }, // Нижнее правое
  ];
const MainData = () => {
  return (
    <div>MainData</div>
  )
}

export default MainData