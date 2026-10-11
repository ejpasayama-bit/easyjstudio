import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { motion } from 'framer-motion';

const MyOshi = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { t } = useLanguage();

  // ▼ YouTubeの動画ID
  const videoId = "-UCSNBF22Ak";
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div 
      className="w-full min-h-screen bg-slate-900 bg-fixed bg-cover bg-center relative font-sans"
      style={{ backgroundImage: "url('/myoshi/oshibg.webp')" }}
    >
      <div className="absolute inset-0 bg-black/15 fixed z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <section className="w-full flex flex-col items-center justify-start text-center px-4 relative z-10 pt-32 md:pt-40 pb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-11/12 md:w-4/5 lg:w-2/3 mx-auto flex flex-col items-center"
          >
            <img src="/myoshi/top.webp" alt="My Oshi Uses Too Much Slang!" className="w-full h-auto drop-shadow-2xl mb-12" />
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://www.kickstarter.com/projects/easyjstudio/my-oshi-uses-too-much-slang-a-japanese-slang-chat-adv" className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all transform hover:scale-105">
                Check Kickstarter !
              </a>
              <a href="https://store.steampowered.com/app/4993450" className="bg-[#1b2838] hover:bg-[#2a475e] text-white border border-[#66c0f4] font-bold py-4 px-8 rounded-full shadow-[0_0_20px_rgba(102,192,244,0.3)] transition-all transform hover:scale-105 flex items-center gap-2">
                Wishlist on Steam
              </a>
            </div>
          </motion.div>
        </section>

        {/* YouTube PVセクション */}
        <section className="pb-16 px-4 flex justify-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            onClick={() => setIsVideoModalOpen(true)}
            className="w-4/5 md:w-2/3 lg:w-1/2 aspect-video bg-black rounded-2xl shadow-2xl overflow-hidden border border-white/10 relative cursor-pointer group"
          >
            <iframe 
              className="w-full h-full pointer-events-none scale-105 border-0"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1`} 
              title="PV Preview" 
              allow="autoplay; encrypted-media" 
              tabIndex="-1"
            ></iframe>
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ② スクロールで現れる魅力セクション１ */}
        <section className="py-24 px-4 flex items-center justify-center relative z-10">
          <motion.div 
            {...fadeInUp}
            className="w-11/12 md:w-4/5 lg:w-2/3 bg-black/80 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <div className="w-full text-center mb-12 md:mb-16">
              <span className="text-sm md:text-base font-bold text-rose-400 tracking-wider block mb-3">
                {t.myoshi.section1.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-indigo-300 drop-shadow-md">
                {t.myoshi.section1.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative flex flex-col w-full">
                <div className="bg-indigo-900/80 border-t border-x border-indigo-400/30 rounded-t-xl px-4 py-2 flex justify-between items-center text-xs font-mono text-indigo-200">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
                    <span className="ml-2">Oshi-Cam</span>
                  </span>
                  <span>✖</span>
                </div>
                
                <div className="aspect-video bg-slate-950 rounded-b-xl overflow-hidden border-b border-x border-indigo-400/30 shadow-lg relative group">
                  <img 
                    src="/myoshi/oshi.gif"
                    alt="ゲーム画面" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 text-left">
                <div className="relative bg-white/10 border border-indigo-500/20 p-5 md:p-6 rounded-2xl rounded-tl-none shadow-md backdrop-blur-sm">
                  <div className="absolute -left-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-white/10 border-l-[12px] border-l-transparent"></div>
                  <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                    {t.myoshi.section1.desc1_1}<br />
                    {t.myoshi.section1.desc1_2}
                  </p>
                </div>

                <div className="relative bg-indigo-950/40 border border-white/5 p-5 md:p-6 rounded-2xl rounded-tr-none shadow-md">
                  <div className="absolute -right-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-indigo-950/40 border-r-[12px] border-r-transparent"></div>
                  <p className="text-base md:text-lg text-slate-200 leading-relaxed font-semibold">
                    {t.myoshi.section1.desc2_1}
                    {t.myoshi.section1.desc2_2}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ③ スクロールで現れる魅力セクション２ */}
        <section className="py-24 px-4 flex items-center justify-center relative z-10">
          <motion.div 
            {...fadeInUp}
            className="w-11/12 md:w-4/5 lg:w-2/3 bg-black/80 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <div className="w-full text-center mb-12 md:mb-16">
              <span className="text-sm md:text-base font-bold text-rose-400 tracking-wider block mb-3">
                {t.myoshi.section2.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-indigo-300 drop-shadow-md">
                {t.myoshi.section2.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative flex flex-col w-full">
                <div className="bg-indigo-900/80 border-t border-x border-indigo-400/30 rounded-t-xl px-4 py-2 flex justify-between items-center text-xs font-mono text-indigo-200">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
                    <span className="ml-2">Girijan</span>
                  </span>
                  <span>✖</span>
                </div>
                
                <div className="aspect-video bg-slate-950 rounded-b-xl overflow-hidden border-b border-x border-indigo-400/30 shadow-lg relative group">
                  <img 
                    src="/myoshi/falling.gif" 
                    alt="ゲーム画面" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6 text-left">
                <div className="relative bg-white/10 border border-indigo-500/20 p-5 md:p-6 rounded-2xl rounded-tl-none shadow-md backdrop-blur-sm">
                  <div className="absolute -left-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-white/10 border-l-[12px] border-l-transparent"></div>
                  <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                    {t.myoshi.section2.desc1_1}<br />
                    {t.myoshi.section2.desc1_2}
                  </p>
                </div>

                <div className="relative bg-indigo-950/40 border border-white/5 p-5 md:p-6 rounded-2xl rounded-tr-none shadow-md">
                  <div className="absolute -right-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-indigo-950/40 border-r-[12px] border-r-transparent"></div>
                  <p className="text-base md:text-lg text-slate-200 leading-relaxed font-semibold">
                    {t.myoshi.section2.desc2_1}<br />
                    {t.myoshi.section2.desc2_2}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ④ スクロールで現れる魅力セクション３（SlangPool） */}
        <section className="py-24 px-4 flex items-center justify-center relative z-10">
          <motion.div 
            {...fadeInUp}
            className="w-11/12 md:w-4/5 lg:w-2/3 bg-black/80 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col"
          >
            {/* 【上部：タイトル（全幅・中央揃え）】 */}
            <div className="w-full text-center mb-12 md:mb-16">
              <span className="text-sm md:text-base font-bold text-rose-400 tracking-wider block mb-3">
                {t.myoshi.section3.subtitle}
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-indigo-300 drop-shadow-md">
                {t.myoshi.section3.title}
              </h2>
            </div>

            {/* 【下部：左右分割のコンテンツエリア】 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* ▼ 左側：ゲーム画面（辞書画面を想定） */}
              <div className="relative flex flex-col w-full">
                {/* タイトルバーを SlangPool.exe に変更 */}
                <div className="bg-indigo-900/80 border-t border-x border-indigo-400/30 rounded-t-xl px-4 py-2 flex justify-between items-center text-xs font-mono text-indigo-200">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
                    <span className="ml-2">SlangPool</span>
                  </span>
                  <span>✖</span>
                </div>
                
                <div className="aspect-video bg-slate-950 rounded-b-xl overflow-hidden border-b border-x border-indigo-400/30 shadow-lg relative group">
                  <img 
                    src="/myoshi/sp.gif" 
                    alt="SLANGPOOL 辞書画面" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* ▼ 右側：紹介テキスト・吹き出し群 */}
              <div className="flex flex-col gap-5 text-left">
                {/* 吹き出し風のカード1（左から） */}
                <div className="relative bg-white/10 border border-indigo-500/20 p-5 rounded-2xl rounded-tl-none shadow-md backdrop-blur-sm">
                  <div className="absolute -left-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-white/10 border-l-[12px] border-l-transparent"></div>
                  <p className="text-base md:text-lg font-bold text-white leading-relaxed">
                    {t.myoshi.section3.desc1}
                  </p>
                </div>

                {/* 吹き出し風のカード2（右から） */}
                <div className="relative bg-indigo-950/40 border border-white/5 p-5 rounded-2xl rounded-tr-none shadow-md">
                  <div className="absolute -right-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-indigo-950/40 border-r-[12px] border-r-transparent"></div>
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold">
                    {t.myoshi.section3.desc2_1}<br />
                    {t.myoshi.section3.desc2_2}
                  </p>
                </div>

                {/* 吹き出し風のカード3（左から・Kickstarterのアピール用に少し色を変更） */}
                <div className="relative bg-rose-950/30 border border-rose-500/20 p-5 rounded-2xl rounded-tl-none shadow-md">
                  <div className="absolute -left-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-rose-950/30 border-l-[12px] border-l-transparent"></div>
                  <p className="text-sm md:text-base text-rose-200 leading-relaxed font-bold">
                    {t.myoshi.section3.desc3}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>
        </section>

        {/* ⑤ スタッフ・クリエイター紹介セクション */}
        <section className="py-20 w-full relative z-10 flex justify-center">
          {/* 背景を画面横幅いっぱいに広げ、少し暗くしてネオンを目立たせる */}
          <div className="w-full bg-black/80 backdrop-blur-md border-y border-fuchsia-500/30 py-16 px-4 shadow-[0_0_50px_rgba(217,70,239,0.15)] relative overflow-hidden">
            
            {/* 背景の走査線風エフェクト */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)' }}></div>

            <motion.div 
              {...fadeInUp}
              className="max-w-5xl mx-auto flex flex-col items-center relative z-10"
            >
              {/* コピー部分 */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-widest drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]">
                  {t.myoshi.staff.headline_1}<span className="text-xl md:text-3xl font-bold not-italic tracking-normal mx-2">{t.myoshi.staff.headline_2}</span><br className="md:hidden" />
                  <span className="text-fuchsia-400 drop-shadow-[0_0_20px_rgba(217,70,239,0.8)]">{t.myoshi.staff.headline_3}</span>
                  <span className="text-xl md:text-3xl font-bold not-italic tracking-normal mx-2">{t.myoshi.staff.headline_4}</span>
                  <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">{t.myoshi.staff.headline_5}</span>
                </h2>
              </div>

              {/* クリエイター陣の2x2グリッド配置（NGOリスペクト） */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 md:gap-x-32 text-center w-full relative">
                
                {/* スタッフ1: キャラデザ */}
                <div className="flex flex-col items-center z-10">
                  <span className="text-sm md:text-base text-fuchsia-400 font-bold mb-2 tracking-widest">[ {t.myoshi.staff.role1} ]</span>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {t.myoshi.staff.name1}
                  </span>
                </div>

                {/* スタッフ2: シナリオ */}
                <div className="flex flex-col items-center z-10">
                  <span className="text-sm md:text-base text-cyan-400 font-bold mb-2 tracking-widest">[ {t.myoshi.staff.role2} ]</span>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {t.myoshi.staff.name2}
                  </span>
                </div>

                {/* スタッフ3: 声優 */}
                <div className="flex flex-col items-center z-10">
                  <span className="text-sm md:text-base text-emerald-400 font-bold mb-2 tracking-widest">[ {t.myoshi.staff.role3} ]</span>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {t.myoshi.staff.name3}
                  </span>
                  <span className="text-sm text-slate-300 mt-2 font-bold">(VTuber)</span>
                </div>

                {/* スタッフ4: 楽曲 */}
                <div className="flex flex-col items-center z-10">
                  <span className="text-sm md:text-base text-amber-400 font-bold mb-2 tracking-widest">[ {t.myoshi.staff.role4} ]</span>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    {t.myoshi.staff.name4}
                  </span>
                  <span className="text-sm text-slate-300 mt-2 font-bold">(THA NEON LILY)</span>
                </div>
                
                {/* 中央の「×」マーク（PC時のみ表示） */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 text-8xl md:text-[150px] font-black pointer-events-none select-none hidden md:block leading-none">
                  ×
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* ③ 製品情報セクション */}
        <section className="py-24 px-4 flex items-center justify-center relative z-10">
          <motion.div 
            {...fadeInUp}
            className="w-11/12 md:w-4/5 lg:w-2/3 bg-black/80 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] text-left"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-400 mb-8 border-b border-white/20 pb-4 drop-shadow-lg">
              {t.myoshi.product.title}
            </h2>

            <dl className="divide-y divide-white/10 text-base md:text-lg">
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">{t.myoshi.product.lblTitle}</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  {t.myoshi.product.valTitle}
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">{t.myoshi.product.lblGenre}</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  {t.myoshi.product.valGenre}
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">{t.myoshi.product.lblPlayers}</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  {t.myoshi.product.valPlayers}
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">{t.myoshi.product.lblRelease}</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  {t.myoshi.product.valRelease}<span className="text-rose-400 font-bold ml-2">{t.myoshi.product.valReleaseNote}</span>
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">{t.myoshi.product.lblPlatform}</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  {t.myoshi.product.valPlatform}
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">{t.myoshi.product.lblPrice}</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  {t.myoshi.product.valPrice}
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">{t.myoshi.product.lblLang}</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2 leading-relaxed">
                  {t.myoshi.product.valLang}<br />
                  <span className="text-sm text-slate-300">{t.myoshi.product.valLangNote}</span>
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">{t.myoshi.product.lblDev}</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  {t.myoshi.product.valDev}
                </dd>
              </div>
            </dl>
          </motion.div>
        </section>

        {/* ③ 配信者・メディア向け情報セクション（新規追加） */}
        <section className="py-24 px-4 flex items-center justify-center relative z-10">
          <motion.div 
            {...fadeInUp}
            className="w-11/12 md:w-4/5 lg:w-2/3 bg-black/80 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] text-left"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-400 mb-8 border-b border-white/20 pb-4 drop-shadow-lg">
              {t.myoshi.media.title}
            </h2>

            {/* ガイドライン */}
            <div className="mb-12">
              <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                {t.myoshi.media.guidelineTitle}
              </h3>
              <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10 text-slate-200 space-y-4 text-lg">
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✅</span> 
                  <span dangerouslySetInnerHTML={{ __html: t.myoshi.media.rule1 }} />
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✅</span> 
                  <span dangerouslySetInnerHTML={{ __html: t.myoshi.media.rule2 }} />
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✅</span> 
                  <span>{t.myoshi.media.rule3}</span>
                </p>
                <p className="text-sm text-slate-400 mt-4 pt-4 border-t border-white/10">
                  {t.myoshi.media.ruleNote} <u><a href="/guidelines">{t.myoshi.media.ruleLink}</a></u>
                </p>
              </div>
            </div>

            {/* プレスキット */}
            <div className="mb-12">
              <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                {t.myoshi.media.presskitTitle}
              </h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                {t.myoshi.media.presskitDesc}
              </p>
              <a 
                href="https://drive.google.com/drive/folders/1Vxax85mL47njkx2DbNsFoRiS_nH9iLEp?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.myoshi.media.presskitBtn}
              </a>
            </div>

            {/* お問い合わせ・各種リンク */}
            <div>
              <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                {t.myoshi.media.contactTitle}
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                {t.myoshi.media.contactDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://x.com/EasyJ_Studio" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-slate-800 text-white border border-slate-700 font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                  X (Twitter)
                </a>
                <a href="/contact" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                  {t.myoshi.media.contactFormBtn}
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 空白のセクション（最後までスクロールさせるための余白） */}
        <div className="h-64"></div>
      </div>
      
      {/* ★★★ ポップアップ（モーダル）部分 ★★★ */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsVideoModalOpen(false)} 
        >
          <div 
            className="w-full max-w-5xl aspect-video relative shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white bg-slate-800 hover:bg-rose-500 rounded-full w-10 h-10 flex items-center justify-center z-10 transition-colors shadow-lg"
              onClick={() => setIsVideoModalOpen(false)}
            >
              ✕
            </button>
            
            <iframe 
              className="w-full h-full border-0 rounded-xl"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`} 
              title="&quot;My Oshi Uses Too Much Slang!&quot; - GamePlayDemo" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

    </div>
  );
};

export default MyOshi;