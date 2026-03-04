import { Link, NavLink } from 'react-router-dom';
import { GlobeIcon } from './Icon';
import logo from '../../assets/x.png';
import { getNavLinks } from './navLinks';
import { useState } from 'react';
import { useLanguage, type LangType } from '../../context/LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileActiveId, setMobileActiveId] = useState<number | null>(null);

  const navLinks = getNavLinks(t);

  return (
    <header className='w-full bg-white sticky top-0 z-[100] border-b border-gray-50'>
      <div className='max-w-[1440px] mx-auto px-4 lg:px-6 flex items-center justify-between h-[72px] lg:h-[90px]'>
        
        {/* ЛОГОТИП */}
        <nav className='flex items-center gap-8'>
          <Link to='/' className='py-2 lg:py-5 z-[110]'>
            <img src={logo} alt="Everest" className='w-[80px] lg:w-[96px] h-auto' />
          </Link>

          {/* ДЕСКТОПНОЕ МЕНЮ (скрыто на мобильных через hidden) */}
          <ul className='hidden lg:flex gap-8'>
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

                {/* ТВОЯ СУЩЕСТВУЮЩАЯ ЛОГИКА ДРОПДАУНА (без изменений) */}
                {activeDropdown === item.id && item.submenu && (
                  <div className={`
                    absolute top-[90%] left-[128px] -translate-x-1/2 mt-2 bg-white shadow-2xl rounded-[32px] border border-gray-100 p-8 z-50 animate-in fade-in slide-in-from-top-2
                    ${item.variant === 'mega' ? 'w-[1148px] left-[298px]' : 'w-[310px]'}
                  `}>
                    {item.variant === 'mega' ? (
                      <div className="flex gap-12 items-center justify-center">
                        <div className="flex-1">
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-widest">Primary Services</h4>
                          <div className="grid grid-cols-3 gap-4">
                            {item.submenu.filter(s => s.type !== 'service').map(sub => (
                              <NavLink key={sub.id} to={sub.path} className="group gap-4 flex flex-col justify-center gap-3 px-6 h-[100px] bg-[#F9F9FB] rounded-[24px] border border-transparent hover:bg-white hover:shadow-xl hover:border-pink-100 transition-all duration-300 relative">
                                <div className="text-3xl pb-4 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 origin-left">
                                  {sub.icon}
                                </div>
                                <span className="font-bold text-[15px] text-gray-800 leading-tight group-hover:text-[#0154F8]">{sub.title}</span>
                                <span className="absolute top-6 right-6 text-pink-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">→</span>
                              </NavLink>
                            ))}
                          </div>
                        </div>
                        <div className="w-[300px] border-l border-gray-100 pl-10">
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase mb-6 tracking-widest">Additional Services</h4>
                          <div className="flex flex-col">
                            {item.submenu.filter(s => s.type === 'service').map(sub => (
                              <NavLink key={sub.id} to={sub.path} className="flex items-center justify-between py-4 border-b border-gray-50 hover:bg-[#FFFFFF] last:border-gr group/line">
                                <span className="text-[14px] text-[#1C2329] font-bold transition-colors">{sub.title}</span>
                                <span className="text-blue-500 opacity-0 group-hover/line:opacity-100 transition-all -translate-x-2 group-hover/line:translate-x-0">→</span>
                              </NavLink>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3 justify-center items-center">
                        {item.submenu.map(sub => (
                          <NavLink key={sub.id} to={sub.path} className="group flex justify-center items-center p-4 bg-[#F5F7FA] rounded-[16px] w-[270px] hover:bg-white hover:shadow-lg hover:bg-[#EBEDF0] transition-all border border-transparent hover:border-pink-50 relative">
                            <div className="text-3xl opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 origin-left">{sub.icon}</div>
                            <span className="font-bold text-[15px] text-gray-800">{sub.title}</span>
                            <span className="ml-auto text-pink-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">→</span>
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className="flex items-center gap-2 lg:gap-4">
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
              <ul className="absolute right-0 top-6 mt-2 w-32 bg-white shadow-2xl rounded-2xl border border-gray-100 p-2 z-50">
                {['EN', 'UZ'].map((l) => (
                  <li key={l}>
                    <button 
                      onClick={() => { setLang(l as LangType); setIsLangOpen(false); }}
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

          <button className="hidden lg:block bg-[#0052FF] text-white px-6 py-3 rounded-xl text-[15px] font-bold hover:bg-blue-700 transition-all">
            {t('BuildFuture')}
          </button>

          {/* КНОПКА БУРГЕРА (только на мобилке) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 z-[110] relative"
          >
            {isMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-6 h-0.5 bg-gray-800"></span>
                <span className="block w-4 h-0.5 bg-gray-800"></span>
              </div>
            )}
          </button>
        </div>
      </div>
{/* --- МОБИЛЬНОЕ МЕНЮ: ЭФФЕКТ РАСШИРЯЮЩЕЙСЯ КАРТЫ --- */}
<div className={`
  fixed inset-0 bg-[#F9FAFB] z-[120] transition-transform duration-500 lg:hidden
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
`}>
  {/* Header внутри меню */}
  <div className="flex items-center justify-between px-6 h-[72px] bg-white border-b border-gray-100">
    <img src={logo} alt="Everest" className="w-[80px] h-auto" />
    <div className="flex items-center gap-4">
       {/* Кнопка языка в хедере меню */}
       <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 rounded-lg border border-gray-100">
         <GlobeIcon />
         <span className="text-[14px] font-bold uppercase">{lang}</span>
       </div>
       <button onClick={() => setIsMenuOpen(false)} className="text-[#0052FF] text-2xl font-light">
         ✕
       </button>
    </div>
  </div>

  <div className="px-4 py-6 h-[calc(100vh-72px)] overflow-y-auto bg-[#F9FAFB]">
    <ul className="space-y-3">
      {navLinks.map((item) => (
        <li key={item.id} className="w-full">
          {/* КАРТОЧКА: Она либо узкая (закрыта), либо расширяется (открыта) */}
          <div 
            className={`
              overflow-hidden transition-all duration-300 border bg-white rounded-[20px]
              ${mobileActiveId === item.id 
                ? 'border-[#0052FF] ring-1 ring-[#0052FF]/10' 
                : 'border-[#F2F4F7]'
              }
            `}
          >
            {/* Заголовок карточки (всегда виден) */}
            <div 
              onClick={() => item.submenu && setMobileActiveId(mobileActiveId === item.id ? null : item.id)}
              className="flex justify-between items-center px-5 py-4 cursor-pointer"
            >
              <span className={`text-[16px] font-semibold ${mobileActiveId === item.id ? 'text-[#0052FF]' : 'text-[#1C2329]'}`}>
                {item.title}
              </span>
              
              {item.submenu && (
                <span className={`transition-transform duration-300 ${mobileActiveId === item.id ? 'rotate-180 text-[#0052FF]' : 'text-gray-400'}`}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </span>
              )}
            </div>

            {/* КОНТЕНТ ВНУТРИ ЭТОЙ ЖЕ КАРТЫ (Раскрывается) */}
            {item.submenu && mobileActiveId === item.id && (
              <div className="px-5 pb-6 animate-in fade-in duration-300">
                <div className="space-y-5 pt-2 border-t border-gray-50">
                  {/* Группа с иконками (IELTS, SAT и т.д.) */}
                  {item.submenu.map((sub) => (
                    <NavLink 
                      key={sub.id} 
                      to={sub.path} 
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-4 group"
                    >
                      {sub.icon && <span className="text-2xl">{sub.icon}</span>}
                      <span className="text-[16px] font-medium text-[#344054] group-hover:text-[#0052FF]">
                        {sub.title}
                      </span>
                    </NavLink>
                  ))}

                  {/* Если это "Services", добавляем текстовые ссылки внизу (CDI Mock и т.д.) */}
                  {item.variant === 'mega' && (
                    <div className="pt-2 space-y-4">
                      {/* Здесь можно добавить специфические пункты, если они не в submenu */}
                      <p className="text-[16px] text-gray-500 hover:text-[#0052FF] cursor-pointer">CDI Mock exams</p>
                      <p className="text-[14px] text-gray-500 hover:text-[#0052FF] cursor-pointer">Multi-level Mock exams</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>

    {/* Кнопка внизу */}
    <div className="mt-8 pb-10 px-2">
      <button className="w-full bg-[#0052FF] text-white py-4 rounded-[18px] font-bold text-[16px]">
        {t('BuildFuture')}
      </button>
    </div>
  </div>
</div>
    </header>
  );
};

export default Navbar;