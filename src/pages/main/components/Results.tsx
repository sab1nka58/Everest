
import imgBanner from "../../../assets/banner/image 24.png";
import { useLanguage } from "../../../context/LanguageContext";
import { getBottomStats, getStatsData } from "../MainData";

const Results = () => {
    const { t } = useLanguage();
     const bottomStats = getBottomStats(t);
    
      const statsData = getStatsData(t);
  return (
    <>
   {/* --- Natijalar gapirsin! (Компактная версия) --- */}
<section className="relative w-full py-10 md:py-24 px-3 md:px-6 overflow-hidden">
  
  {/* ГЛАВНЫЙ ФОН */}
  <div className="absolute inset-0 z-0 max-w-[1440px] mx-auto rounded-[24px] md:rounded-[60px] overflow-hidden">
    <img
      src={imgBanner}
      className="w-full h-full object-cover"
      alt="background"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-[#1C2329]/60 via-[#1C2329]/90 to-[#1C2329]" />
  </div>

  <div className="relative z-10 max-w-[1240px] mx-auto text-center">
    {/* ЗАГОЛОВОК */}
    <h2 className="text-white text-[24px] md:text-[56px] font-black uppercase mb-1 md:mb-4 tracking-tight">
      {t("stats_main_title")}
    </h2>
    <p className="text-white/50 text-[9px] md:text-[14px] mb-8 md:mb-20 uppercase tracking-[0.2em] font-medium">
      {t("stats_sub_title")}
    </p>

    {/* СЕТКА ВЕРХНИХ КАРТОЧЕК (2 в ряд на мобилке) */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-[1100px] mx-auto mb-4 md:mb-10 pb-10 border-b border-white/10">
      {statsData.map((item) => (
        <div
          key={item.id}
          className="relative group p-4 md:p-10 rounded-[20px] md:rounded-[40px] border border-white/10 
                     bg-white/5 backdrop-blur-md transition-all duration-300 text-left overflow-hidden min-h-[140px] md:min-h-[220px]"
        >
          {/* ИКОНКА (Компактная для мобилки) */}
          <div className="w-8 h-8 md:w-12 md:h-12 mb-4 md:mb-10 text-white/90">
            {item.icon}
          </div>

          <div className="text-white text-[24px] md:text-[48px] font-black mb-1 leading-none z-10 relative">
            {item.title}
          </div>

          <div className="text-white/40 text-[8px] md:text-[12px] font-bold uppercase tracking-wider leading-tight z-10 relative">
            {item.desc}
          </div>

          {/* ВОДЯНОЙ ЗНАК (Меньше, чтобы не перекрывать текст на узких картах) */}
          <div className="absolute -bottom-2 -right-2 text-white/[0.04] text-[60px] md:text-[140px] font-black pointer-events-none">
            {item.title.replace(/\D/g, "")}
          </div>
        </div>
      ))}
    </div>

    {/* НИЖНИЙ РЯД КАРТОЧЕК (Тоже 2 в ряд на мобилке) */}
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 max-w-[1200px] mx-auto">
      {bottomStats.map((item) => (
        <div
          key={item.id}
          className="relative group p-4 h-[110px] md:h-[180px] rounded-[16px] md:rounded-[24px] border border-white/5 
                     bg-white/5 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
        >
          <div className="text-white text-[22px] md:text-[42px] font-black tracking-tighter z-10 leading-none">
            {item.value}
          </div>

          <div className="text-white/40 text-[8px] md:text-[11px] font-bold uppercase tracking-wider leading-tight z-10">
            {item.label}
          </div>

          <div className="absolute -right-1 -bottom-2 text-white/[0.03] text-[60px] md:text-[130px] font-black pointer-events-none">
            {item.watermark}
          </div>
        </div>
      ))}
    </div>
  </div>
</section> {/* --- Natijalar gapirsin! (Statistics Section) --- */}

    </>
  )
}

export default Results