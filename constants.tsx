import React from 'react';
import { 
    Wrench, Car, Briefcase, CheckCircle, 
    Video, ShieldCheck, RefreshCw, 
    PieChart, Database, Euro, HelpCircle, 
    Mic, QrCode, Smartphone, ListChecks, Package, Barcode, Grid, 
    FileBarChart, Trash2, Receipt, TrendingUp, Layout, Building2, Landmark, Factory, Network, Award,
    Leaf, FileText, ClipboardCheck,
} from 'lucide-react';
import { Language, Opportunity } from './types';

export const content = {
    en: {
        nav: { solutions: "Solutions", pillars: "Ecosystem", news: "News", subsidy_guide: "The Journey", contact: "Contact" },
        hero: {
            title: "The Operating System for the Sustainable Aftermarket",
            subtitle: "Unifying Garages, Networks, and Wholesalers. We turn compliance data into profit, sustainability into strategy, and chaos into clarity.",
            cta: "Explore Ecosystem Solutions",
            trust: "Empowering the entire Dutch automotive chain: From Bay to Boardroom."
        },
        stats: {
            stat1: "€2.4M+ Value Created",
            stat2: "150+ Partners Connected",
            stat3: "CSRD Ready Data"
        },
        roles: {
            title: "Select your position in the ecosystem",
            section_operational: "Operational Excellence (Garage Level)",
            section_strategic: "Strategic Leadership (Network Level)",
            garage_owner: "Garage Owner",
            advisor: "Service Advisor",
            mechanic: "Mechanic",
            warehouse: "Warehouse Mgr.",
            financial: "Accountant/Admin",
            formula_manager: "Formula Manager",
            association: "Association (BOVAG/RAI)",
            wholesaler: "Wholesaler"
        },
        solutions: { title: "Your Digital Toolkit", back: "Choose a different role", cta_button: "Start Pilot", cta_desc: "Ready to optimize?" },
        pillars: {
            title: "One Platform, Four Pillars of Value",
            subtitle: "How we drive the industry forward aligned with Dutch goals.",
            p1_title: "Profit & Subsidies",
            p1_desc: "Automated scanning for MIA/Vamil, SEBA, and SLIM. Don't leave government money on the table.",
            p2_title: "Sustainability & ESG",
            p2_desc: "VSME & CSRD reporting made easy. Track CO2, waste, and circularity for bank loans and compliance.",
            p3_title: "Operational Efficiency",
            p3_desc: "Digital tools for mechanics and warehouses. Reduce error rates and logistics losses (Cores).",
            p4_title: "Strategic Intelligence",
            p4_desc: "Real-time benchmarking and trend analysis for networks and associations to lead the market."
        },
        news: {
            title: "Market Intelligence & Regulatory Updates",
            subtitle: "Stay ahead of Dutch laws, EU Directives, and Tech Trends.",
            read_more: "Read Analysis",
            items: [
                {
                    title: "Zero-Emission Zones 2025: Impact",
                    date: "10 Dec 2024",
                    source: "NexMotive Intelligence",
                    desc: "How the new ZE zones in 30 Dutch cities affect your fleet customers and parts delivery logistics.",
                    link: "#"
                },
                {
                    title: "CSRD for SMEs: The Trickle Down",
                    date: "05 Nov 2024",
                    source: "EFRAG / NBA",
                    desc: "Wholesalers now require Scope 3 data. How garages can provide this automatically without admin stress.",
                    link: "#"
                },
                {
                    title: "Subsidy Alert: SEBA Closing",
                    date: "12 Oct 2024",
                    source: "RVO.nl",
                    desc: "Last chance to claim up to €5,000 for electric service vans before the pot runs out.",
                    link: "#"
                }
            ]
        },
        roadmap: {
            title: "The Path to a Future-Proof Business",
            subtitle: "Whether you fix cars or manage a network, here is how we upgrade you.",
            step1: "Connect & Scan",
            step1_desc: "Link your DMS or purchasing data. We scan for hidden opportunities (Money/Efficiency).",
            step2: "Analyze & Benchmark",
            step2_desc: "AI compares your performance against the market. Identify gaps in ESG or Profit.",
            step3: "Optimize & Comply",
            step3_desc: "Actionable tools: Auto-generate ESG reports, apply for subsidies, or train staff.",
            step4: "Grow & Report",
            step4_desc: "Showcase your 'Green Score' to customers and banks. Unlock better financing.",
            cta: "Start Your Journey" 
        },
        trust_badges: { iso: "ISO 27001 Secured", gdpr: "GDPR Compliant", csrd: "CSRD Aligned" },
        testimonials: {
            title: "Trusted by Industry Leaders",
            t1_quote: "NexMotive completely transformed how we handle subsidy applications. It's automated revenue.",
            t1_author: "Jan de Vries, Garage Owner",
            t2_quote: "The ESG reporting tool saved us weeks of consultant fees. Essential for our future.",
            t2_author: "Sarah Jansen, Fleet Manager"
        },
        form: {
            title: "Join the Ecosystem",
            subtitle: "Request a tailored demo for your specific role in the aftermarket.",
            name: "Full Name",
            email: "Work Email",
            company: "Company / Organization",
            city: "City",
            role: "Your Role",
            role_placeholder: "Select your role...",
            role_other: "Other (Please specify)",
            custom_role_placeholder: "e.g., Policy Maker",
            newsletter: "Send me the 'Aftermarket 2030' whitepaper.",
            submit: "Request Access",
            success: "Thank you. We are analyzing your profile to suggest the best tools..."
        },
        footer: { rights: "© 2024 NexMotive Netherlands. Empowering the Transition." },
        tool: { 
            step1: { title: "Digital ID Check", msg: "First, let's verify your digital readiness.", q: "Do you have eHerkenning Level 3 (EH3)?", yes: "Yes", no: "No", alert: "You'll need this for RVO. We can help you get it." },
            step2: { title: "Investment Timing", msg: "Timing is everything for fiscal benefits.", q: "Any significant investments (Equipment/Training) in the last 3 months?", yes: "Yes", no: "No" },
            step3: { title: "Focus Areas", msg: "What is your current focus?", opt_ev: "Electrification (EV Tools/Infra)", opt_fleet: "Logistics (Zero Emission Fleet)", opt_building: "Energy (Heat pumps/Solar)", opt_training: "Human Capital (Skills)", q_ev: "Investment > €2,500?", q_fleet_electric: "Full EV?", q_fleet_weight: "> 2500kg?", q_training: "< 50 FTE?" },
            step5: { title: "Your Potential Value", msg: "Based on your profile, you can unlock:", card_mia: "Fiscal Benefit (MIA/Vamil)", card_mia_desc: "Tax relief for environmentally friendly assets.", card_seba: "Cash Grant (SEBA)", card_seba_desc: "Direct subsidy for e-vans.", card_slim: "Learning Grant (SLIM)", card_slim_desc: "Budget for staff development." },
            step6: { title: "Next Steps", msg: "Don't let this expire.", btn_esg: "Create Compliance Report", btn_acc: "Export for Accountant", btn_consult: "Talk to an Expert" },
            next: "Analyze", back: "Back", yes: "Yes", no: "No"
        },
        choice: { title: "Hello,", subtitle: "What is your priority today?", card1_title: "Value Finder", card1_desc: "Identify subsidies and financial leaks.", card1_btn: "Start Scan", card2_title: "ESG & VSME Reporter", card2_desc: "Generate sustainability reports for banks/partners.", card2_btn: "Start Report" }
    },
    nl: {
        nav: { solutions: "Oplossingen", pillars: "Ecosysteem", news: "Nieuws", subsidy_guide: "De Reis", contact: "Contact" },
        hero: {
            title: "Het Besturingssysteem voor de Duurzame Aftermarket",
            subtitle: "Verenigt Garages, Netwerken en Grossiers. Wij zetten compliance data om in winst, duurzaamheid in strategie, en chaos in inzicht.",
            cta: "Ontdek Ecosysteem Oplossingen",
            trust: "Vertrouwd door de gehele Nederlandse keten: Van Werkplaats tot Bestuurskamer."
        },
        stats: {
            stat1: "€2.4M+ Waarde Gecreëerd",
            stat2: "150+ Partners Aangesloten",
            stat3: "CSRD-Klaar Data"
        },
        roles: {
            title: "Kies uw positie in het ecosysteem",
            section_operational: "Operationele Excellentie (Garage Niveau)",
            section_strategic: "Strategisch Leiderschap (Netwerk Niveau)",
            garage_owner: "Garagehouder",
            advisor: "Service Adviseur",
            mechanic: "Monteur",
            warehouse: "Magazijn Manager",
            financial: "Boekhouder / Admin",
            formula_manager: "Formule Manager",
            association: "Branchevereniging (BOVAG)",
            wholesaler: "Grossier / Distributeur"
        },
        solutions: { title: "Uw Digitale Gereedschapskist", back: "Kies een andere rol", cta_button: "Start Pilot", cta_desc: "Klaar voor optimalisatie?" },
        pillars: {
            title: "Eén Platform, Vier Waardepijlers",
            subtitle: "Hoe wij de industrie vooruit helpen in lijn met Nederlandse doelen.",
            p1_title: "Winst & Subsidies",
            p1_desc: "Automatische scan voor MIA/Vamil, SEBA en SLIM. Laat geen overheidsgeld liggen.",
            p2_title: "Duurzaamheid & ESG",
            p2_desc: "VSME & CSRD rapportage eenvoudig gemaakt. Volg CO2, afval en circulariteit voor bankleningen.",
            p3_title: "Operationele Efficiëntie",
            p3_desc: "Digitale tools voor monteurs en magazijn. Verminder fouten en logistieke verliezen (Cores).",
            p4_title: "Strategische Intelligentie",
            p4_desc: "Real-time benchmarking en trendanalyse voor netwerken om de markt te leiden."
        },
        news: {
            title: "Marktintelligentie & Regelgeving",
            subtitle: "Blijf voor op Nederlandse wetten, EU-richtlijnen en tech trends.",
            read_more: "Lees Analyse",
            items: [
                {
                    title: "Zero-Emission Zones 2025: Impact",
                    date: "10 Dec 2024",
                    source: "NexMotive Intelligence",
                    desc: "Hoe de nieuwe ZE-zones in 30 steden uw vlootklanten en onderdelenlogistiek raken.",
                    link: "#"
                },
                {
                    title: "CSRD voor MKB: Het Doorsijpel-effect",
                    date: "05 Nov 2024",
                    source: "EFRAG / NBA",
                    desc: "Grossiers eisen nu Scope 3 data. Hoe garages dit automatisch kunnen leveren zonder admin stress.",
                    link: "#"
                },
                {
                    title: "Subsidie Alert: SEBA Sluit",
                    date: "12 Okt 2024",
                    source: "RVO.nl",
                    desc: "Laatste kans om tot €5.000 te claimen voor elektrische bestelwagens voordat de pot leeg is.",
                    link: "#"
                }
            ]
        },
        roadmap: {
            title: "Het Pad naar een Toekomstbestendig Bedrijf",
            subtitle: "Of u nu auto's repareert of een netwerk beheert, zo upgraden wij u.",
            step1: "Verbind & Scan",
            step1_desc: "Koppel uw DMS of inkoopdata. Wij scannen op verborgen kansen (Geld/Efficiëntie).",
            step2: "Analyseer & Benchmark",
            step2_desc: "AI vergelijkt uw prestaties met de markt. Identificeer gaten in ESG of Winst.",
            step3: "Optimaliseer & Voldoe",
            step3_desc: "Actiegerichte tools: Genereer ESG-rapporten, vraag subsidies aan of train personeel.",
            step4: "Groei & Rapporteer",
            step4_desc: "Toon uw 'Groene Score' aan klanten en banken. Ontgrendel betere financiering.",
            cta: "Start Uw Reis"
        },
        trust_badges: { iso: "ISO 27001 Beveiligd", gdpr: "AVG Proof", csrd: "CSRD Uitgelijnd" },
        testimonials: {
            title: "Vertrouwd door Koplopers",
            t1_quote: "NexMotive heeft onze subsidieaanvragen volledig getransformeerd. Het is geautomatiseerde omzet.",
            t1_author: "Jan de Vries, Garagehouder",
            t2_quote: "De ESG-rapportagetool bespaarde ons weken aan consultantskosten. Essentieel voor onze toekomst.",
            t2_author: "Sarah Jansen, Vlootbeheerder"
        },
        form: {
            title: "Sluit aan bij het Ecosysteem",
            subtitle: "Vraag een demo op maat voor uw specifieke rol in de aftermarket.",
            name: "Volledige naam",
            email: "Zakelijk E-mailadres",
            company: "Bedrijfsnaam / Organisatie",
            city: "Stad",
            role: "Uw Rol",
            role_placeholder: "Selecteer uw rol...",
            role_other: "Anders (specificeer a.u.b.)",
            custom_role_placeholder: "bijv. Beleidsmaker",
            newsletter: "Stuur mij de whitepaper 'Aftermarket 2030'.",
            submit: "Vraag Toegang",
            success: "Bedankt. We analyseren uw profiel voor de beste tools..."
        },
        footer: { rights: "© 2024 NexMotive Nederland. Empowering the Transition." },
        tool: {
            step1: {
                title: "Digitale ID Check",
                msg: "Laten we eerst uw digitale gereedheid verifiëren.",
                q: "Heeft u eHerkenning niveau 3 (EH3)?",
                yes: "Ja",
                no: "Nee",
                alert: "U heeft dit nodig voor RVO. Wij kunnen helpen bij de aanvraag."
            },
            step2: {
                title: "Investerings Timing",
                msg: "Timing is alles voor fiscale voordelen.",
                q: "Heeft u de afgelopen 3 maanden grote investeringen gedaan (Apparatuur/Training)?",
                yes: "Ja",
                no: "Nee"
            },
            step3: {
                title: "Focusgebieden",
                msg: "Waar ligt uw huidige focus?",
                opt_ev: "Elektrificatie (EV Tools/Infra)",
                opt_fleet: "Logistiek (Zero Emission Vloot)",
                opt_building: "Energie (Warmtepomp/Zon)",
                opt_training: "Menselijk Kapitaal (Skills)",
                q_ev: "Investering > €2.500?",
                q_fleet_electric: "Volledig elektrisch?",
                q_fleet_weight: "> 2500kg?",
                q_training: "< 50 FTE?"
            },
            step5: {
                title: "Uw Potentiële Waarde",
                msg: "Op basis van uw profiel kunt u ontgrendelen:",
                card_mia: "Fiscaal Voordeel (MIA/Vamil)",
                card_mia_desc: "Belastingaftrek voor milieuvriendelijke bedrijfsmiddelen.",
                card_seba: "Cash Subsidie (SEBA)",
                card_seba_desc: "Directe subsidie voor e-bestelauto's.",
                card_slim: "Leerbudget (SLIM)",
                card_slim_desc: "Budget voor personeelsontwikkeling en training."
            },
            step6: {
                title: "Volgende Stappen",
                msg: "Laat dit niet verlopen.",
                btn_esg: "Maak Compliance Rapport",
                btn_acc: "Exporteer voor Boekhouder",
                btn_consult: "Spreek met een Expert"
            },
            next: "Analyseer",
            back: "Terug",
            yes: "Ja",
            no: "Nee"
        },
        choice: {
            title: "Welkom,",
            subtitle: "Wat is uw prioriteit vandaag?",
            card1_title: "Waarde Zoeker",
            card1_desc: "Identificeer subsidies en financiële lekken.",
            card1_btn: "Start Scan",
            card2_title: "ESG & VSME Reporter",
            card2_desc: "Genereer duurzaamheidsrapporten voor banken/partners.",
            card2_btn: "Start Rapport"
        }
    }
};

