import { useState } from "react";
import everestIcon from "../../../assets/banner/bg.png";
import { getCardsData } from "../MainData";
import { useLanguage } from "../../../context/LanguageContext";

const Cards = () => {
     const { t } = useLanguage();
     const cards = getCardsData(t);
      const [activeIdx, setActiveIdx] = useState(0);
  return (
    <>
   
<section className="relative w-full py-20 md:py-28 my-8 bg-white overflow-hidden">
  {/* ФОН (без изменений) */}
  <div className="absolute inset-0 z-0 select-none pointer-events-none">
    <img
      src={everestIcon}
      alt="mountains"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/10" />
  </div>

  <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
    
    {/* ЛЕВАЯ ЧАСТЬ: ТЕКСТ */}
    <div className="w-full md:w-[35%] space-y-6 flex-shrink-0">
      <h2 className="text-[36px] md:text-5xl font-black uppercase leading-tight text-left">
        <span className="text-[#0052FF]">{t("why_everest_pink")}</span>
        <br />
        <span className="text-gray-900">{t("why_everest_main")}</span>
      </h2>
      <p className="text-gray-600 text-[16px] md:text-lg leading-relaxed max-w-sm">
        {t("why_everest_description")}
      </p>
    </div>

    {/* ПРАВАЯ ЧАСТЬ: АККОРДЕОН С ВЫХОДОМ ЗА РАМКИ */}
    {/* overflow-x-auto позволяет скроллить, если карточки не влезают */}
    <div className="flex flex-1 w-full overflow-x-auto no-scrollbar pb-10 -mr-10 pr-10">
      <div className="flex flex-nowrap gap-4 min-w-max">
        {cards.map((card, index) => {
          const isActive = activeIdx === index;
          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveIdx(index)}
              onClick={() => setActiveIdx(index)} // Для мобилок
              className={`
                relative rounded-[40px] transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] 
                cursor-pointer overflow-hidden h-[450px] md:h-[500px]
                
                ${
                  isActive
                    ? "w-[300px] md:w-[380px] bg-white shadow-[0_20px_50px_rgba(0,82,255,0.15)] z-20 border border-blue-50" 
                    : "w-[80px] md:w-[100px] bg-white/60 backdrop-blur-md border border-gray-100"
                } 
                
                p-6 flex flex-col
              `}
            >
              {/* ИКОНКА */}
              <div
                className={`
                  transition-all duration-500 p-4 rounded-2xl
                  ${isActive ? "bg-blue-50 w-16 h-16" : "w-12 h-12"} 
                  flex items-center justify-center flex-shrink-0
                `}
              >
                <div className={`${isActive ? "scale-125" : "scale-100"} transition-transform duration-500`}>
                   {card.icon}
                </div>
              </div>

              {/* ВЕРТИКАЛЬНЫЙ ТЕКСТ (когда карточка закрыта) */}
              <div className={`
                absolute bottom-10 left-1/2 -translate-x-1/2 transition-opacity duration-300
                ${isActive ? "opacity-0 invisible" : "opacity-100 visible"}
              `}>
                <span className="rotate-[-90deg] block whitespace-nowrap font-bold text-gray-400 uppercase tracking-[0.2em] text-[18px] md:text-[22px]">
                  {card.title}
                </span>
              </div>

              {/* КОНТЕНТ (когда карточка активна) */}
              <div className={`
                mt-auto transition-all duration-500 delay-100
                ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 invisible"}
              `}>
                <h3 className="text-[24px] md:text-[28px] font-black text-gray-900 uppercase leading-tight mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-500 text-[14px] md:text-[16px] leading-relaxed">
                  {card.text}
                </p>
                
                {/* Декоративная стрелочка или элемент внизу */}
                <div className="mt-6 w-10 h-1 bg-blue-600 rounded-full"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>

  {/* Стили для скрытия скроллбара (опционально) */}
  <style>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
</section>
    </>
  )
}

export default Cards