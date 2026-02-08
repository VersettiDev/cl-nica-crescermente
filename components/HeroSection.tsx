import React from 'react';

const HeroSection: React.FC = () => {
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
  };

  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[20rem] md:w-[45rem] h-[20rem] md:h-[45rem] bg-gradient-to-br from-primary/10 to-blue-200/20 rounded-full blur-[60px] md:blur-[100px] dark:opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 md:w-96 h-64 md:h-96 bg-purple-200/20 rounded-full blur-[60px] md:blur-[80px] dark:opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800/80 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-slate-200 dark:border-slate-700 w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
              </span>
              <span className="text-xs font-bold uppercase tracking-wide text-slate-600 dark:text-slate-300">
                Novos Horários Disponíveis
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] text-slate-900 dark:text-white">
              Desenvolvendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 inline-block pb-1 md:pb-2">Potenciais</span>, Transformando <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 inline-block pb-1 md:pb-2">Vidas</span>
            </h1>

            <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Clínica especializada em neuropsicopedagogia. Transformamos dificuldades em conquistas através de estratégias personalizadas baseadas em ciência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer text-center">
                Agendar Avaliação
                <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <a href="#approach" onClick={(e) => scrollToSection(e, 'approach')} className="w-full sm:w-auto bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center gap-2 group shadow-sm hover:shadow-md cursor-pointer text-center">
                <span className="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">play_circle</span>
                Conheça o Método
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 pt-8 text-sm font-semibold text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 mt-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary fill-1">verified</span>
                <span>Especialistas Certificados</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary fill-1">science</span>
                <span>Baseado em Evidências</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] flex justify-center items-center order-1 lg:order-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-blue-400/20 rounded-full blur-3xl opacity-60"></div>
            
            <div className="relative w-full max-w-[280px] sm:max-w-md aspect-[3/4] z-10">
              <div className="absolute -inset-4 bg-white/40 dark:bg-slate-800/40 rounded-t-[12rem] rounded-b-[3rem] backdrop-blur-sm border border-white/20 dark:border-slate-700/20"></div>
              
              <div className="relative h-full w-full rounded-t-[11rem] rounded-b-[2.5rem] p-2 bg-white dark:bg-slate-800 shadow-2xl border border-slate-100 dark:border-slate-700">
                <div className="relative h-full w-full rounded-t-[10.5rem] rounded-b-[2rem] overflow-hidden bg-slate-100">
                  <img 
                    src="https://imgur.com/F1wvb10.png" 
                    alt="Especialista neuropsicopedagoga" 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent pointer-events-none mix-blend-overlay"></div>
                </div>
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-6 -right-4 sm:bottom-10 sm:-left-6 bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 sm:gap-4 z-20 animate-float min-w-[200px] sm:min-w-[240px]">
                <div className="relative shrink-0">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl sm:text-3xl">psychology</span>
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 bg-green-500 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-800">
                    <span className="material-symbols-outlined text-[8px] sm:text-[10px] text-white font-bold">check</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white leading-tight">Aline Sena</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400">Neuropsicopedagoga</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
