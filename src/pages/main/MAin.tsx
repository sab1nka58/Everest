import { Link } from "react-router-dom";
import bannerImg from "../../assets/banner/Group 4.png";
import {
  EverestKidsBanner,
  
  TelefonIcon,
  TeleginIcon,
} from "../../component/Navbar/Icon";
import { getNavLinks } from "../../component/Navbar/navLinks";
import { useState } from "react";
import {
  bottomStats,
  cardsData,
  faqData,
  KidsData,
  services,
  statsData,
} from "./MainData";
import everestIcon from "../../assets/banner/bg.png";
import imgBanner from "../../assets/banner/image 24.png";
// import bannerKids from "../../assets/banner/banner.png";
import LogoKids from "../../assets/LogoKids.png";
import EverestKids from "../../assets/EverestKids.png";
import Colaj from "../../assets/Collage.png";
import Map from "../../assets/banner/global.png";

const MAin = () => {
  // Вызываем функцию с заглушкой (key => key), чтобы получить данные без ошибок
  const links = getNavLinks((key) => key);

  // Находим объект Services (id: 3) и достаем его submenu
  const servicesSubmenu = links.find((link) => link.id === 3)?.submenu || [];

  // Фильтруем, чтобы оставить только курсы (где есть иконки)
  // и убрать технические сервисы вроде "Registration services"
  const courses = servicesSubmenu.filter((item) => item.icon);

  const [activeIdx, setActiveIdx] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    // Если кликаем на уже открытый — закрываем, иначе открываем новый
    setOpenIdx(openIdx === idx ? null : idx);
  };
  return (
    <>
      {/* BANNER  */}
      <section className="relative min-h-[700px] w-full flex items-center bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-1 items-center relative z-10">
          {/* ЛЕВАЯ ЧАСТЬ: Текст и кнопки */}
          <div className="flex flex-col max-w-[1000px]">
            <h1 className="font-black  text-[40px] md:text-[64px] uppercase leading-[1.1] text-gray-900">
              <span className="text-[#E91E63]">Haqiqiy</span> muvaffaqiyat
              <br />
              egalari maskaniga
              <br />
              xush kelibsiz!
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-[500px] leading-relaxed">
              Natija va ta'lim sifati bo'yicha O'zbekistondagi 1-raqamli o'quv
              markazida ta'lim oling va bilimingizni yuqori natijaga
              aylantiring.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="bg-[#0056D2] text-white px-10 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Kursga yozilish
              </button>
              <button className="bg-[#E5E7EB] text-gray-800 px-10 py-4 rounded-lg font-bold hover:bg-gray-300 transition">
                Batafsil ma'lumot
              </button>
            </div>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Пустая, так как гора идет абсолютом фоном */}
          <div className="hidden md:block"></div>
        </div>

        {/* ФОНОВАЯ ГОРА (Абсолютное позиционирование) */}
        <div className="absolute right-0 bottom-0 w-full md:w-[60%] h-full pointer-events-none">
          <img
            src={bannerImg}
            alt="Success Mountain"
            className="object-contain object-right-bottom h-full w-full"
          />
          {/* Розовая линия-градиент за горой */}
          <div className="absolute inset-0 bg-gradient-to-l from-pink-50/50 to-transparent -z-10" />
        </div>

        {/* Пагинация (черточки) - привязываем к левому краю контейнера */}
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
      {/* KURSLAR */}

      <section className="bg-[#F8F9FB] py-20 px-8">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 mt-20 gap-6">
            <div className="max-w-200">
              <h2 className="text-4xl font-black text-[#1C2329] uppercase mb-4">
                <span className="text-blue-600">Kurslar</span> va qabullar
              </h2>
              <p className="text-[#1C2329] text-[16px] max-w-[840px] w-full">
                Qabul barcha manzillarimizda har kuni 09:00 dan 20:00 gacha
                davom etadi. Qabulxonaga kelganingizda, xodimlarimiz test va
                qisqa suhbat orqali darajangizni aniqlab, sizga mos guruh uchun
                sinov darsiga yo‘naltiradi.
              </p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3">
              Kursga yozilish <TeleginIcon />
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
      <section className="relative w-full py-20 bg-white overflow-hidden  ">
        {/* МЕСТО ДЛЯ КАРТИНКИ (Задний фон) */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src={everestIcon}
            alt="mountains"
            className="w-full h-full object-cover opacity-100"
          />
          {/* Мягкий градиент, чтобы картинка плавно сливалась с фоном */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/10" />
        </div>

        {/*(Поверх картинки) */}
        <div className="relative z-10  max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-10 p-10">
          {/* (Заголовок) */}
          <div className="w-full md:w-1/3 space-y-6 ">
            <h2 className="text-[40px] md:text-5xl font-black uppercase leading-tight text-center md:text-left">
              <span className="text-blue-600">Nega </span>
              <br />
              <span className="text-gray-900">aynan Everest?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
              Everest o'quv markazi o'quvchilar uchun qulay sharoitlar yaratib,
              har bir xohlovchi ta'lim olishi uchun hamyonbop narxlarda sifatli
              ta'lim taklif etadi.
            </p>
          </div>

          {/* ПРАВАЯ ЧАСТЬ (Аккордеон) */}
          <div className="flex flex-1 w-full h-[600px] gap-2">
            {cardsData.map((card, index) => {
              const isActive = activeIdx === index;

              return (
                <div
                  key={card.id}
                  onMouseEnter={() => setActiveIdx(index)}
                  className={`
  group relativу rounded-[40px] max-w-[300px] h-120 p-5 transition-all f duration-700 ease-in-out cursor-pointer overflow-hidden 
  
  ${
    isActive
      ? "flex-[4] bg-white/80 backdrop-blur-md shadow-2xl border-2 border-white gap-10" // Сделали рамку 2px
      : "flex-[1] bg-white/20 backdrop-blur-[2px] border border-gray-400/50"
  } 
  p-6 flex flex-col
`}
                >
                  {/* ИКОНКА */}
                  <div
                    className={`
              w-16 h-16 [&>svg]:w-full [&>svg]:h-full flex items-center justify-center m-5 gap-2 
              transition-all duration-500 transform 
              ${isActive ? "grayscale-0 scale-110 " : "grayscale group-hover:grayscale-0 group-hover:scale-110"}
            `}
                  >
                    {card.icon}
                  </div>

                  {/* КОНТЕНТ (Описание) */}
                  <div
                    className={`
              mt-10  transition-all duration-500 
              ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
                  >
                    <h3 className="text-[28px] max-w-[240px] mr-5   font-bold text-gray-800 whitespace-nowrap mb-4">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-[16px]  min-w-[230px] leading-relaxed">
                      {card.text}
                    </p>
                  </div>

                  {/* ВЕРТИКАЛЬНЫЙ ТЕКСТ (Для закрытых карточек) */}
                  <div
                    className={`
               inset-0  flex items-center justify-center  transition-opacity duration-500 pointer-events-none
              ${isActive ? "opacity-0" : "opacity-100 "}
            `}
                  >
                    <span className="rotate-90  whitespace-nowrap  font-bold text-[24px] uppercase tracking-widest text-[10px]">
                      {card.title}
                    </span>
                  </div>
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
            Natijalar gapirsin!
          </h2>
          <p className="text-white/70 text-sm mb-16 text-4 uppercase tracking-widest">
            Everest o'quv markazining 13 yillik faoliyati raqamlarda
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
              Qo‘shimcha <span className="text-[#0154F8]">xizmatlar</span>
            </h2>

            <p className="font-normal text-base leading-[140%] text-gray-500 text-[16px]">
              EVEREST o‘quv markazi IELTS imtihoniga tayyorlanayotgan nomzodlar
              uchun bir qator qo‘shimcha imkoniyatlarni taqdim etadi.
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
                    Learn more <span className="text-xl">→</span>
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
            Maktab o'quvchilari uchun maxsus ingliz tili kurslari
          </h2>

          <p className="text-white/80 text-[16px] mb-10 max-w-[550px]">
            1–9-sinf o‘quvchilari uchun mo‘ljallangan maxsus loyihamizda
            bolalarning yosh va darajasiga mos ravishda alohida guruhlarda
            ta’lim beriladi. Kuchli va tajribali EVERESTER ustozlar maxsus
            dastur asosida bolalarning til ko‘nikmalarini bosqichma-bosqich
            rivojlantiradi.
          </p>

          <div className="flex gap-4 mb-12 pt-6">
            <button className="bg-white text-[16px] text-black gap-2 items-center  px-7 py-3 rounded-2xl font-bold hover:bg-opacity-90 transition-all flex">
              Kursga yozilish <TelefonIcon />
            </button>
            <Link to="/everestkids">
              <button className="border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                Batafsil ma'lumot →
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
                Everest <br /> Go Global
              </h2>
            </div>

            <div className="space-y-6 pt-10 max-w-[700px] w-full">
              <h3 className="text-[23px] font-bold text-gray-800 ">
                Xorijiy oliygohlarda o'qish imkoniyatlari - universitet tanlash,
                grant yutish va viza jarayonlarida yordam
              </h3>
              <p className="text-gray-500 text-16 leading-relaxed">
                Yuqori akademik salohiyatga ega o‘zbek yoshlariga dunyoning top
                universitetlarida ta’lim olishda ko‘maklashuvchi loyiha. Biz
                sizga universitet tanlashdan tortib, hujjat topshirish, grant
                yutish va viza olishgacha bo‘lgan butun jarayonda kompleks
                yordam beramiz. </p>
                <p className="text-gray-500 text-16 leading-relaxed">
                Yuqori IELTS natijasi ustunlik bersa-da, IELTS
                5.5 natijaga ega nomzodlar uchun ham mos bakalavr va
                magistratura dasturlarini topishda ko‘maklashamiz.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-[#0057FF] hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-2xl flex items-center gap-3 transition-all active:scale-95 shadow-lg shadow-blue-100">
                Bepul konsultatsiya
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </button>
              <Link to='/goglobal'>
              <button className="bg-gray-200/50 hover:bg-gray-200 text-gray-700 font-bold py-4 px-8 rounded-2xl transition-all">
                Batafsil ma'lumot →
              </button></Link>
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
      {/* Tez-Tez so`raladigan savollar */}
      <section className="bg-[#F8FAFF] py-8 px-6">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row gap-16">
          {/* ЛЕВАЯ ЧАСТЬ: Заголовок */}
          <div className="lg:w-1/3">
            <h2 className="text-[40px] font-black leading-tight uppercase mb-6">
              Tez-tez <br /> so'raladigan <br />
              <span className="text-[#0057FF]">savollar</span>
            </h2>
            <p className="text-[#1C2329 ] text-lg leading-relaxed text-[16px]">
              You can find answers to most of your questions here
            </p>
          </div>

          {/* ПРАВАЯ ЧАСТЬ: Аккордеон через MAP */}
          <div className="lg:w-2/3 space-y-4">
            {faqData.map((item, index) => {
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

      {/* Forma */}
      <section className="bg-[#f8faff] mt-8 mb-8 px-4">
        <div className="max-w-[1360px] mx-auto bg-white rounded-[40px] p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm mb-2 text-16px">
              Could not find an answer?
            </p>
            <h2 className="text-[28] md:text-4xl font-bold text-gray-900">
              Explain your matter and send the inquiry using the form below
            </h2>
          </div>

          <form className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium text-black-700  ml-2">
                Your name
              </label>
              <input
                type="text"
                placeholder="How can we call you?"
                className="w-[352] h-[70px] bg-[#f4f7fa] text-[14px] border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[16px] font-medium text-black-700 ml-2">
                Phone number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-[352px] h-[44px] bg-[#f4f7fa] text-[14px] border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className=" text-[16px] font-medium text-black-700 ml-2">
                Explain the matter
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
                  By clicking "Submit", you agree to the processing of your
                  personal data in accordance with our Privacy Policy.
                </span>
              </label>

              <button className="bg-[#0057ff] hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-2xl transition-all active:scale-95 shadow-lg shadow-blue-200">
                Let's go!
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default MAin;
