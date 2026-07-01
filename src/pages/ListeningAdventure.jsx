import React from 'react';
import { useLanguage } from '../LanguageContext';

const ListeningAdventure = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-slate-50">
      
      {/* 1. Hero Section */}
      <section className="pt-24 pb-16 px-8 max-w-5xl mx-auto text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-800 mb-4 tracking-tight">
          {t.lalp.heroTitle}
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-indigo-600 mb-10">
          {t.lalp.heroSubtitle}
        </p>
        
        <button className="bg-rose-500 text-white text-xl md:text-2xl font-bold py-5 px-12 rounded-full shadow-lg hover:bg-rose-600 hover:scale-105 transition-all duration-300 ease-out mb-12">
          {t.lalp.ctaButton}
        </button>

        {/* Hero Image Placeholder */}
        <div className="w-full aspect-video bg-indigo-100 rounded-3xl border-8 border-white shadow-xl flex flex-col items-center justify-center overflow-hidden relative">
          <span className="text-indigo-400 font-bold text-xl z-10">[ プレースホルダー ]</span>
          <span className="text-indigo-400 text-sm mt-2 z-10">ここにゲーム画面とPapapa16さんのキャラクターイラストを配置</span>
          {/* 実際の画像を配置する際はこちらのimgタグを使用 */}
          {/* <img src="/hero-image.webp" alt="Listening Adventure N5" className="absolute inset-0 w-full h-full object-cover" /> */}
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            {t.lalp.introTitle}
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.lalp.introText}
          </p>
        </div>
      </section>

      {/* 3. Features Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">{t.lalp.featuresTitle}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-orange-100 rounded-full mb-6 flex items-center justify-center text-orange-500 font-bold text-sm">
              [Icon/Img]
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{t.lalp.feature1Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.lalp.feature1Desc}</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-emerald-100 rounded-full mb-6 flex items-center justify-center text-emerald-500 font-bold text-sm">
              [Icon/Img]
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{t.lalp.feature2Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.lalp.feature2Desc}</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
            <div className="w-24 h-24 bg-sky-100 rounded-full mb-6 flex items-center justify-center text-sky-500 font-bold text-sm">
              [Icon/Img]
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">{t.lalp.feature3Title}</h3>
            <p className="text-slate-600 leading-relaxed">{t.lalp.feature3Desc}</p>
          </div>

        </div>
      </section>

      {/* 4. Credit / Trust Section */}
      <section className="py-20 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-12">{t.lalp.creditTitle}</h2>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
            {/* Developer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm flex-1 flex flex-col items-center">
              <p className="text-sm font-bold text-indigo-500 mb-2">{t.lalp.devRole}</p>
              <h3 className="text-xl font-bold text-slate-800">{t.lalp.devName}</h3>
            </div>
            
            {/* Supervisor */}
            <div className="bg-white p-8 rounded-2xl shadow-sm flex-1 flex flex-col items-center">
              <p className="text-sm font-bold text-indigo-500 mb-2 whitespace-pre-wrap">{t.lalp.supRole}</p>
              <h3 className="text-xl font-bold text-slate-800">{t.lalp.supName}</h3>
            </div>
          </div>
          
          <p className="mt-8 text-slate-500 font-medium">
            {t.lalp.releaseDate} <br />
            <span className="text-sm">*Work in progress.</span>
          </p>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="py-24 px-8 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-10">{t.lalp.bottomCtaTitle}</h2>
        <button className="bg-rose-500 text-white text-xl md:text-2xl font-bold py-5 px-12 rounded-full shadow-lg hover:bg-rose-600 hover:scale-105 transition-all duration-300 ease-out">
          {t.lalp.ctaButton}
        </button>
      </section>

    </div>
  );
};

export default ListeningAdventure;