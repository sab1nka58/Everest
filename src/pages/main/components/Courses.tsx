import { Link } from "react-router-dom";
import { getNavLinks } from "../../../component/Navbar/navLinks";
import { useLanguage } from "../../../context/LanguageContext";
import { TelefonIcon } from "../../../component/Navbar/Icon";


const Courses = () => {
    const { t } = useLanguage();
    const links = getNavLinks((key) => key);
    
  const servicesSubmenu = links.find((link) => link.id === 3)?.submenu || [];

    const courses = servicesSubmenu.filter((item) => item.icon);
  return (
   <>

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
              {t("btn_enrol")} <TelefonIcon />
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

   </>
  )
}

export default Courses