export const opportunities: Record<string, Opportunity[]> = {
    garage_owner: [
        { id: 1, icon: <Euro className="w-8 h-8 text-yellow-500" />, title: { en: "Subsidy Radar", nl: "Subsidie Radar" }, pain: { en: "Collect money left on the table.", nl: "Geld van tafel rapen." }, desc: { en: "Scans monthly purchases for eligibility. Notification: 'You qualify for €2000 subsidy, click to claim'.", nl: "Scant maandelijkse aankopen. Melding: 'U komt in aanmerking voor €2000 subsidie, klik om te claimen'." }, tag: { en: "Cash-back", nl: "Cash-back" } },
        { id: 2, icon: <ShieldCheck className="w-8 h-8 text-green-500" />, title: { en: "Compliance Health", nl: "Compliance Gezondheid" }, pain: { en: "Fear of fines and shutdowns.", nl: "Angst voor boetes en sluiting." }, desc: { en: "Visual dashboard for permits, licenses (APK), and insurance status. Stop worrying about fines.", nl: "Visueel dashboard voor vergunningen, licenties (APK) en verzekeringen. Geen zorgen meer over boetes." }, tag: { en: "Risk Free", nl: "Risicovrij" } },
        { id: 3, icon: <FileBarChart className="w-8 h-8 text-blue-500" />, title: { en: "Auto-VSME Report", nl: "Auto-VSME Rapport" }, pain: { en: "Bank loan paperwork headaches.", nl: "Hoofdpijn van bankpapieren." }, desc: { en: "One-click PDF generation of energy and purchase data for banks or leasing companies.", nl: "Genereer met één klik een PDF van energie- en inkoopdata voor banken of leasemaatschappijen." }, tag: { en: "Credit", nl: "Krediet" } },
        { id: 4, icon: <PieChart className="w-8 h-8 text-purple-500" />, title: { en: "Real Profit Check", nl: "Winst Checker" }, pain: { en: "Guessing which repair makes money.", nl: "Gokken welke reparatie geld oplevert." }, desc: { en: "See net profit per bay or mechanic. Data-driven decisions to cut low-margin work.", nl: "Zie nettowinst per brug of monteur. Datagestuurde beslissingen om onrendabel werk te schrappen." }, tag: { en: "Insight", nl: "Inzicht" } }
    ],
    advisor: [
        { id: 5, icon: <Video className="w-8 h-8 text-blue-600" />, title: { en: "Visual Quote", nl: "Visuele Offerte" }, pain: { en: "Winning customer trust instantly.", nl: "Direct klantvertrouwen winnen." }, desc: { en: "Send a 15s mechanic video to WhatsApp with a price and 'Approve' button. Increase upsell by 30%.", nl: "Stuur een 15s video naar WhatsApp met prijs en 'Akkoord' knop. Verhoog upsell met 30%." }, tag: { en: "Trust", nl: "Vertrouwen" } },
        { id: 6, icon: <Database className="w-8 h-8 text-indigo-600" />, title: { en: "ROB-Bot", nl: "ROB-Bot" }, pain: { en: "Lease portal complexity.", nl: "Complexiteit van leaseportalen." }, desc: { en: "Hides ROB-Net complexity. Tracks approval status in real-time. Free up your phone line.", nl: "Verbergt ROB-Net complexiteit. Volgt goedkeuringsstatus in realtime. Houd uw telefoonlijn vrij." }, tag: { en: "Time", nl: "Tijd" } },
        { id: 7, icon: <CheckCircle className="w-8 h-8 text-green-600" />, title: { en: "Customer Green Card", nl: "Klant Groene Kaart" }, pain: { en: "Customer loyalty retention.", nl: "Klantbehoud." }, desc: { en: "Beautiful report for the client: 'You saved 50kg CO2 by repairing'. A powerful marketing tool.", nl: "Mooi rapport voor de klant: 'U heeft 50kg CO2 bespaard'. Een krachtige marketingtool." }, tag: { en: "Marketing", nl: "Marketing" } },
        { id: 8, icon: <HelpCircle className="w-8 h-8 text-orange-500" />, title: { en: "QA Assist", nl: "Vraagbaak Assistent" }, pain: { en: "Explaining technical needs.", nl: "Technische noodzaak uitleggen." }, desc: { en: "Quick simplified technical data to explain why a part needs replacement.", nl: "Snelle vereenvoudigde technische data om uit te leggen waarom een onderdeel vervangen moet worden." }, tag: { en: "Professional", nl: "Professioneel" } }
    ],
    mechanic: [
        { id: 9, icon: <Mic className="w-8 h-8 text-red-500" />, title: { en: "Voice-to-Text Log", nl: "Spraak-Logboek" }, pain: { en: "Typing with greasy hands.", nl: "Typen met vette handen." }, desc: { en: "Record repair notes by voice. AI converts it to technical text in the car file. Goodbye keyboard.", nl: "Spreek reparatienotities in. AI zet het om naar technische tekst in het dossier. Vaarwel toetsenbord." }, tag: { en: "Hands-free", nl: "Hands-free" } },
        { id: 10, icon: <QrCode className="w-8 h-8 text-blue-500" />, title: { en: "Just-in-Time Learning", nl: "Direct Leren" }, pain: { en: "Breaking expensive parts.", nl: "Dure onderdelen breken." }, desc: { en: "Scan QR on car/part to watch a 3-min specific install video. Prevent errors.", nl: "Scan QR op auto/onderdeel voor een specifieke 3-min installatievideo. Voorkom fouten." }, tag: { en: "Safety", nl: "Veiligheid" } },
        { id: 11, icon: <Smartphone className="w-8 h-8 text-purple-500" />, title: { en: "Remote Expert", nl: "Expert op Afstand" }, pain: { en: "Stuck on complex issues.", nl: "Vastlopen op complexe problemen." }, desc: { en: "Help button opens camera. Remote expert draws on screen to guide you.", nl: "Hulpknop opent camera. Expert tekent op scherm om u te begeleiden." }, tag: { en: "Support", nl: "Ondersteuning" } },
        { id: 12, icon: <ListChecks className="w-8 h-8 text-green-500" />, title: { en: "Smart Checklist", nl: "Slimme Checklist" }, pain: { en: "Forgetting steps during APK.", nl: "Stappen vergeten tijdens APK." }, desc: { en: "Digital checklist with large touch buttons. Faster work, zero forgotten bolts.", nl: "Digitale checklist met grote aanraakknoppen. Sneller werken, geen vergeten bouten." }, tag: { en: "Speed", nl: "Snelheid" } }
    ],
    warehouse: [
        { id: 13, icon: <RefreshCw className="w-8 h-8 text-red-600" />, title: { en: "Core Bounty Hunter", nl: "Statiegeld Jager" }, pain: { en: "Losing money on returns.", nl: "Geld verliezen op retouren." }, desc: { en: "Dashboard turns red: 'Return Part X by tomorrow or lose €50'. Stop revenue leakage.", nl: "Dashboard wordt rood: 'Stuur Onderdeel X morgen terug of verlies €50'. Stop inkomstenlekkage." }, tag: { en: "Profit", nl: "Winst" } },
        { id: 14, icon: <Barcode className="w-8 h-8 text-blue-600" />, title: { en: "Part Matcher Scanner", nl: "Onderdeel Matcher" }, pain: { en: "Wrong parts delivered.", nl: "Verkeerde onderdelen geleverd." }, desc: { en: "Scan barcode upon arrival. Instant beep if it doesn't match the order. Reduce car downtime.", nl: "Scan barcode bij aankomst. Directe piep als het niet matcht. Verminder stiltstand." }, tag: { en: "Accuracy", nl: "Precisie" } },
        { id: 15, icon: <Grid className="w-8 h-8 text-orange-600" />, title: { en: "Tire Hotel Map", nl: "Bandenhotel Kaart" }, pain: { en: "Lost tires in warehouse.", nl: "Banden kwijt in magazijn." }, desc: { en: "Visual map showing exact location of customer tires + alerts for worn tires (Sales lead).", nl: "Visuele kaart met exacte locatie van klantbanden + meldingen voor versleten banden (Verkoopkans)." }, tag: { en: "Organized", nl: "Georganiseerd" } }
    ],
    financial: [
        { id: 16, icon: <RefreshCw className="w-8 h-8 text-blue-600" />, title: { en: "Auto-Sync", nl: "Auto-Sync" }, pain: { en: "Manual data entry hate.", nl: "Haat aan handmatige invoer." }, desc: { en: "Connects all operations (parts, hours) to SnelStart/Exact. No more manual entry.", nl: "Verbindt alle operaties (onderdelen, uren) met SnelStart/Exact. Geen handmatige invoer meer." }, tag: { en: "Automation", nl: "Automatisering" } },
        { id: 17, icon: <Trash2 className="w-8 h-8 text-green-600" />, title: { en: "Digital Waste Log", nl: "Digitaal Afval Log" }, pain: { en: "Environmental audit stress.", nl: "Stress voor milieu-audit." }, desc: { en: "Digital archive of all disposal receipts. Always Audit Ready for inspectors.", nl: "Digitaal archief van alle afvoerbewijzen. Altijd Audit Ready voor inspecteurs." }, tag: { en: "Compliance", nl: "Naleving" } },
        { id: 18, icon: <Receipt className="w-8 h-8 text-purple-600" />, title: { en: "Purchase Match", nl: "Inkoop Match" }, pain: { en: "Missing invoices.", nl: "Ontbrekende facturen." }, desc: { en: "Auto-match LKQ purchase invoices with parts used on customer cars. Zero leakage.", nl: "Match automatisch LKQ-inkoopfacturen met gebruikte onderdelen. Nul lekkage." }, tag: { en: "Control", nl: "Controle" } }
    ],
    formula_manager: [
        { id: 19, icon: <Network className="w-8 h-8 text-indigo-600" />, title: { en: "Network Subsidy Engine", nl: "Netwerk Subsidie Motor" }, pain: { en: "Garage retention", nl: "Garage behoud" }, desc: { en: "Central dashboard showing '50 garages eligible for SLIM'. Bulk application tools.", nl: "Centraal dashboard toont '50 garages in aanmerking voor SLIM'. Bulk aanvraag tools." }, tag: { en: "Retention", nl: "Behoud" } },
        { id: 20, icon: <ShieldCheck className="w-8 h-8 text-teal-600" />, title: { en: "Brand Compliance", nl: "Merk Naleving" }, pain: { en: "Manual quality checks", nl: "Handmatige kwaliteitscontroles" }, desc: { en: "Auto-scoring of garages based on recycling and training data. No physical inspector needed.", nl: "Auto-scoring van garages op basis van recycling en training data. Geen inspecteur nodig." }, tag: { en: "Quality", nl: "Kwaliteit" } },
        { id: 21, icon: <Building2 className="w-8 h-8 text-green-600" />, title: { en: "Green Marketing Hub", nl: "Groene Marketing Hub" }, pain: { en: "Brand differentiation", nl: "Merk differentiatie" }, desc: { en: "Aggregate circularity data for national TV campaigns: 'Our network emits 30% less CO2'.", nl: "Verzamel circulariteitsdata voor TV campagnes: 'Ons netwerk stoot 30% minder CO2 uit'." }, tag: { en: "Growth", nl: "Groei" } },
        { id: 22, icon: <FileBarChart className="w-8 h-8 text-purple-600" />, title: { en: "Performance Benchmark", nl: "Prestatie Benchmark" }, pain: { en: "Underperforming locations", nl: "Slecht presterende locaties" }, desc: { en: "Compare garage energy/waste data against network average to offer specific advice.", nl: "Vergelijk energie/afval data met netwerk gemiddelde voor specifiek advies." }, tag: { en: "Data", nl: "Data" } }
    ],
    association: [
        { id: 23, icon: <FileText className="w-8 h-8 text-indigo-600" />, title: { en: "Industry Pulse Report", nl: "Industrie Puls Rapport" }, pain: { en: "Lobbying power", nl: "Lobbykracht" }, desc: { en: "Real-time anonymous data from the market floor for negotiations with lawmakers in The Hague.", nl: "Real-time anonieme data van de werkvloer voor onderhandelingen in Den Haag." }, tag: { en: "Lobby", nl: "Lobby" } },
        { id: 24, icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />, title: { en: "Self-Audit Tool", nl: "Zelf-Audit Tool" }, pain: { en: "Fine prevention", nl: "Boete preventie" }, desc: { en: "Digital checklists (ZE Zones, GDPR) branded for members to pre-check before inspections.", nl: "Digitale checklists (ZE Zones, AVG) voor leden om te checken voor inspectie." }, tag: { en: "Compliance", nl: "Naleving" } },
        { id: 25, icon: <TrendingUp className="w-8 h-8 text-purple-600" />, title: { en: "Tech Trend Watch", nl: "Tech Trend Watch" }, pain: { en: "Targeted training", nl: "Gerichte training" }, desc: { en: "Analyze common DTCs (errors) to identify exact training needs for the industry.", nl: "Analyseer veelvoorkomende foutcodes om trainingsbehoeften te identificeren." }, tag: { en: "Insight", nl: "Inzicht" } }
    ],
    wholesaler: [
        { id: 26, icon: <RefreshCw className="w-8 h-8 text-indigo-600" />, title: { en: "Smart Core Management", nl: "Slim Core Beheer" }, pain: { en: "Logistics losses", nl: "Logistieke verliezen" }, desc: { en: "API connection triggers reminder to garage: 'New part sold, return old core now'.", nl: "API-koppeling stuurt herinnering: 'Nieuw onderdeel verkocht, stuur oude retour'." }, tag: { en: "Logistics", nl: "Logistiek" } },
        { id: 27, icon: <Factory className="w-8 h-8 text-green-600" />, title: { en: "Scope 3 Collector", nl: "Scope 3 Verzamelaar" }, pain: { en: "CSRD Compliance", nl: "CSRD Naleving" }, desc: { en: "Automated collection of carbon footprint data from garage customers for your annual report.", nl: "Geautomatiseerde verzameling van CO2-data van klanten voor uw jaarverslag." }, tag: { en: "CSRD", nl: "CSRD" } },
        { id: 28, icon: <Award className="w-8 h-8 text-yellow-500" />, title: { en: "Green Parts Gamification", nl: "Groene Onderdelen Spel" }, pain: { en: "Selling reman parts", nl: "Verkoop reman onderdelen" }, desc: { en: "Points system: 'Buying this Reman alternator boosts your Green Score by 5 points'.", nl: "Puntensysteem: 'Koop deze Reman dynamo en verhoog uw Groene Score met 5'." }, tag: { en: "Sales", nl: "Verkoop" } }
    ]
};
