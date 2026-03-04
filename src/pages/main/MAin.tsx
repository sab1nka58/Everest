import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
// import ResultdImg from "../../assets/Mockup.png";
// import { EverestKidsBanner, TelefonIcon } from "../../component/Navbar/Icon";
// import { getNavLinks } from "../../component/Navbar/navLinks";
import { useState } from "react";
import {

  


  locations,
  results,
} from "./MainData";

// import imgBanner from "../../assets/banner/image 24.png";
// import bannerKids from "../../assets/banner/banner.png";
// import LogoKids from "../../assets/LogoKids.png";
// import EverestKids from "../../assets/EverestKids.png";
// import Colaj from "../../assets/Collage.png";
// import Map from "../../assets/banner/global.png";
import MAP from "../../assets/location/Screenshot 2025-09-06 at 12.32.21 AM 1.png";
import { ArrowIcon, MapIcon, MetroIcon, PeopleIcon } from "./MainIcon";
import Banner from "./components/Banner";
import Courses from "./components/Courses";
import Cards from "./components/Cards";
// import everestIcon from "../../assets/banner/bg.png";
import Results from "./components/Results";
import Info from "./components/Info";
import Kids from "./components/Kids";
import Global from "./components/global";
import IELTSResults from "./components/IELTSResults";
import Questions from "./components/Questions";
import LocationSection from "./components/Location";


const MAin = () => {
  const { t } = useLanguage();


  // const faqData = getFaqData(t); // Получаем данные для FAQ
  // const [activeId, setActiveId] = useState<number | null>(null);


  // const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
      <div className="flex flex-col">
        <Banner />
        <Courses />
        <Cards />
        <Results />
        <Info />
        <Kids />
      <Global />
<IELTSResults />
<Questions />
<LocationSection />
      
       </div>

  

   

    

      
    </>
  );
};


export default MAin;