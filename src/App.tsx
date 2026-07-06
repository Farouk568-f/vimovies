import React from 'react';
import { Monitor, Smartphone, Download, Tv, WifiOff, Film } from 'lucide-react';

const faqs = [
  {
    q: 'Is the ViMovies app free?',
    a: 'Yes. ViMovies is completely free to download and use. You can stream movies, TV series, and anime in HD without a subscription.',
  },
  {
    q: 'Which devices does ViMovies support?',
    a: 'ViMovies currently supports Android TV and Google TV devices. A version for Android phones and tablets is coming soon.',
  },
  {
    q: 'How do I install ViMovies on Android TV?',
    a: 'Download the ViMovies APK from this page, open the file from your Downloads folder, allow installation from unknown sources if prompted, and tap Install. The app will appear on your TV home screen.',
  },
  {
    q: 'Can I watch content offline with ViMovies?',
    a: 'Yes. ViMovies lets you download your favorite movies and episodes so you can watch them offline whenever you want.',
  },
];

const features = [
  {
    icon: Film,
    title: 'Huge HD Library',
    text: 'Stream movies, TV series, and anime in crisp HD quality, all organized in a fast, easy-to-browse catalog.',
  },
  {
    icon: Tv,
    title: 'Built for the Big Screen',
    text: 'A clean interface designed for Android TV and Google TV, fully navigable with your TV remote.',
  },
  {
    icon: WifiOff,
    title: 'Offline Downloads',
    text: 'Save your favorite titles to your device and keep watching even without an internet connection.',
  },
];

const steps = [
  {
    step: 'Step 1',
    title: 'Download the APK',
    text: 'Click the download button above. You will see a message saying "Downloading file," which means the download has started.',
  },
  {
    step: 'Step 2',
    title: 'Install the App',
    text: 'After the download is complete, open the Downloads folder. Tap on the ViMovies APK file and allow installation from unknown sources if prompted.',
  },
  {
    step: 'Step 3',
    title: 'Enjoy Unlimited Streaming',
    text: 'Once installed, start streaming movies, TV series, and anime instantly. Download your favorites for offline viewing!',
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative overflow-hidden font-sans selection:bg-red-600/30">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: 'url("https://i.ibb.co/hR0Nc4wn/image.png")' }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/95 to-black/40" aria-hidden="true"></div>
      <div className="absolute top-0 right-0 bottom-0 w-2/3 bg-gradient-to-l from-red-600/10 via-red-900/5 to-transparent pointer-events-none" aria-hidden="true"></div>

      {/* Header / Navigation */}
      <header className="relative z-20 w-full max-w-5xl mx-auto px-6 pt-8 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3" aria-label="ViMovies home">
          <img
            src="https://i.ibb.co/TxwjvNSN/image.png"
            alt="ViMovies app logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="font-bold text-lg tracking-tight">
            Vi<span className="text-red-600">Movies</span>
          </span>
        </a>
        <nav aria-label="Main navigation" className="hidden sm:flex items-center gap-6 text-sm text-neutral-400">
          <a href="#install" className="hover:text-white transition-colors">How to Install</a>
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </nav>
      </header>

      <main className="z-10 relative flex flex-col items-center justify-center px-6 w-full max-w-5xl mx-auto pb-20">
        {/* Hero */}
        <section className="flex flex-col items-center pt-16" aria-labelledby="hero-heading">
          <div className="mb-10 flex flex-col items-center">
            <div className="relative group flex items-center justify-center w-48 h-48 md:w-60 md:h-60 mb-2 transition-transform duration-300 hover:scale-105">
              <div className="absolute inset-0 bg-red-600/25 blur-3xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-300" aria-hidden="true"></div>
              <img
                src="https://i.ibb.co/TxwjvNSN/image.png"
                alt="ViMovies — free movie and TV streaming app for Android TV"
                width={240}
                height={240}
                fetchPriority="high"
                className="relative z-10 w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = parent.querySelector('.fallback-logo');
                    if (fallback) fallback.classList.remove('hidden');
                  }
                }}
              />
              <div className="fallback-logo hidden relative z-10 flex items-center justify-center w-full h-full text-red-600 text-8xl font-extrabold select-none tracking-tighter drop-shadow-[0_0_20px_rgba(220,38,38,0.7)]">
                V
              </div>
            </div>
          </div>

          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-center mb-6 tracking-tight">
            <span className="text-white">ViMovies</span> <span className="text-red-600">App</span> Download
          </h1>

          <p className="text-lg md:text-2xl text-neutral-400 text-center max-w-2xl mb-12 font-light leading-relaxed">
            Download the ViMovies app to stream and download movies, TV series, and anime for{' '}
            <span className="text-white font-medium">FREE!</span> Enjoy premium entertainment in HD quality on Android TV and Google TV.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 z-20">
            <a
              href="/vimovies-tv.apk"
              download="vimovies-tv.apk"
              title="Download the ViMovies APK for Android TV"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] hover:-translate-y-0.5 select-none"
            >
              <Monitor className="w-6 h-6 mr-3 group-hover:scale-105 transition-transform duration-300" aria-hidden="true" />
              Download APK for TV
            </a>

            <div className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-neutral-400 bg-white/[0.02] border border-white/5 rounded-full select-none cursor-default">
              <Smartphone className="w-6 h-6 mr-3 text-neutral-600" aria-hidden="true" />
              Android App (Coming Soon)
            </div>
          </div>
        </section>

        {/* Install Steps */}
        <section id="install" className="mt-32 w-full max-w-4xl mx-auto scroll-mt-24" aria-labelledby="install-heading">
          <h2 id="install-heading" className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight">
            How to Install ViMovies on <span className="text-red-600">Android TV</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s) => (
              <article
                key={s.step}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center px-4 py-1.5 bg-red-600/20 rounded-full mb-6 border border-red-500/20">
                  <span className="text-red-500 font-bold text-sm tracking-wide">{s.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{s.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-32 w-full max-w-4xl mx-auto scroll-mt-24" aria-labelledby="features-heading">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight">
            Why Choose the <span className="text-red-600">ViMovies</span> App?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <article
                key={f.title}
                className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-white/[0.04] hover:border-red-500/30 transition-all duration-300"
              >
                <f.icon className="w-8 h-8 text-red-500 mb-5" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3 text-white">{f.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{f.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mt-32 w-full max-w-3xl mx-auto scroll-mt-24" aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight">
            Frequently Asked <span className="text-red-600">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-5 hover:border-red-500/30 transition-all duration-300"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between text-white font-semibold text-base md:text-lg">
                  {f.q}
                  <span className="text-red-500 ml-4 transition-transform duration-300 group-open:rotate-45 text-2xl leading-none" aria-hidden="true">+</span>
                </summary>
                <p className="text-neutral-400 text-sm leading-relaxed mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-28 text-center" aria-label="Download ViMovies">
          <a
            href="/vimovies-tv.apk"
            download="vimovies-tv.apk"
            title="Get the free ViMovies APK for Android TV"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-red-600 rounded-full hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)]"
          >
            <Download className="w-6 h-6 mr-3" aria-hidden="true" />
            Get ViMovies for Free
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-10">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} ViMovies. All rights reserved.</p>
          <nav aria-label="Footer navigation" className="flex items-center gap-6">
            <a href="#install" className="hover:text-white transition-colors">Install Guide</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
