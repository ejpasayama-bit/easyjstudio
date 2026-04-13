import React from 'react';
import { useLanguage } from '../LanguageContext'; // ← 追加

const Home = () => {
  const { t } = useLanguage(); // ← 辞書を呼び出す

  // プロジェクトの基本データ（タイトルや画像は言語共通なのでここに残す）
  const projectsData = [
    {
      id: "01",
      title: "ListeningAdventure",
      img: "/listening-adventure.png",
      color: "bg-indigo-100 text-indigo-600",
      link: "#"
    },
    {
      id: "02",
      title: "VTuber Vocabulary Game",
      img: "/vtuber-game.png",
      color: "bg-pink-100 text-pink-600",
      link: "#"
    },
    {
      id: "03",
      title: "FX Trading Journal",
      img: "/fx-journal.png",
      color: "bg-emerald-100 text-emerald-600",
      link: "#"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 pb-12 px-8 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-3xl mx-auto">
          {/* 改行（\n）を反映させるための処理 */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-[1.2] tracking-tight whitespace-pre-wrap">
            {t.home.heroTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.home.heroSub}
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="pt-8 pb-20 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h3 className="text-2xl font-bold">{t.home.projectsTitle}</h3>
          <div className="h-[1px] bg-slate-200 flex-grow"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {projectsData.map((project, index) => (
            <a 
              key={project.id} 
              href={project.link}
              className="group block bg-white overflow-hidden rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2"
            >
              <div className="h-52 bg-slate-200 overflow-hidden relative">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://via.placeholder.com/600x400?text=${project.title}`; }} 
                />
                <div className="absolute top-4 left-4">
                  {/* 言語辞書の配列から、該当するインデックスのtagを呼び出す */}
                  <span className={`text-[10px] font-bold px-2 py-1 rounded shadow-sm ${project.color} bg-white/90 backdrop-blur`}>
                    {t.home.projects[index].tag}
                  </span>
                </div>
              </div>

              <div className="p-7">
                <div className="text-xs font-bold text-slate-400 mb-2">{project.id}</div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {/* 言語辞書の配列から、該当するインデックスのdescを呼び出す */}
                  {t.home.projects[index].desc}
                </p>
                <div className="pt-4 border-t border-slate-50 flex justify-end">
                  <span className="text-xs font-bold text-indigo-600">{t.home.viewDetails}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;