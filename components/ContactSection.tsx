import React, { useState } from 'react';

type PatientType = 'me' | 'relative' | '';

interface FormData {
  name: string;
  phone: string;
  cpf: string;
  patientType: PatientType;
  relativeName: string;
  relativeAge: string;
  relationship: string;
  otherRelationship: string;
  myAge: string;
  reason: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    cpf: '',
    patientType: '',
    relativeName: '',
    relativeAge: '',
    relationship: '',
    otherRelationship: '',
    myAge: '',
    reason: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation Helpers
  const validateCPF = (cpf: string): boolean => {
    const strCPF = cpf.replace(/[^\d]/g, '');
    if (strCPF.length !== 11) return false;
    
    // Check for repeated sequences (e.g., 111.111.111-11)
    if (/^(\d)\1+$/.test(strCPF)) return false;

    let sum = 0;
    let remainder;
    
    for (let i = 1; i <= 9; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(strCPF.substring(9, 10))) return false;
    
    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(strCPF.substring(10, 11))) return false;
    
    return true;
  };

  const validateFullName = (name: string): boolean => {
    return name.trim().split(/\s+/).length >= 2;
  };

  const validatePhone = (phone: string): boolean => {
    const digits = phone.replace(/[^\d]/g, '');
    return digits.length >= 10; // Minimum for (XX) XXXX-XXXX
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error for this field when user types
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '');
    
    if (raw.startsWith('55')) {
      raw = raw.slice(2);
    }
    
    if (raw.length > 11) raw = raw.slice(0, 11);

    if (raw.length === 0) {
      handleInputChange('phone', '');
      return;
    }

    let formatted = '+55';
    if (raw.length > 0) formatted += ` (${raw.slice(0, 2)}`;
    if (raw.length > 2) formatted += `) ${raw.slice(2, 7)}`;
    if (raw.length > 7) formatted += `-${raw.slice(7)}`;
    
    handleInputChange('phone', formatted);
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);

    value = value
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
    
    handleInputChange('cpf', value);
  };

  const getRelationshipLabel = (value: string) => {
    switch (value) {
      case 'child': return 'Filho(a)';
      case 'sibling': return 'Irmão(ã)';
      case 'grandchild': return 'Neto(a)';
      case 'nephew': return 'Sobrinho(a)';
      case 'other': return 'Outro';
      default: return value;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: FormErrors = {};

    // Base Validation
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    else if (!validateFullName(formData.name)) newErrors.name = 'Digite o nome completo (Nome e Sobrenome)';

    if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';
    else if (!validatePhone(formData.phone)) newErrors.phone = 'Telefone inválido';

    if (!formData.cpf) newErrors.cpf = 'CPF é obrigatório';
    else if (!validateCPF(formData.cpf)) newErrors.cpf = 'CPF inválido';

    if (!formData.patientType) newErrors.patientType = 'Selecione para quem é o atendimento';

    // Conditional Validation
    if (formData.patientType === 'me') {
        if (!formData.myAge) newErrors.myAge = 'Idade é obrigatória';
    } else if (formData.patientType === 'relative') {
        if (!formData.relativeName) newErrors.relativeName = 'Nome do parente é obrigatório';
        else if (!validateFullName(formData.relativeName)) newErrors.relativeName = 'Digite o nome completo do paciente';

        if (!formData.relativeAge) newErrors.relativeAge = 'Idade é obrigatória';
        if (!formData.relationship) newErrors.relationship = 'Grau de parentesco é obrigatório';
        if (formData.relationship === 'other' && !formData.otherRelationship) {
            newErrors.otherRelationship = 'Especifique o parentesco';
        }
    }

    if (!formData.reason) newErrors.reason = 'Motivo da consulta é obrigatório';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      const whatsappNumber = "5534991914028";
      
      // Construção da mensagem formatada e limpa
      let message = `_Clínica Crescermente_\n_Solicitação de Agendamento_\n\n`;

      message += `_*DADOS DO RESPONSÁVEL*_\n`;
      message += `\`------------------------\`\n`;
      message += `*Nome:* _${formData.name}_\n`;
      message += `*Telefone:* _${formData.phone}_\n`;
      message += `*CPF:* _${formData.cpf}_\n`;
      message += `\`------------------------\`\n\n`;

      message += `_*DADOS DO PACIENTE*_\n`;
      message += `\`------------------------\`\n`;
      if (formData.patientType === 'me') {
        message += `*Nome:* _O próprio solicitante_\n`;
        message += `*Idade:* _${formData.myAge} anos_\n`;
      } else {
        message += `*Nome:* _${formData.relativeName}_\n`;
        message += `*Idade:* _${formData.relativeAge}_ anos\n`;
        const parentesco = formData.relationship === 'other' ? formData.otherRelationship : getRelationshipLabel(formData.relationship);
        message += `*Vínculo:* _${parentesco}_\n`;
      }
      message += `\`------------------------\`\n\n`;

      message += `\n_*MOTIVO DA CONSULTA*_\n`;
      message += `\`------------------------\`\n`;
      message += `_${formData.reason}_`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setIsSubmitting(false);
      
      setFormData({
        name: '',
        phone: '',
        cpf: '',
        patientType: '',
        relativeName: '',
        relativeAge: '',
        relationship: '',
        otherRelationship: '',
        myAge: '',
        reason: ''
      });
    }
  };

  const getInputClass = (field: string) => {
    const base = "w-full rounded-xl border bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white outline-none transition-all font-medium text-sm";
    const padding = field === 'patientType' || field === 'relationship' ? "pl-10 pr-10 py-3.5" : "pl-10 pr-4 py-3.5";
    const errorState = errors[field] 
        ? "border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
        : "border-slate-200 dark:border-slate-700 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary hover:border-slate-300 dark:hover:border-slate-600";
    
    return `${base} ${padding} ${errorState}`;
  };

  return (
    <section id="contact" className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-br from-teal-400 to-teal-600 dark:from-teal-900 dark:to-slate-900">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Info & Text */}
          <div className="text-white space-y-6 md:space-y-8 animate-fade-in-up">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-4 text-white">
                Agendamento Online
              </span>
              <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight mb-4 md:mb-6">
                Dê o primeiro passo para a transformação
              </h2>
              <p className="text-teal-50 text-base md:text-lg leading-relaxed max-w-lg">
                Preencha o formulário ao lado. Você será redirecionado para nosso WhatsApp com as informações preenchidas para finalizar o agendamento.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0">
                  <span className="material-symbols-outlined text-2xl">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Avaliação Completa</h4>
                  <p className="text-teal-100 text-sm">Análise detalhada do perfil cognitivo</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0">
                  <span className="material-symbols-outlined text-2xl">diversity_1</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Atendimento Personalizado</h4>
                  <p className="text-teal-100 text-sm">Para crianças, adolescentes e adultos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/10 shrink-0">
                  <span className="material-symbols-outlined text-2xl">video_camera_front</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Presencial ou Online</h4>
                  <p className="text-teal-100 text-sm">Flexibilidade para sua rotina</p>
                </div>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t border-white/20">
              <p className="text-sm text-teal-100 mb-2 font-medium uppercase tracking-wide">Ou entre em contato direto:</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a href="https://wa.me/5534991914028" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors group">
                  <span className="material-symbols-outlined">call</span>
                  <span className="font-bold text-lg md:text-xl group-hover:underline decoration-white/50 underline-offset-4">(34) 99191-4028</span>
                </a>
                <a href="mailto:contato@crescermente.com.br" className="flex items-center gap-2 hover:text-white transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                  <span className="font-medium text-sm md:text-base">contato@crescermente.com.br</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="bg-white dark:bg-slate-900 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 shadow-2xl animate-fade-in-up relative">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 font-display">Solicitar Agendamento</h3>
            
            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit} noValidate>
              {/* Nome Completo */}
              <div>
                <label htmlFor="name" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Nome Completo</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className={`material-symbols-outlined text-xl transition-colors ${errors.name ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>person</span>
                  </div>
                  <input 
                    id="name" 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={getInputClass('name')}
                    placeholder="Digite seu nome completo" 
                  />
                </div>
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.name}</p>}
              </div>

              {/* Telefone & CPF */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Telefone</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className={`material-symbols-outlined text-xl transition-colors ${errors.phone ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>call</span>
                    </div>
                    <input 
                      id="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={getInputClass('phone')}
                      placeholder="+55 (00) 00000-0000" 
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="cpf" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">CPF</label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className={`material-symbols-outlined text-xl transition-colors ${errors.cpf ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>badge</span>
                    </div>
                    <input 
                      id="cpf" 
                      type="text" 
                      value={formData.cpf}
                      onChange={handleCPFChange}
                      className={getInputClass('cpf')}
                      placeholder="000.000.000-00" 
                    />
                  </div>
                  {errors.cpf && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.cpf}</p>}
                </div>
              </div>

              {/* Para Quem */}
              <div>
                <label htmlFor="patient-type" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Para quem é o atendimento?</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className={`material-symbols-outlined text-xl transition-colors ${errors.patientType ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>groups</span>
                  </div>
                  <select 
                    id="patient-type" 
                    value={formData.patientType}
                    onChange={(e) => handleInputChange('patientType', e.target.value as PatientType)}
                    className={getInputClass('patientType')}
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="me">Para Mim</option>
                    <option value="relative">Para Parente (Filho, Neto, etc)</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400 text-xl">expand_more</span>
                  </div>
                </div>
                {errors.patientType && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.patientType}</p>}
              </div>

              {/* Conditional Fields: Relative */}
              {formData.patientType === 'relative' && (
                <div className="space-y-4 animate-fade-in-up bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                  <div>
                    <label htmlFor="relative-name" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Nome do Parente</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className={`material-symbols-outlined text-xl transition-colors ${errors.relativeName ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>person</span>
                      </div>
                      <input 
                        id="relative-name" 
                        type="text" 
                        value={formData.relativeName}
                        onChange={(e) => handleInputChange('relativeName', e.target.value)}
                        className={getInputClass('relativeName').replace('py-3.5', 'py-3')}
                        placeholder="Nome completo do paciente" 
                      />
                    </div>
                    {errors.relativeName && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.relativeName}</p>}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="relative-age" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Idade</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className={`material-symbols-outlined text-xl transition-colors ${errors.relativeAge ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>cake</span>
                        </div>
                        <input 
                          id="relative-age" 
                          type="number" 
                          value={formData.relativeAge}
                          onChange={(e) => handleInputChange('relativeAge', e.target.value)}
                          className={getInputClass('relativeAge').replace('py-3.5', 'py-3')}
                          placeholder="Anos" 
                        />
                      </div>
                      {errors.relativeAge && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.relativeAge}</p>}
                    </div>
                    <div>
                      <label htmlFor="relationship" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Parentesco</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className={`material-symbols-outlined text-xl transition-colors ${errors.relationship ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>family_restroom</span>
                        </div>
                        <select 
                          id="relationship" 
                          value={formData.relationship}
                          onChange={(e) => handleInputChange('relationship', e.target.value)}
                          className={getInputClass('relationship').replace('py-3.5', 'py-3')} 
                        >
                          <option value="" disabled>Selecione</option>
                          <option value="child">Filho(a)</option>
                          <option value="sibling">Irmão(ã)</option>
                          <option value="grandchild">Neto(a)</option>
                          <option value="nephew">Sobrinho(a)</option>
                          <option value="other">Outro</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="material-symbols-outlined text-slate-400 text-xl">expand_more</span>
                        </div>
                      </div>
                      {errors.relationship && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.relationship}</p>}
                    </div>
                  </div>

                  {formData.relationship === 'other' && (
                    <div className="animate-fade-in-up">
                      <label htmlFor="other-relationship" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Qual o parentesco?</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className={`material-symbols-outlined text-xl transition-colors ${errors.otherRelationship ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>edit</span>
                        </div>
                        <input 
                          id="other-relationship" 
                          type="text" 
                          value={formData.otherRelationship}
                          onChange={(e) => handleInputChange('otherRelationship', e.target.value)}
                          className={getInputClass('otherRelationship').replace('py-3.5', 'py-3')}
                          placeholder="Exemplo: Filho(a), Sobrinho(a)" 
                        />
                      </div>
                      {errors.otherRelationship && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.otherRelationship}</p>}
                    </div>
                  )}
                </div>
              )}

               {/* Conditional Fields: Me */}
               {formData.patientType === 'me' && (
                <div className="space-y-4 animate-fade-in-up bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                   <div>
                      <label htmlFor="my-age" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Sua Idade</label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className={`material-symbols-outlined text-xl transition-colors ${errors.myAge ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>cake</span>
                        </div>
                        <input 
                          id="my-age" 
                          type="number" 
                          value={formData.myAge}
                          onChange={(e) => handleInputChange('myAge', e.target.value)}
                          className={getInputClass('myAge').replace('py-3.5', 'py-3')}
                          placeholder="Digite sua idade" 
                        />
                      </div>
                      {errors.myAge && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.myAge}</p>}
                    </div>
                </div>
               )}


              {/* Reason */}
              <div>
                <label htmlFor="reason" className="block text-slate-500 dark:text-slate-400 text-xs font-bold mb-1.5 uppercase tracking-wide">Motivo da Consulta</label>
                <div className="relative group">
                  <div className="absolute top-3.5 left-0 pl-3 flex items-start pointer-events-none">
                    <span className={`material-symbols-outlined text-xl transition-colors ${errors.reason ? 'text-red-500' : 'text-slate-400 group-focus-within:text-primary'}`}>edit_note</span>
                  </div>
                  <textarea 
                    id="reason" 
                    value={formData.reason}
                    onChange={(e) => handleInputChange('reason', e.target.value)}
                    className={getInputClass('reason')}
                    placeholder="Descreva brevemente o que você procura..."
                    style={{ minHeight: '6rem', resize: 'none' }}
                  ></textarea>
                </div>
                {errors.reason && <p className="text-red-500 text-xs mt-1 ml-1 font-medium">{errors.reason}</p>}
              </div>

              {/* Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full bg-slate-900 dark:bg-primary text-white text-sm font-bold py-4 rounded-xl shadow-lg transition-all transform flex items-center justify-center gap-2 uppercase tracking-wide mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-slate-800 dark:hover:bg-primary-dark hover:shadow-xl hover:-translate-y-1'}`}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar Agendamento'}
                {!isSubmitting && <span className="material-symbols-outlined text-xl">arrow_forward</span>}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;