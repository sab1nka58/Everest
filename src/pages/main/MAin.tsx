import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner/Group 4.png";
import { useLanguage } from "../../context/LanguageContext";
import ResultdImg from "../../assets/Mockup.png";
import {
  EverestKidsBanner,
  TelefonIcon,
  TeleginIcon,
} from "../../component/Navbar/Icon";
import { getNavLinks } from "../../component/Navbar/navLinks";
import { useState } from "react";
import {
  getBottomStats,
  getCardsData,
  getFaqData,
  getKidsData,
  getServicesData,
  getStatsData,
  locations,
  results,
} from "./MainData";
import everestIcon from "../../assets/banner/bg.png";
import imgBanner from "../../assets/banner/image 24.png";
// import bannerKids from "../../assets/banner/banner.png";
import LogoKids from "../../assets/LogoKids.png";
import EverestKids from "../../assets/EverestKids.png";
import Colaj from "../../assets/Collage.png";
import Map from "../../assets/banner/global.png";
import MAP  from "../../assets/location/Screenshot 2025-09-06 at 12.32.21 AM 1.png";
import { ArrowIcon, MapIcon, MetroIcon, PeopleIcon } from "./MainIcon";


  

const MAin = () => {
  const { t } = useLanguage();
  const cards = getCardsData(t);
  const statsData = getStatsData(t);
  const bottomStats = getBottomStats(t);
  const services = getServicesData(t);
  const KidsData = getKidsData(t); // Получаем данные для Kids
  const faqData = getFaqData(t); // Получаем данные для FAQ
  const [activeId, setActiveId] = useState(null);

  // Вызываем функцию с заглушкой (key => key), чтобы получить данные без ошибок
  const links = getNavLinks((key) => key);

  // Находим объект Services (id: 3) и достаем его submenu
  const servicesSubmenu = links.find((link) => link.id === 3)?.submenu || [];

  // Фильтруем, чтобы оставить только курсы (где есть иконки)
  // и убрать технические сервисы вроде "Registration services"
  const courses = servicesSubmenu.filter((item) => item.icon);

  const [activeIdx, setActiveIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (idx: number) => {
    // Если кликаем на уже открытый — закрываем, иначе открываем новый
    setOpenIdx(openIdx === idx ? null : idx);

    //  Достаем переводчик
  };

  return (
    <>
      {/* BANNER */}
      <section className="relative min-h-[700px] w-full flex items-center bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-1 items-center relative z-10">
          <div className="flex flex-col max-w-[1000px]">
            {/* ЗАГОЛОВОК */}
            <h1 className="font-black text-[40px] md:text-[64px] uppercase leading-[1.1] text-gray-900">
              <span className="text-[#E91E63]">{t("hero_title_pink")}</span>{" "}
              {t("hero_title_main")}
            </h1>

            {/* ОПИСАНИЕ */}
            <p className="mt-6 text-gray-600 text-lg max-w-[500px] leading-relaxed">
              {t("hero_description")}
            </p>

            {/* КНОПКИ */}
            <div className="mt-10 flex gap-4">
              <button className="bg-[#0056D2] text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                {t("btn_enroll")}
              </button>
              <button className="bg-[#E5E7EB] text-gray-800 px-10 py-4 rounded-lg font-bold hover:bg-gray-300 transition">
                {t("btn_details")}
              </button>
            </div>
          </div>
          <div className="hidden md:block"></div>
        </div>

        {/* ФОНОВАЯ ГОРА */}
        <div className="absolute right-0 bottom-0 w-full md:w-[60%] h-full pointer-events-none">
          <img
            src={bannerImg}
            alt="Success Mountain"
            className="object-contain object-right-bottom h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-pink-50/50 to-transparent -z-10" />
        </div>

        {/* ПАГИНАЦИЯ */}
        <div className="absolute bottom-10 left-6 md:left-24 flex gap-2">
          <span className="h-1.5 w-12 bg-gray-400 rounded-full"></span>
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="h-1.5 w-12 bg-gray-200 rounded-full"
            ></span>
          ))}
        </div>
      </section>

      {/* Kurslar */}
      <section className="bg-[#F8F9FB] py-20 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 mt-20 gap-6">
            <div className="max-w-200">
              <h2 className="text-4xl font-black text-[#1C2329] uppercase mb-4">
                {/* Разделяем, чтобы Kurslar был синим */}
                <span className="text-blue-600">
                  {t("courses_title_blue")}
                </span>{" "}
                {t("courses_title_main")}
              </h2>

              <p className="text-[#1C2329] text-[16px] max-w-[840px] w-full">
                {t("courses_description")}
              </p>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3">
              {t("btn_enroll")} <TeleginIcon />
            </button>
          </div>

          {/* Сетка карточек */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {courses.map((course) => (
              <Link
                to={course.path}
                key={course.id}
                className="group bg-white p-7 rounded-[40px] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col items-start "
              >
                {/* Иконка курса */}
                <div className="w-16 h-16  [&>svg]:w-full [&>svg]:h-full m-6  flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                  {course.icon}
                </div>

                {/* Заголовок */}
                <h3 className="text-[28px] font-bold text-[#1C2329] mb-4 uppercase tracking-tight">
                  {course.title}
                </h3>

                {/* Описание, которое ты добавила */}
                <p className="text-[#6B7280] text-[16px] leading-relaxed mb-8 flex-grow">
                  {course.description}
                </p>

                {/* Ссылка/Кнопка перехода */}
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-blue-600 font-bold">
                  Learn more <span className="text-xl">→</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nega Aynan EVEREST */}
      <section className="relative w-full py-28 my-8 bg-white overflow-hidden">
        {/* ФОН (без изменений) */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={everestIcon}
            alt="mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/10" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 p-10">
          {/* ЗАГОЛОВОК */}
          <div className="w-full md:w-1/3 space-y-6">
            <h2 className="text-[40px] md:text-5xl font-black uppercase leading-tight text-center md:text-left">
              <span className="text-blue-600">{t("why_everest_pink")}</span>
              <br />
              <span className="text-gray-900">{t("why_everest_main")}</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
              {t("why_everest_description")}
            </p>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (Аккордеон) */}
          <div className="flex flex-1 w-full h-[400px]  gap-2">
            {cards.map((card, index) => {
              const isActive = activeIdx === index;
              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={`
    relative rounded-[40px] transition-all duration-700 ease-in-out cursor-pointer overflow-hidden h-[450px] 
    
    ${
      isActive
        ? "flex-[4] bg-white shadow-2xl scale-105 z-20 max-w-[320px] " // Активная забирает всё пространство
        : "flex-[1.5] max-w-[80px] bg-white/40 backdrop-blur-sm border border-gray-200" // Закрытая превращается в узкую полоску
    } 
    
    p-4 flex flex-col  /* Центрируем всё по горизонтали */
  `}
                >
                  {/* ИКОНКА (уменьшаем для закрытых) */}
                  <div
                    className={`
    transition-all duration-500  
    ${isActive ? "w-16 h-10 mb-6" : "w-10 h-10 mb-4"} 
    flex-shrink-0
  `}
                  >
                    {card.icon}
                  </div>

                  {/* ВЕРТИКАЛЬНЫЙ ТЕКСТ (теперь он должен быть виден только в закрытых) */}
                  {!isActive && (
                    <div className="flex-[1.5] flex items-center justify-center  w-full">
                      <span className="rotate-90 whitespace-nowrap font-bold text-gray-800 uppercase tracking-widest text-[24px] ">
                        {card.title}
                      </span>
                    </div>
                  )}

                  {/* КОНТЕНТ (виден только в активной) */}
                  {isActive && (
                    <div className="opacity-100 transition-opacity duration-500 delay-200 mt-4 ">
                      <h3 className="text-[24px]  font-bold text-gray-900 pt-20 uppercase">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Natijalar gapirsin! */}
      <section className="relative w-full py-20 px-6 overflow-hidden">
        {/* ГЛАВНЫЙ ФОН: ГРАДИЕНТ + КАРТИНКА ГОР */}
        <div className="absolute inset-0 z-0 max-w-[1440px] mx-auto border border-gray-300/20 rounded-[40px] overflow-hidden">
          <img
            src={imgBanner}
            className="w-full h-full object-cover"
            alt="background"
          />
          {/* Фиолетово-красный градиент поверх гор для эффекта как на макете */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1C2329]/10 via-[#1C2329]/80 to-[#1C2329]/90" />
        </div>

        <div className="relative z-10 max-w-[1240px] mx-auto text-center">
          {/* ЗАГОЛОВОК */}
          <h2 className="text-white text-4xl md:text-10 font-black uppercase mb-4 tracking-wider">
            {t("stats_main_title")}
          </h2>
          <p className="text-white/70 text-sm mb-16 text-4 uppercase tracking-widest">
            {t("stats_sub_title")}
          </p>

          {/* СЕТКА КАРТОЧЕК */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6  max-w-[1060px] mx-auto mb-20">
            {statsData.map((item) => (
              <div
                key={item.id}
                className="relative group p-8 rounded-[30px]  border border-white/10 
                     bg-white/10 backdrop-blur-md hover:bg-white/20 
                     transition-all duration-300 text-left overflow-hidden"
              >
                {/* ИКОНКА */}
                <div className="w-12 h-12 mb-8 text-white/80 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.icon}
                </div>

                {/* ЦИФРЫ */}
                <div className="text-white text-4xl font-black mb-2 tracking-tight">
                  {item.title}
                </div>

                {/* ОПИСАНИЕ */}
                <div className="text-white/60 text-xs font-medium uppercase tracking-wide">
                  {item.desc}
                </div>

                {/* ДЕКОРАТИВНЫЙ ВОДЯНОЙ ЗНАК (цифра на фоне) */}
                <div className="absolute -bottom-4 -right-4 text-white/5 text-8xl font-black pointer-events-none">
                  {item.title.replace(/\D/g, "")}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* НИЖНИЙ РЯД КАРТОЧЕК */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6 max-w-[1200px] mx-auto">
          {bottomStats.map((item) => (
            <div
              key={item.id}
              className="relative group p-6 h-[180px] rounded-[24px] border border-white/5 
                 bg-[#1A1A1A]/0 backdrop-blur-xl hover:bg-[#ffffff]/10 
                 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* ОСНОВНАЯ ЦИФРА */}
              <div className="text-white text-[38px] font-black tracking-tighter z-10">
                {item.value}
              </div>

              {/* ПОДПИСЬ */}
              <div className="text-white/50 text-[11px] font-semibold uppercase tracking-wider leading-tight z-10">
                {item.label}
              </div>

              {/* ФОНОВЫЙ ВОДЯНОЙ ЗНАК (Крупная цифра сзади) */}
              <div className="absolute -right-2 bottom-0 text-white/5 text-[120px] font-black leading-none pointer-events-none select-none translate-y-4">
                {item.watermark}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qo`shimcha xizmatlar */}
      <section className="p-24 relative ">
        <img
          src={everestIcon}
          className=" absolute left-0 top-0 z-0 opacity-80"
          alt=""
        />
        <div className="z-2 max-w-[1380px] mx-auto relative w-full grid grid-cols-1 md:grid-cols-2  items-start gap-10 ">
          <div className="flex flex-col gap-2 max-w-[550px] w-full ml-10 row-span-1">
            <h2 className="font-[900] text-[40px] leading-[130%] uppercase tracking-normal">
              {t("extra_services_title")}{" "}
              <span className="text-[#0154F8]">{t("extra_services_blue")}</span>
            </h2>

            <p className="font-normal text-base leading-[140%] text-gray-500 text-[16px]">
              {t("extra_services_desc")}
            </p>
          </div>

          {services.map((service) => (
            <div
              className={` group max-w-[650px] w-full p-4 bg-white  rounded-xl flex flex-col items-center shadow-sm border-grey-300/20  
  ${service.id === 2 ? "mt-[-380px] " : ""}, ${service.id === 4 ? "mt-[-400px] " : ""} 
`}
            >
              <Link
                to={service.path}
                key={service.id}
                className="w-full h-full "
              >
                <img src={service.image} className="max-w-[620px] w-full" />

                <div className="p-6 flex flex-col gap-4 ">
                  <h3 className="text-[28px] font-bold">{service.title}</h3>
                  <p className="text-[16px] font-normal">
                    {service.description}
                  </p>
                </div>

                <div className="">
                  <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4 pl-10 text-blue-600 font-bold">
                    {t("learn_more")}
                    <span className="text-xl">→</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Everest kids */}
      <section className="relative w-full max-w-[1440px] mx-auto min-h-[600px] bg-gradient-to-r from-[#0057ff] to-[#002e99]/90 rounded-[50px] overflow-hidden p-14 md:p-20 text-white my-8">
        {/* СЛОЙ 1: Фоновый паттерн (дудлы) */}
        <div className="absolute w-full  text-white overflow-hidden rounded-[40px]   max-w-[1440px] mx-auto">
          <EverestKidsBanner />
        </div>

        {/* СЛОЙ 2: Фото детей (справа) */}
        <div className="absolute bottom-0 right-0 z-10 h-[90%] pointer-events-none">
          <img
            src={EverestKids}
            className="h-full w-auto object-contain"
            alt="Kids"
          />
        </div>

        {/* СЛОЙ 3: Контент */}
        <div className="relative z-20 max-w-[800px]">
          <div className="flex items-center gap-3 mb-6 pb-10">
            <img src={LogoKids} className="h-8" alt="Logo" />
          </div>

          <h2 className="text-[28px] md:text-4xl font-black mb-6 leading-tight">
            {t("kids_title")}
          </h2>

          <p className="text-white/80 text-[16px] mb-10 max-w-[550px]">
            {t("kids_desc")}
          </p>

          <div className="flex gap-4 mb-12 pt-6">
            <button className="bg-white text-[16px] text-black gap-2 items-center  px-7 py-3 rounded-2xl font-bold hover:bg-opacity-90 transition-all flex">
              {t("kids_btn_reg")} <TelefonIcon />
            </button>
            <Link to="/everestkids">
              <button className="border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                {t("kids_btn_more")}→
              </button>
            </Link>
          </div>

          {/* Стеклянные карточки (Youngsters, Juniors, Teens) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {KidsData.map((card, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-xl gap-1 border border-white/20 p-6 rounded-[30px] hover:bg-white/20 transition-all"
              >
                <h4 className="font-bold text-[20px] mb-1">{card.title}</h4>
                <p className="text-[14px] text-white/70 mb-3 pb-5">
                  {card.desc}
                </p>
                <span className="inline-block bg-white/20 px-4 py-1 rounded-full text-[16px] font-bold">
                  {card.age}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Go Global */}
      <section className="relative w-full pt-8 my-8 bg-[#FDFDFF] overflow-hidden max-w-[1440px] mx-auto">
        {/* СЛОЙ 1: Контурная карта (image_5fdd3f.jpg) */}
        <div className="absolute w-full max-w-[1440px] mx-auto min-h-[600px] rounded-[50px] overflow-hidden p-14 md:p-20 text-white my-8">
          <img
            src={Map}
            className="w-[90%] h-auto object-contain translate-x-[-10%]"
            alt="World Map Background"
          />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 flex lg:flex-row items-center gap-2">
          {/* ЛЕВАЯ ЧАСТЬ: Текст и Кнопки */}
          <div className="w-full lg:w-[40%] space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16  rounded-2xl flex items-center justify-center ">
                <svg
                  width="100"
                  height="109"
                  viewBox="0 0 100 109"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="100"
                    height="100"
                    rx="50"
                    fill="url(#paint0_linear_201_99)"
                  />
                  <g filter="url(#filter0_d_201_99)">
                    <path
                      d="M77 23V66.9546L60.9546 83V39.0454H17L33.0454 23H77Z"
                      fill="url(#paint1_linear_201_99)"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_201_99"
                      x="1"
                      y="17"
                      width="92"
                      height="92"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="8" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.111429 0 0 0 0 0.137143 0 0 0 0 0.16 0 0 0 0.4 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_201_99"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_201_99"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_201_99"
                      x1="18.0608"
                      y1="7.43681"
                      x2="83.9298"
                      y2="99.8656"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#4A85F8" />
                      <stop offset="1" stop-color="#0154F8" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_201_99"
                      x1="47"
                      y1="23"
                      x2="47"
                      y2="83"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="white" />
                      <stop offset="1" stop-color="white" stop-opacity="0.7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h2 className="text-4xl font-black text-[46px] text-gray-900 uppercase tracking-tight">
                {t("global_title")} <br /> {t("global_title_1")}
              </h2>
            </div>

            <div className="space-y-6 pt-10 max-w-[700px] w-full">
              <h3 className="text-[23px] font-bold text-gray-800 ">
                {t("global_subtitle")}
              </h3>
              <p className="text-gray-500 text-16 leading-relaxed">
                {t("global_desc_1")}
              </p>
              <p className="text-gray-500 text-16 leading-relaxed">
                {t("global_desc_2")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#0057FF] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-100">
                {t("global_btn_consult")}
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </button>
              <Link to="/goglobal">
                <button className="bg-gray-200/50 hover:bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-2xl transition-all">
                  {t("kids_btn_more")} →
                </button>
              </Link>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Коллаж */}
          <div className="w-full lg:w-[60%] grid gap-4">
            <img
              src={Colaj}
              alt="Student journey"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Everester results */}
      <section className=" max-w-[1440px] mx-auto py-8 mt-8 mb-8">
        {/* Шапка: Заголовок и Кнопка */}
        <div className="">
          <h1
            className="font-black 
  
  text-[40px] 
  leading-[130%] 
  tracking-normal 
  uppercase 
  text-[#1C2329]"
          >
            {t("results_title")}{" "}
            <span className="text-[#0154F8]">{t("results_title_blue")}</span>
          </h1>
          <div className="flex gap-10  justify-between items-start ">
            <p
              className="text-[16px] 
  leading-[140%] 
  tracking-normal 
  text-gray-500"
            >
              {t("results_subtitle")}
            </p>
            <Link to="/results/ielts">
              <button className="bg-[#0154F8] text-white text-[16px] font-bold px-12 py-3 rounded-[12px] hover:bg-blue-700 transition-all flex items-center ">
                {t("results_btn_all")} <span>→</span>
              </button>
            </Link>
          </div>{" "}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((item) => (
            <article
              key={item.id}
              // Добавили класс 'group' для связи наведения на карточку с цветом текста внутри
              className="
        group relative p-6 bg-white rounded-[32px] shadow-sm border border-transparent 
        transition-all duration-300 hover:shadow-xl overflow-hidden
      "
            >
              <h3
                className="
        font-bold text-[24px] w-10 leading-[120%] uppercase mb-1 text-[#1C2329]
        transition-colors duration-300 group-hover:text-red-500 mb-5
      "
              >
                {item.name}
              </h3>

              {/* Дата */}
              <time className="block  font-normal text-[16px] text-gray-400">
                {item.date}
              </time>

              {/* Контейнер для картинки */}
              <div className="relative h-90 ">
                {" "}
                {/* Добавлена высота контейнеру, чтобы зафиксировать место */}
                <img
                  src={ResultdImg}
                  alt="IELTS Certificate"
                  className="
            absolute 
            top-0 
            -right-60       /* Сдвигаем вправо за край */
            w-[180%]         /* УВЕЛИЧЕНО: делает картинку огромной */
            max-w-none       /* Позволяет игнорировать ширину родителя */
            rotate-[-10deg]  /* Наклон */
            translate-y-2    /* Сдвиг вниз */
            opacity-100       /* Прозрачность как на макете */
            grayscale-[30%]
            pointer-events-none
            transition-transform duration-500 group-hover:scale-105 /* Легкий зум при наведении */
          "
                />
              </div>

              {/* Плашка со счетом (Score Badge) */}
              <div
                className="
        absolute bottom-6 left-6 right-6 z-10
        flex flex-col items-center justify-center 
        py-3 rounded-[20px] transition-colors
        bg-[#F3F4F6] text-[#001A72] mt-10 w-[130px] h-[97px]
        group-hover:bg-blue-600 group-hover:text-white /* Опционально: меняет цвет плашки при наведении */
      "
              >
                <span className="text-[18px] font-black uppercase tracking-widest opacity-70">
                  {t("results_score")}
                </span>
                <strong className="text-[40px] font-black leading-none">
                  {item.score}
                </strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Tez-Tez so`raladigan savollar */}
      <section className="bg-[#F8FAFF] py-8 px-6">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16">
          {/* ЛЕВАЯ ЧАСТЬ: Заголовок */}
          <div className="lg:w-1/3">
            <h2 className="text-[40px] font-black leading-tight uppercase mb-6">
              {t("faq_title")}
              <br />
              <span className="text-[#0057FF]">{t("faq_title_blue")} </span>
            </h2>
            <p className="text-[#1C2329 ] text-lg leading-relaxed text-[16px]">
              {t("faq_subtitle")}
            </p>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Аккордеон через MAP */}
          <div className="lg:w-2/3 space-y-4">
            {getFaqData(t).map((item, index) => {
              const isOpen = openIdx === index;

              return (
                <div
                  key={item.id}
                  className="bg-white w-[620px]  rounded-[25px] overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 flex flex-col items-center justify-center"
                >
                  {/* Кнопка вопроса */}
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex justify-between items-center group"
                  >
                    <span
                      className={`text-[20px] font-bold transition-colors duration-300 ${isOpen ? "text-[#0057FF]" : "text-gray-900"}`}
                    >
                      {item.question}
                    </span>

                    {/* Иконка стрелочки */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#0057FF] text-white rotate-180" : "bg-white-100 text-gray-500"}`}
                    >
                      <svg
                        width="14"
                        height="8"
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

                  {/* Выезжающий ответ (Анимация высоты) */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isOpen
                        ? "max-h-[500px] opacity-100 pb-6 px-6"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* location */}
      <section className="max-w-7xl mx-auto p-6 max-w-[1440px]">
      <div className="flex flex-col lg:flex-row gap-8 bg-white p-4 rounded-[40px] shadow-sm border border-gray-100">
        
        {/* ЛЕВАЯ ЧАСТЬ: Список филиалов */}
        <div className="w-full lg:w-[400px] flex flex-col overflow-y-auto gap-4 max-h-[600px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden 
  /* Показываем при наведении */
  hover:[&::-webkit-scrollbar]:block">
          {/* Поиск (просто визуальный элемент) */}
          <div className="relative mb-2">
  <input 
    type="text" 
    placeholder="Searching for branches" 
    value={searchTerm} // Привязываем значение
    onChange={(e) => setSearchTerm(e.target.value)} // Обновляем при вводе
    className="w-full p-4 pl-12 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all"
  />
  <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30">🔍</span>
</div>
          {locations.map((branch) => (
            <div
              key={branch.id}
              onMouseEnter={() => setActiveId(branch.id)}
              onMouseLeave={() => setActiveId(null)}
              className={`
                group flex items-center gap-4 p-4 rounded-[24px] border-2 transition-all cursor-pointer
                ${activeId === branch.id ? 'border-pink-500 bg-pink-50/10 shadow-md ' : 'border-gray-50 bg-gray-50/50 hover:bg-gray-50'}
              `}
            >
              <img src={branch.img} alt={branch.name} className="w-20 h-20 rounded-xl object-cover" />
              <div className="flex-1">
                <h4 className="font-bold text-[20px] text-[#1C2329]">{branch.name}</h4>
                <p className="text-[12px] text-[#1C2329]-400 leading-tight mt-1 flex gap-1 items-center"><MapIcon /> {branch.address}</p>
                <div className="flex items-center gap-4 mt-2 text-[14px] font-medium rounded-lg border border-gray-100 p-1">
                  <span className="flex gap-1 border-r border-gray-200 pr-2 items-center"><MetroIcon /> Station name</span>
                  <span className="flex gap-1 items-center"><PeopleIcon /> 0 km</span>
                </div>
              </div>
              <div className={`
                w-8 h-8 rounded-full flex items-center justify-center transition-all
                ${activeId === branch.id ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-400'}
              `}>
                <ArrowIcon />
              </div>
            </div>
          ))}
        </div>

        {/* ПРАВАЯ ЧАСТЬ: Карта (на основе картинки и SVG) */}
        <div className="flex-1 relative rounded-[32px] overflow-hidden min-h-[400px] bg-gray-200 border border-gray-100">
          {/* Замени "/map-screenshot.png" на свой скриншот карты */}
          <img 
            src={MAP}
            alt="City Map" 
            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700"
            style={{ filter: activeId ? 'grayscale(0.5) contrast(1.1)' : 'grayscale(1)' }}
          />

.filter((branch) => 
    branch.name.toLowerCase().includes(searchTerm.toLowerCase())
 
          {/* Слой с пинами */}
          {locations.map((branch) => (
            <div
              key={branch.id}
              style={{ left: branch.coords.x, top: branch.coords.y }}
              className={`
                absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300
                ${activeId === branch.id ? 'scale-125 z-20' : 'scale-100 z-10'}
              `}
            >
              {/* SVG Пин как на макете */}
              <div className="relative cursor-pointer group">
                <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M20 0C8.95 0 0 8.95 0 20c0 14.25 20 30 20 30s20-15.75 20-30c0-11.05-8.95-20-20-20z" 
                    fill={activeId === branch.id ? "#E91E63" : "#1D4ED8"} 
                    className="transition-colors duration-300"
                  />
                  <circle cx="20" cy="20" r="7" fill="white" />
                </svg>
                
                {/* Всплывающая подсказка над пином */}
                {activeId === branch.id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-white text-[12px] font-bold rounded-lg shadow-xl whitespace-nowrap animate-bounce">
                    {branch.name}
                  </div>
                )}
              </div>
            </div>
          ))} )
        </div>

      </div>
    </section>
    </>
  );
};

export default MAin;
