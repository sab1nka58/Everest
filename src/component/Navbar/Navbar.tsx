
import { Link, NavLink } from 'react-router-dom';
import { GlobeIcon } from './Icon';
import logo from '../../assets/Group 5.png';
import { getNavLinks } from './navLinks';
import { useState } from 'react';

const translations = {
  EN: {
    main: "Main", about: "About", services: "Services", results: "Results",
    kids: "Everest kids", global: "Go global", team: "Careers",
    contact: "Contact us", buildFuture: "Build my future",
  },
  UZ: {
    main: "Asosiy", about: "Haqimizda", services: "Kurslar", results: "Natijalar",
    kids: "Everest kids", global: "Go global", team: "Jamoa",
    contact: "Aloqa", buildFuture: "Kelajagingni qur",
  }
};

const Navbar = () => {
  const [lang, setLANG] = useState<'EN' | 'UZ'>('EN');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const t = (key: keyof typeof translations['EN']) => translations[lang][key];
  const navLinks = getNavLinks(t);

  return (
    <header className='w-full bg-white sticky top-0 z-[100] border-b border-gray-50'>
      <div className='max-w-[1440px] mx-auto px-6 flex items-center justify-between'>
        
        <nav className='flex items-center gap-8'>
          <Link to='/' className='py-5 px-40'>
            <img src={logo} alt="Everest" className='w-[96px] h-auto ' />
          </Link>

          <ul className='flex gap-8'>
            {navLinks.map((item) => (
              <li 
                key={item.id} 
                className='relative py-8'
                onMouseEnter={() => item.submenu && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer transition-colors hover:bg-[#0154F81A] hover:text-[#0154F8] hover:p-1 hover:px-[7px] rounded-xl">
                  <NavLink 
                    to={item.path || '#'} 
                    className={({isActive}) => `font-medium text-[14px] ${isActive && !item.submenu ? 'text-blue-600' : 'text-gray-800'}`}
                  >
                    {item.title}
                  </NavLink>
                  {item.submenu && (
                    <span className={`text-[10px] transition-transform duration-300 ${activeDropdown === item.id ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  )}
                </div>

                {/* DROPDOWN LOGIC */}
{/* --- ОБЩИЙ КОНТЕЙНЕР ДРОПДАУНА --- */}
{activeDropdown === item.id && item.submenu && (
  <div className={`
    absolute top-[90%] left-[128px] -translate-x-1/2 mt-2 bg-white shadow-2xl rounded-[32px] border border-gray-100 p-8 z-50 animate-in fade-in slide-in-from-top-2
    /* Переключение ширины: 1184px для Services, 310px для Results/других */
    ${item.variant === 'mega' ? 'w-[1148px]' : 'w-[310px]'}
  `}>
    
    {/* ============================================================
        ВАРИАНТ 1: МЕГА-МЕНЮ (Например, для раздела "Services")
        ============================================================ */}
    {item.variant === 'mega' ? (
      <div className="flex gap-12 items-center justify-center re"  >
        
        {/* ЛЕВАЯ КОЛОНКА: Primary Services (Сетки с карточками) */}
        <div className="flex-1">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-widest">Primary Services</h4>
          <div className="grid grid-cols-3 gap-4"> {/* В макете обычно 3 колонки */}
            {item.submenu.filter(s => s.type !== 'service').map(sub => (
              <NavLink 
                key={sub.id} 
                to={sub.path} 
                className="group gap-4  flex flex-col justify-center gap-3 px-6 h-[100px] bg-[#F9F9FB] rounded-[24px] border border-transparent hover:bg-white hover:shadow-xl hover:border-pink-100 transition-all duration-300 relative"
              >
                {/* Иконка сервиса */}
                <div className="text-3xl pb-4 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 origin-left">
                  {sub.icon}
                </div>
                {/* Название сервиса */}
                <span className="font-bold text-[15px] text-gray-800 leading-tight group-hover:text-[#0154F8]">{sub.title}</span>
                {/* Розовая стрелочка при ховере */}
                <span className="absolute top-6 right-6 text-pink-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                  →
                </span>
              </NavLink>
            ))}
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: Additional Services (Список с разделителями) */}
        <div className="w-[300px] border-l border-gray-100 pl-10">
          <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-widest">Additional Services</h4>
          <div className="flex flex-col">
            {item.submenu.filter(s => s.type === 'service').map(sub => (
              <NavLink 
                key={sub.id} 
                to={sub.path} 
                className="flex items-center justify-between py-4 border-b border-gray-50 hover:bg-[#FFFFFF]  last:border-gr group/line"
              >
                <span className="text-[14px]  text-[#1C2329] font-bold transition-colors">
                  {sub.title}
                </span>
                <span className="text-blue-500 opacity-0 group-hover/line:opacity-100 transition-all -translate-x-2 group-hover/line:translate-x-0">
                  →
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    ) : (
      
      /* ============================================================
         ВАРИАНТ 2: ОБЫЧНЫЙ ДРОПДАУН (Например, для "Results")
         ============================================================ */
      <div className="flex flex-col gap-3 justify-center items-center">
        {item.submenu.map(sub => (
          <NavLink 
            key={sub.id} 
            to={sub.path} 
            className="group flex justify-center items-center p-4 bg-[#F5F7FA] rounded-[16px] w-[270px] hover:bg-white hover:shadow-lg hover:bg-[#EBEDF0] transition-all border border-transparent hover:border-pink-50 relative"
          >
            {/* Иконка (IELTS, SAT и т.д.) */}
            <div className="text-3xl opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 origin-left">
              {sub.icon}
            </div>
            {/* Текст результата */}
            <span className="font-bold text-[15px] text-gray-800">{sub.title}</span>
            {/* Стрелочка как на втором скрине */}
            <span className="ml-auto text-pink-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
              →
            </span>
          </NavLink>
        ))}
      </div>
    )}
  </div>
)}           </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <div 
            className="relative"
            onMouseEnter={() => setIsLangOpen(true)} 
            onMouseLeave={() => setIsLangOpen(false)}
          >
            <button className="flex items-center gap-2 px-3 py-2 bg-[#F5F5F7] rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors">
              <GlobeIcon />
              <span className="text-[14px] font-bold text-gray-700">{lang}</span>
              <span className={`text-[10px] transition-transform ${isLangOpen ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {isLangOpen && (
              <ul className="absolute right-0 mt-2 w-32 bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                {['EN', 'UZ'].map((l) => (
                  <li key={l}>
                    <button 
                      onClick={() => { setLANG(l as 'EN' | 'UZ'); setIsLangOpen(false); }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${lang === l ? 'bg-blue-50 text-blue-600 font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                    >
                      {l === 'EN' ? 'English' : "O'zbekcha"}
                      {lang === l && <span>✓</span>}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="bg-[#0052FF] text-white px-6 py-3 rounded-xl text-[15px] font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-95">
            {t('buildFuture')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;