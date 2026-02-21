
import React from 'react';
import { ArrowRight, Microscope, GraduationCap, Gavel } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-emerald-50 border border-emerald-100 px-4 py-1.5 rounded-full mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">From Awareness to Action</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-[1.1]">
          The youth-led move <br />
          to <span className="text-emerald-600">documented</span> climate work.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
          Climatyc empowers students to become professional climate researchers and policy advisors. We don't just protest; we produce the reports, audits, and policies that drive systemic change.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center shadow-lg shadow-emerald-200">
            Start a Research Project <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all">
            Explore Policy Hub
          </button>
        </div>

        {/* Feature grid tags */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Climate Audits', icon: <Microscope className="w-4 h-4" /> },
            { label: 'Policy Papers', icon: <Gavel className="w-4 h-4" /> },
            { label: 'Diplomacy', icon: <GraduationCap className="w-4 h-4" /> },
            { label: 'Field Research', icon: <Microscope className="w-4 h-4" /> }
          ].map((feature, i) => (
            <div key={i} className="flex items-center justify-center space-x-2 py-3 px-4 bg-white/50 border border-slate-100 rounded-xl">
              <span className="text-emerald-600">{feature.icon}</span>
              <span className="text-sm font-semibold text-slate-700">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
