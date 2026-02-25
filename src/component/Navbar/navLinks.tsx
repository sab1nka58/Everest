import { type ReactNode } from 'react'
import { GeneralEnglishIcon, IELTSClassesIcon, MathematicsIcon, MultiLevelIcon, RussianLanguageIcon, SATIcon } from './Icon';

export interface INavLink{
  id: number;
  title: string;
  path?: string;
  variant?: 'mega' | 'simple' | 'default' ;
  submenu?: ISubMenu[];
}

export interface ISubMenu{
  id: number;
  title: string;
  path: string;
  icon?: ReactNode ;
  type?: 'course' | 'service';
  isSimple?: boolean;
  description?: string;
}

export const getNavLinks = (t: (key: any) => string): INavLink[] => [
  {id:1, title: t('main'), path: '/'},
  {id:2, title: t('about'), path: '/about'},
  {id:3, 
    title: t('services'), 
    variant: 'mega',
    submenu:[
{id: 1, title: "IELTS Classes", path: '/services/ielts', icon: <IELTSClassesIcon />, description: 'Kurslarimizda bosqichma-bosqich tayyorlanasiz va o‘zingizga kerakli IELTS natijani qo‘lga kiritasiz.'},
{id: 2, title: "Multi-Level", path: '/services/multi_level', icon: <MultiLevelIcon />, description: 'B1, B2 yoki C1 darajalariga mo‘ljallangan kurslar orqali milliy sertifikat imtihonlariga puxta tayyorlanasiz.'},
{id: 3, title: "SAT", path: '/services/sat', icon: <SATIcon />, description: 'SAT imtihonining English (Reading & Writing) va Math bo‘limlari bo‘yicha tajribali ustozlardan kerakli bilimlarni olasiz.'},
{id: 4, title: "General English", path: '/services/generalEnglish', icon: <GeneralEnglishIcon />, description: 'Kundalik hayot va akademik muhitda erkin gapirish va yozish ko‘nikmalarini rivojlantiring. '},
{id: 5, title: "Mathematics", path: '/services/mathematics', icon: <MathematicsIcon />, description: 'Rus tilida erkin muloqot yoki abituriyent tayyorlov imtihonlariga bosqichma-bosqich tayyorlanasiz.'},
{id: 6, title: "Russian Language", path: '/services/russianlanguage', icon: <RussianLanguageIcon />, description: 'Abituriyentlar va milliy sertifikatlar uchun kuchli matematika ustozlar bilan tayyorlanasiz.'},
{id: 7, title: "CDI Mock exams ", path: '/services/cdi_mock_exams', type: 'service'},
{id: 8, title: "Multi-Level Mock exams", path: '/services/multi_level_mock_exams', type: 'service'},
{id: 9, title: "IELTS Registration services", path: '/services/ielts_registration_services',type: 'service'},
{id: 10, title: "Examinations Centre", path: '/services/examinations_centre', type: 'service'},
  ]},
  {id:4, title: 'Everest kids', path: '/everestkids'},
  {id:5, title: 'Go global', path: '/goglobal'},
  {id:6, title: 'Results',
    variant: 'simple',
     submenu: [
    {id: 11, title: "IELTS Results", path: '/results/ielts', icon: <IELTSClassesIcon />},
    {id: 12, title: "Multi-Level Results", path: '/results/multi_level', icon: <MultiLevelIcon />},
    {id: 13, title: "SAT Results", path: '/results/sat', icon: <SATIcon />},
  ]},
  {id:7, title: t('team'), path: '/careers'},
  {id:8, title: t('contact'), path: '/contactus'},
 ]

const navLinks = () => {
  return (
    <div>navLinks</div>
  )
}

export default navLinks