
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner/Group 4.png'
import { TeleginIcon } from '../../component/Navbar/Icon';
import { getNavLinks } from '../../component/Navbar/navLinks';
import { useState } from 'react';
import { bottomStats, cardsData, statsData } from './MainData';
import everestIcon from "../../assets/banner/bg.png"
import  imgBanner from "../../assets/banner/image 24.png"
const MAin = () => {

 // Вызываем функцию с заглушкой (key => key), чтобы получить данные без ошибок
  const links = getNavLinks((key) => key);

  // Находим объект Services (id: 3) и достаем его submenu
  const servicesSubmenu = links.find(link => link.id === 3)?.submenu || [];

  // Фильтруем, чтобы оставить только курсы (где есть иконки) 
  // и убрать технические сервисы вроде "Registration services"
  const courses = servicesSubmenu.filter(item => item.icon);

  const [activeIdx, setActiveIdx] = useState(0);
  return (
    <>
    
{/* BANNER  */}
    <section className="relative min-h-[700px] w-full  flex items-center overflow-hidden bg-white justify-between">
      <div className=" mx-auto px-6 flex flex-col justify-center max-w-[1240px] relative ">
      {/* Контентная часть (Текст + Кнопки) */}
      <div className="z-10 flex flex-col items-start">
        <div className="flex justify-center gap-5">
          <h1 className=" font-black text-[64px] uppercase leading-tight ">
            <span className="text-pink-600">Haqiqiy</span> muvaffaqiyat <br />
            egalari maskaniga <br />
            xush kelibsiz!
          </h1>
          </div>
          <p className="mt-6 text-gray-700 text-[16px] max-w-lg">
            Natija va ta'lim sifati bo'yicha O'zbekistondagi 1-raqamli o'quv markazida 
            ta'lim oling va bilimingizni yuqori natijaga aylantiring.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
              Kursga yozilish
            </button>
            <button className="bg-gray-200 text-gray-800 px-8 py-3 rounded-md font-semibold hover:bg-gray-300 transition">
              Batafsil ma'lumot
            </button>
          </div>
        
      </div>
</div>
      {/* Правая часть: Изображение горы с флагом */}
      <div className="absolute right-0 bottom-0 w-1/2 h-full">
         <img 
            src={bannerImg}
            alt="Success Mountain" 
            className="object-cover h-full w-full object-right-bottom"
         />
         {/* Розовая декоративная линия за горой */}
         <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-l from-pink-100 to-transparent opacity-50" />
      </div>

      {/* Пагинация (нижние черточки) */}
      <div className="absolute bottom-10 left-110 transform -translate--1/2 flex gap-2">
         <span className="h-1 w-8 bg-gray-400 rounded"></span>
         <span className="h-1 w-8 bg-gray-200 rounded"></span>
         <span className="h-1 w-8 bg-gray-200 rounded"></span>
         <span className="h-1 w-8 bg-gray-200 rounded"></span>
         <span className="h-1 w-8 bg-gray-200 rounded"></span>
      </div>
      
    </section>


    {/* KURSLAR */}

   <section className="bg-[#F8F9FB] py-20 px-6">
      <div className="max-w-[1240px] mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 mt-20 gap-6">
          <div className="max-w-200">
            <h2 className="text-4xl font-black text-[#1C2329] uppercase mb-4">
              <span className="text-blue-600">Kurslar</span> va qabullar
            </h2>
            <p className="text-[#1C2329] text-[16px] max-w-[840px] w-full">
             Qabul barcha manzillarimizda har kuni 09:00 dan 20:00 gacha davom etadi. Qabulxonaga kelganingizda, xodimlarimiz test va qisqa suhbat orqali darajangizni aniqlab, sizga mos guruh uchun sinov darsiga yo‘naltiradi.
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-3">
            Kursga yozilish <TeleginIcon />
          </button>
        </div>
        
        {/* Сетка карточек */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {courses.map((course) => (

            < Link to={course.path} 
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
              <p
                 
    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-blue-600 font-bold"
  >
                Learn more <span className="text-xl">→</span>
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>

    {/* Nega Aynan EVEREST */}
    <section className="relative w-full py-20 bg-white overflow-hidden">
  
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
  <div className="relative z-10  max-w-[1240px] mx-auto flex flex-col md:flex-row items-center gap-10 p-10">
    
    {/* (Заголовок) */}
    <div className="w-full md:w-1/3 space-y-6 ">
      <h2 className="text-[40px] md:text-5xl font-black uppercase leading-tight  max-w-[380px]">
        <span className="text-blue-600">Nega </span><br />
        <span className="text-gray-900">aynan Everest?</span>
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
        Everest o'quv markazi o'quvchilar uchun qulay sharoitlar yaratib, 
        har bir xohlovchi ta'lim olishi uchun hamyonbop narxlarda sifatli ta'lim taklif etadi.
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
  
  ${isActive 
    ? 'flex-[4] bg-white/80 backdrop-blur-md shadow-2xl border-2 border-white gap-10'  // Сделали рамку 2px
    : 'flex-[1] bg-white/20 backdrop-blur-[2px] border border-gray-400/50'} 
  p-6 flex flex-col
`}
          >
            {/* ИКОНКА */}
            <div className={`
              w-16 h-16 [&>svg]:w-full [&>svg]:h-full flex items-center justify-center m-5 gap-10 mb-[120px]
              transition-all duration-500 transform  
              ${isActive ? 'grayscale-0 scale-110 ' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'}
            `}>
              {card.icon}
            </div>

            {/* КОНТЕНТ (Описание) */}
            <div className={`
              mt-10  transition-all duration-500 
              ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
            `}>
              <h3 className="text-[28px] max-w-[240px] mr-5   font-bold text-gray-800 whitespace-nowrap mb-4">
                {card.title}
              </h3>
              <p className="text-gray-500 text-[16px]  min-w-[230px] leading-relaxed">
                {card.text}
              </p>
            </div>

            {/* ВЕРТИКАЛЬНЫЙ ТЕКСТ (Для закрытых карточек) */}
            <div className={`
              absolute inset-0  flex items-center justify-center  transition-opacity duration-500 pointer-events-none
              ${isActive ? 'opacity-0' : 'opacity-100 '}
            `}>
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
  <div className="absolute inset-0 z-0 max-w-[1240px] mx-auto border border-gray-300/20 rounded-[40px] overflow-hidden">
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
            {item.title.replace(/\D/g, '')}
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
</>


  )
}

export default MAin