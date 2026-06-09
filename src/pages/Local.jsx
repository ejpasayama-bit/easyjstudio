import React, { useState } from 'react';

const Local = () => {
  // 送信状態を管理するステート
  const [status, setStatus] = useState('idle');

  // 送信ボタンが押された時の処理
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      // 既存のContactフォームと同じFormspreeのURLを使用
      const response = await fetch("https://formspree.io/f/xlgarqkv", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen">
      {/* ① ページヘッダー（ヒーローエリア） */}
      <section className="py-24 px-8 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <span className="text-sm font-bold text-indigo-600 tracking-wider uppercase mb-4 block">
            For Local Businesses
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-[1.4] tracking-tight">
            地域の事業者様・飲食店様へ<br />
            <span className="text-indigo-600">EasyJ Studio</span>のWeb・システム開発
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed text-left md:text-center">
            EasyJ Studioは、自社アプリ開発やインディーゲーム開発で培った高度なプログラミング技術を活かし、地元の企業様のWebサイト（HP）制作や、社内業務のデジタル化・効率化（勤怠管理アプリ等の開発）をワンストップでサポートしています。
          </p>
        </div>
      </section>

      {/* ② 強み・選ばれる理由 */}
      <section className="py-16 px-8 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">選ばれる3つの理由</h2>
          <div className="h-[1px] bg-slate-200 flex-grow"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">1</div>
            <h3 className="text-xl font-bold mb-4">ゼロからシステムを組める<br />「圧倒的な技術力」</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              テンプレートを組み合わせるだけの一般的なホームページ制作とは異なり、裏側のデータ処理や高度なシステム構築まで一人で完結できるため、御社の要望に合わせた複雑なカスタマイズにも柔軟に対応します。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">2</div>
            <h3 className="text-xl font-bold mb-4">ユーザーを迷わせない<br />「サクサク動くUI/UX」</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              一般ユーザーや配信者向けの厳しい環境で磨かれた「使いやすさ」「直感的な操作性」のノウハウを、そのまま御社のWebサイトや業務アプリの設計に落とし込みます。
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">3</div>
            <h3 className="text-xl font-bold mb-4">信用金庫様・地域密着の<br />「誠実なサポート」</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              地域の金融機関様との連携を大切にし、顔の見える距離感で「作って終わり」ではないカッチリとした保守・運用を行います。
            </p>
          </div>
        </div>
      </section>

      {/* ③ 提供メニュー */}
      <section className="py-16 px-8 max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold">提供メニュー</h2>
          <div className="h-[1px] bg-slate-200 flex-grow"></div>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-indigo-500">
            <div className="md:w-1/3 font-bold text-lg text-indigo-900">企業向けWebサイト（HP）の<br/>企画・制作・保守</div>
            <div className="md:w-2/3 text-slate-600 leading-relaxed">
              製造業、飲食店、ローカルビジネスに特化した、信頼感と集客力を高めるWebサイトを制作します。
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 border-l-4 border-l-emerald-500">
            <div className="md:w-1/3 font-bold text-lg text-emerald-900">社内業務の<br/>デジタル化・効率化</div>
            <div className="md:w-2/3 text-slate-600 leading-relaxed">
              「Excelや紙での管理に限界を感じている」という課題に対し、スマホで動くシンプルな勤怠管理アプリなど、現場に最適化した業務システムをオーダーメイドで構築します。
            </div>
          </div>
        </div>
      </section>

      {/* ④ お問い合わせフォーム */}
      <section className="py-16 px-8 max-w-3xl mx-auto mb-24">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100">
          <h2 className="text-2xl font-bold mb-4 text-center">お問い合わせ・ご相談</h2>
          <p className="text-slate-600 text-center mb-8">
            信用金庫様からのご紹介案件、または地域のご相談はこちらからお気軽にご連絡ください。
          </p>

          {/* 成功時のメッセージ */}
          {status === 'success' && (
            <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl font-bold text-center">
              ありがとうございます！メッセージが送信されました。<br/>内容を確認次第、折り返しご連絡いたします。
            </div>
          )}

          {/* エラー時のメッセージ */}
          {status === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl font-bold text-center">
              エラーが発生しました。時間をおいて再度お試しください。
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">会社名 / 屋号</label>
              {/* 各inputに name 属性を追加しています */}
              <input type="text" name="company" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="例：株式会社〇〇 / 居酒屋〇〇" />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">お名前 <span className="text-red-500">*</span></label>
              <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="例：山田 太郎" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">メールアドレス <span className="text-red-500">*</span></label>
                <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="info@easyjstudio.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">お電話番号</label>
                <input type="tel" name="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="090-XXXX-XXXX" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">ご相談内容 <span className="text-red-500">*</span></label>
              <textarea name="message" required rows="5" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="現在、Excelでの管理に限界を感じておりシステム化を検討しています。まずは費用感などをご相談したいです。"></textarea>
            </div>
            
            <div className="pt-4 text-center">
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-12 rounded-xl shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1 disabled:bg-indigo-300 disabled:transform-none disabled:shadow-none"
              >
                {status === 'submitting' ? '送信中...' : 'この内容で送信する'}
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Local;