import { useLanguage } from "../../../context/LanguageContext";
import bannerImg from "../../../assets/banner/Group 4.png";

const Banner = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] w-full flex flex-col items-center bg-white overflow-hidden pt-12 md:pt-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-20 flex flex-col items-center md:items-start text-center md:text-left">
        
        {/* КОНТЕНТНАЯ ЧАСТЬ */}
        <div className="flex flex-col items-center md:items-start max-w-[800px] md:py-30">
          {/* ЗАГОЛОВОК (Исправлен порядок цветов под макет) */}
          <h1 className="font-black text-[36px] md:text-[64px] uppercase leading-[1.1] text-[#1C2329] tracking-tight">
            {t("hero_title_main")} <br className="hidden md:block" />
            <span className="text-[#FF2D55]">{t("hero_title_pink")}</span>
          </h1>

          {/* ОПИСАНИЕ */}
          <p className="mt-4 md:mt-6 text-gray-500 text-[16px] md:text-lg max-w-[340px] md:max-w-[500px] leading-relaxed font-medium">
            {t("hero_description")}
          </p>

          {/* КНОПКИ (Скругленные под макет) */}
          <div className="mt-8 md:mt-10 flex flex-row gap-3 w-full justify-center md:justify-start">
            <button className="bg-[#0052FF] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-[16px] md:rounded-xl font-bold text-[15px] md:text-base hover:bg-blue-700 transition flex-1 md:flex-none">
              {t("btn_enroll")}
            </button>
            <button className="bg-[#E5E7EB]/70 text-[#1C2329] px-8 md:px-10 py-3.5 md:py-4 rounded-[16px] md:rounded-xl font-bold text-[15px] md:text-base hover:bg-gray-300 transition flex-1 md:flex-none">
              {t("btn_details")}
            </button>
          </div>
        </div>
      </div>

      {/* ФОНОВАЯ ГОРА (Позиционирование под макет) */}
      <div className="relative md:absolute right-0 bottom-0 w-full md:w-[55%] h-[350px] md:h-full mt-auto md:mt-0 flex justify-center items-cente pointer-events-none">
        <img
          src={bannerImg}
          alt="Success Mountain"
          className="object-contain object-bottom md:object-right-bottom h-full w-[100%] md:w-full"
        />
      
        
      </div>

      {/* ПАГИНАЦИЯ (Скрываем на маленьких экранах, если на макете ее нет) */}
      <div className="hidden md:flex absolute bottom-10 left-24 gap-2">
        <span className="h-1.5 w-12 bg-[#0052FF] rounded-full"></span>
        {[...Array(4)].map((_, i) => (
          <span key={i} className="h-1.5 w-12 bg-gray-100 rounded-full"></span>
        ))}
      </div>
    </section>
  );
};

export default Banner;