import Section from '../components/Section';
import CTA from '../components/CTA';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Home() {
  const navigate = useNavigate();
  const { t, dir } = useLanguage();
  useDocumentTitle(t.labels.pageTitles.home);

  return (
    <>
      {/* Hero Section */}
      <section className={`py-20 sm:py-32 ${dir === 'rtl' ? 'text-right' : 'text-center'}`}>
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-4">
            Abdulmalak Al Jamous
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 font-medium">
            Software Engineer (Full Stack) | Backend & Cloud Systems
          </p>
        </div>
        <p className={`text-lg text-slate-600 max-w-2xl mx-auto mb-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
          {t.bio}
        </p>
        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${dir === 'rtl' ? 'justify-end' : ''}`}>
          <button
            onClick={() => navigate('/contact')}
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Get In Touch
          </button>
          <button
            onClick={() => navigate('/projects')}
            type="button"
            className="border-2 border-slate-900 text-slate-900 hover:bg-slate-50 font-semibold px-8 py-3 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            View My Work
          </button>
        </div>
      </section>

      {/* Services Section */}
      <Section title={t.labels.servicesTitle} subtitle="What I can help you with" dir={dir}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.map((service, index) => (
            <div key={index} className={`p-6 border border-gray-200 rounded-lg hover:shadow-lg transition ${dir === 'rtl' ? 'text-right' : ''}`}>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-slate-900 text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <CTA
          headline={t.cta.headline}
          text={t.cta.text}
          button={t.cta.button}
          onAction={() => navigate('/contact')}
        />
      </Section>
    </>
  );
}
