import React, { useEffect, useState } from 'react';

/**
 * Header: Application navigation and search interface.
 * Features a sticky glassmorphic design and real-time search input.
 */
const Header = ({ searchQuery, setSearchQuery }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl' : 'bg-black/30 backdrop-blur-md py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        {/* Brand Section */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-apple-white flex items-center justify-center overflow-hidden">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-black fill-current">
              <path d="M17.05,20.28c-.96.78-2.1,1.24-3.38,1.24a5.22,5.22,0,0,1-2.92-.88,5.16,5.16,0,0,0-2.88-.88c-1.28,0-2.42.46-3.38,1.24a.53.53,0,0,1-.83-.41,9.08,9.08,0,0,1,1.52-5,10.27,10.27,0,0,1,4.4-4,1,1,0,0,0,.52-.88V6.63a1,1,0,0,0-.63-.93,4,4,0,0,1-1.72-1.39A1.73,1.73,0,1,1,9.6,2.5,4,4,0,0,1,11,4.22a1,1,0,0,0,.93.63h.14a1,1,0,0,0,.93-.63A4,4,0,0,1,14.4,2.5a1.73,1.73,0,1,1,1.6,1.81,4,4,0,0,1-1.72,1.39,1,1,0,0,0-.63.93V9.45a1,1,0,0,0,.52.88,10.27,10.27,0,0,1,4.4,4,9.08,9.08,0,0,1,1.52,5A.53.53,0,0,1,17.05,20.28Z" />
            </svg>
          </div>
          <h1 className="text-lg font-semibold tracking-tight gradient-text">
            Gallery Pro
          </h1>
        </div>

        {/* Search Input Section */}
        <div className="relative flex-grow max-w-sm group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-apple-gray group-focus-within:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search curator..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm transition-all focus:bg-white/10 focus:border-white/20 outline-none placeholder:text-apple-gray text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
