const Footer = () => (
  <footer className="py-12 px-8 border-t bg-white text-center">
    <div className="max-w-6xl mx-auto flex flex-col items-center">
      
      {/* ストア ＆ SNSリンク (1行にまとめる) */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 mb-8 text-sm font-bold text-slate-600">
        <a href="#" className="hover:text-black transition-colors">Steam</a>
        <a href="#" className="hover:text-emerald-600 transition-colors">Google Play</a>
        <a href="#" className="hover:text-blue-500 transition-colors">App Store</a>
        
        {/* X (Twitter) アイコン */}
        <a href="#" className="hover:text-black transition-colors flex items-center" aria-label="X (Twitter)">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>

        {/* YouTube アイコン */}
        <a href="#" className="hover:text-red-600 transition-colors flex items-center" aria-label="YouTube">
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
        </a>
      </div>

      <p className="text-slate-400 text-sm">
        &copy; 2026 EasyJ Studio. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;