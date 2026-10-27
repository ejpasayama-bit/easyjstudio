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
          desc: "A story-driven listening app for N5 level. Master listening comprehension through fun, academically-backed methods."
        },
        {
          tag: "Language / Game",
          desc: "A Live2D-powered vocabulary game for Japanese pop culture enthusiasts. Discover a new way to learn through internet slang and VTuber culture."
        },
        {
          tag: "Utility / Teaching",
          desc: "An AI-powered lesson planning software. It eliminates the reliance on individual teaching skills to deliver high-quality lessons to learners. [Now Developing]"
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
      description: "While developing apps independently, I also teach as a Japanese language teacher. Currently distributing 'Listening Adventure N5' as a mobile app and 'My Oshi Uses Too Much Slang!' on Steam.",
      specialty: "Tech Stack: React, Unity, Tailwind CSS, Firebase, Supabase"
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
      heroCefr: "(CEFR A1-A2 Level)",
      ctaButton: "Try the Free Demo!",
      introTitle: "Struggling to find time for Japanese study?",
      introText: "Build your N5 (CEFR A1-A2 Level) listening skills effortlessly in your spare time, all while playing a game.",
      featuresTitle: "Core Features",
      feature1Title: "Listening-Focused!",
      feature1Desc: "Quality listening practice for foreign workers and overseas learners. Compact 5-question stages fit easily into daily spare moments.",
      feature2Title: "Game + Japanese Learning!",
      feature2Desc: "Learn through a story-driven game that breaks the wall of 'language learning takes time.'",
      feature3Title: "Supervised by Prof. Isono!",
      feature3Desc: "Not just casual gaming — supervised by Prof. Isono, with practical content aimed at passing the JLPT, PJC, J.TEST, NAT-TEST, JPT, and more.",
      creditTitle: "Developer & Supervisor",
      devRole: "Japanese Teacher / EdTech Creator",
      devName: "Developer: N. Fukaya",
      supRole: "Prof. & Dean, Faculty of International Studies, NUCB\nPh.D. in Japanese Language Education",
      supName: "Supervisor: Hideharu Isono",
      releaseDate: "Scheduled Release: February 2027",
      bottomCtaTitle: "Ready for your listening adventure?",
      demo_play:"▼ Scan to Play Demo! ▼",
      flyer_src: "/la_flyer_en.webp",
      b2bTitle: "For Educational Institutions & Supervising Organizations",
      b2bDesc: "We also offer a bulk introduction version (fully offline version) for B to B use.\nPlease feel free to contact us below for detailed specifications and consultation on introduction costs.",
      b2bBtn: "Contact for Corporate Use",
    },
    myoshi:{
      section1: {
        subtitle: "A New Sensation Chat Adventure",
        title: "Will Your Oshi \"Pick Up\" Your Comment?",
        desc1_1: "She claims to be \"seiso\" (pure), but her emotions always slip out.",
        desc1_2: "Dive into the stream of a fully energetic, straightforward, and slightly clumsy newbie VTuber as a listener!",
        desc2_1: "Choose 4 slangs from the scrolling chat and throw in the perfect comment. ",
        desc2_2: "With just one comment from you, her tension might skyrocket, or she could get seriously depressed and instantly BAN you!?"
      },
      section2: {
        subtitle: "Clumsy and Cute",
        title: "Supposed to be \"Seiso\", but she can't hide it",
        desc1_1: "She claims to be a pure stream in the idol world.",
        desc1_2: "But when faced with an unreasonable, punishing game, she clicks her tongue, bangs her desk, and reveals her true self...",
        desc2_1: "She tries to cover it up, fails, gets roasted by listeners, and tries to cover it up again.",
        desc2_2: "That repeating cycle is the best part of this game."
      },
      section3: {
        subtitle: "In-Game System: SLANGPOOL",
        title: "A \"Living\" Japanese Slang Dictionary",
        desc1: "This game features \"SlangPool\", a dictionary system where you can learn \"living\" slangs actually used on the Japanese internet and in daily conversation.",
        desc2_1: "Developed by an active Japanese language teacher. ",
        desc2_2: "SlangPool doesn't just list meanings, but also explains the context of \"when to use it\". It supports 4 languages (Japanese, English, Simplified Chinese, Traditional Chinese), all with examples and audio.",
        desc3: "The demo includes 41 words. The number of recorded words in the full version will increase depending on the support of the Kickstarter campaign!"
      },
      staff: {
        headline_1: "Gorgeous Staff ",
        headline_2: "Illustrating ",
        headline_3: "Oshi ",
        headline_4: "and ",
        headline_5: "Slang",
        role1: "Character Design",
        name1: "Mogu Zaemon",
        role2: "Scenario",
        name2: "Seichi",
        role3: "Voice Actress",
        name3: "Aizawa Hina",
        role4: "Title Music",
        name4: "KAIRU NAGAI"
      },
      product: {
        title: "Product Information",
        lblTitle: "Title",
        valTitle: "My Oshi Uses Too Much Slang!",
        lblGenre: "Genre",
        valGenre: "Japanese Slang Learning Chat ADV",
        lblPlayers: "Players",
        valPlayers: "1 Player",
        lblRelease: "Release Date",
        valRelease: "Scheduled for August 2027",
        valReleaseNote: "(Demo available now)",
        lblPlatform: "Platform",
        valPlatform: "PC (Steam)",
        lblPrice: "Price",
        valPrice: "¥2,000 (TBD)",
        lblLang: "Supported Languages",
        valLang: "Japanese, English, Simplified Chinese, Traditional Chinese",
        valLangNote: "(Voices in Japanese only)",
        lblDev: "Developer/Publisher",
        valDev: "Fukaya (EasyJ Studio)"
      },
      media: {
        title: "For Streamers & Media",
        guidelineTitle: "Streaming & Video Posting Guidelines",
        rule1: "Streaming and monetization are permitted <strong class=\"text-white\">without prior contact</strong>.",
        rule2: "Including the <strong class=\"text-white\">game title</strong> in your stream title is a mandatory requirement.",
        rule3: "Including a link to the Steam Store page in the description is \"optional\", but highly appreciated.",
        ruleNote: "* The above rules apply to both the demo and full version. Rules are subject to change.",
        ruleLink: "Click here for details.",
        presskitTitle: "Press Kit",
        presskitDesc: "We have prepared a folder with high-quality logos, screenshots, and key visuals for media coverage and introductions. Feel free to use them for writing articles or creating thumbnails.",
        presskitBtn: "Download Press Kit (Google Drive)",
        contactTitle: "Contact Us",
        contactDesc: "For other individual consultations or interview requests, please feel free to contact us below.",
        contactFormBtn: "Contact Form"
      }
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
          desc: "JLPT N5(日本語教育の参照枠A1-A2相当)レベルを対象とした、ストーリー主導のリスニング学習アプリ。学術的根拠に基づき、楽しみながら「聴解」をマスターします。"
        },
        {
          tag: "Language / Game",
          desc: "Live2Dを活用した、日本ポップカルチャー愛好家のための語彙学習ゲーム。ネットスラングやVTuber文化を通じて、新しい学習体験を提供します。"
        },
        {
          tag: "Utility / Teaching",
          desc: "AIによる教案作成支援ソフト。教師スキルの属人化を排除し、学習者に質の高い授業を提供します。(現在開発中)"
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
      description: "個人でアプリを開発する傍ら、日本語教師として教壇に立っています。\n「リスニングアドベンチャーN5」をスマホアプリとして、「My Oshi Uses Too Much Slang!」をSteamにて配信中。",
      specialty: "技術スタック: React, Unity, Tailwind CSS, Firebase, Supabase"
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
      heroCefr: "（日本語教育の参照枠A1-A2相当）",
      ctaButton: "体験版はコチラ！",
      introTitle: "「日本語学習、時間がなくて大変ではありませんか？」",
      introText: "スキマ時間を使って、ゲーム感覚で無理なくN5(日本語教育の参照枠A1-A2相当）レベルの聴解力を身につけましょう。",
      featuresTitle: "3つの特徴",
      feature1Title: "リスニング特化！",
      feature1Desc: "地域の外国人就労者や海外学習者へ、良質なリスニング機会を提供します。1ステージ5問のコンパクト設計で、毎日のスキマ時間に無理なく学習を継続できます。",
      feature2Title: "ゲーム＋日本語学習！",
      feature2Desc: "ストーリーのあるゲームで学習することができるため、「言語学習＝時間を取る」の壁を壊します。",
      feature3Title: "磯野教授監修！",
      feature3Desc: "磯野教授監修のため、ただ楽しくゲーム感覚で行うだけではなくJLPTやPJC、J.TEST、NAT-TEST、JPTなどの試験の合格を目指した実践的な学習コンテンツとなっています。",
      creditTitle: "開発・監修",
      devRole: "登録日本語教員 / EdTechクリエイター",
      devName: "開発：深谷",
      supRole: "名古屋商科大学 国際学部 学部長／教授\n博士（日本語教育学）",
      supName: "監修：磯野 英治",
      releaseDate: "2027年2月リリース予定",
      bottomCtaTitle: "さあ、リスニングの冒険に出かけよう！",
      demo_play:"▼ スマホで体験版をプレイ！ ▼",
      flyer_src: "/la_flyer_jp2.webp",
      b2bTitle: "教育機関・監理団体様へ",
      b2bDesc: "B to Bとしての一括導入版（完全オフライン版）もご用意可能です。\n詳細な仕様や導入費用に関するご相談は、以下よりお気軽にお問い合わせください。",
      b2bBtn: "法人導入のお問い合わせ",
    },
    myoshi:{
      section1: {
        subtitle: "新感覚チャットアドベンチャー",
        title: "そのコメント、推しに\"拾われる\"か？",
        desc1_1: "\"清楚\"を名乗るわりに、感情がダダ漏れ。",
        desc1_2: "全力で、まっすぐで、ちょっとポンコツな新人VTuberの配信に、リスナーとして飛び込め！",
        desc2_1: "流れるチャットから4つのスラングを選び、的確なコメントを投げ込む——。",
        desc2_2: "あなたのコメント1つで、彼女のテンションは爆上がりしたり、逆にガチ凹みして即BAN対象になったり！？"
      },
      section2: {
        subtitle: "ポンコツかわいい",
        title: "\"清楚\"のはずが、隠しきれない",
        desc1_1: "アイドル界の清流を名乗る彼女。",
        desc1_2: "でも理不尽な苦行ゲームを前にすると、つい舌打ち、つい台パン、つい素の一面が……。",
        desc2_1: "取り繕っては失敗し、リスナーに突っ込まれ、また取り繕う。",
        desc2_2: "その繰り返しが、このゲームのいちばんの見どころ。"
      },
      section3: {
        subtitle: "ゲーム内システム：SLANGPOOL",
        title: "\"生きた\"日本語スラング辞典",
        desc1: "本作には、日本のインターネットや日常会話で実際に使われている\"生きた\"スラングを学べる辞書システム「SlangPool」を搭載しています。",
        desc2_1: "開発者は現役の日本語教師。",
        desc2_2: "SlangPoolは単語の意味を並べるだけでなく、「どのような場面で使えるのか」という文脈まで解説します。日本語・英語・簡体字・繁体字の4言語に対応し、いずれも用例・音声つき。",
        desc3: "体験版では41語を収録。製品版の収録語数は、Kickstarterキャンペーンの支援状況に応じて増えていきます！"
      },
      staff: {
        headline_1: "豪華スタッフ",
        headline_2: "が描く",
        headline_3: "推し",
        headline_4: "と",
        headline_5: "スラング",
        role1: "ママ＆パパ",
        name1: "Mogu Zaemon",
        role2: "シナリオ",
        name2: "セーイチ",
        role3: "声優",
        name3: "愛沢日南",
        role4: "タイトル楽曲",
        name4: "永井カイル"
      },
      product: {
        title: "製品情報",
        lblTitle: "ゲームタイトル",
        valTitle: "My Oshi Uses Too Much Slang! ～推しがスラングをめっちゃ使うんだが！～",
        lblGenre: "ジャンル",
        valGenre: "日本語スラング学習チャットADV",
        lblPlayers: "プレイ人数",
        valPlayers: "1人",
        lblRelease: "リリース時期",
        valRelease: "2027年8月予定",
        valReleaseNote: "（体験版は公開中）",
        lblPlatform: "対応機種",
        valPlatform: "PC（Steam）",
        lblPrice: "価格",
        valPrice: "2,000円（予定）",
        lblLang: "対応言語",
        valLang: "日本語、英語、簡体字、繁体字",
        valLangNote: "（ボイスは日本語のみ）",
        lblDev: "開発・販売",
        valDev: "Fukaya（EasyJ Studio）"
      },
      media: {
        title: "配信者・メディアの方へ",
        guidelineTitle: "配信・動画投稿ガイドライン",
        rule1: "<strong class=\"text-white\">事前の連絡なし</strong>で、配信および収益化が可能です。",
        rule2: "配信タイトルに<strong class=\"text-white\">ゲーム名を含めること</strong>が必須条件です。",
        rule3: "概要欄へのSteamストアページのリンク掲載は「任意」ですが、載せていただけると大変励みになります。",
        ruleNote: "※体験版・製品版ともに上記のルールが適用されます。ルールは変更される場合がございます。",
        ruleLink: "詳細はこちらをご確認ください。",
        presskitTitle: "プレスキット (Press Kit)",
        presskitDesc: "メディア掲載・ご紹介用の高画質ロゴ、スクリーンショット、キービジュアル等をまとめたフォルダをご用意しています。記事作成やサムネイル制作に自由にご利用ください。",
        presskitBtn: "プレスキットをダウンロード (Google Drive)",
        contactTitle: "お問い合わせ",
        contactDesc: "その他、個別のご相談や取材のご依頼は、以下よりお気軽にご連絡ください。",
        contactFormBtn: "お問い合わせフォーム"
      }
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