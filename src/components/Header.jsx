import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Header = () => {
  const { lang, toggleLang, t } = useLanguage();
  return (
    <header className="py-6 px-8 border-b bg-white/80 backdrop-blur-md sticky top-0 z-20">
      {/* flex-wrap と gap-y-4 を追加。スマホで幅が足りない時は自然に下へ折り返す */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-y-4">
        
        {/* shrink-0 を追加し、ロゴが潰れるのを防ぐ */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-indigo-600 italic shrink-0">
          EasyJ Studio
        </Link>
        
        {/* flex-wrap を追加。メニューとボタンがぶつからないようにする */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8">
          
          <nav className="text-sm font-medium text-slate-500 flex flex-wrap gap-x-4 gap-y-2 md:gap-6">
            {/* すべての Link に whitespace-nowrap を付けて「縦書き化」を防止 */}
            <Link to="/" className="hover:text-indigo-600 transition-colors whitespace-nowrap">{t.nav.works}</Link>
            <Link to="/profile" className="hover:text-indigo-600 transition-colors whitespace-nowrap">{t.nav.profile}</Link>
            <Link to="/guidelines" className="hover:text-indigo-600 transition-colors whitespace-nowrap">{t.nav.guidelines}</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors whitespace-nowrap">{t.nav.contact}</Link>
          </nav>
          
          {/* shrink-0 を付けて、ボタンが消えたり潰れたりしないようにする */}
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