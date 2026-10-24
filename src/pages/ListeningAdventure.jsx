import React from 'react';
import { useLanguage } from '../LanguageContext';

const ListeningAdventure = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-slate-50 font-sans pb-16">
      
      {/* 1. Hero Section (B2B向け2カラムレイアウト) */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* 左側：コピー＆CTA */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 mb-6 tracking-tight whitespace-pre-wrap leading-tight">
            {t.lalp.heroTitle}
          </h1>
          <div className="mb-6">
            <span className="inline-block bg-indigo-50 text-indigo-700 border border-indigo-200 px-4 py-1.5 rounded-full text-sm md:text-base font-bold tracking-wide shadow-sm">
              {t.lalp.heroCefr}
            </span>
          </div>
          <p className="text-xl md:text-2xl font-bold text-indigo-600 mb-10">
            {t.lalp.heroSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full justify-center lg:justify-start">
            {/* スマホ用：体験版ボタン */}
            <a 
              href="https://listening-n5-demo.ejp-asayama.workers.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="md:hidden w-full sm:w-auto inline-block bg-rose-500 text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300"
            >
              {t.lalp.ctaButton}
            </a>
          </div>

          {/* PC用：QRコード表示 */}
          <div className="hidden md:flex flex-row items-center gap-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <img 
              src="/trialqr.png" 
              alt="体験版QRコード" 
              className="w-24 h-24 object-contain" 
            />
            <div className="text-left">
              <span className="text-sm font-bold text-indigo-500 block mb-1">
                {t.lalp.demo_play}
              </span>
              <span className="text-xs text-slate-500">
                お手持ちのスマートフォンで読み取って<br/>すぐにアプリをお試しいただけます。
              </span>
            </div>
          </div>
        </div>

        {/* 右側：チラシ画像 */}
        <div className="flex-1 w-full max-w-lg lg:max-w-xl mx-auto">
          <div className="bg-white rounded-3xl border-8 border-white shadow-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-500">
            <img 
              src={t.lalp.flyer_src}
              alt="Listening Adventure N5" 
              className="w-full h-auto object-contain" 
            />
          </div>
        </div>
      </section>

      {/* ▼▼▼ YouTube Shorts PVセクション（動画完成後にコメントアウトを解除して使用） ▼▼▼ */}
      {/*
      <section className="py-16 px-4 flex justify-center bg-slate-100/50">
        <div className="text-center w-full max-w-sm">
          <h2 className="text-xl font-bold text-slate-700 mb-6">実際のプレイ画面をご覧ください</h2>
          <div className="aspect-[9/16] bg-black rounded-3xl shadow-xl overflow-hidden relative cursor-pointer group border-4 border-slate-800">
            <iframe
              className="w-full h-full pointer-events-none border-0"
              src="https://www.youtube.com/embed/YOUR_SHORTS_ID?autoplay=1&mute=1&loop=1&playlist=YOUR_SHORTS_ID&controls=0&showinfo=0&rel=0"
              title="Shorts PV Preview"
            ></iframe>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 flex items-center justify-center transition-colors duration-300">
              <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      {/* ▲▲▲ ========================================================= ▲▲▲ */}

      {/* 2. Introduction Section */}
      <section className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            {t.lalp.introTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed font-medium">
            {t.lalp.introText}
          </p>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-slate-800 mb-16">{t.lalp.featuresTitle}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-orange-50 rounded-2xl mb-6 flex items-center justify-center text-orange-500">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{t.lalp.feature1Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.lalp.feature1Desc}</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-emerald-50 rounded-2xl mb-6 flex items-center justify-center text-emerald-500">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{t.lalp.feature2Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.lalp.feature2Desc}</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
            <div className="w-20 h-20 bg-sky-50 rounded-2xl mb-6 flex items-center justify-center text-sky-500">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{t.lalp.feature3Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.lalp.feature3Desc}</p>
          </div>

        </div>
      </section>

      {/* 4. Credit / Trust Section */}
      <section className="py-20 bg-indigo-50 border-y border-indigo-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-extrabold text-slate-800 mb-12">{t.lalp.creditTitle}</h2>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
            {/* Developer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm flex-1 flex flex-col items-center justify-center border border-white hover:border-indigo-100 transition-colors">
              <p className="text-sm font-bold text-indigo-500 mb-2">{t.lalp.devRole}</p>
              <h3 className="text-xl font-bold text-slate-800">{t.lalp.devName}</h3>
            </div>
            
            {/* Supervisor */}
            <div className="bg-white p-8 rounded-2xl shadow-sm flex-1 flex flex-col items-center justify-center border border-white hover:border-indigo-100 transition-colors">
              <p className="text-sm font-bold text-indigo-500 mb-2 whitespace-pre-wrap">
                <a 
                  href="https://opinion.nucba.ac.jp/~isono/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-indigo-500 hover:text-indigo-700 hover:underline transition-colors duration-200"
                >
                  {t.lalp.supRole}
                </a>
              </p>
              <h3 className="text-xl font-bold">
                <a 
                  href="https://opinion.nucba.ac.jp/~isono/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-800 hover:text-indigo-600 hover:underline transition-colors duration-200"
                >
                  {t.lalp.supName}
                </a>
              </h3>
            </div>
          </div>
          
          <p className="mt-8 text-slate-500 font-medium">
            {t.lalp.releaseDate}
          </p>
        </div>
      </section>

      {/* 5. B2B / 法人向け一括導入のお問い合わせ */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border-2 border-indigo-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-6">
            {t.lalp.b2bTitle}
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium whitespace-pre-wrap">
            {t.lalp.b2bDesc}
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-indigo-600 text-white text-lg font-bold py-4 px-10 rounded-full shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            {t.lalp.b2bBtn}
          </a>
        </div>
      </section>

      {/* 6. Bottom CTA Section (スマホ用再掲) */}
      <section className="md:hidden pb-16 px-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">{t.lalp.bottomCtaTitle}</h2>
        <a 
          href="https://listening-n5-demo.ejp-asayama.workers.dev" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full bg-rose-500 text-white text-xl font-bold py-5 px-8 rounded-full shadow-lg hover:bg-rose-600 transition-all duration-300"
        >
          {t.lalp.ctaButton}
        </a>
      </section>

    </div>
  );
};

export default ListeningAdventure;