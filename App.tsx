import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import ChoiceView from './components/ChoiceView';
import SubsidyTool from './components/SubsidyTool';
import VSMETool from './components/VSMETool';
import { Language, ViewState, FormData } from './types';

const App: React.FC = () => {
    const [lang, setLang] = useState<Language>('nl'); // Default to Dutch
    const [currentView, setCurrentView] = useState<ViewState>('landing');
    const [activeRole, setActiveRole] = useState<string | null>(null);

    const [formData, setFormData] = useState<FormData>({ 
        name: '', 
        email: '', 
        company: '', 
        city: '', 
        role: '', 
        customRole: '',
        newsletter: false
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => { 
            setCurrentView('choice'); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 1500);
    };

    const handleSetRole = (role: string | null) => {
        setActiveRole(role);
        if (role) {
            setTimeout(() => { document.getElementById('solutions-section')?.scrollIntoView({ behavior: 'smooth' }); }, 100);
        }
    };

    if (currentView === 'landing') {
        return (
            <LandingPage 
                lang={lang} 
                setLang={setLang}
                activeRole={activeRole}
                setActiveRole={handleSetRole}
                formData={formData}
                setFormData={setFormData}
                onFormSubmit={handleFormSubmit}
                formSubmitted={formSubmitted}
            />
        );
    }

    if (currentView === 'choice') {
        return (
            <ChoiceView 
                lang={lang} 
                name={formData.name} 
                setCurrentView={setCurrentView} 
            />
        );
    }

    if (currentView === 'subsidy_tool') {
        return (
            <SubsidyTool 
                lang={lang} 
                setCurrentView={setCurrentView} 
            />
        );
    }

    if (currentView === 'vsme_tool') {
        return (
            <VSMETool 
                setCurrentView={setCurrentView} 
            />
        );
    }

    return null;
};

export default App;
