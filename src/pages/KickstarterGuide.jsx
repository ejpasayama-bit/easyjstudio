import React from 'react';

const KickstarterGuide = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 pb-24">
      
      {/* ページヘッダー */}
      <section className="bg-indigo-600 text-white pt-24 pb-16 px-8 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
          日本の方へ
        </h1>
        <p className="text-lg md:text-2xl font-medium opacity-90">
          Kickstarterが初めての方向けページ
        </p>
      </section>

      <div className="max-w-4xl mx-auto px-6 md:px-8 mt-12 space-y-16">
        
        {/* 目次 */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
          <h2 className="text-xl font-bold text-slate-800 mb-6 border-b-2 border-indigo-100 pb-2">目次</h2>
          <ul className="space-y-4 text-indigo-600 font-medium text-lg">
            <li><a href="#about" className="hover:underline">１：Kickstarter（キックスターター）とは？</a></li>
            <li><a href="#products" className="hover:underline">２：商品の紹介 / クリエイターコメント</a></li>
            <li><a href="#support" className="hover:underline">３：支援について</a></li>
          </ul>
        </div>

        {/* よりねちゃんからのメッセージ */}
        <div className="flex items-start gap-4 md:gap-6 bg-indigo-50 p-6 md:p-8 rounded-3xl">
          <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-white rounded-full border-4 border-indigo-200 overflow-hidden shadow-sm flex items-center justify-center">
            <span className="text-indigo-300 text-xs text-center font-bold">
                <img src="/ks-guide/yorine_icon.png" alt="よりね" className="w-full h-full object-cover" />
            </span>
          </div>
          <div className="flex-1 bg-white p-6 rounded-2xl rounded-tl-none shadow-sm relative">
            {/* 吹き出しのしっぽ */}
            <div className="absolute top-0 -left-3 w-0 h-0 border-t-[16px] border-t-white border-l-[16px] border-l-transparent"></div>
            <p className="text-lg md:text-xl font-bold text-slate-700 leading-relaxed">
              やっほー、来てくれてありがとう！<br className="hidden md:block"/>
              Kickstarterの説明と、簡単なリワード（リターン・返礼品）<br className="hidden md:block"/>を紹介するね！
            </p>
          </div>
        </div>

        {/* １：Kickstarterとは？ */}
        <section id="about" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 border-l-8 border-indigo-500 pl-4">
            １：Kickstarter（キックスターター）とは？
          </h2>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8 text-lg leading-relaxed text-slate-600">
            <p>
              海外発の世界最大の「応援購入（クラウドファンディング）」サービスです。開発資金を募り、集まった支援でゲームを完成させます。支援すると、金額に応じたお礼（＝リワード。本作なら本体や特典）を受け取れます。<strong className="text-rose-500">「支援する」＝「そのプランを予約購入する」</strong>とお考えください。
            </p>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-2">目標に届かなかった場合、料金は一切かかりません</h3>
              <p>
                本プロジェクトは「All or Nothing（オール・オア・ナッシング）」方式です。募集期間内に目標金額へ届かなかった場合、あなたへの請求は発生しません。目標を達成したときのみ、支援が成立します。
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-2">料金が引き落とされるタイミング</h3>
              <p>
                支援した時点ではなく、<strong className="text-slate-800">募集期間の終了した日</strong>にまとめて決済されます。募集中は「予約している」状態です。
              </p>
            </div>
          </div>
        </section>

        {/* ２：商品の紹介 */}
        <section id="products" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 border-l-8 border-rose-500 pl-4">
            ２：商品の紹介
          </h2>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-8">
            <p className="text-lg text-slate-600">
              <p>
              <strong className="text-indigo-600 block mb-2">そのコメント、推しに"拾われる"か？</strong>
              "清楚"を名乗るわりに、感情がダダ漏れ。全力で、まっすぐで、ちょっとポンコツな新人VTuberの配信に、リスナーとして飛び込め！
              流れるチャットから4つのスラングを選び、的確なコメントを投げ込む——新感覚チャットADV。</p>

              <strong className="text-indigo-600 block mb-2">■ コメントを"拾わせろ"</strong>
              空気を読んだスラングが刺されば、彼女はあなたの名前を呼んで話を広げる。外せば、コメントは何事もなく流れていく。あなたの一言が、配信を動かす。

              <strong className="text-indigo-600 block mb-2">■ "清楚"のはずが、隠しきれない</strong>
              アイドル界の清流を名乗る彼女。でも理不尽な苦行ゲームを前にすると、つい舌打ち、つい台パン、つい素の一面が……。
              取り繕っては失敗し、リスナーに突っ込まれ、また取り繕う。その繰り返しが、このゲームのいちばんの見どころ。<br /><br />

              <strong className="text-indigo-600 block mb-2">■ そのコメントが、推しの運命を変える</strong>
              やがて彼女は、ある"事件"で大きな試練に直面する。彼女がどんな結末を迎えるかは、あなたが投げ続けたコメント次第。
              登録者100万人の「トゥルーエンド」か、"らしさ"を封じた「ノーマルエンド」か、それとも「病み引退」か——。ただし道中で地雷を踏めば、そこで即BANエンド。<br /><br />

              <strong className="text-indigo-600 block mb-2">■ ガチで学べる日本語スラング辞典</strong>
              現役日本語教師監修の「SlangPool」搭載。体験版だけでも41語を収録し、意味だけでなく"どのような場面で使えるのか"まで解説。
              日/英/簡体字/繁体字の4言語に対応し、全用例に音声付き。
            </p>
            
            {/* クリエイターコメント枠 */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 border-b pb-2">クリエイターコメント（敬称略）</h3>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <img src="/ks-guide/aizawa.PNG" alt="愛沢日南さんコメント" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
                <img src="/ks-guide/mogu.PNG" alt="もぐざえもんさんコメント" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <img src="/ks-guide/nagai.PNG" alt="永井さんコメント" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
                <img src="/ks-guide/seiichi.PNG" alt="セーイチさんコメント" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex justify-center">
                <img src="/ks-guide/sasuke.PNG" alt="Sasuke Designさんコメント" className="w-full md:w-1/2 h-auto rounded-xl shadow-sm border border-slate-200" />
              </div>
            </div>

            {/* リワード（特典）枠 */}
            <div className="space-y-6 mt-12">
              <h3 className="text-xl font-bold text-slate-800 border-b pb-2">リワード（特典）について</h3>
              <ul className="space-y-4 list-disc list-inside marker:font-bold marker:text-emerald-500">
                <li className="pl-2">ゲーム本体</li>
                <li className="pl-2">限定壁紙</li>
                <li className="pl-2">撮り下ろしボイス（１～２分）</li>
                <li className="pl-2">撮り下ろしASMR（15～20分）</li>
                <li className="pl-2">キャラクター三面図</li>
                <li className="pl-2">タイトル曲の楽譜</li>
              </ul>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src="/ks-guide/credit.PNG" alt="上位リワード1" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
                <img src="/ks-guide/namecallvoice.PNG" alt="上位リワード2" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
                <img src="/ks-guide/spacha.PNG" alt="上位リワード3" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
                <img src="/ks-guide/namecallasmr.PNG" alt="上位リワード4" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
                <img src="/ks-guide/off-sp.PNG" alt="上位リワード5" className="w-full h-auto rounded-xl shadow-sm border border-slate-200" />
              </div>

              <img src="/ks-guide/reward_list_jp.png" alt="リワード一覧" className="w-full h-auto rounded-xl shadow-sm border border-slate-200 mt-6" />
            </div>

            {/* ストレッチゴール枠 */}
            <div className="space-y-6 mt-12">
              <h3 className="text-xl font-bold text-slate-800 border-b pb-2">ストレッチゴール</h3>
              <div className="flex justify-center">
                <img src="/ks-guide/stretch_goal_jp1.PNG" alt="ストレッチゴール" className="w-full md:w-1/2 h-auto rounded-xl shadow-sm border border-slate-200" />
              </div>
              <p className="text-lg text-slate-600 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <strong className="text-indigo-600 block mb-2">※ストレッチゴールとは？</strong>
                目標金額を達成した後に用意されている「追加のミッション」です！<br />
                さらに支援の輪が広がって次の目標金額に届くたびに、新しい衣装が追加されたり、完全フルボイス化されたりと、ゲームがどんどん豪華に進化していきます！
              </p>
            </div>
          </div>
        </section>

        {/* ３：支援について */}
        <section id="support" className="scroll-mt-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 border-l-8 border-emerald-500 pl-4">
            ３：支援について
          </h2>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-10 text-lg text-slate-600">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">支援に必要なもの</h3>
              <p className="leading-relaxed">
                Kickstarterのアカウント（無料・メールアドレスで作成）と、クレジットカード。アカウントは支援手続きの途中でも作成できます。日本のクレジットカード（VISA、Mastercard、JCBなど）がそのままご利用いただけます。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">手順</h3>
              <ol className="space-y-4 list-decimal list-inside marker:font-bold marker:text-emerald-500">
                <li className="pl-2">希望するプラン（リワード）を選び、緑色のボタン<strong className="text-slate-800">「Back this project／このプロジェクトをバックする」</strong>を押す
                  {/* block mt-4 mb-2 で上下に余白を取り、md:w-1/2 で半分のサイズに */}
                  <img src="/ks-guide/sc1.png" alt="説明画像１" className="block w-full md:w-1/2 h-auto mt-4 mb-2 rounded-xl shadow-sm border border-slate-200" />
                </li>
                <li className="pl-2"><strong className="text-slate-800">「利用可能なリワード」</strong>からプランを選択（「◯◯のプレッジ」を押す）</li>
                <li className="pl-2">オプションを選択（任意）して、金額を確認して「次へ」を押す</li>
                <li className="pl-2">Kickstarterにログイン（初めての方は名前・Eメール・パスワードを入力してアカウント作成）</li>
                <li className="pl-2">支援金額とプランを確認し、クレジットカード情報を入力</li>
                <li className="pl-2">チェックボタンを押して、「プレッジする」を押す
                  {/* こちらも同様にサイズダウンと余白を追加 */}
                  <img src="/ks-guide/sc2.png" alt="説明画像２" className="block w-full md:w-1/2 h-auto mt-4 mb-2 rounded-xl shadow-sm border border-slate-200" />
                </li>
                <li className="pl-2">完了！ あとは募集終了をお待ちください（拡散もしていただけるとありがたいです！）</li>
              </ol>
            </div>

            <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">リワード（リターン・返礼品）のお届け時期</h3>
              <p className="font-bold text-amber-700 mb-4">2027年8月を予定しています。</p>
              <p className="text-sm text-amber-800 leading-relaxed">
                ※お届け時期に関する注意<br/>
                本作は個人開発です。声の収録スケジュールなどに遅れが生じた場合、それに伴いお届け時期が前後する可能性があります。進捗はアップデートで随時ご報告します。あらかじめご了承ください。
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-bold text-slate-800 mb-2">金額の表示について</h3>
              <p className="text-blue-900 leading-relaxed">
                本プロジェクトは日本円で設定されています。<strong className="bg-blue-200 px-1 rounded">画面に表示されている金額（¥〇〇）がそのまま引き落とされます。</strong>海外サイトにありがちな「為替レートの変動による追加請求」などは一切かかりませんので、安心してご支援ください。
              </p>
            </div>

          </div>
        </section>

        {/* フッター・お問い合わせ */}
        <section className="text-center pt-8">
          <p className="text-xl font-bold text-slate-800 mb-8">
            ご不明な点は上部メニューの［お問い合わせ］からお気軽にどうぞ。<br/>
            あなたの応援を、よりねと一緒にお待ちしています！
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="[URL]" target="_blank" rel="noopener noreferrer" className="bg-slate-800 text-white px-6 py-3 rounded-full font-bold hover:bg-slate-700 transition-colors">
              Steam Wishlist
            </a>
            <a href="https://x.com/EasyJ_Studio" target="_blank" rel="noopener noreferrer" className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors">
              X (Twitter)
            </a>
            <a href="https://easyjstudio.com/" className="bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors">
              Website
            </a>
            <a href="https://discord.gg/NK3XXYcYqN" target="_blank" rel="noopener noreferrer" className="bg-[#5865F2] text-white px-6 py-3 rounded-full font-bold hover:bg-[#4752C4] transition-colors">
              Discord
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};

export default KickstarterGuide;