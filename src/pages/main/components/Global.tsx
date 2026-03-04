import { Link } from 'react-router-dom'
import { useLanguage } from '../../../context/LanguageContext'
import MapImg from '../../../assets/banner/global.png'
import Colaj from '../../../assets/Collage.png'

const Global = () => {
  const { t } = useLanguage()

  return (
    <section className="relative w-full bg-[#FDFDFF] overflow-hidden">
      {/* Карта фоном — только на десктопе, чтобы не мешать на мобилках */}
      <div className="absolute inset-0 z-0 hidden lg:block opacity-50">
        <img src={MapImg} className="w-full h-full object-contain" alt="map" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row lg:max-w-[1440px] lg:mx-auto lg:items-center">
        
        {/* КАРТИНКА: На мобилках во весь экран, на десктопе справа */}
        <div className="w-full lg:w-1/2 lg:order-2">
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full">
            <img
              src={Colaj}
              alt="Student journey"
              className="w-full h-full object-cover lg:rounded-[40px] lg:scale-90  duration-700"
            />
            {/* Градиентный слой, чтобы картинка мягко переходила в текст на мобилках */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#FDFDFF] via-transparent to-transparent lg:hidden" />
          </div>
        </div>

        {/* ТЕКСТ: На мобилках под картинкой, на десктопе слева */}
        <div className="w-full lg:w-1/2 px-6 py-10 md:px-12 lg:py-20 lg:order-1">
          <div className="space-y-6 md:space-y-8">
            {/* Заголовок с иконкой */}
            <div className="flex flex-col md:flex-row items-center lg:items-start gap-4 text-center lg:text-left">
               <div className="w-16 h-16   flex-shrink-0">
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
               <h2 className="text-3xl md:text-5xl font-black my-5 text-gray-900 uppercase tracking-tight leading-tight px-5">
                 {t("global_title")} <br className="hidden md:block" /> 
                 <span className="text-[#0057FF]">{t("global_title_1")}</span>
               </h2>
            </div>

            {/* Описание */}
            <div className="space-y-4 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                {t("global_subtitle")}
              </h3>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                {t("global_desc_1")}
              </p>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed hidden md:block">
                {t("global_desc_2")}
              </p>
            </div>

            {/* Кнопки */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button className="w-full sm:w-auto bg-[#0057FF] hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-2xl shadow-lg transition-transform active:scale-95">
                {t("global_btn_consult")}
              </button>
              <Link to="/goglobal" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 px-10 rounded-2xl transition-all">
                  {t("kids_btn_more")} →
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Global