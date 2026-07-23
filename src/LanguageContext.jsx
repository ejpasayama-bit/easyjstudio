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
          tag: "Language / Game",
          desc: "A Live2D-powered vocabulary game for Japanese pop culture enthusiasts. Discover a new way to learn through internet slang and VTuber culture."
        },
        {
          tag: "Utility / Analysis",
          desc: "An analysis tool that visualizes trading thought processes and mentality. Supports trader growth based on personal experience."
        },
        {
          tag: "Utility / Streaming",
          desc: "An analysis tool that visualizes trading thought processes and mentality. Supports trader growth based on personal experience."
        },
        {
          tag: "Utility / Teaching",
          desc: "An AI-powered lesson planning software. It eliminates the reliance on individual teaching skills to deliver high-quality lessons to learners."
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
      description: "While developing apps independently, I also teach as a Japanese language teacher. Currently distributing 'ListeningAdventure' as a mobile app and 'SlanGame (Temp)' on Steam.",
      specialty: "Tech Stack: React, Unity, Tailwind CSS, Firebase"
    },
    guidelines: {
      title: "Video Posting Guidelines",
      introTitle: "Introduction",
      introP1: "Playthrough videos (including Let's Plays, commentary, reviews, and short clips) of games developed and published by EasyJ Studio can be posted and streamed by both individuals and corporations without prior permission, provided you follow these guidelines.",
      introP2: "To help support our continued development and spread the word about our games, we kindly ask for your cooperation with the guidelines and requests listed below.",
      requestTitle: "Requests for Posting",
      requestLi1: "Please include the game's title in the title of your video or stream. (Required)",
      requestLi2: "We would appreciate it if you could include a link to our Steam Store page in your video description or a similar area. (Optional)",
      monetizeTitle: "Monetization",
      monetizeP1: "You are fully permitted to monetize your content using partner programs provided by video sharing sites (e.g., ad revenue and tipping systems like Super Chat on YouTube, Twitch, TikTok, etc.).",
      prohibitTitle: "Prohibited Actions",
      prohibitP1: "Posting or streaming videos containing the following content is prohibited:",
      prohibitLi1: "Content that slanders specific individuals or groups.",
      prohibitLi2: "Use for religious or political purposes, or any use that violates public order and morals.",
      prohibitLi3: "Extracting and distributing game assets (BGM, images, voices, etc.) separately.",
      rightsTitle: "* Regarding Our Rights",
      rightsText: "EasyJ Studio reserves the right to take legal action (such as filing takedown notices) against videos that do not comply with these guidelines or are deemed inappropriate and contrary to public order and morals.",
      disclaimerTitle: "Disclaimer",
      disclaimerP1: "EasyJ Studio shall not be held liable for any trouble or damages resulting from the posting or streaming of game videos.",
      disclaimerP2: "These guidelines are subject to change without notice. Please be sure to check the latest guidelines before posting.",
      date: "(Updated: 2026/07/24)"
    },
    contact: {
      title: "Contact",
      description: "For inquiries regarding projects or collaboration requests, please use the form below.",
      labelName: "Name",
      labelEmail: "Email",
      labelMessage: "Message",
      send: "Send"
    },
    lalp: {
      heroTitle: "Opening the way for learners\nListening Adventure N5",
      heroSubtitle: "A listening-focused learning app!",
      ctaButton: "Try the Free Demo!",
      introTitle: "Struggling to find time for Japanese study?",
      introText: "Build your N5 listening skills effortlessly in your spare time, all while playing a game.",
      featuresTitle: "Core Features",
      feature1Title: "Listening-Focused!",
      feature1Desc: "Quality listening practice for foreign workers and overseas learners. Compact 5-question stages fit easily into daily spare moments.",
      feature2Title: "Game + Japanese Learning!",
      feature2Desc: "Learn through a story-driven game that breaks the wall of 'language learning takes time.'",
      feature3Title: "Supervised by Prof. Isono!",
      feature3Desc: "Not just casual gaming — supervised by Prof. Isono, with practical content aimed at passing the JLPT, J.TEST, NAT-TEST, JPT, and more.",
      creditTitle: "Developer & Supervisor",
      devRole: "Japanese Teacher / EdTech Creator",
      devName: "Developer: N. Fukaya",
      supRole: "Prof. & Dean, Faculty of International Studies, NUCB\nPh.D. in Japanese Language Education",
      supName: "Supervisor: Hideharu Isono",
      releaseDate: "Scheduled Release: February 2027",
      bottomCtaTitle: "Ready for your listening adventure?",
      demo_play:"▼ Scan to Play Demo! ▼",
      flyer_src: "/la_flyer_en.png",
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
          tag: "Language / Game",
          desc: "Live2Dを活用した、日本ポップカルチャー愛好家のための語彙学習ゲーム。ネットスラングやVTuber文化を通じて、新しい学習体験を提供します。"
        },
        {
          tag: "Utility / Analysis",
          desc: "トレード時の思考プロセスとメンタルを可視化する分析ツール。自らの経験に基づき、トレーダーの成長をサポートします。"
        },
        {
          tag: "Utility / Streaming",
          desc: "配信事故を未然に防ぐストリーマー専用ツール。煩雑な配信前の設定確認を可視化し、チェック作業を自動化します。"
        },
        {
          tag: "Utility / Teaching",
          desc: "AIによる教案作成支援ソフト。教師スキルの属人化を排除し、学習者に質の高い授業を提供します。"
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
      description: "個人でアプリを開発する傍ら、日本語教師として教壇に立っています。\n「ListeningAdventure」をスマホアプリとして、「SlanGame（仮）」をSteamにて配信中。",
      specialty: "技術スタック: React, Unity, Tailwind CSS, Firebase"
    },
    guidelines: {
      title: "動画投稿ガイドライン",
      introTitle: "はじめに",
      introP1: "EasyJ Studioが開発・配信するゲーム作品のプレイ動画（実況、解説、紹介、および切り抜き動画を含む）の投稿および配信については、個人・法人を問わず、以下のガイドラインに従うことで事前の連絡なく行っていただくことが可能です。",
      introP2: "開発の継続と作品の認知拡大のため、動画投稿の際は以下のガイドラインおよびお願いへのご協力をお願いいたします。",
      requestTitle: "投稿時のお願い",
      requestLi1: "動画や配信のタイトルには、対象となる「ゲームの名前」を含めてください。（必須）",
      requestLi2: "動画の概要欄などに「Steamストアページのリンク」を掲載していただけると嬉しいです。(任意）",
      monetizeTitle: "収益化について",
      monetizeP1: "YouTube、Twitch、TikTok等の動画投稿サイトが提供するパートナープログラム（広告収益、スーパーチャット等の投げ銭）を利用した収益化は、全面的に許可いたします。",
      prohibitTitle: "禁止事項",
      prohibitP1: "以下の内容を含む動画の投稿・配信は禁止いたします。",
      prohibitLi1: "特定の個人、団体を誹謗中傷する内容を含めること。",
      prohibitLi2: "宗教活動、政治活動、公序良俗に反する目的での利用。",
      prohibitLi3: "ゲーム内の素材（BGM、画像、音声等）を単体で抽出して公開・配布すること。",
      rightsTitle: "※権利の保持について",
      rightsText: "EasyJ Studioは、本ガイドラインに従わない動画や、公序良俗に反する不適切と判断した動画に対して、法的措置（削除申し立て等）を講じる権利を保持しています。",
      disclaimerTitle: "免責事項",
      disclaimerP1: "ゲームの動画を投稿、配信したことによるいかなるトラブルや損害に対しましても、EasyJ Studioは一切の責任を負いかねます。",
      disclaimerP2: "また、このガイドラインは予告なく更新される場合があります。投稿前に必ず最新のガイドラインをご確認いただきますようお願いいたします。",
      date: "（2026/07/24 更新）"
    },
    contact: {
      title: "お問い合わせ",
      description: "作品に関するお問い合わせや、お仕事のご依頼などは以下のフォームよりご連絡ください。",
      labelName: "お名前",
      labelEmail: "メールアドレス",
      labelMessage: "メッセージ",
      send: "送信する"
    },
    lalp: {
      heroTitle: "学習者の道をひらく\n リスニング アドベンチャー N5",
      heroSubtitle: "リスニング特化型学習アプリ",
      ctaButton: "体験版はコチラ！",
      introTitle: "「日本語学習、時間がなくて大変ではありませんか？」",
      introText: "スキマ時間を使って、ゲーム感覚で無理なくN5レベルの聴解力を身につけましょう。",
      featuresTitle: "3つの特徴",
      feature1Title: "リスニング特化！",
      feature1Desc: "地域の外国人就労者や海外学習者へ、良質なリスニング機会を提供します。1ステージ5問のコンパクト設計で、毎日のスキマ時間に無理なく学習を継続できます。",
      feature2Title: "ゲーム＋日本語学習！",
      feature2Desc: "ストーリーのあるゲームで学習することができるため、「言語学習＝時間を取る」の壁を壊します。",
      feature3Title: "磯野教授監修！",
      feature3Desc: "磯野教授監修のため、ただ楽しくゲーム感覚で行うだけではなくJLPT、J.TESTやNAT-TEST、JPTなどの試験の合格を目指した実践的な学習コンテンツとなっています。",
      creditTitle: "開発・監修",
      devRole: "日本語教師 / EdTechクリエイター",
      devName: "開発：深谷",
      supRole: "名古屋商科大学 国際学部 学部長／教授\n博士（日本語教育学）",
      supName: "監修：磯野 英治",
      releaseDate: "2027年2月リリース予定",
      bottomCtaTitle: "さあ、リスニングの冒険に出かけよう！",
      demo_play:"▼ スマホで体験版をプレイ！ ▼",
      flyer_src: "/la_flyer.png",
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    // ブラウザの言語設定を取得
    const browserLang = navigator.language || navigator.userLanguage;
    // 'ja' で始まっていれば日本語(jp)、それ以外は英語(en)
    return browserLang.startsWith('ja') ? 'jp' : 'en';
  });
  const t = dictionaries[lang];
  const toggleLang = () => setLang((prev) => (prev === 'en' ? 'jp' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);