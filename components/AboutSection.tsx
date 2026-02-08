import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4 pt-8 md:pt-12">
                <div className="relative group">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwiqqEBzsS2yR6HZNVrUWGPzjfTx6mcbtpprFdy9t7c6ZVKPLUEa2Csqk4h1THXzTX_zj6m1g-IubGEkP6Sec0YhWCZuP8NvSI9yBpmpeWr9YFWhqyqHpOxG-GlaEt_cqPhb66iG9WXpeaqXev3O8Iyt4WvHhrnYCGbS3g0TvGtuUvOCMQTTUg8WSTcZbaCdUda25ZQlTjtMW81zeSAigARkCCUWz5gZszgbZSY4il2knTlYFXOecdBNKl8ZsS6_n4PQ60dSVT-bw0" alt="Criança com brinquedos educativos" className="rounded-2xl shadow-lg w-full h-32 md:h-48 object-cover transform transition-transform group-hover:scale-105" />
                </div>
                <div className="relative group">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpe1X5lKhoHMRs_9FaZq_YYo4fWJXDu2tfUPMNj1n3XtbZ7sSM0v6uxSy4G6rCqRJTtQqxq6mEl6Jsn5c79VuPCrEIo7jFIwaOuFASc93I_LtDKCYC_FkSi8HkTU83ym5FQN_AIAo3l9JhqwUI6ci6tz_14q8BYv7P65lQLhq8LHVOYzAyG9r5QsPfPImfFOVvOlHpoh5-ciSxY9v4tpCnRMURj0lrR1fBg4SZXHemW9WA9oe_S00HD_9y8mbV6E3OhZl1cQbpqOy8" alt="Menina lendo concentrada" className="rounded-2xl shadow-lg w-full h-40 md:h-64 object-cover transform transition-transform group-hover:scale-105" />
                </div>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="bg-primary p-4 md:p-6 rounded-2xl shadow-xl text-white flex flex-col justify-center items-center text-center h-32 md:h-48 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <span className="material-symbols-outlined text-3xl md:text-5xl mb-2 md:mb-3">favorite</span>
                  <span className="font-bold text-sm md:text-lg leading-tight">Abordagem<br />Humanizada</span>
                </div>
                <div className="relative group">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6Eq0yfvnEqlay0miYpL_RbqjWd6NIZePag5FPoDmyKcEa45uQF40kFQv2rb0NRi744uqSx8ZqBIdQTxyYCbS9nOpN3QUf6_QUzoevHjGltzwz7JiZQ4PIvfrIYuMquljW6SfHqIo4J12PB8Z9fh4CopTnuQ8fLu0G65g2cQbL8a4s7hmWS8JZq8LmBkapSb_WqO3tZy6llZo7F1pvDMjbwNEVK5LbGY7A6Ja5Xl_9UkFtGK-kCp-jUyljmNts-oSr7sZKEfwgmfQL" alt="Sessão terapêutica" className="rounded-2xl shadow-lg w-full h-40 md:h-64 object-cover transform transition-transform group-hover:scale-105" />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Quem Somos</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
                Dedicada a Nutrir o Crescimento Cognitivo
              </h2>
            </div>

            <div className="prose prose-base md:prose-lg dark:prose-invert text-slate-600 dark:text-slate-400">
              <p>
                Olá, sou Aline Sena, pedagoga e neuropsicopedagoga clínica, apaixonada por desvendar como cada cérebro aprende. Minha missão é ajudar indivíduos que não se encaixam nos métodos tradicionais a descobrirem seu próprio caminho para o conhecimento.
              </p>
              <p>
                Acredito no potencial ilimitado de cada ser humano. Minha metodologia integra neurociência, pedagogia e psicologia para derrubar barreiras e construir futuros brilhantes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full text-green-600 shrink-0">
                  <span className="material-symbols-outlined text-xl">check</span>
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Pedagoga</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full text-green-600 shrink-0">
                  <span className="material-symbols-outlined text-xl">check</span>
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Pós-graduação em Neuropsicopedagogia</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full text-green-600 shrink-0">
                  <span className="material-symbols-outlined text-xl">check</span>
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Especialista em Alfabetização</span>
              </div>
              <div className="flex items-center gap-3 bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                <div className="bg-green-100 dark:bg-green-900/30 p-1.5 rounded-full text-green-600 shrink-0">
                  <span className="material-symbols-outlined text-xl">check</span>
                </div>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Docência</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
