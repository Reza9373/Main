import React, { useState } from 'react';
import { 
    Calculator, ShieldCheck, CheckCircle, X, AlertTriangle, 
    Calendar, Zap, Truck, Home, GraduationCap, Euro, FileText, 
    Send, HelpCircle 
} from 'lucide-react';
import { Language, ViewState, SubsidyData, SubsidyResult } from '../types';
import { content } from '../constants';

interface SubsidyToolProps {
    lang: Language;
    setCurrentView: (view: ViewState) => void;
}

const SubsidyTool: React.FC<SubsidyToolProps> = ({ lang, setCurrentView }) => {
    const t = content[lang];
    const tt = t.tool;
    const [subsidyStep, setSubsidyStep] = useState(1);
    const [subsidyData, setSubsidyData] = useState<SubsidyData>({
        hasEH3: null, 
        recentPurchase: null, 
        categories: [], 
        invoiceValue: null, 
        isElectricVehicle: null, 
        isHeavyVehicle: null, 
        smallStaff: null 
    });

    const handleCategoryToggle = (category: string) => {
        setSubsidyData(prev => {
            const cats = prev.categories.includes(category) 
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category];
            return { ...prev, categories: cats };
        });
    };

    const nextFromStep3 = () => {
        if (subsidyData.categories.length === 0) return alert("Select at least one.");
        setSubsidyStep(5); // Skip old step 4
    };

    const calculateSubsidies = (): SubsidyResult[] => {
        const results: SubsidyResult[] = [];
        if ((subsidyData.categories.includes('ev') && subsidyData.invoiceValue) || 
            (subsidyData.categories.includes('building'))) {
            results.push({ type: 'mia', title: tt.step5.card_mia, desc: tt.step5.card_mia_desc });
        }
        if (subsidyData.categories.includes('fleet') && subsidyData.isElectricVehicle && subsidyData.isHeavyVehicle) {
            results.push({ type: 'seba', title: tt.step5.card_seba, desc: tt.step5.card_seba_desc });
        }
        if (subsidyData.categories.includes('training') && subsidyData.smallStaff) {
            results.push({ type: 'slim', title: tt.step5.card_slim, desc: tt.step5.card_slim_desc });
        }
        if (results.length === 0 && subsidyData.categories.length > 0) {
            results.push({ type: 'mia', title: tt.step5.card_mia, desc: tt.step5.card_mia_desc });
        }
        return results;
    };

    const results = calculateSubsidies();

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-900 px-4 py-4 md:px-8 md:py-6 flex justify-between items-center text-white">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <Calculator className="w-6 h-6 text-green-400" />
                        Demandio Subsidy Finder
                    </h2>
                    <div className="text-sm opacity-80">Step {subsidyStep > 4 ? subsidyStep - 1 : subsidyStep} / 5</div>
                </div>

                <div className="w-full bg-gray-200 h-2">
                    <div className="bg-green-500 h-2 transition-all duration-500" style={{ width: `${(subsidyStep > 4 ? (subsidyStep-1)/5 : subsidyStep/5)*100}%` }}></div>
                </div>

                <div className="p-4 md:p-8">
                    <button onClick={() => setCurrentView('choice')} className="text-sm text-gray-400 mb-4 hover:text-gray-600">← Back to Hub</button>

                    {subsidyStep === 1 && (
                        <div className="animate-fade-in">
                            <div className="mb-6 flex justify-center">
                                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                                    <ShieldCheck className="w-10 h-10 text-blue-600" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">{tt.step1.title}</h3>
                            <p className="text-gray-600 text-center mb-8">{tt.step1.msg}</p>
                            
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 mb-8">
                                <p className="font-bold text-lg mb-4 text-blue-900">{tt.step1.q}</p>
                                <div className="space-y-3">
                                    <button 
                                        onClick={() => { setSubsidyData({...subsidyData, hasEH3: true}); setSubsidyStep(2); }}
                                        className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition flex items-center gap-2"
                                    >
                                        <CheckCircle className="w-5 h-5 text-green-500" /> {tt.step1.yes}
                                    </button>
                                    <button 
                                        onClick={() => setSubsidyData({...subsidyData, hasEH3: false})}
                                        className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-red-500 hover:shadow-md transition flex items-center gap-2"
                                    >
                                        <X className="w-5 h-5 text-red-500" /> {tt.step1.no}
                                    </button>
                                </div>
                            </div>
                            {subsidyData.hasEH3 === false && (
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4 flex gap-3">
                                    <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                                    <div>
                                        <p className="text-sm text-yellow-800">{tt.step1.alert}</p>
                                        <button onClick={() => setSubsidyStep(2)} className="text-blue-600 font-bold text-sm mt-2 hover:underline">
                                            Continue Check &rarr;
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {subsidyStep === 2 && (
                        <div className="animate-fade-in">
                            <div className="mb-6 flex justify-center">
                                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center">
                                    <Calendar className="w-10 h-10 text-orange-600" />
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">{tt.step2.title}</h3>
                            <p className="text-gray-600 text-center mb-8">{tt.step2.msg}</p>
                            <div className="space-y-4 max-w-lg mx-auto">
                                <p className="font-bold text-lg mb-2 text-gray-900">{tt.step2.q}</p>
                                <button 
                                    onClick={() => { setSubsidyData({...subsidyData, recentPurchase: true}); setSubsidyStep(3); }}
                                    className="w-full text-left px-6 py-4 bg-white border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition font-medium"
                                >
                                    {tt.step2.yes}
                                </button>
                                <button 
                                    onClick={() => { setSubsidyData({...subsidyData, recentPurchase: false}); setSubsidyStep(3); }}
                                    className="w-full text-left px-6 py-4 bg-white border-2 border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition font-medium"
                                >
                                    {tt.step2.no}
                                </button>
                            </div>
                            <div className="mt-8 flex justify-between">
                                <button onClick={() => setSubsidyStep(1)} className="text-gray-400 hover:text-gray-600">{tt.back}</button>
                            </div>
                        </div>
                    )}

                    {subsidyStep === 3 && (
                        <div className="animate-fade-in">
                            <h3 className="text-2xl font-bold text-center mb-4 text-gray-900">{tt.step3.title}</h3>
                            <p className="text-gray-600 text-center mb-8">{tt.step3.msg}</p>
                            <div className="grid grid-cols-1 gap-4 mb-8">
                                <CategoryButton 
                                    selected={subsidyData.categories.includes('ev')} 
                                    onClick={() => handleCategoryToggle('ev')}
                                    icon={<Zap className="w-6 h-6 text-gray-700" />}
                                    label={tt.step3.opt_ev}
                                    color="blue"
                                >
                                     <EmbeddedQuestion 
                                        question={tt.step3.q_ev} 
                                        yesLabel={tt.yes} 
                                        noLabel={tt.no}
                                        value={subsidyData.invoiceValue}
                                        onYes={() => setSubsidyData({...subsidyData, invoiceValue: true})}
                                        onNo={() => setSubsidyData({...subsidyData, invoiceValue: false})}
                                        color="blue"
                                     />
                                </CategoryButton>

                                <CategoryButton 
                                    selected={subsidyData.categories.includes('fleet')} 
                                    onClick={() => handleCategoryToggle('fleet')}
                                    icon={<Truck className="w-6 h-6 text-gray-700" />}
                                    label={tt.step3.opt_fleet}
                                    color="orange"
                                >
                                     <div className="space-y-4">
                                        <EmbeddedQuestion 
                                            question={tt.step3.q_fleet_electric} 
                                            yesLabel={tt.yes} noLabel={tt.no}
                                            value={subsidyData.isElectricVehicle}
                                            onYes={() => setSubsidyData({...subsidyData, isElectricVehicle: true})}
                                            onNo={() => setSubsidyData({...subsidyData, isElectricVehicle: false})}
                                            color="orange"
                                        />
                                        <EmbeddedQuestion 
                                            question={tt.step3.q_fleet_weight} 
                                            yesLabel={tt.yes} noLabel={tt.no}
                                            value={subsidyData.isHeavyVehicle}
                                            onYes={() => setSubsidyData({...subsidyData, isHeavyVehicle: true})}
                                            onNo={() => setSubsidyData({...subsidyData, isHeavyVehicle: false})}
                                            color="orange"
                                        />
                                     </div>
                                </CategoryButton>

                                <CategoryButton 
                                    selected={subsidyData.categories.includes('building')} 
                                    onClick={() => handleCategoryToggle('building')}
                                    icon={<Home className="w-6 h-6 text-gray-700" />}
                                    label={tt.step3.opt_building}
                                    color="green"
                                />

                                <CategoryButton 
                                    selected={subsidyData.categories.includes('training')} 
                                    onClick={() => handleCategoryToggle('training')}
                                    icon={<GraduationCap className="w-6 h-6 text-gray-700" />}
                                    label={tt.step3.opt_training}
                                    color="purple"
                                >
                                    <EmbeddedQuestion 
                                        question={tt.step3.q_training} 
                                        yesLabel={tt.yes} noLabel={tt.no}
                                        value={subsidyData.smallStaff}
                                        onYes={() => setSubsidyData({...subsidyData, smallStaff: true})}
                                        onNo={() => setSubsidyData({...subsidyData, smallStaff: false})}
                                        color="purple"
                                     />
                                </CategoryButton>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <button onClick={() => setSubsidyStep(2)} className="text-gray-400 hover:text-gray-600">{tt.back}</button>
                                <button onClick={nextFromStep3} className="bg-blue-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition shadow-lg">{tt.next} &rarr;</button>
                            </div>
                        </div>
                    )}

                    {subsidyStep === 5 && (
                        <div className="animate-fade-in">
                             <div className="text-center mb-8">
                               <h3 className="text-2xl font-bold text-gray-900 mb-2">{tt.step5.title}</h3>
                               <p className="text-gray-600">{tt.step5.msg}</p>
                             </div>

                             <div className="grid gap-4 mb-8">
                                {results.map((item, index) => (
                                  <div key={index} className="bg-white border-2 border-green-500 p-6 rounded-xl shadow-lg relative overflow-hidden group hover:scale-105 transition-transform">
                                    <div className="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">ELIGIBLE</div>
                                    <h4 className="text-xl font-extrabold text-blue-900 mb-2 flex items-center gap-2">
                                      <CheckCircle className="text-green-500" /> {item.title}
                                    </h4>
                                    <p className="text-gray-600 font-medium">{item.desc}</p>
                                  </div>
                                ))}
                                {results.length === 0 && (
                                  <div className="bg-gray-50 p-6 rounded-xl text-center border border-gray-200">
                                    <p>Based on inputs, no specific standard subsidies match, but contact us for a custom check.</p>
                                  </div>
                                )}
                             </div>

                             <button 
                                onClick={() => setSubsidyStep(6)}
                                className="w-full bg-green-500 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-green-400 transition shadow-lg text-lg animate-pulse"
                              >
                                Claim Opportunities &rarr;
                              </button>
                        </div>
                    )}

                    {subsidyStep === 6 && (
                        <div className="animate-fade-in text-center">
                             <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                               <Euro className="w-12 h-12 text-green-600" />
                             </div>
                             <h3 className="text-3xl font-extrabold text-gray-900 mb-4">{tt.step6.title}</h3>
                             <p className="text-gray-600 mb-8 text-lg">{tt.step6.msg}</p>

                             <div className="grid gap-4 max-w-md mx-auto">
                               <button className="flex items-center justify-center gap-3 bg-blue-900 text-white p-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg">
                                  <FileText /> {tt.step6.btn_esg}
                               </button>
                               <button className="flex items-center justify-center gap-3 bg-white text-blue-900 border-2 border-blue-900 p-4 rounded-xl font-bold hover:bg-blue-50 transition">
                                  <Send /> {tt.step6.btn_acc}
                               </button>
                               <button className="flex items-center justify-center gap-3 bg-gray-100 text-gray-700 p-4 rounded-xl font-bold hover:bg-gray-200 transition">
                                  <HelpCircle /> {tt.step6.btn_consult}
                               </button>
                             </div>
                             
                             <div className="mt-8 pt-8 border-t border-gray-100">
                                <button onClick={() => window.location.reload()} className="text-sm text-gray-400 hover:text-gray-600">Back to Home</button>
                             </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// Helper Components for Subsidy Tool

const CategoryButton: React.FC<{
    selected: boolean;
    onClick: () => void;
    icon: React.ReactNode;
    label: string;
    color: 'blue' | 'orange' | 'green' | 'purple';
    children?: React.ReactNode;
}> = ({ selected, onClick, icon, label, color, children }) => {
    const borderColor = selected 
        ? (color === 'blue' ? 'border-blue-500 bg-blue-50/50' : color === 'orange' ? 'border-orange-500 bg-orange-50/50' : color === 'green' ? 'border-green-500 bg-green-50/50' : 'border-purple-500 bg-purple-50/50')
        : 'border-gray-200 hover:border-gray-300';
    
    const iconBg = selected
        ? (color === 'blue' ? 'bg-blue-200' : color === 'orange' ? 'bg-orange-200' : color === 'green' ? 'bg-green-200' : 'bg-purple-200')
        : 'bg-gray-100';

    const checkColor = color === 'blue' ? 'text-blue-600' : color === 'orange' ? 'text-orange-600' : color === 'green' ? 'text-green-600' : 'text-purple-600';

    return (
        <div className={`rounded-xl border-2 transition-all ${borderColor}`}>
            <div onClick={onClick} className="cursor-pointer p-4 flex items-center gap-3">
                <div className={`p-2 rounded-lg ${iconBg}`}>{icon}</div>
                <span className="font-semibold text-lg">{label}</span>
                {selected && <CheckCircle className={`ml-auto w-6 h-6 ${checkColor}`} />}
            </div>
            {selected && children && (
                <div className="px-4 pb-4 pt-0 animate-fade-in">
                    {children}
                </div>
            )}
        </div>
    );
};

const EmbeddedQuestion: React.FC<{
    question: string;
    yesLabel: string;
    noLabel: string;
    value: boolean | null;
    onYes: () => void;
    onNo: () => void;
    color: 'blue' | 'orange' | 'green' | 'purple';
}> = ({ question, yesLabel, noLabel, value, onYes, onNo, color }) => {
    const activeClass = color === 'blue' ? 'bg-blue-600 border-blue-600' : color === 'orange' ? 'bg-orange-500 border-orange-500' : color === 'green' ? 'bg-green-600 border-green-600' : 'bg-purple-600 border-purple-600';
    
    // Determine light border color for container
    const borderColor = color === 'blue' ? 'border-blue-100' : color === 'orange' ? 'border-orange-100' : color === 'purple' ? 'border-purple-100' : 'border-green-100';

    return (
        <div className={`bg-white p-4 rounded-lg border ${borderColor} shadow-sm mt-2 ml-4 md:ml-12`}>
            <p className="text-sm font-bold text-gray-800 mb-2">{question}</p>
            <div className="flex gap-2">
                <button 
                    onClick={onYes} 
                    className={`px-3 py-1 text-sm rounded-md border transition ${value === true ? `${activeClass} text-white` : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                >
                    {yesLabel}
                </button>
                <button 
                    onClick={onNo} 
                    className={`px-3 py-1 text-sm rounded-md border transition ${value === false ? `${activeClass} text-white` : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`}
                >
                    {noLabel}
                </button>
            </div>
        </div>
    );
};

export default SubsidyTool;
