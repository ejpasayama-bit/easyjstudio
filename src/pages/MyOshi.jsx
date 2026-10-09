import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MyOshi = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // ▼ YouTubeの動画ID（例: https://www.youtube.com/watch?v=XXXXXX の XXXXXX の部分）https://youtu.be/-UCSNBF22Ak
  const videoId = "-UCSNBF22Ak";
  // アニメーションの共通設定（再利用しやすく定義）
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" }, // 画面に100px入ったら発火
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div 
      className="w-full min-h-screen bg-slate-900 bg-fixed bg-cover bg-center relative font-sans"
      style={{ backgroundImage: "url('/myoshi/oshibg.webp')" }}
    >
      {/* 背景を少し暗くして、手前の文字を読みやすくするためのオーバーレイ */}
      <div className="absolute inset-0 bg-black/15 fixed z-0 pointer-events-none"></div>

      {/* 手前のコンテンツ（z-10 で背景より前に出す） */}
      <div className="relative z-10">
        
        {/* 修正箇所２：引っ張り上げた分、中身がヘッダーに被らないよう pt-32（上部の余白）を追加 */}
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
            // ▼ サイズ変更ポイント：
            // PC: lg:w-2/3(約66%) → lg:w-1/3(約33%)
            // タブレット: md:w-4/5(80%) → md:w-1/2(50%)
            // スマホ: w-11/12(約91%) → w-4/5(80%)
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

        {/* ② スクロールで現れる魅力セクション１（見出し全幅 ＋ 左右分割） */}
        <section className="py-24 px-4 flex items-center justify-center relative z-10">
          <motion.div 
            {...fadeInUp}
            // flex-col にして「上（タイトル）」と「下（左右コンテント）」を縦に並べます
            className="w-11/12 md:w-4/5 lg:w-2/3 bg-black/80 backdrop-blur-md p-10 md:p-16 rounded-3xl border border-white/20 shadow-[0_0_40px_rgba(0,0,0,0.5)] flex flex-col"
          >
            
            {/* 【上部：タイトル（全幅・中央揃え）】 */}
            <div className="w-full text-center mb-12 md:mb-16">
              <span className="text-sm md:text-base font-bold text-rose-400 tracking-wider block mb-3">
                新感覚チャットアドベンチャー
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-indigo-300 drop-shadow-md">
                そのコメント、推しに"拾われる"か？
              </h2>
            </div>

            {/* 【下部：左右分割のコンテンツエリア】 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* ▼ 左側：ゲーム画面（PCウィンドウ風デザイン） */}
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
                    src="/myoshi/oshi.gif" // ※実際の画像のパス
                    alt="ゲーム画面" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* ▼ 右側：紹介テキスト・吹き出し群 */}
              <div className="flex flex-col gap-6 text-left">
                {/* 吹き出し風のカード1 */}
                <div className="relative bg-white/10 border border-indigo-500/20 p-5 md:p-6 rounded-2xl rounded-tl-none shadow-md backdrop-blur-sm">
                  <div className="absolute -left-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-white/10 border-l-[12px] border-l-transparent"></div>
                  <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                    "清楚"を名乗るわりに、感情がダダ漏れ。<br />
                    全力で、まっすぐで、ちょっとポンコツな新人VTuberの配信に、リスナーとして飛び込め！
                  </p>
                </div>

                {/* 吹き出し風のカード2 */}
                <div className="relative bg-indigo-950/40 border border-white/5 p-5 md:p-6 rounded-2xl rounded-tr-none shadow-md">
                  <div className="absolute -right-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-indigo-950/40 border-r-[12px] border-r-transparent"></div>
                  <p className="text-base md:text-lg text-slate-200 leading-relaxed font-semibold">
                    流れるチャットから4つのスラングを選び、的確なコメントを投げ込む——。
                    あなたのコメント1つで、彼女のテンションは爆上がりしたり、逆にガチ凹みして即BAN対象になったり！？
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
            {/* 【上部：タイトル（全幅・中央揃え）】 */}
            <div className="w-full text-center mb-12 md:mb-16">
              {/* サブタイトルを「ポンコツかわいい」等のワードで追加（不要なら削除可） */}
              <span className="text-sm md:text-base font-bold text-rose-400 tracking-wider block mb-3">
                ポンコツかわいい
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-indigo-300 drop-shadow-md">
                "清楚"のはずが、隠しきれない
              </h2>
            </div>

            {/* 【下部：左右分割のコンテンツエリア】 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              
              {/* ▼ 左側：ゲーム画面（PCウィンドウ風デザイン） */}
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

              {/* ▼ 右側：紹介テキスト・吹き出し群 */}
              <div className="flex flex-col gap-6 text-left">
                {/* 吹き出し風のカード1（前半の文章） */}
                <div className="relative bg-white/10 border border-indigo-500/20 p-5 md:p-6 rounded-2xl rounded-tl-none shadow-md backdrop-blur-sm">
                  <div className="absolute -left-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-white/10 border-l-[12px] border-l-transparent"></div>
                  <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
                    アイドル界の清流を名乗る彼女。<br />
                    でも理不尽な苦行ゲームを前にすると、つい舌打ち、つい台パン、つい素の一面が……。
                  </p>
                </div>

                {/* 吹き出し風のカード2（後半の文章） */}
                <div className="relative bg-indigo-950/40 border border-white/5 p-5 md:p-6 rounded-2xl rounded-tr-none shadow-md">
                  <div className="absolute -right-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-indigo-950/40 border-r-[12px] border-r-transparent"></div>
                  <p className="text-base md:text-lg text-slate-200 leading-relaxed font-semibold">
                    取り繕っては失敗し、リスナーに突っ込まれ、また取り繕う。<br />
                    その繰り返しが、このゲームのいちばんの見どころ。
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
                ゲーム内システム：SLANGPOOL
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-indigo-300 drop-shadow-md">
                "生きた"日本語スラング辞典
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
                  {/* 画像パスはご自身の辞書画面のもの（例: /myoshi/dict.png 等）に書き換えてください */}
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
                    本作には、日本のインターネットや日常会話で実際に使われている"生きた"スラングを学べる辞書システム「SlangPool」を搭載しています。
                  </p>
                </div>

                {/* 吹き出し風のカード2（右から） */}
                <div className="relative bg-indigo-950/40 border border-white/5 p-5 rounded-2xl rounded-tr-none shadow-md">
                  <div className="absolute -right-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-indigo-950/40 border-r-[12px] border-r-transparent"></div>
                  <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold">
                    開発者は現役の日本語教師。<br />
                    SlangPoolは単語の意味を並べるだけでなく、「どのような場面で使えるのか」という文脈まで解説します。日本語・英語・簡体字・繁体字の4言語に対応し、いずれも用例・音声つき。
                  </p>
                </div>

                {/* 吹き出し風のカード3（左から・Kickstarterのアピール用に少し色を変更） */}
                <div className="relative bg-rose-950/30 border border-rose-500/20 p-5 rounded-2xl rounded-tl-none shadow-md">
                  <div className="absolute -left-3 top-0 w-3 h-4 bg-transparent border-t-[16px] border-t-rose-950/30 border-l-[12px] border-l-transparent"></div>
                  <p className="text-sm md:text-base text-rose-200 leading-relaxed font-bold">
                    体験版では41語を収録。製品版の収録語数は、Kickstarterキャンペーンの支援状況に応じて増えていきます！
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
                  豪華スタッフ<span className="text-xl md:text-3xl font-bold not-italic tracking-normal mx-2">が描く</span><br className="md:hidden" />
                  <span className="text-fuchsia-400 drop-shadow-[0_0_20px_rgba(217,70,239,0.8)]">推し</span>
                  <span className="text-xl md:text-3xl font-bold not-italic tracking-normal mx-2">と</span>
                  <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]">スラング</span>
                </h2>
              </div>

              {/* クリエイター陣の2x2グリッド配置（NGOリスペクト） */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 md:gap-x-32 text-center w-full relative">
                
                {/* スタッフ1: キャラデザ */}
                <div className="flex flex-col items-center z-10">
                  <span className="text-sm md:text-base text-fuchsia-400 font-bold mb-2 tracking-widest">[ ママ＆パパ ]</span>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    Mogu Zaemon
                  </span>
                </div>

                {/* スタッフ2: シナリオ */}
                <div className="flex flex-col items-center z-10">
                  <span className="text-sm md:text-base text-cyan-400 font-bold mb-2 tracking-widest">[ シナリオ ]</span>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    セーイチ
                  </span>
                </div>

                {/* スタッフ3: 声優 */}
                <div className="flex flex-col items-center z-10">
                  <span className="text-sm md:text-base text-emerald-400 font-bold mb-2 tracking-widest">[ 声優 ]</span>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    愛沢日南
                  </span>
                  <span className="text-sm text-slate-300 mt-2 font-bold">(VTuber)</span>
                </div>

                {/* スタッフ4: 楽曲 */}
                <div className="flex flex-col items-center z-10">
                  <span className="text-sm md:text-base text-amber-400 font-bold mb-2 tracking-widest">[ タイトル楽曲 ]</span>
                  <span className="text-3xl md:text-5xl font-black text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                    永井カイル
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
              製品情報
            </h2>

            <dl className="divide-y divide-white/10 text-base md:text-lg">
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">ゲームタイトル</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  My Oshi Uses Too Much Slang! ～推しがスラングをめっちゃ使うんだが！～
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">ジャンル</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  日本語スラング学習チャットADV
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">プレイ人数</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  1人
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">リリース時期</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  2027年8月予定<span className="text-rose-400 font-bold ml-2">（体験版は公開中）</span>
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">対応機種</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  PC（Steam）
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">価格</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  2,000円（予定）
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">対応言語</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2 leading-relaxed">
                  日本語、英語、簡体字、繁体字<br />
                  <span className="text-sm text-slate-300">（ボイスは日本語のみ）</span>
                </dd>
              </div>
              <div className="py-5 sm:grid sm:grid-cols-3 sm:gap-4">
                <dt className="font-bold text-indigo-300">開発・販売</dt>
                <dd className="mt-1 text-white sm:mt-0 sm:col-span-2">
                  Fukaya（EasyJ Studio）
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
              配信者・メディアの方へ
            </h2>

            {/* ガイドライン */}
            <div className="mb-12">
              <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📹</span> 配信・動画投稿ガイドライン
              </h3>
              <div className="bg-white/10 p-6 md:p-8 rounded-2xl border border-white/10 text-slate-200 space-y-4 text-lg">
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✅</span> 
                  <span><strong className="text-white">事前の連絡なし</strong>で、配信および収益化が可能です。</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✅</span> 
                  <span>配信タイトルに<strong className="text-white">ゲーム名を含めること</strong>が必須条件です。</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✅</span> 
                  <span>概要欄へのSteamストアページのリンク掲載は「任意」ですが、載せていただけると大変励みになります。</span>
                </p>
                <p className="text-sm text-slate-400 mt-4 pt-4 border-t border-white/10">
                  ※体験版・製品版ともに上記のルールが適用されます。ルールは変更される場合がございます。 <a href="/guidelines">詳細はこちらをご確認ください。</a>
                </p>
              </div>
            </div>

            {/* プレスキット */}
            <div className="mb-12">
              <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">📁</span> プレスキット (Press Kit)
              </h3>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                メディア掲載・ご紹介用の高画質ロゴ、スクリーンショット、キービジュアル等をまとめたフォルダをご用意しています。記事作成やサムネイル制作に自由にご利用ください。
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
                プレスキットをダウンロード (Google Drive)
              </a>
            </div>

            {/* お問い合わせ・各種リンク */}
            <div>
              <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-3">
                <span className="text-3xl">✉️</span> お問い合わせ
              </h3>
              <p className="text-lg text-slate-300 mb-6">
                その他、個別のご相談や取材のご依頼は、以下よりお気軽にご連絡ください。
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://x.com/EasyJ_Studio" target="_blank" rel="noopener noreferrer" className="bg-black hover:bg-slate-800 text-white border border-slate-700 font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                  X (Twitter)
                </a>
                <a href="/contact" className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                  お問い合わせフォーム
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 空白のセクション（最後までスクロールさせるための余白） */}
        <div className="h-64"></div>
      </div>
      
      {/* 
        ★★★ ポップアップ（モーダル）部分 ★★★
      */}
      {isVideoModalOpen && (
        <div 
          // 映像が黒くなるバグを防ぐため backdrop-blur-sm を削除し、背景色を少し濃くしました
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsVideoModalOpen(false)} 
        >
          {/* 
            ポップアップの中身の枠 
            ここからも overflow-hidden と bg-black を削除し、干渉をなくします
          */}
          <div 
            className="w-full max-w-5xl aspect-video relative shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* 閉じるボタン（動画に被らないよう、少し上に配置） */}
            <button 
              className="absolute -top-12 right-0 md:-right-12 md:top-0 text-white bg-slate-800 hover:bg-rose-500 rounded-full w-10 h-10 flex items-center justify-center z-10 transition-colors shadow-lg"
              onClick={() => setIsVideoModalOpen(false)}
            >
              ✕
            </button>
            
            {/* 
              frameBorder="0" を削除し、classNameに border-0 と rounded-xl を追加。
              背景動画との干渉を避けるため、URL末尾に ?rel=0 を付与。
            */}
            <iframe 
              className="w-full h-full border-0 rounded-xl"
              // ▼ ドメインを youtube-nocookie.com に変更
              src="https://www.youtube-nocookie.com/embed/-UCSNBF22Ak?rel=0" 
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