
import { Link } from 'react-router-dom'
import {  getServicesData} from '../MainData';
import everestIcon from "../../../assets/banner/bg.png";
import { useLanguage } from '../../../context/LanguageContext';

const Info = () => { 
    const { t } = useLanguage();


        const services = getServicesData(t);

  return (
    <>
    {/* Qo`shimcha xizmatlar */}
      <section className="py-12 md:p-24 relative overflow-hidden">
        <img
          src={everestIcon}
          
          className="absolute left-0 top-0 z-0 opacity-30 md:opacity-80 w-full h-auto object-contain pointer-events-none"
          alt=""
        />
        
        <div className="z-10 max-w-[1380px] mx-auto relative w-full grid grid-cols-1 md:grid-cols-2 items-start gap-6 md:gap-10 px-4 md:px-0">
          
          <div className="flex flex-col gap-2 max-w-[550px] w-full md:ml-10">
            <h2 className="font-[900] text-[32px] md:text-[40px] leading-[120%] md:leading-[130%] uppercase tracking-normal">
              {t("extra_services_title")}{" "}
              <span className="text-[#0154F8]">{t("extra_services_blue")}</span>
            </h2>

            <p className="font-normal text-gray-500 text-[14px] md:text-[16px] leading-[140%]">
              {t("extra_services_desc")}
            </p>
          </div>

          {services.map((service) => (
            <div
              key={service.id}
              className={`group max-w-[650px] w-full p-4 bg-white rounded-[24px] md:rounded-xl flex flex-col items-center shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-xl
                {/* Исправлено: отрицательный маржин применяется ТОЛЬКО на md (десктопе) */}
                ${service.id === 2 ? "md:mt-[-340px]" : ""} 
                ${service.id === 4 ? "md:mt-[-380px]" : ""}
              `}
            >
              <Link
                to={service.path}
                className="w-full h-full"
              >
                <div className="overflow-hidden rounded-lg">
                   <img 
                     src={service.image} 
                     className="max-w-[620px] w-full group-hover:scale-105 transition-transform duration-500" 
                     alt={service.title}
                   />
                </div>

                <div className="p-4 md:p-6 flex flex-col gap-2 md:gap-4">
                  <h3 className="text-[22px] md:text-[28px] font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] font-normal text-gray-600">
                    {service.description}
                  </p>
                </div>

                <div className="pb-4">
                  <p className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 flex items-center gap-4 pl-4 md:pl-10 text-blue-600 font-bold uppercase text-sm">
                    {t("learn_more")}
                    <span className="text-xl">→</span>
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    
    </>
  )
}

export default Info