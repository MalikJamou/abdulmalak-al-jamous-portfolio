import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, dir } = useLanguage();

  return (
    <footer className="border-t border-gray-200 bg-slate-50 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
          {/* Branding */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Portfolio</h3>
            <p className="text-slate-600">Building scalable systems and modern web applications.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="/" className="hover:text-slate-900 transition">{t.nav.home}</a></li>
              <li><a href="/projects" className="hover:text-slate-900 transition">{t.nav.projects}</a></li>
              <li><a href="/about" className="hover:text-slate-900 transition">{t.nav.about}</a></li>
              <li><a href="/contact" className="hover:text-slate-900 transition">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="mailto:abdulmalak.aljamous@gmail.com" className="hover:text-slate-900 transition">abdulmalak.aljamous@gmail.com</a></li>
              <li><a href="https://www.linkedin.com/in/abdulmalak-al-jamous-796aa019b/" className="hover:text-slate-900 transition" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/MalikJamou" className="hover:text-slate-900 transition" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t border-gray-300 pt-8 text-center text-slate-600 ${dir === 'rtl' ? 'text-right' : ''}`}>
          <p>&copy; {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
