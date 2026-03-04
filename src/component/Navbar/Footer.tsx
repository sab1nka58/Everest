import LogoFooter from "../../assets/logofooter.png";
import everestIcon from "../../assets/banner/bg.png";
import { getNavLinks } from "./navLinks";
import { Link } from "react-router-dom";
import { InstagramIcon, TgIcon, YouTubeIcon } from "./Icon";
import { useLanguage } from "../../context/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);

  return (
    <>
      {/* --- FORM SECTION --- */}
      <section className="bg-[#f8faff] py-8 px-4">
        <div className="max-w-[1360px] mx-auto bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-8 md:mb-10">
            <p className="text-gray-500 text-sm md:text-base mb-2">
              {t("form_sub")}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight">
              {t("form_title")}
            </h2>
          </div>

          <form className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Name Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-medium text-gray-700 ml-2">
                {t("form_name_label")}
              </label>
              <input
                type="text"
                placeholder="How can we call you?"
                className="w-full h-[56px] md:h-[64px] bg-[#f4f7fa] text-sm border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            {/* Phone Input */}
            <div className="flex flex-col gap-2">
              <label className="text-sm md:text-base font-medium text-gray-700 ml-2">
                {t("form_phone_label")}
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full h-[56px] md:h-[64px] bg-[#f4f7fa] text-sm border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-sm md:text-base font-medium text-gray-700 ml-2">
                {t("form_msg_label")}
              </label>
              <textarea
                placeholder="Give a thorough description..."
                className="w-full h-[120px] md:h-[150px] text-sm bg-[#f4f7fa] border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
              />
              <span className="text-right text-xs text-gray-400">0/500</span>
            </div>

            {/* Bottom Actions */}
            <div className="md:col-span-2 flex flex-col md:flex-row justify-between items-center mt-4 gap-6">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-[10px] md:text-xs text-gray-500 max-w-[300px] md:max-w-[400px]">
                  {t("form_agree")}
                </span>
              </label>

              <button className="w-full md:w-auto bg-[#0057ff] hover:bg-blue-700 text-white font-bold py-4 px-12 md:px-20 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-200">
                {t("form_btn")}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* --- FOOTER SECTION --- */}
      <footer className="relative w-[calc(100%-2rem)] mx-auto bg-gradient-to-r from-[#0057ff] to-[#002e99] text-white py-10 px-6 md:px-12 lg:px-20 overflow-hidden rounded-[32px] md:rounded-[40px] mb-8 max-w-[1440px]">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src={everestIcon}
            className="w-full h-full object-cover mix-blend-overlay opacity-30"
            alt=""
          />
        </div>

        <div className="relative z-10">
          {/* 1. Header: Logo & Nav */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 md:mb-16 pb-7 border-white/20 border-b gap-6">
            <img src={LogoFooter} className="h-10 md:h-12 w-auto" alt="Everest" />
            <ul className="flex flex-wrap justify-center gap-x-6 lg:gap-x-8 gap-y-3 text-sm font-medium">
              {navLinks.map((item, index) => (
                <li key={index} className="hover:text-blue-200 transition-colors">
                  <Link to={item.path ?? "/"}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Content: Slogan & Socials */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 mb-16">
            <div className="max-w-[700px] text-center lg:text-left">
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                {t("footer_slogan_title")}
              </h3>
              <div className="space-y-4 text-white/90 text-sm md:text-base leading-relaxed">
                <p>{t("footer_text_1")}</p>
                <p>{t("footer_text_2")}</p>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4 w-full md:w-auto">
              {[
                { icon: <TgIcon />, label: 'Telegram' },
                { icon: <InstagramIcon />, label: 'Instagram' },
                { icon: <YouTubeIcon />, label: 'YouTube' }
              ].map((social, i) => (
                <div key={i} className="flex flex-col items-center justify-center min-w-[80px] md:w-[120px] h-[100px] md:h-[110px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:rounded-[24px] hover:bg-white/20 transition-all cursor-pointer p-2">
                  <div className="text-2xl md:text-3xl mb-1 md:mb-2 text-white">
                    {social.icon}
                  </div>
                  <span className="text-[10px] md:text-[12px] font-medium tracking-wide">
                    {social.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Bottom Panel */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[24px] md:rounded-full px-6 md:px-10 py-5 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs md:text-sm text-white/70">
            <p className="text-center lg:text-left">{t("footer_copy")}</p>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <a href="mailto:info@everest.education" className="hover:text-white transition-colors">
                info@everest.education
              </a>
              <a href="tel:+998788888008" className="hover:text-white transition-colors font-bold text-base md:text-sm">
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