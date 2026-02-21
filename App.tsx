
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import Programs from './components/Programs';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Programs />
        
        {/* Chapters Callout Section */}
        <section id="chapters" className="py-24 bg-emerald-600 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Join the global network of chapters.</h2>
            <p className="text-emerald-50 text-xl max-w-2xl mx-auto mb-10 opacity-90">
              Start a Climatyc chapter in your city or school and gain access to our institutional auditing toolkits and policy templates.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/20">
                Register a New Chapter
              </button>
              <button className="bg-emerald-700 text-white border border-emerald-500 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-800 transition-all">
                Find Nearby Chapters
              </button>
            </div>
          </div>
        </section>

        <AIAssistant />

        {/* Impact Stats */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Documented Reports', value: '450+' },
                { label: 'Active Chapters', value: '120' },
                { label: 'Countries Reached', value: '45' },
                { label: 'Policy Adoptions', value: '12' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-8 bg-slate-50 rounded-3xl border border-slate-100">
                  <div className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-emerald-600 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
