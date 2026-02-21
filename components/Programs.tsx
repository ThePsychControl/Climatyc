
import React from 'react';
import { PROGRAMS } from '../constants';
import { BookOpen, ShieldCheck, Globe, FileText, ChevronRight } from 'lucide-react';

const iconMap: Record<string, any> = {
  BookOpen,
  ShieldCheck,
  Globe,
  FileText
};

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-emerald-600 uppercase tracking-widest mb-2">Impact Programs</h2>
            <p className="text-4xl font-bold text-slate-900 mb-4">Structured paths for every student.</p>
            <p className="text-slate-600">Choose a specialization and start building your climate portfolio.</p>
          </div>
          <button className="text-emerald-600 font-bold hover:translate-x-1 transition-transform flex items-center">
            View Syllabus <ChevronRight className="ml-1 w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROGRAMS.map((program) => {
            const Icon = iconMap[program.icon];
            return (
              <div key={program.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center space-y-6 md:space-y-0 md:space-x-8 group">
                <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded-md tracking-tighter">
                      {program.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{program.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <button className="text-sm font-bold text-slate-900 border-b-2 border-emerald-500 pb-0.5 hover:text-emerald-600 transition-colors">
                    Enroll in Program
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
