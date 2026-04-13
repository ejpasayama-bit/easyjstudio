import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <header className="py-6 px-8 border-b bg-white/80 backdrop-blur-md sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-600 italic">EasyJ Studio</Link>
        <div className="flex items-center gap-8">
          <nav className="text-sm font-medium text-slate-500 flex gap-6">
            <Link to="/" className="hover:text-indigo-600 transition-colors">{t.nav.works}</Link>
            <Link to="/profile" className="hover:text-indigo-600 transition-colors">{t.nav.profile}</Link>
            <Link to="/guidelines" className="hover:text-indigo-600 transition-colors">{t.nav.guidelines}</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors">{t.nav.contact}</Link>
          </nav>
          <div onClick={toggleLang} className="flex items-center bg-slate-100 rounded-full p-1 cursor-pointer">
            <span className={`px-2 py-1 text-[10px] font-bold rounded-full ${lang === 'en' ? 'bg-white shadow text-indigo-600' : 'text-slate-400'}`}>EN</span>
            <span className={`px-2 py-1 text-[10px] font-bold rounded-full ${lang === 'jp' ? 'bg-white shadow text-indigo-600' : 'text-slate-400'}`}>JP</span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;