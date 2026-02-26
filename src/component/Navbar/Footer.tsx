import LogoFooter from "../../assets/logofooter.png";
import everestIcon from "../../assets/banner/bg.png";
import { getNavLinks } from "./navLinks";
import { Link } from "react-router-dom";
import {  InstagramIcon, TgIcon, YouTubeIcon } from "./Icon";

const Footer = () => {
  const navLinks = getNavLinks((key) => key);
  return (
    <>
      <footer className="relative w-full bg-gradient-to-r from-[#0057ff] to-[#002e99] text-white py-8 px-23  overflow-hidden rounded-[40px] mt-8 mb-8  max-w-[1440px] mx-auto">
  {/* Фоновые горы (подложка как на скрине) */}
  <div className="absolute inset-0 pointer-events-none select-none">
    
    <img 
      src={everestIcon} 
      className="w-full h-full object-cover mix-blend-overlay opacity-30" 
      alt="" 
    />
  </div>

  <div className="relative z-10 max-w-[1440px] mx-auto">
    
    {/* 1. Навигация: Логотип и Ссылки в одну строку */}
    <div className="flex flex-col md:flex-row justify-between items-center mb-16 pb-7 border-white/20 border-b">
      <img src={LogoFooter} className="h-12 w-auto mb-6 md:mb-0" alt="Everest" />
      
      <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[15px] font-medium">
        {navLinks.map((item, index) => (
          <li key={index} className="hover:text-blue-200 text-[14px] transition-colors">
            <Link to={item.path ?? "/"}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>

   
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20">
      
      {/* Левая сторона: Текст */}
      <div className="max-w-[700px]">
        <h3 className="text-[24px] md:text-4xl font-bold mb-6">
          Everesterlar — yuksak salohiyat egalari
        </h3>
        <div className="space-y-5 text-white/90 text-[14px] leading-relaxed">
          <p className="text-[14px] text-">
            Har bir yosh EVEREST’ga vaqt va mablag‘ini oqlash, bilim olish
            va kelajagini qurish uchun keladi. Bizning maqsadimiz esa
            ularga kuchli ta’lim berib, imkoniyat eshiklarini ochish va
            kelajakda O‘zbekiston taraqqiyotiga hissa qo‘sha oladigan
            yetuk kadrlar sifatida tarbiyalashdir.
          </p>
          <p className="text-[14px]">
            EVEREST bilan siz ham haqiqiy muvaffaqiyat sari qadam qo‘yasiz
            va faxr bilan EVERESTER deb ataladiganlar safidan joy olasiz!
          </p>
        </div>
      </div>

      {/* Правая сторона: Квадратные карточки соцсетей */}
      <div className="flex gap-4 self-center lg:self-end">
        {[
          { icon: <TgIcon />, label: 'Telegram' },
          { icon: <InstagramIcon />, label: 'Instagram' },
          { icon: <YouTubeIcon />, label: 'YouTube' }
        ].map((social, i) => (
          <div key={i} className="flex flex-col items-center justify-center w-[120px] h-[110px] bg-white/10 backdrop-blur-md border border-white/20 rounded-[24px] hover:bg-white/20 transition-all cursor-pointer">
            <div className="text-3xl mb-2 text-white">
              {social.icon}
            </div>
            <span className="text-[12px] font-medium tracking-wide">
              {social.label}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* 3. Нижняя панель (Стеклянная полоска) */}
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-white/70">
      <p>© Copyright 2025 "Everest Education" LLC, all rights reserved</p>
      <div className="flex items-center gap-8">
        <a href="mailto:info@everest.education" className="hover:text-white transition-colors">
          info@everest.education
        </a>
        <a href="tel:+998788888008" className="hover:text-white transition-colors font-medium">
          +998 (78) 888-80-08
        </a>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default Footer;
