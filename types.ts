import { ReactNode } from 'react';

export type Language = 'en' | 'nl';

export type ViewState = 'landing' | 'choice' | 'subsidy_tool' | 'vsme_tool';

export interface FormData {
  name: string;
  email: string;
  company: string;
  city: string;
  role: string;
  customRole: string;
  newsletter: boolean;
}

export interface Opportunity {
  id: number;
  icon: ReactNode;
  title: Record<Language, string>;
  pain: Record<Language, string>;
  desc: Record<Language, string>;
  tag: Record<Language, string>;
}

export interface SubsidyResult {
  type: string;
  title: string;
  desc: string;
}

export interface VSMEData {
  isListed: string;
  reportPurpose: string;
  hasPolicies: string;
  b1_name: string; b1_basis: string; b1_legal_form: string; b1_nace: string; b1_country: string; b1_turnover: string; b1_employees: string;
  b2_practices: string;
  b3_energy_total: string; b3_energy_ren: string; b3_energy_nonren: string; b3_scope1: string; b3_scope2: string;
  b4_pollution: string; b5_sensitive: string; b6_water: string; b7_waste_haz: string; b7_waste_recycled: string;
  b8_perm: string; b8_temp: string; b8_female: string; b9_accidents: string; b10_minwage: string;
  b11_convictions: string; b11_fines: string;
  bp_code: string; bp_grievance: string; bp_payment: string; bp_excluded_rev: string; bp_scope3_status: string; bp_climate_risks: string;
  c1_strategy: string; c2_policies: string; c3_targets: string; c4_risks: string; c5_mgmt_gender: string; c6_policy: string; c7_incidents: string; c8_revenue: string; c9_board_gender: string;
}

export interface SubsidyData {
    hasEH3: boolean | null;
    recentPurchase: boolean | null;
    categories: string[];
    invoiceValue: boolean | null;
    isElectricVehicle: boolean | null;
    isHeavyVehicle: boolean | null;
    smallStaff: boolean | null;
}
