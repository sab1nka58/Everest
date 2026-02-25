/* eslint-disable react-refresh/only-export-components */
import type { ReactNode } from "react";
import { CupIcon, DiamondIcon, HaqiqitOqishIcon, NarxlarIcon, QulayJoylashuvIcon, SifatliTalimIcon, TeleginIcon, TreeIcon, UserIcon, YuqoriNatijalarIcon } from "./MainIcon";


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
const MainData = () => {
  return (
    <div>MainData</div>
  )
}

export default MainData