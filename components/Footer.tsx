
import React from 'react';
import { Leaf, Twitter, Linkedin, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-600 p-1 rounded-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">CLIMATYC</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs mb-8">
              A global, youth-led institution dedicated to turning climate passion into documented, institutional progress.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-slate-50 text-slate-400 hover:text-emerald-600 rounded-lg transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-50 text-slate-400 hover:text-emerald-600 rounded-lg transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-50 text-slate-400 hover:text-emerald-600 rounded-lg transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Organization</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-emerald-600">Our Mission</a></li>
              <li><a href="#" className="hover:text-emerald-600">Leadership</a></li>
              <li><a href="#" className="hover:text-emerald-600">Chapters</a></li>
              <li><a href="#" className="hover:text-emerald-600">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Programs</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-emerald-600">Research Lab</a></li>
              <li><a href="#" className="hover:text-emerald-600">Policy Hub</a></li>
              <li><a href="#" className="hover:text-emerald-600">Diplomacy Lab</a></li>
              <li><a href="#" className="hover:text-emerald-600">Climate Audits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                <a href="mailto:info@climatyc.org" className="hover:text-emerald-600">info@climatyc.org</a>
              </li>
              <li><a href="#" className="hover:text-emerald-600">Press Kit</a></li>
              <li><a href="#" className="hover:text-emerald-600">Donate</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
            © {new Date().getFullYear()} Climatyc Organization. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-400 font-medium tracking-wide uppercase">
            <a href="#" className="hover:text-emerald-600">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
