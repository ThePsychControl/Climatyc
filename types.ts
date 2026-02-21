
export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Action' | 'Research' | 'Policy' | 'Diplomacy';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
