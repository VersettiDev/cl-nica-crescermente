import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-slate-50 dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-slate-900 dark:text-white">
          Histórias de Transformação
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          
          {/* Review 1 */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined text-6xl md:text-8xl text-primary/10 absolute top-6 right-8 rotate-180">format_quote</span>
            <div className="flex items-center gap-1 text-yellow-400 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined text-xl fill-current">star</span>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 italic text-base md:text-lg mb-8 leading-relaxed relative z-10">
              "A evolução na leitura do meu filho foi notável em poucos meses. O que antes era motivo de choro, hoje é prazer. Agradeço imensamente pelo carinho e profissionalismo."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-primary rounded-full flex items-center justify-center font-bold text-white text-lg shrink-0">SJ</div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Sarah Jenkins</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Mãe de paciente (8 anos)</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300 relative border border-slate-100 dark:border-slate-700">
            <span className="material-symbols-outlined text-6xl md:text-8xl text-primary/10 absolute top-6 right-8 rotate-180">format_quote</span>
            <div className="flex items-center gap-1 text-yellow-400 mb-6">
               {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="material-symbols-outlined text-xl fill-current">star</span>
              ))}
            </div>
            <p className="text-slate-600 dark:text-slate-300 italic text-base md:text-lg mb-8 leading-relaxed relative z-10">
              "Finalmente entendemos como nossa filha aprende. O relatório foi um divisor de águas para nós e para a escola. Recomendo de olhos fechados!"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center font-bold text-white text-lg shrink-0">MR</div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white">Michael Ross</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">Pai de paciente (12 anos)</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;