import LogoFooter from "../../assets/logofooter.png";
import everestIcon from "../../assets/banner/bg.png";
import { getNavLinks } from "./navLinks";
import { Link } from "react-router-dom";
import {  InstagramIcon, TgIcon, YouTubeIcon } from "./Icon";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  // const navLinks = getNavLinks((key) => key);
  const { t } = useLanguage();
  
  // Передаем реальную функцию перевода в навигацию
  const navLinks = getNavLinks(t);
  return (
    <>
    {/* Forma */}
      <section className="bg-[#f8faff] mt-8 mb-8 px-4">
        <div className="max-w-[1360px] mx-auto bg-white rounded-[40px] p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm mb-2 text-16px">
              {t("form_sub")} 
            </p>
            <h2 className="text-[28] md:text-4xl font-bold text-gray-900">
             {t("form_title")}
            </h2>
          </div>

          <form className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium text-black-700  ml-2">
               {t("form_name_label")}
              </label>
              <input
                type="text"
                placeholder="How can we call you?"
                className="w-[352] h-[70px] bg-[#f4f7fa] text-[14px] border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium text-black-700 ml-2">
                {t("form_phone_label")}
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-[352px] h-[44px] bg-[#f4f7fa] text-[14px] border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className=" text-[16px] font-medium text-black-700 ml-2">
               {t("form_msg_label")}
              </label>
              <textarea
                
                placeholder="Give a thorough description to the matter of your interest"
                className="w-[724] h-[100px] text-[14px] bg-[#f4f7fa] border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              />
              <span className="text-right text-xs text-gray-400">0/500</span>
            </div>

            <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center mt-4 gap-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray bg-gray text-blue-600 focus:ring-blue-500"
                />
                <span className="text-xs text-gray-500 max-w-[400px]">
                  {t("form_agree")}
                </span>
              </label>

              <button className="bg-[#0057ff] hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-200">
                {t("form_btn")}
              </button>
            </div>
          </form>
        </div>
      </section>
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
          {t("footer_slogan_title")}
        </h3>
        <div className="space-y-5 text-white/90 text-[14px] leading-relaxed">
          <p className="text-[14px] text-">
           {t("footer_text_1")}
          </p>
          <p className="text-[14px]">
           {t("footer_text_2")}
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
      <p>{t("footer_copy")}</p>
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
