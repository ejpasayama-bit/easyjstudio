import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';

const Contact = () => {
  const { lang, t } = useLanguage();
  
  // 送信状態を管理するステート（idle: 待機, submitting: 送信中, success: 完了, error: 失敗）
  const [status, setStatus] = useState('idle');

  // 送信ボタンが押された時の処理
  const handleSubmit = async (e) => {
    e.preventDefault(); // 画面の余計なリロードを防ぐ
    setStatus('submitting'); // 「送信中」状態にする

    const form = e.target;
    const data = new FormData(form);

    try {
      // ご自身のFormspree URLにデータを送る
      const response = await fetch("https://formspree.io/f/xlgarqkv", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus('success'); // 成功！
        form.reset(); // フォームを空にする
      } else {
        setStatus('error'); // エラー
      }
    } catch (error) {
      setStatus('error'); // ネットワークエラー等
    }
  };

  return (
    <div className="py-24 px-8 max-w-2xl mx-auto min-h-[60vh]">
      <h2 className="text-3xl font-bold mb-4">{t.contact.title}</h2>
      <p className="text-slate-600 mb-10">{t.contact.description}</p>
      
      {/* 成功時のメッセージ */}
      {status === 'success' && (
        <div className="mb-8 p-4 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl font-bold">
          {lang === 'en' ? "Thank you! Your message has been sent." : "ありがとうございます！メッセージが送信されました。"}
        </div>
      )}

      {/* エラー時のメッセージ */}
      {status === 'error' && (
        <div className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl font-bold">
          {lang === 'en' ? "Oops! There was a problem submitting your form." : "エラーが発生しました。時間をおいて再度お試しください。"}
        </div>
      )}

      {/* フォーム本体（onSubmitを追加） */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold mb-2">{t.contact.labelName}</label>
          {/* name="name" がFormspreeに送るための「箱の名前」になります */}
          <input type="text" name="name" required className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">{t.contact.labelEmail}</label>
          <input type="email" name="email" required className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-bold mb-2">{t.contact.labelMessage}</label>
          <textarea name="message" required className="w-full p-3 h-40 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none"></textarea>
        </div>
        
        {/* 送信中はボタンを押せなくして、文字を「送信中...」に変える */}
        <button 
          type="submit" 
          disabled={status === 'submitting'}
          className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors disabled:bg-indigo-300"
        >
          {status === 'submitting' 
            ? (lang === 'en' ? 'Sending...' : '送信中...') 
            : t.contact.send}
        </button>
      </form>
    </div>
  );
};

export default Contact;