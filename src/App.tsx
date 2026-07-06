import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans selection:bg-red-600/30">
      
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://i.ibb.co/hR0Nc4wn/image.png")' }}
      ></div>
      
      {/* Black transparent gradient, sweeping from center to the right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/95 to-black/40"></div>
      
      {/* Subtle Red glow on the right side */}
      <div className="absolute top-0 right-0 bottom-0 w-2/3 bg-gradient-to-l from-red-600/10 via-red-900/5 to-transparent pointer-events-none"></div>

      <div className="z-10 flex flex-col items-center justify-center px-6 w-full max-w-5xl mx-auto py-20 min-h-screen">
        
        {/* Vetrix Logo - Scaled Up and Centered with Glow */}
        <div className="mb-10 flex flex-col items-center">
          <div className="relative group flex items-center justify-center w-48 h-48 md:w-60 md:h-60 mb-2 transition-transform duration-300 hover:scale-105">
            {/* Soft background glow behind the logo */}
            <div className="absolute inset-0 bg-red-600/25 blur-3xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-300"></div>
            <img 
              src="https://i.ibb.co/TxwjvNSN/image.png" 
              alt="Vetrix Logo" 
              className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // If the user's specific logo is not configured or fails to load, gracefully show an elegant styled fallback
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const fallback = parent.querySelector('.fallback-logo');
                  if (fallback) fallback.classList.remove('hidden');
                }
              }}
            />
            {/* Elegant vector/text fallback in case of missing source */}
            <div className="fallback-logo hidden relative z-10 flex items-center justify-center w-full h-full text-red-600 text-8xl font-extrabold select-none tracking-tighter drop-shadow-[0_0_20px_rgba(220,38,38,0.7)]">
              V
            </div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight">
          <span className="text-white">ViMovies </span> <span className="text-red-600">App</span> Download
        </h1>
        
        <p className="text-lg md:text-2xl text-neutral-400 text-center max-w-2xl mb-12 font-light leading-relaxed">
          Download ViMovies App to stream and download movies, TV series, and anime for <span className="text-white font-medium">FREE!</span> Enjoy premium entertainment in HD quality.
        </p>

        {/* Custom Actions Container */}
        <div className="flex flex-col sm:flex-row items-center gap-6 z-20">
          
          {/* Active: Download APK for TV (Direct Local Download) */}
          <a 
            href="/vimovies-tv.apk"
            download="vimovies-tv.apk"
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 select-none"
          >
            <Monitor className="w-6 h-6 mr-3 group-hover:scale-105 transition-transform duration-300" />
            Download APK for TV
          </a>

          {/* Download for Android (Clean Secondary Button - Coming Soon) */}
          <div 
            className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-neutral-400 bg-white/[0.02] border border-white/5 rounded-full select-none cursor-default"
          >
            <Smartphone className="w-6 h-6 mr-3 text-neutral-600" />
            Android App (Coming Soon)
          </div>

        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32 w-full max-w-4xl mx-auto">
          
          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-red-600/20 rounded-full mb-6 border border-red-500/20">
              <span className="text-red-500 font-bold text-sm tracking-wide">Step 1</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Download APK</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Click the download button above. You will see a message saying "Downloading file," which means the download has started.
            </p>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-red-600/20 rounded-full mb-6 border border-red-500/20">
              <span className="text-red-500 font-bold text-sm tracking-wide">Step 2</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Install App</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              After the download is complete, open the Downloads folder. Tap on the Vetrix APK file to start the installation.
            </p>
          </div>

          <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-300">
            <div className="inline-flex items-center justify-center px-4 py-1.5 bg-red-600/20 rounded-full mb-6 border border-red-500/20">
              <span className="text-red-500 font-bold text-sm tracking-wide">Step 3</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Enjoy Unlimited</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Once installed, start streaming movies, TV series, and live sports. Download your favorites for offline viewing!
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
