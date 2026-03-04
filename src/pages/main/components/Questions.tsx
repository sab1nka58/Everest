import { useState } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { getFaqData } from "../MainData";


const Questions = () => {
    const { t } = useLanguage();
      const [openIdx, setOpenIdx] = useState<number | null>(null);
       const toggleFaq = (idx: number) => {
    // Если кликаем на уже открытый — закрываем, иначе открываем новый
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <>
         {/* Tez-Tez so`raladigan savollar */}
<section className="bg-[#F8FAFF] py-10 px-4 md:px-6">
  <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
    
    {/* ЛЕВАЯ ЧАСТЬ: Заголовок — теперь по центру на мобилках */}
    <div className="w-full lg:w-1/3 text-center lg:text-left">
      <h2 className="text-[30px] md:text-[40px] font-black leading-tight uppercase mb-4">
        {t("faq_title")}
        <br />
        <span className="text-[#0057FF]">{t("faq_title_blue")}</span>
      </h2>
      <p className="text-gray-500 text-[16px] md:text-lg leading-relaxed">
        {t("faq_subtitle")}
      </p>
    </div>

    {/* ПРАВАЯ ЧАСТЬ: Аккордеон — на мобилках во всю ширину */}
    <div className="w-full lg:w-2/3 space-y-3 md:space-y-4">
      {getFaqData(t).map((item, index) => {
        const isOpen = openIdx === index;

        return (
          <div
            key={item.id}
            className="bg-white w-full rounded-[20px] md:rounded-[25px] overflow-hidden shadow-sm border border-gray-100 transition-all duration-300"
          >
            {/* Кнопка вопроса */}
            <button
              onClick={() => toggleFaq(index)}
              className="w-full p-5 md:p-6 text-left flex justify-between items-center gap-4 group"
            >
              <span
                className={`text-[16px] md:text-[20px] font-bold leading-tight transition-colors duration-300 ${
                  isOpen ? "text-[#0057FF]" : "text-gray-900"
                }`}
              >
                {item.question}
              </span>

              {/* Иконка стрелочки — чуть меньше на мобилках */}
              <div
                className={`shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "bg-[#0057FF] text-white rotate-180" : "bg-gray-50 text-gray-500"
                }`}
              >
                <svg
                  width="12"
                  height="7"
                  viewBox="0 0 14 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1L7 7L13 1" />
                </svg>
              </div>
            </button>

            {/* Ответ */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-5 pb-6 md:px-6 md:pb-8">
                <div className="text-gray-600 text-[14px] md:text-[16px] leading-relaxed border-t border-gray-50 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
    </>
  )
}

export default Questions