import React from 'react';
import { Mail, Phone, MapPin } from "lucide-react";
import { portalData } from '../data/content';

export default function Footer() {
  return (
    <footer className="bg-gov-blue text-slate-200 py-12 border-t-4 border-gov-accent relative z-10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg tracking-wider">BIPARD</h4>
            <p className="text-sm leading-relaxed text-blue-200">
              Bihar Institute of Public Administration & Rural Development
            </p>
            <div className="flex items-start gap-2 text-sm text-blue-200 mt-2">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <p>{portalData.contact.address}</p>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg tracking-wider">USEFUL LINKS</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gov-accent rounded-full"></span> Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-gov-accent rounded-full"></span> Refund Policy</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold text-lg tracking-wider">CONTACT</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gov-accent" />
                <a href={`mailto:${portalData.contact.email}`} className="hover:text-white transition-colors break-all">
                  {portalData.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gov-accent" />
                <span>{portalData.contact.phone}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-blue-800 text-center text-xs text-blue-300">
          <p>Copyright © {new Date().getFullYear()} Codebucket Solutions Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}