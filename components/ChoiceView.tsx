import React from 'react';
import { Calculator, FileBarChart } from 'lucide-react';
import { Language, ViewState } from '../types';
import { content } from '../constants';

interface ChoiceViewProps {
    lang: Language;
    name: string;
    setCurrentView: (view: ViewState) => void;
}

const ChoiceView: React.FC<ChoiceViewProps> = ({ lang, name, setCurrentView }) => {
    const t = content[lang];
    
    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans flex items-center justify-center">
            <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-blue-900 mb-2">
                        {t.choice.title} <span className="text-green-500">{name}</span>
                    </h2>
                    <p className="text-xl text-gray-500">{t.choice.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Subsidy Card */}
                    <div 
                        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-green-400 group cursor-pointer" 
                        onClick={() => setCurrentView('subsidy_tool')}
                    >
                        <div className="bg-green-50 p-8 flex justify-center">
                            <Calculator className="w-24 h-24 text-green-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.choice.card1_title}</h3>
                            <p className="text-gray-600 mb-8">{t.choice.card1_desc}</p>
                            <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition">
                                {t.choice.card1_btn}
                            </button>
                        </div>
                    </div>

                    {/* VSME Card */}
                    <div 
                        className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border-2 border-transparent hover:border-blue-400 group cursor-pointer" 
                        onClick={() => setCurrentView('vsme_tool')}
                    >
                        <div className="bg-blue-50 p-8 flex justify-center">
                            <FileBarChart className="w-24 h-24 text-blue-500 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.choice.card2_title}</h3>
                            <p className="text-gray-600 mb-8">{t.choice.card2_desc}</p>
                            <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition">
                                {t.choice.card2_btn}
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="mt-12 text-center">
                    <button 
                        onClick={() => { setCurrentView('landing'); window.scrollTo(0,0); }} 
                        className="text-gray-400 hover:text-gray-600 underline"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChoiceView;
