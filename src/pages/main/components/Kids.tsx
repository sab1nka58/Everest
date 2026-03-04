import LogoKids from "../../../assets/LogoKids.png";
import EverestKids from "../../../assets/EverestKids.png";
import { getKidsData } from "../MainData";
import { EverestKidsBanner, TelefonIcon } from "../../../component/Navbar/Icon";
import { useLanguage } from "../../../context/LanguageContext";
import { Link } from "react-router-dom";

const Kids = () => {
  const { t } = useLanguage();
  const KidsData = getKidsData(t);

  return (
    <>
      {/* Everest kids - Адаптированные отступы и радиус */}
      <section className="relative w-full max-w-[1440px] mx-auto min-h-[700px] md:min-h-[600px] bg-gradient-to-r from-[#0057ff] to-[#002e99]/90 rounded-[30px] md:rounded-[50px] overflow-hidden p-6 md:p-20 text-white my-4 md:my-8">
        
        {/* СЛОЙ 1: Фоновый паттерн */}
        <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
          <EverestKidsBanner />
        </div>

        {/* СЛОЙ 2: Фото детей - На мобильном уходит вниз и становится меньше */}
        <div className="absolute top-0 right-0 z-15 h-[40%] md:h-[90%] w-full md:w-auto flex justify-end pointer-events-none ">
          <img
            src={EverestKids}
            className="h-full w-auto object-contain object-right-bottom md:object-contain opacity-80 md:opacity-100"
            alt="Kids"
          />
        </div>

        {/* СЛОЙ 3: Контент */}
        <div className="relative z-20 w-full md:max-w-[1200px]">
          
          {/* Логотип */}
          <div className="flex items-center gap-3 mb-6 md:mb-10">
            <img src={LogoKids} className="h-6 md:h-8" alt="Logo" />
          </div>

          {/* Заголовок - уменьшен для мобилок */}
          <h2 className="md:text-[28px]  text-[18px] md:text-4xl font-[700] md:pt-10 md:mb-6 leading-tight uppercase tracking-tight pt-30 pr-40">
            {t("kids_title")}
          </h2>

          {/* Описание */}
          <p className="text-white/80 text-[14px] md:text-[18px] mb-8 md:mb-10 md:max-w-[680px] leading-relaxed">
            {t("kids_desc")}
          </p>

          {/* Кнопки - Стек на мобильном */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-12">
            <button className="bg-white text-[15px] text-black justify-center items-center px-7 py-3.5 rounded-2xl font-bold hover:bg-opacity-90 transition-all flex gap-2">
              {t("kids_btn_reg")} <TelefonIcon />
            </button>
            <Link to="/everestkids" className="w-full sm:w-auto">
              <button className="w-full border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 rounded-2xl font-bold hover:bg-white/20 transition-all flex justify-center items-center">
                {t("kids_btn_more")} <span className="ml-2">→</span>
              </button>
            </Link>
          </div>

          {/* Стеклянные карточки - 1 колонка на мобильном, 3 на десктопе */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 relative">
            {KidsData.map((card, i) => (
              <div
                key={i}
                className="bg-white/1   backdrop-blur-md border border-white/20 p-5 md:p-6 rounded-[24px] hover:bg-white/15 transition-all group"
              >
                <h4 className="font-bold text-[18px] md:text-[20px] mb-1 group-hover:text-blue-200 transition-colors">
                  {card.title}
                </h4>
                <p className="text-[13px] md:text-[14px] text-white/70 mb-4 leading-snug">
                  {card.desc}
                </p>
                <span className="inline-block bg-white/20 px-4 py-1 rounded-xl text-[12px] md:text-[14px] font-bold uppercase tracking-wider">
                  {card.age}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Kids;