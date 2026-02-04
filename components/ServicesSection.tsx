import React, { useState, useEffect } from 'react';

interface ServiceData {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  colorTheme: 'primary' | 'blue' | 'purple';
}

const servicesData: ServiceData[] = [
  {
    id: 'learning',
    title: 'Dificuldades de Aprendizagem',
    icon: 'school',
    shortDescription: 'Intervenções focadas em Dislexia, Discalculia e outros desafios, criando pontes para o sucesso escolar.',
    colorTheme: 'primary',
    fullDescription: 'Nossa abordagem para dificuldades de aprendizagem vai além do reforço escolar. Realizamos uma investigação profunda para entender como o cérebro do paciente processa informações. Utilizamos métodos multissensoriais que conectam visão, audição e movimento para consolidar o aprendizado de forma definitiva e prazerosa.',
    benefits: [
      'Avaliação das rotas de leitura',
      'Estratégias para Dislexia',
      'Intervenção em Discalculia',
      'Adaptação de material escolar',
      'Rotina de estudos eficiente',
      'Resgate da autoestima'
    ]
  },
  {
    id: 'cognitive',
    title: 'Reabilitação Cognitiva',
    icon: 'psychology_alt',
    shortDescription: 'Estimulação da memória, atenção (TDAH) e funções executivas para otimizar o processamento cerebral.',
    colorTheme: 'blue',
    fullDescription: 'A reabilitação cognitiva é um treino cerebral estruturado. Focamos na neuroplasticidade — a capacidade do cérebro de criar novas conexões. Através de jogos, softwares especializados e exercícios práticos, fortalecemos as "ferramentas mentais" necessárias para a autonomia no dia a dia.',
    benefits: [
      'Foco e Atenção (TDAH)',
      'Controle Inibitório',
      'Memória de Trabalho',
      'Funções Executivas',
      'Planejamento de Tarefas',
      'Raciocínio Lógico'
    ]
  },
  {
    id: 'family',
    title: 'Orientação Familiar',
    icon: 'family_restroom',
    shortDescription: 'Suporte e estratégias para pais, fortalecendo o ambiente doméstico como parte essencial do tratamento.',
    colorTheme: 'purple',
    fullDescription: 'A família é o alicerce do desenvolvimento. Nosso trabalho de orientação visa instrumentalizar pais e cuidadores com técnicas de manejo comportamental e acolhimento emocional, transformando o lar em um ambiente estimulador, seguro e com menos conflitos.',
    benefits: [
      'Psicoeducação Parental',
      'Manejo de Comportamento',
      'Rotina Familiar Saudável',
      'Comunicação Não-Violenta',
      'Mediação de Conflitos',
      'Acolhimento Emocional'
    ]
  }
];

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedService]);

  const getThemeClasses = (theme: 'primary' | 'blue' | 'purple') => {
    switch (theme) {
      case 'primary':
        return {
          bg: 'bg-primary',
          bgLight: 'bg-teal-50 dark:bg-teal-900/20',
          bgHover: 'group-hover:bg-primary/10',
          text: 'text-primary',
          textDark: 'text-teal-700 dark:text-teal-300',
          textGroupHover: 'group-hover:text-primary',
          borderHover: 'hover:border-primary/30',
          iconBgHover: 'group-hover:bg-primary',
          gradient: 'from-primary to-teal-600',
          gradientLight: 'from-teal-50 to-teal-100 dark:from-teal-900/40 dark:to-slate-800',
          shadow: 'shadow-primary/25',
          cardBorder: 'border-teal-100 dark:border-teal-900/50'
        };
      case 'blue':
        return {
          bg: 'bg-blue-500',
          bgLight: 'bg-blue-50 dark:bg-blue-900/20',
          bgHover: 'group-hover:bg-blue-500/10',
          text: 'text-blue-500',
          textDark: 'text-blue-700 dark:text-blue-300',
          textGroupHover: 'group-hover:text-blue-500',
          borderHover: 'hover:border-blue-500/30',
          iconBgHover: 'group-hover:bg-blue-500',
          gradient: 'from-blue-500 to-blue-600',
          gradientLight: 'from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-slate-800',
          shadow: 'shadow-blue-500/25',
          cardBorder: 'border-blue-100 dark:border-blue-900/50'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          bgLight: 'bg-purple-50 dark:bg-purple-900/20',
          bgHover: 'group-hover:bg-purple-500/10',
          text: 'text-purple-500',
          textDark: 'text-purple-700 dark:text-purple-300',
          textGroupHover: 'group-hover:text-purple-500',
          borderHover: 'hover:border-purple-500/30',
          iconBgHover: 'group-hover:bg-purple-500',
          gradient: 'from-purple-500 to-purple-600',
          gradientLight: 'from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-slate-800',
          shadow: 'shadow-purple-500/25',
          cardBorder: 'border-purple-100 dark:border-purple-900/50'
        };
    }
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-white dark:bg-slate-800 transition-colors relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider mb-4">
            Nossa Expertise
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Cuidado Integral e Personalizado
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Abordamos o aprendizado de forma holística, considerando os aspectos cognitivos, emocionais e sociais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => {
            const theme = getThemeClasses(service.colorTheme);
            
            return (
              <div 
                key={service.id}
                className={`group bg-slate-50 dark:bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-slate-100 dark:border-slate-800 ${theme.borderHover} relative overflow-hidden flex flex-col`}
              >
                <div className={`absolute top-0 right-0 w-64 h-64 ${theme.bgLight} rounded-full blur-3xl -mr-32 -mt-32 transition-all duration-700 ${theme.bgHover} opacity-50 group-hover:opacity-100`}></div>
                
                <div className={`w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center ${theme.text} mb-6 md:mb-8 group-hover:scale-110 ${theme.iconBgHover} group-hover:text-white transition-all duration-300 relative z-10`}>
                  <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                </div>
                
                <h3 className={`text-xl md:text-2xl font-bold mb-4 text-slate-900 dark:text-white font-display ${theme.textGroupHover} transition-colors relative z-10`}>
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed flex-grow relative z-10">
                  {service.shortDescription}
                </p>
                
                <button 
                  onClick={() => setSelectedService(service)}
                  className={`inline-flex items-center text-slate-900 dark:text-white font-bold text-sm ${theme.textGroupHover} transition-colors gap-2 cursor-pointer focus:outline-none group/btn relative z-10`}
                >
                  Saiba mais 
                  <span className={`material-symbols-outlined text-lg transform group-hover/btn:translate-x-1 transition-transform`}>arrow_forward</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/70 backdrop-blur-md transition-opacity animate-fade-in-up" 
            onClick={() => setSelectedService(null)}
          ></div>
          
          <div className="bg-white dark:bg-slate-800 rounded-[1.5rem] md:rounded-[2rem] shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up flex flex-col no-scrollbar">
            
            {/* Modal Header */}
            <div className={`relative pt-10 pb-6 px-6 md:pt-12 md:pb-8 md:px-12 overflow-hidden bg-gradient-to-br ${getThemeClasses(selectedService.colorTheme).gradientLight}`}>
              {/* Decorative Big Icon */}
              <div className="absolute -right-6 -top-6 text-black/5 dark:text-white/5 pointer-events-none transform rotate-12">
                <span className="material-symbols-outlined text-[8rem] md:text-[12rem]">{selectedService.icon}</span>
              </div>

              <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-white bg-gradient-to-br ${getThemeClasses(selectedService.colorTheme).gradient} shadow-xl shadow-slate-200 dark:shadow-none ring-4 ring-white/50 dark:ring-slate-700/50 backdrop-blur-sm shrink-0`}>
                   <span className="material-symbols-outlined text-3xl md:text-4xl">{selectedService.icon}</span>
                </div>
                <div>
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-white/20 ${getThemeClasses(selectedService.colorTheme).textDark}`}>
                    Especialidade
                  </div>
                  <h3 className="font-display font-bold text-2xl md:text-4xl text-slate-900 dark:text-white leading-tight">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900 transition-all hover:scale-110 shadow-sm"
              >
                <span className="material-symbols-outlined text-xl">close</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-12 space-y-8 md:space-y-10 bg-white dark:bg-slate-800">
              {/* Description */}
              <div>
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                  <span className="w-6 md:w-8 h-[2px] bg-slate-200 dark:bg-slate-700"></span>
                  Sobre o Serviço
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-base md:text-xl leading-relaxed font-light">
                  {selectedService.fullDescription}
                </p>
              </div>

              {/* Benefits Grid */}
              <div>
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                  <span className="w-6 md:w-8 h-[2px] bg-slate-200 dark:bg-slate-700"></span>
                  O que desenvolvemos
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {selectedService.benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl border ${getThemeClasses(selectedService.colorTheme).cardBorder} bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-700/50 hover:shadow-md transition-all duration-300`}
                    >
                      <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 ${getThemeClasses(selectedService.colorTheme).bgLight} ${getThemeClasses(selectedService.colorTheme).text}`}>
                        <span className="material-symbols-outlined text-sm md:text-lg font-bold">check</span>
                      </div>
                      <span className="text-slate-700 dark:text-slate-200 font-medium text-sm md:text-base">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer (Sticky) */}
            <div className="sticky bottom-0 p-6 pt-4 md:p-8 md:pt-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border-t border-slate-100 dark:border-slate-700">
              <button 
                onClick={() => {
                  setSelectedService(null);
                  setTimeout(() => {
                    const element = document.getElementById('contact');
                    if (element) {
                       const headerOffset = 100;
                       const elementPosition = element.getBoundingClientRect().top;
                       const offsetPosition = elementPosition + window.scrollY - headerOffset;
                       window.scrollTo({
                         top: offsetPosition,
                         behavior: "smooth"
                       });
                    }
                  }, 100);
                }}
                className={`w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-bold text-white text-base md:text-lg shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl bg-gradient-to-r ${getThemeClasses(selectedService.colorTheme).gradient} ${getThemeClasses(selectedService.colorTheme).shadow} flex items-center justify-center gap-3`}
              >
                <span>Agendar Avaliação</span>
                <span className="material-symbols-outlined">calendar_month</span>
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;