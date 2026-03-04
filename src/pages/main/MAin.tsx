
// import { useLanguage } from "../../context/LanguageContext";
// import ResultdImg from "../../assets/Mockup.png";
// import { EverestKidsBanner, TelefonIcon } from "../../component/Navbar/Icon";
// import { getNavLinks } from "../../component/Navbar/navLinks";

// import imgBanner from "../../assets/banner/image 24.png";
// import bannerKids from "../../assets/banner/banner.png";
// import LogoKids from "../../assets/LogoKids.png";
// import EverestKids from "../../assets/EverestKids.png";
// import Colaj from "../../assets/Collage.png";
// import Map from "../../assets/banner/global.png";

import Banner from "./components/Banner";
import Courses from "./components/Courses";
import Cards from "./components/Cards";
// import everestIcon from "../../assets/banner/bg.png";
import Results from "./components/Results";
import Info from "./components/Info";
import Kids from "./components/Kids";
import Global from "./components/Global";
import IELTSResults from "./components/IELTSResults";
import Questions from "./components/Questions";
import LocationSection from "./components/Location";


const MAin = () => {
 

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