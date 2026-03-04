import { useState } from 'react'
import { useLanguage } from '../../../context/LanguageContext';
import { locations } from '../MainData';
import { ArrowIcon, MapIcon, MetroIcon, PeopleIcon } from '../MainIcon';
import MAP from "../../../assets/location/Screenshot 2025-09-06 at 12.32.21 AM 1.png";

const Location = () => {
    const { t } = useLanguage();
    const [activeId, setActiveId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredLocations = locations.filter(branch => 
        branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="max-w-[1440px] mx-auto p-4 md:p-6">
            <div className="flex flex-col lg:flex-row gap-6 bg-white p-4 rounded-[32px] md:rounded-[40px] shadow-sm border border-gray-100">
                
                {/* ЛЕВАЯ ЧАСТЬ: Список филиалов */}
                <div className="w-full lg:w-[450px] flex flex-col gap-4">
                    
                    {/* Поиск */}
                    <div className="relative mb-2">
                        <input 
                            type="text" 
                            placeholder="Searching for branches" 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full p-4 pl-12 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                        />
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30">🔍</span>
                    </div>

                    {/* Контейнер списка */}
                    <div className="flex flex-col gap-3 lg:max-h-[600px] lg:overflow-y-auto pr-0 lg:pr-2 custom-scrollbar">
                        {filteredLocations.map((branch) => (
                            <div
                                key={branch.id}
                                onMouseEnter={() => setActiveId(branch.id)}
                                onMouseLeave={() => setActiveId(null)}
                                className={`
                                    group flex flex-col gap-4 p-4 rounded-[24px] border-2 transition-all cursor-pointer
                                    ${activeId === branch.id ? 'border-red-500 bg-blue-50/10 shadow-md' : 'border-gray-50 bg-gray-50/50 hover:border-gray-200'}
                                `}
                            >
                                <div className="flex items-center gap-4">
                                    <img src={branch.img} alt={branch.name} className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shrink-0" />
                                    
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-bold text-[16px] md:text-[18px] text-[#1C2329] truncate">{branch.name}</h4>
                                        <p className="text-[12px] text-gray-500 leading-tight mt-1 flex gap-1 items-center">
                                            <MapIcon /> <span className="truncate">{branch.address}</span>
                                        </p>
                                        <div className="flex items-center gap-3 mt-2 text-[12px] font-medium">
                                            <span className="flex gap-1 items-center text-gray-700">
                                                <MetroIcon /> {branch.metro || "Station"}
                                            </span>
                                            <span className="flex gap-1 items-center text-gray-700 border-l border-gray-200 pl-3">
                                                <PeopleIcon /> {branch.distance || "0.5 km"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Стрелочка видна только на десктопе */}
                                    <div className={`
                                        hidden lg:flex shrink-0 w-8 h-8 rounded-full items-center justify-center transition-all
                                        ${activeId === branch.id ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-400'}
                                    `}>
                                        <ArrowIcon />
                                    </div>
                                </div>

                                {/* КНОПКА ДЛЯ МОБИЛОК: Появляется только на экранах < 1024px */}
                                <a 
                                    href={branch.mapUrl || "#"} // Сюда вставишь ссылку на карты
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="lg:hidden w-full py-3  bg-blue-600 text-white text-center rounded-xl font-bold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                                >
                                    <MapIcon /> {t("view_on_map") || "Посмотреть на карте"}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ПРАВАЯ ЧАСТЬ: Карта (скрыта на мобилках) */}
                <div className="hidden lg:block flex-1 relative rounded-[32px] overflow-hidden min-h-[500px] bg-gray-100 border border-gray-100">
                    <img 
                        src={MAP}
                        alt="City Map" 
                        className="w-full h-full object-cover grayscale opacity-90 transition-all duration-700"
                        style={{ 
                            filter: activeId ? 'grayscale(0.4) contrast(1.1)' : 'grayscale(1)',
                            transform: activeId ? 'scale(1.03)' : 'scale(1)' 
                        }}
                    />

                    {filteredLocations.map((branch) => (
                        <div
                            key={branch.id}
                            style={{ left: branch.coords.x, top: branch.coords.y }}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${activeId === branch.id ? 'scale-125 z-20' : 'scale-100 z-10'}`}
                        >
                            <div className="relative cursor-pointer group" onMouseEnter={() => setActiveId(branch.id)} onMouseLeave={() => setActiveId(null)}>
                                <svg width="40" height="50" viewBox="0 0 40 50" fill="none">
                                    <path d="M20 0C8.95 0 0 8.95 0 20c0 14.25 20 30 20 30s20-15.75 20-30c0-11.05-8.95-20-20-20z" fill={activeId === branch.id ? "#3b82f6" : "#1D4ED8"} className="transition-colors duration-300"/>
                                    <circle cx="20" cy="20" r="7" fill="white" />
                                </svg>
                                <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-white text-[12px] font-bold rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 ${activeId === branch.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                                    {branch.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Location;