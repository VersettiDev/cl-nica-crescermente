import React from 'react';

const Footer: React.FC = () => {
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
    <footer className="bg-slate-50 dark:bg-slate-900 pt-12 pb-8 md:pt-20 md:pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 space-y-4 md:space-y-6">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-2 group">
              <img 
                src="https://i.imgur.com/ZZtiaQm.png" 
                alt="Logo CrescerMente" 
                className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="font-display font-bold text-xl md:text-2xl block text-slate-900 dark:text-white leading-none tracking-tight">
                  CrescerMente
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                  Clínica
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Comprometidos com o desenvolvimento humano através de práticas baseadas em evidências científicas e acolhimento.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Institucional</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Início</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Sobre Mim</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Serviços</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Contato</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Especialidades</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-slate-500 dark:text-slate-400">
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Avaliação Diagnóstica</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Intervenção Precoce</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Consultoria Escolar</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-primary transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>Apoio ao TDAH</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-4 md:mb-6">Atendimento</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              Segunda a Sexta: 08:00 - 19:00<br />
              Sábado: 08:00 - 12:00
            </p>
            <div className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              <p className="font-medium text-slate-700 dark:text-slate-300">Endereço:</p>
              <p>Av. Leopoldino de Oliveira 2025</p>
              <p>Centro - Uberaba MG</p>
            </div>
            
            {/* Google Maps Embed */}
            <div className="w-full h-48 rounded-xl overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700">
              <iframe 
                width="100%" 
                height="100%" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Av.+Leopoldino+de+Oliveira+2025+Centro+Uberaba+MG&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0}
                title="Localização CrescerMente"
                className="filter dark:invert-[.9] dark:hue-rotate-180" // Optional dark mode filter for map
              ></iframe>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-slate-400">© 2026 CrescerMente. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="text-xs text-slate-400 hover:text-primary transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
