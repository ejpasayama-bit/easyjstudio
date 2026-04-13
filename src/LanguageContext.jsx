import React, { createContext, useState, useContext } from 'react';

const dictionaries = {
  en: {
    nav: {
      works: "Works",
      profile: "Profile",
      guidelines: "Guidelines",
      contact: "Contact"
    },
    home: {
      heroTitle: "New experiences, from language learning to entertainment.",
      heroSub: "EasyJ Studio is an independent development studio creating educational apps and interactive games that fuse Japanese culture with technology.",
      projectsTitle: "Current Projects",
      viewDetails: "View Details →",
      projects: [
        {
          tag: "Language / Education",
          desc: "A story-driven listening app for JLPT N5. Master listening comprehension through fun, academically-backed methods."
        },
        {
          tag: "Game / Culture",
          desc: "A vocabulary game for Weebs utilizing Live2D. Learn new languages through internet slang and VTuber culture."
        },
        {
          tag: "Utility / Analysis",
          desc: "An analysis tool that visualizes trading thought processes and mentality. Supports trader growth based on personal experience."
        }
      ]
    },
    concept: {
      title: "Concept",
      subtitle: "If it's not fun, it won't last.",
      p1: "Language learning should be filled with the joy of connecting with new worlds.",
      p2: "EasyJ Studio aims to transform learning from an 'obligation' into an 'adventure' by leveraging the power of the latest technology and entertainment.",
      p3: "Based on my background as a Japanese teacher and software developer, I create tools that solve real-world learning challenges with a touch of fun."
    },
    profile: {
      title: "Profile",
      name: "FUKAYA",
      role: "App Developer / Japanese Language Teacher",
      description: "While developing apps independently, I also teach as a Japanese language teacher. Currently distributing 'ListeningAdventure (Temp)' as a mobile app and 'SlanGame (Temp)' on Steam.",
      specialty: "Tech Stack: React, Unity, Tailwind CSS, Firebase"
    },
    guidelines: {
      title: "Video Posting Guidelines",
      introTitle: "Introduction",
      introP1: "Playthrough videos (including Let's Plays, commentary, and reviews) of games developed and published by EasyJ Studio can be posted and streamed by both individuals and corporations without prior permission, provided you follow these guidelines.",
      introP2: "Although optional, we would greatly appreciate it if you could include a link to the store page (e.g., Steam) in your video description.",
      requestTitle: "Requests for Posting",
      requestLi1: "Please include the game's title in the title of your video.",
      monetizeTitle: "Monetization",
      monetizeP1: "Monetization using partner programs provided by video sharing sites (e.g., YouTube Partner Program, Twitch Affiliates) is permitted. However, please refrain from formats that require viewers to pay a separate fee to watch the video (e.g., paid rentals or members-only videos).",
      prohibitTitle: "Prohibited Actions",
      prohibitP1: "Posting or streaming videos containing the following content is prohibited:",
      prohibitLi1: "Content that slanders specific individuals or groups.",
      prohibitLi2: "Use for religious, political, or offensive purposes.",
      prohibitLi3: "Extracting and distributing game assets (BGM, images, etc.) separately.",
      prohibitLi4: "Using major story spoilers in the video thumbnail.",
      rightsTitle: "* Regarding Our Rights",
      rightsText: "EasyJ Studio reserves the right to take legal action (such as filing takedown notices) against videos that do not comply with these guidelines or are deemed inappropriate.",
      disclaimerTitle: "Disclaimer",
      disclaimerP1: "EasyJ Studio shall not be held liable for any trouble or damages resulting from the posting or streaming of game videos.",
      disclaimerP2: "These guidelines are subject to change without notice. Please be sure to check the latest guidelines before posting.",
      date: "(Updated: 2026/04/13)"
    },
    contact: {
      title: "Contact",
      description: "For inquiries regarding projects or collaboration requests, please use the form below.",
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
      send: "Send"
    }
  },
  jp: {
    nav: {
      works: "作品",
      profile: "プロフィール",
      guidelines: "動画投稿ガイドライン",
      contact: "お問い合わせ"
    },
    home: {
      heroTitle: "語学学習からエンタメまで、\n新しい体験を。",
      heroSub: "EasyJ Studioは、日本文化とテクノロジーを融合させた教育アプリやインタラクティブなゲームを開発する個人開発スタジオです。",
      projectsTitle: "Current Projects",
      viewDetails: "View Details →",
      projects: [
        {
          tag: "Language / Education",
          desc: "JLPT N5レベルを対象とした、ストーリー主導のリスニング学習アプリ。学術的根拠に基づき、楽しみながら「聴解」をマスターします。"
        },
        {
          tag: "Game / Culture",
          desc: "Live2Dを活用した、Weeb（海外の日本ファン）向けの語彙学習ゲーム。ネットスラングやVTuber文化を通じた新しい言語学習を提供。"
        },
        {
          tag: "Utility / Analysis",
          desc: "トレード時の思考プロセスとメンタルを可視化する分析ツール。自らの経験に基づき、トレーダーの成長をサポートします。"
        }
      ]
    },
    concept: {
      title: "コンセプト",
      subtitle: "「楽しくなければ、続かない。」",
      p1: "語学学習は本来、新しい世界と繋がる喜びにあふれたものであるはずです。",
      p2: "EasyJ Studioは、最新のテクノロジーとエンターテインメントの力を使い、学習を「義務」から「冒険」へと変えることを目指しています。",
      p3: "日本語教師としての指導経験とエンジニアとしての開発経験を掛け合わせ、現場の課題を解決するプロダクトを開発しています。"
    },
    profile: {
      title: "プロフィール",
      name: "FUKAYA",
      role: "アプリ開発者 / 日本語教師",
      // ↓ プロフィールを更新しました！
      description: "個人でアプリを開発する傍ら、日本語教師として教壇に立っています。\n「ListeningAdventure（仮）」をスマホアプリとして、「SlanGame（仮）」をSteamにて配信中。",
      specialty: "技術スタック: React, Unity, Tailwind CSS, Firebase"
    },
    guidelines: {
      title: "動画投稿ガイドライン",
      introTitle: "はじめに",
      introP1: "EasyJ Studioが開発・配信するゲーム作品のプレイ動画（実況、解説、紹介を含む）の投稿および配信については、個人・法人を問わず、以下のガイドラインに従うことで事前の連絡なく行っていただくことが可能です。",
      introP2: "また、任意ではございますが、動画の概要欄などにSteam等のストアページのリンクを掲載していただけますと、開発の大きな励みとなります。",
      requestTitle: "投稿時のお願い",
      requestLi1: "動画のタイトルには、対象となる「ゲームの名前」を含めてください。",
      monetizeTitle: "収益化について",
      monetizeP1: "YouTube、Twitch等の動画投稿サイトが提供するパートナープログラム（広告収益、投げ銭等）を利用した収益化は制限いたしません。ただし、動画を視聴するために別途料金が発生する形式（有料レンタルや会員限定公開など）はご遠慮ください。",
      prohibitTitle: "禁止事項",
      prohibitP1: "以下の内容を含む動画の投稿・配信は禁止いたします。",
      prohibitLi1: "特定の個人、団体を誹謗中傷する内容を含めること。",
      prohibitLi2: "宗教活動、政治活動、公序良俗に反する目的での利用。",
      prohibitLi3: "ゲーム内の素材（BGM、画像等）を単体で抽出して公開・配布すること。",
      prohibitLi4: "ストーリーの核心に触れる部分（ネタバレ）を動画のサムネイルに使用すること。",
      rightsTitle: "※権利の保持について",
      rightsText: "EasyJ Studioは、本ガイドラインに従わない動画や、公序良俗に反する不適切と判断した動画に対して、法的措置（削除申し立て等）を講じる権利を保持しています。",
      disclaimerTitle: "免責事項",
      disclaimerP1: "ゲームの動画を投稿、配信したことによるいかなるトラブルや損害に対しましても、EasyJ Studioは一切の責任を負いかねます。",
      disclaimerP2: "また、このガイドラインは予告なく更新される場合があります。投稿前に必ず最新のガイドラインをご確認いただきますようお願いいたします。",
      date: "（2026/04/13 更新）"
    },
    contact: {
      title: "お問い合わせ",
      description: "作品に関するお問い合わせや、お仕事のご依頼などは以下のフォームよりご連絡ください。",
      labelName: "お名前",
      labelEmail: "メールアドレス",
      labelMessage: "メッセージ",
      send: "送信する"
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); 
  const t = dictionaries[lang];
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'jp' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);