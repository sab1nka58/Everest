import { Link } from "react-router-dom";
import { results } from "../MainData";
import { useLanguage } from "../../../context/LanguageContext";
import ResultdImg from "../../../assets/Mockup.png";
import { ArrowIcon } from "../MainIcon";

const IELTSResults = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full max-w-[1440px] mx-auto py-6 md:py-16 px-4 md:px-6 overflow-hidden">
      {/* Заголовок: центрирован на мобилках для баланса */}
      <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end gap-6 mb-8 md:mb-14">
        <div className="w-full md:max-w-[700px] text-center md:text-left">
          <h2 className="font-black text-[28px] md:text-[48px] leading-[1.1] uppercase text-[#1C2329]">
            {t("results_title")}{" "}
            <span className="text-[#0154F8] block md:inline">
              {t("results_title_blue")}
            </span>
          </h2>
        </div>

        <Link to="/results/ielts" className="w-full md:w-auto">
          <button className="w-full bg-[#0154F8] text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 active:scale-95 transition-transform">
            {t("results_btn_all")} <ArrowIcon />
          </button>
        </Link>
      </div>

      {/* Сетка: 2 колонки на мобилке, 4 на десктопе */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 ">
        {results.map((item) => (
          <article
            key={item.id}
            className="group relative  p-4 md:p-8 bg-white rounded-[24px] md:rounded-[40px] shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-2xl overflow-hidden h-[220px] md:h-[320px]"
          >
            {/* Текст (Имя/Дата) */}
            <div className="relative mb-5  z-20">
              <h3 className="font-boldtext-[18px] md:text-[26px] font-bold max-w-50 leading-tight uppercase text-[#1C2329] group-hover:text-red-500 transition-colors line-clamp-2">
                {item.name}
              </h3>
              <time className="text-[12px] md:text-[15px] text-gray-400 mt-1 block font-medium">
                {item.date}
              </time>
            </div>

            {/* Картинка-сертификат (Влита в фон) */}
            <div className="absolute inset-0 z-10 mt-2 ">
              <img
                src={ResultdImg}
                alt="IELTS"
                className="absolute  bottom-[-25%] right-[-30%] w-[180%] md:w-[120%] max-w-none rotate-[-12deg] opacity-80 md:opacity-100 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0"
              />
            </div>

            {/* Плашка со счетом (Score) */}
            <div
              className="absolute bottom-3 left-3 md:bottom-8 md:left-8 z-30
            flex flex-col items-center justify-center 
            rounded-xl md:rounded-[24px] transition-all
            bg-gray-100/90 backdrop-blur-sm text-[#001A72]
            w-[85px] h-[65px] md:w-[130px] md:h-[100px]
            group-hover:bg-[#0154F8] group-hover:text-white"
            >
              <span className="text-[10px] md:text-[14px] font-black uppercase opacity-60">
                {t("results_score")}
              </span>
              <strong className="text-[28px] md:text-[44px] font-black leading-none">
                {item.score}
              </strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default IELTSResults;
