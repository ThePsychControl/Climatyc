
import React from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  Globe, 
  FileText, 
  Users, 
  BarChart3, 
  ScrollText, 
  Building2 
} from 'lucide-react';
import { Program, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Programs', href: '#programs' },
  { label: 'Research', href: '#research' },
  { label: 'Policy Hub', href: '#policy' },
  { label: 'Chapters', href: '#chapters' },
  { label: 'Advisor', href: '#advisor' },
];

export const PROGRAMS: Program[] = [
  {
    id: 'research-labs',
    title: 'Research Fellowships',
    description: 'Collaborative scientific and social research programs that produce peer-reviewed quality climate data.',
    icon: 'BookOpen',
    category: 'Research'
  },
  {
    id: 'climate-audits',
    title: 'Institutional Audits',
    description: 'Structured methodologies for students to assess and report on the carbon footprint of their local schools and businesses.',
    icon: 'ShieldCheck',
    category: 'Action'
  },
  {
    id: 'policy-sims',
    title: 'Model Climate Summits',
    description: 'High-stakes diplomatic simulations where students negotiate real-world climate accords and draft binding legislation.',
    icon: 'Globe',
    category: 'Diplomacy'
  },
  {
    id: 'government-reports',
    title: 'White Paper Bureau',
    description: 'Synthesizing youth research into professional policy briefs for local and national government representatives.',
    icon: 'FileText',
    category: 'Policy'
  }
];

export const PILLARS = [
  {
    title: "Action",
    description: "Beyond marches. We conduct audits, implement solutions, and document physical change.",
    icon: <BarChart3 className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Research",
    description: "Evidence-based advocacy. We train youth to be data-driven climate scientists and sociologists.",
    icon: <BookOpen className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Policy",
    description: "Writing the future. We translate climate needs into legislative language that leaders can use.",
    icon: <ScrollText className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Diplomacy",
    description: "Global cooperation. Mastering the art of negotiation to solve cross-border environmental challenges.",
    icon: <Building2 className="w-6 h-6 text-emerald-600" />
  }
];
