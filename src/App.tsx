
import Navbar from './component/Navbar/Navbar.tsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import MAin from './pages/main/MAin.tsx'
import About from './pages/about/about.tsx'
import EverestKids from './pages/EverestKids/EverestKids.tsx'
import GoGlobal from './pages/global/GoGlobal.tsx'
import Careers from './pages/Careeers/Careers.tsx'
import Contactus from './pages/Coontact/Contactus.tsx'
import IeltsPage from './pages/Services/IeltsPage.tsx'
import MultilevelPage from './pages/Services/MultilevelPage.tsx'
import SatPage from './pages/Services/SatPage.tsx'
import GeneralEnglishPage from './pages/Services/GeneralEnglishPage.tsx'
import MatematicPage from './pages/Services/MatematicPage.tsx'
import RussianPage from './pages/Services/RussianPage.tsx'
import IeltsresultsPage from './pages/results/IeltsresultsPage.tsx'
import MultiLevelResultsPage from './pages/results/MultiLevelResultsPage.tsx'
import SatresultsPage from './pages/results/SatresultsPage.tsx'

function App() {
  return (
    <BrowserRouter>           {/* или RouterProvider если используешь createBrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<MAin />} />
        <Route path="/about" element={<About />} />

        <Route path="/services">
          <Route path="ielts" element={<IeltsPage />} />
          <Route path="multi_level" element={<MultilevelPage />} />
          <Route path="sat" element={<SatPage />} />
          <Route path="generalEnglish" element={<GeneralEnglishPage />} />
          <Route path="mathematics" element={<MatematicPage />} />
          <Route path="russianlanguage" element={<RussianPage />} />
        </Route>

        <Route path="/results">
          <Route path="ielts" element={<IeltsresultsPage />} />
          <Route path="multi_level" element={<MultiLevelResultsPage />} />
          <Route path="sat" element={<SatresultsPage />} />
        </Route>

        <Route path="/everestkids" element={<EverestKids />} />
        <Route path="/goglobal" element={<GoGlobal />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contactus" element={<Contactus />} />

        {/* 404 в конце */}
        <Route path="*" element={<div>404 — Страница не найдена</div>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
