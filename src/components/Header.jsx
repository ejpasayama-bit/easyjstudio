import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const { lang, toggleLang, t } = useLanguage();
  const location = useLocation();

  // ▼ 現在のURLがゲームLPかどうかを判定
  const isGameLP = location.pathname === '/myoshi';

  return (
    <header className={`py-6 px-8 z-20 top-0 transition-all ${
      isGameLP 
        ? 'fixed w-full bg-white/30 backdrop-blur-md border-b border-white/20' 
        : 'sticky bg-white/80 backdrop-blur-md border-b'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-y-4">
        
        <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-600 italic shrink-0">
          EasyJ Studio
        </Link>
        
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          <nav className="text-sm font-medium text-slate-500 flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
            <Link to="/" className={`hover:text-indigo-600 transition-colors whitespace-nowrap ${isGameLP ? 'text-slate-800 font-bold' : ''}`}>{t.nav.works}</Link>
            <Link to="/profile" className={`hover:text-indigo-600 transition-colors whitespace-nowrap ${isGameLP ? 'text-slate-800 font-bold' : ''}`}>{t.nav.profile}</Link>
            <Link to="/guidelines" className={`hover:text-indigo-600 transition-colors whitespace-nowrap ${isGameLP ? 'text-slate-800 font-bold' : ''}`}>{t.nav.guidelines}</Link>
            <Link to="/contact" className={`hover:text-indigo-600 transition-colors whitespace-nowrap ${isGameLP ? 'text-slate-800 font-bold' : ''}`}>{t.nav.contact}</Link>
          </nav>
          
          <div onClick={toggleLang} className="flex items-center bg-slate-100 rounded-full p-1 cursor-pointer shrink-0">
            <span className={`px-2 py-1 text-[10px] font-bold rounded-full ${lang === 'en' ? 'bg-white shadow text-indigo-600' : 'text-slate-400'}`}>EN</span>
            <span className={`px-2 py-1 text-[10px] font-bold rounded-full ${lang === 'jp' ? 'bg-white shadow text-indigo-600' : 'text-slate-400'}`}>JP</span>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;