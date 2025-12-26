import React, { useState } from 'react';
import { 
    Car, Globe, Menu, X, Network, TrendingUp, BarChart3, 
    Briefcase, Wrench, Package, Euro, Landmark, Factory, 
    ChevronRight, ExternalLink, Link as LinkIcon, Settings,
    Quote, CheckCircle, User, MapPin, ArrowRight
} from 'lucide-react';
import { Language, FormData } from '../types';
import { content, opportunities } from '../constants';

interface LandingPageProps {
    lang: Language;
    setLang: (lang: Language) => void;
    activeRole: string | null;
    setActiveRole: (role: string | null) => void;
    formData: FormData;
    setFormData: (data: FormData) => void;
    onFormSubmit: (e: React.FormEvent) => void;
    formSubmitted: boolean;
}

const LandingPage: React.FC<LandingPageProps> = ({ 
    lang, setLang, activeRole, setActiveRole, 
    formData, setFormData, onFormSubmit, formSubmitted 
}) => {
    const t = content[lang];
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
            {/* Navigation */}
            <nav className="bg-white shadow-sm fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center cursor-pointer" onClick={() => setActiveRole(null)}>
                            <span className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                                <div className="bg-blue-600 p-1.5 rounded-lg">
                                    <Car className="text-white w-6 h-6" />
                                </div>
                                NexMotive
                            </span>
                        </div>
                        
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#roles" className="text-gray-600 hover:text-blue-600 font-medium">{t.nav.solutions}</a>
                            <a href="#pillars" className="text-gray-600 hover:text-blue-600 font-medium">{t.nav.pillars}</a>
                            <a href="#news" className="text-gray-600 hover:text-blue-600 font-medium">{t.nav.news}</a>
                            <a href="#subsidyroadmap" className="text-gray-600 hover:text-blue-600 font-medium">{t.nav.subsidy_guide}</a>
                            <button 
                                onClick={() => setLang(lang === 'en' ? 'nl' : 'en')}
                                className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-200 transition"
                            >
                                <Globe className="w-4 h-4" />
                                {lang === 'en' ? 'NL' : 'EN'}
                            </button>
                            <a href="#contact" className="bg-blue-900 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition font-medium">
                                {t.nav.contact}
                            </a>
                        </div>

                        <div className="md:hidden flex items-center gap-4">
                            <button 
                                onClick={() => setLang(lang === 'en' ? 'nl' : 'en')}
                                className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-xs font-bold text-gray-700"
                            >
                                {lang.toUpperCase()}
                            </button>
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                {mobileMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t p-4 space-y-4">
                        <a href="#roles" className="block text-gray-600 font-medium">{t.nav.solutions}</a>
                        <a href="#pillars" className="block text-gray-600 font-medium">{t.nav.pillars}</a>
                        <a href="#news" className="block text-gray-600 font-medium">{t.nav.news}</a>
                        <a href="#contact" className="block text-blue-600 font-bold">{t.nav.contact}</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <div className="pt-24 pb-12 md:pt-32 md:pb-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-blue-900 opacity-20 transform -skew-x-12 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-5xl mx-auto">
                        {t.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
                        {t.hero.subtitle}
                    </p>
                    
                    <div className="flex justify-center mb-16">
                        <button 
                            onClick={() => document.getElementById('roles')?.scrollIntoView({behavior: 'smooth'})}
                            className="bg-green-500 hover:bg-green-400 text-slate-900 text-lg font-bold py-4 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center gap-3"
                        >
                            <Network className="w-5 h-5" />
                            {t.hero.cta}
                        </button>
                    </div>

                    <div className="border-t border-white/10 pt-8 mt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-blue-200 text-sm font-semibold max-w-4xl mx-auto text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <TrendingUp className="w-5 h-5 text-green-400" />
                                {t.stats.stat1}
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <Network className="w-5 h-5 text-blue-400" />
                                {t.stats.stat2}
                            </div>
                            <div className="flex items-center justify-center md:justify-start gap-2">
                                <BarChart3 className="w-5 h-5 text-yellow-400" />
                                {t.stats.stat3}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strategic Pillars */}
            <div id="pillars" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.pillars.title}</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.pillars.subtitle}</p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* P1 */}
                        <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition border border-gray-100">
                            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <Euro className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.pillars.p1_title}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.pillars.p1_desc}</p>
                        </div>
                         {/* P2 */}
                         <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition border border-gray-100">
                            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <Landmark className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.pillars.p2_title}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.pillars.p2_desc}</p>
                        </div>
                         {/* P3 */}
                         <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition border border-gray-100">
                            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <Settings className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.pillars.p3_title}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.pillars.p3_desc}</p>
                        </div>
                         {/* P4 */}
                         <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition border border-gray-100">
                            <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                                <TrendingUp className="w-8 h-8 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{t.pillars.p4_title}</h3>
                            <p className="text-gray-600 leading-relaxed">{t.pillars.p4_desc}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Roles Selection */}
            <div id="roles" className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{t.roles.title}</h2>
                    </div>

                    {/* Operational */}
                    <div className="mb-12">
                         <div className="flex items-center gap-4 mb-6">
                            <div className="h-px bg-gray-300 flex-grow"></div>
                            <h3 className="text-lg font-bold text-gray-500 uppercase tracking-widest">{t.roles.section_operational}</h3>
                            <div className="h-px bg-gray-300 flex-grow"></div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            <RoleButton roleKey="garage_owner" icon={<Briefcase />} label={t.roles.garage_owner} activeRole={activeRole} onClick={setActiveRole} />
                            <RoleButton roleKey="advisor" icon={<Car />} label={t.roles.advisor} activeRole={activeRole} onClick={setActiveRole} />
                            <RoleButton roleKey="mechanic" icon={<Wrench />} label={t.roles.mechanic} activeRole={activeRole} onClick={setActiveRole} />
                            <RoleButton roleKey="warehouse" icon={<Package />} label={t.roles.warehouse} activeRole={activeRole} onClick={setActiveRole} />
                            <RoleButton roleKey="financial" icon={<Euro />} label={t.roles.financial} activeRole={activeRole} onClick={setActiveRole} />
                        </div>
                    </div>

                    {/* Strategic */}
                     <div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px bg-indigo-200 flex-grow"></div>
                            <h3 className="text-lg font-bold text-indigo-500 uppercase tracking-widest">{t.roles.section_strategic}</h3>
                            <div className="h-px bg-indigo-200 flex-grow"></div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <RoleButton roleKey="formula_manager" icon={<Network />} label={t.roles.formula_manager} activeRole={activeRole} onClick={setActiveRole} strategic />
                            <RoleButton roleKey="association" icon={<Landmark />} label={t.roles.association} activeRole={activeRole} onClick={setActiveRole} strategic />
                            <RoleButton roleKey="wholesaler" icon={<Factory />} label={t.roles.wholesaler} activeRole={activeRole} onClick={setActiveRole} strategic />
                        </div>
                    </div>
                </div>
            </div>

            {/* Dynamic Solutions Section */}
            <div id="solutions-section" className={`transition-all duration-500 bg-white border-t border-gray-200 ${activeRole ? 'block' : 'hidden'}`}>
                {activeRole && (
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                         <div className="flex justify-between items-end mb-10">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">{t.solutions.title}: <span className="text-blue-600">{(t.roles as any)[activeRole]}</span></h2>
                                <button onClick={() => setActiveRole(null)} className="text-gray-500 hover:text-blue-600 text-sm mt-2 flex items-center font-medium">
                                    ← {t.solutions.back}
                                </button>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {opportunities[activeRole].map((opp) => (
                                <div key={opp.id} className="bg-gray-50 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-blue-200 transition-all p-8 flex flex-col h-full group">
                                     <div className="flex justify-between items-start mb-6">
                                        <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                                            {opp.icon}
                                        </div>
                                        <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                                            {opp.tag[lang]}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{opp.title[lang]}</h3>
                                    <div className="mb-4 bg-red-50 p-3 rounded-lg border border-red-100">
                                        <p className="text-xs text-red-800 font-bold uppercase mb-1">Pain Point</p>
                                        <p className="text-sm text-red-900 italic">"{opp.pain[lang]}"</p>
                                    </div>
                                    <p className="text-gray-600 leading-relaxed flex-grow">{opp.desc[lang]}</p>
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <button 
                                            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                                            className="w-full flex items-center justify-center gap-2 text-blue-600 font-bold hover:bg-blue-50 py-3 rounded-lg transition"
                                        >
                                            {lang === 'en' ? 'See Demo' : 'Bekijk Demo'} <ChevronRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* News Section */}
            <div id="news" className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{t.news.title}</h2>
                        <p className="text-gray-500">{t.news.subtitle}</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {t.news.items.map((item, idx) => (
                            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 rounded">{item.source}</span>
                                    <span className="text-xs text-gray-400">{item.date}</span>
                                </div>
                                <h3 className="font-bold text-lg text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm flex-grow mb-4">{item.desc}</p>
                                <a href={item.link} className="text-blue-600 text-sm font-bold flex items-center gap-1 hover:underline mt-auto">
                                    {t.news.read_more} <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Roadmap */}
            <div id="subsidyroadmap" className="py-24 bg-blue-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t.roadmap.title}</h2>
                        <p className="text-xl text-blue-200">{t.roadmap.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <StepCard number={1} icon={<LinkIcon className="w-8 h-8 text-blue-300 mb-4" />} title={t.roadmap.step1} desc={t.roadmap.step1_desc} />
                        <StepCard number={2} icon={<BarChart3 className="w-8 h-8 text-blue-300 mb-4" />} title={t.roadmap.step2} desc={t.roadmap.step2_desc} />
                        <StepCard number={3} icon={<Settings className="w-8 h-8 text-blue-300 mb-4" />} title={t.roadmap.step3} desc={t.roadmap.step3_desc} />
                        <StepCard number={4} icon={<TrendingUp className="w-8 h-8 text-blue-300 mb-4" />} title={t.roadmap.step4} desc={t.roadmap.step4_desc} />
                    </div>
                    <div className="mt-12 text-center">
                        <button 
                            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                            className="bg-green-500 hover:bg-green-400 text-blue-900 font-bold py-4 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all flex items-center gap-2 mx-auto"
                        >
                            <Network className="w-5 h-5" />
                            {t.roadmap.cta}
                        </button>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">{t.testimonials.title}</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <TestimonialCard quote={t.testimonials.t1_quote} author={t.testimonials.t1_author} initials="JD" />
                        <TestimonialCard quote={t.testimonials.t2_quote} author={t.testimonials.t2_author} initials="SJ" color="green" />
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div id="contact" className="bg-white py-20 border-t border-gray-200">
                <div className="max-w-xl mx-auto px-4">
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100">
                        {formSubmitted ? (
                            <div className="text-center py-10">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bedankt!</h3>
                                <p className="text-gray-600">{t.form.success}</p>
                            </div>
                        ) : (
                            <form onSubmit={onFormSubmit}>
                                <div className="text-center mb-8">
                                    <h2 className="text-3xl font-bold text-gray-900">{t.form.title}</h2>
                                    <p className="text-gray-500 mt-2">{t.form.subtitle}</p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.name}</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><User className="h-5 w-5 text-gray-400" /></div>
                                            <input type="text" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" placeholder={lang === 'en' ? "John Doe" : "Jan Jansen"} value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.email}</label>
                                        <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" placeholder="naam@bedrijf.nl" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.company}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Briefcase className="h-5 w-5 text-gray-400" /></div>
                                                <input type="text" className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" placeholder={lang === 'en' ? "Garage Name" : "Uw Bedrijf"} value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.city}</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><MapPin className="h-5 w-5 text-gray-400" /></div>
                                                <input type="text" required className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" placeholder={lang === 'en' ? "Amsterdam" : "Utrecht"} value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">{t.form.role}</label>
                                        <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" value={formData.role} onChange={(e) => setFormData({...formData, role: e.target.value})} required>
                                            <option value="" disabled>{t.form.role_placeholder}</option>
                                            <optgroup label={t.roles.section_operational}>
                                                <option value="owner">{t.roles.garage_owner}</option>
                                                <option value="mechanic">{t.roles.mechanic}</option>
                                                <option value="advisor">{t.roles.advisor}</option>
                                                <option value="financial">{t.roles.financial}</option>
                                                <option value="warehouse">{t.roles.warehouse}</option>
                                            </optgroup>
                                            <optgroup label={t.roles.section_strategic}>
                                                <option value="formula_manager">{t.roles.formula_manager}</option>
                                                <option value="association">{t.roles.association}</option>
                                                <option value="wholesaler">{t.roles.wholesaler}</option>
                                            </optgroup>
                                            <option value="other">{t.form.role_other}</option>
                                        </select>
                                    </div>
                                    {formData.role === 'other' && (
                                        <div className="animate-fade-in-down">
                                            <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-white" placeholder={t.form.custom_role_placeholder} value={formData.customRole} onChange={(e) => setFormData({...formData, customRole: e.target.value})} />
                                        </div>
                                    )}
                                    <div className="flex items-start gap-3 mt-4">
                                        <div className="flex items-center h-5">
                                            <input id="newsletter" name="newsletter" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" checked={formData.newsletter} onChange={(e) => setFormData({...formData, newsletter: e.target.checked})} />
                                        </div>
                                        <div className="text-sm">
                                            <label htmlFor="newsletter" className="font-medium text-gray-700">{t.form.newsletter}</label>
                                        </div>
                                    </div>
                                    <button type="submit" className="w-full bg-blue-900 text-white font-bold text-lg py-4 rounded-lg hover:bg-blue-800 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mt-4">
                                        {t.form.submit} <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <Car className="text-white w-6 h-6" />
                    <span className="text-xl font-bold text-white">NexMotive</span>
                </div>
                <p>{t.footer.rights}</p>
                <div className="mt-4 flex justify-center gap-6 text-sm">
                    <a href="#" className="hover:text-white transition">Privacy</a>
                    <a href="#" className="hover:text-white transition">Terms</a>
                    <a href="#" className="hover:text-white transition">LinkedIn</a>
                </div>
            </footer>
        </div>
    );
};

// Helper Components
const RoleButton: React.FC<{ roleKey: string, icon: React.ReactNode, label: string, activeRole: string | null, onClick: (role: string) => void, strategic?: boolean }> = ({ roleKey, icon, label, activeRole, onClick, strategic }) => {
    const isActive = activeRole === roleKey;
    const baseClasses = "p-6 rounded-xl border-2 transition-all duration-300 text-center flex flex-col items-center hover:shadow-lg bg-white";
    const activeClasses = strategic
        ? "border-indigo-600 text-indigo-900 shadow-md scale-105 z-10 ring-2 ring-indigo-100"
        : "border-blue-600 text-blue-900 shadow-md scale-105 z-10 ring-2 ring-blue-100";
    const inactiveClasses = strategic
        ? "border-indigo-50 text-gray-600 hover:border-indigo-300"
        : "border-gray-100 text-gray-600 hover:border-blue-200";
    
    // React.cloneElement to inject className into icon if needed, or wrap icon in div with coloring
    const iconColor = isActive 
        ? (strategic ? "text-indigo-600" : "text-blue-600")
        : "text-gray-400";

    return (
        <button onClick={() => onClick(roleKey)} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            <div className={`w-10 h-10 mb-4 ${iconColor} flex items-center justify-center`}>
                {React.cloneElement(icon as React.ReactElement, { className: "w-10 h-10" })}
            </div>
            <h3 className="font-bold text-lg">{label}</h3>
        </button>
    );
}

const StepCard: React.FC<{number: number, icon: React.ReactNode, title: string, desc: string}> = ({number, icon, title, desc}) => (
    <div className="bg-blue-800/50 p-6 rounded-xl border border-blue-700 hover:bg-blue-800 transition relative">
        <div className="absolute -top-4 -left-4 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-blue-900">{number}</div>
        {icon}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-blue-200 text-sm">{desc}</p>
    </div>
);

const TestimonialCard: React.FC<{quote: string, author: string, initials: string, color?: string}> = ({quote, author, initials, color}) => (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
        <Quote className={`w-10 h-10 ${color === 'green' ? 'text-green-100' : 'text-blue-100'} absolute top-6 left-6`} />
        <p className="text-gray-600 text-lg italic mb-6 relative z-10">"{quote}"</p>
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">{initials}</div>
            <div>
                <p className="font-bold text-gray-900">{author}</p>
                <div className="flex text-yellow-400 text-sm">★★★★★</div>
            </div>
        </div>
    </div>
);

export default LandingPage;
