import React, { useState } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Compensação para a Navbar fixa
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-2">
              <img 
                src="https://i.imgur.com/ZZtiaQm.png" 
                alt="Logo CrescerMente" 
                className="w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="font-display font-bold text-2xl block text-slate-900 dark:text-white leading-none tracking-tight">
                  CrescerMente
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                  Clínica
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors text-slate-600 dark:text-slate-300">Início</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors text-slate-600 dark:text-slate-300">Sobre</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors text-slate-600 dark:text-slate-300">Serviços</a>
            <a href="#approach" onClick={(e) => scrollToSection(e, 'approach')} className="px-5 py-2.5 text-sm font-semibold rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors text-slate-600 dark:text-slate-300">Processo</a>
            
            <div className="pl-6 flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 ml-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <span className="material-symbols-outlined text-yellow-300">light_mode</span>
                ) : (
                  <span className="material-symbols-outlined">dark_mode</span>
                )}
              </button>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 px-7 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-sm flex items-center gap-2 cursor-pointer">
                Agendar Consulta
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isDarkMode ? (
                <span className="material-symbols-outlined text-yellow-300">light_mode</span>
              ) : (
                <span className="material-symbols-outlined dark:text-slate-300">dark_mode</span>
              )}
            </button>
            <button 
              className="text-slate-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-3xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800">Início</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800">Sobre</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800">Serviços</a>
            <a href="#approach" onClick={(e) => scrollToSection(e, 'approach')} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800">Processo</a>
            <div className="mt-4 px-3">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="w-full bg-primary text-white px-5 py-3 rounded-xl font-bold shadow-md block text-center cursor-pointer">
                Agendar Consulta
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;