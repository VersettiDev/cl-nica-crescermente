import React from 'react';

const ApproachSection: React.FC = () => {
  return (
    <section id="approach" className="py-12 md:py-24 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Jornada Terapêutica</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Um caminho estruturado e transparente, do diagnóstico à superação.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-700">
            <div className="absolute top-0 left-0 h-full bg-primary w-1/4 animate-pulse"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8">
            {/* Step 1 */}
            <div className="relative group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white dark:bg-slate-800 rounded-full border-4 border-slate-50 dark:border-slate-700 flex items-center justify-center relative z-10 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-inner">1</div>
              </div>
              <div className="text-center px-2 md:px-4">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-slate-900 dark:text-white">Anamnese</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Entrevista detalhada para compreender o histórico e as necessidades.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white dark:bg-slate-800 rounded-full border-4 border-slate-50 dark:border-slate-700 flex items-center justify-center relative z-10 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-slate-700 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl">2</div>
              </div>
              <div className="text-center px-2 md:px-4">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-slate-900 dark:text-white">Avaliação</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Aplicação de testes padronizados e observação clínica lúdica.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white dark:bg-slate-800 rounded-full border-4 border-slate-50 dark:border-slate-700 flex items-center justify-center relative z-10 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-slate-700 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl">3</div>
              </div>
              <div className="text-center px-2 md:px-4">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-slate-900 dark:text-white">Devolutiva</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Entrega do relatório técnico e plano de intervenção personalizado.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative group">
              <div className="w-20 h-20 md:w-24 md:h-24 mx-auto bg-white dark:bg-slate-800 rounded-full border-4 border-slate-50 dark:border-slate-700 flex items-center justify-center relative z-10 mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-slate-700 border-2 border-primary rounded-full flex items-center justify-center text-primary font-bold text-lg md:text-xl">4</div>
              </div>
              <div className="text-center px-2 md:px-4">
                <h3 className="font-bold text-lg md:text-xl mb-2 text-slate-900 dark:text-white">Intervenção</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  Sessões regulares para estimulação e desenvolvimento de habilidades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;