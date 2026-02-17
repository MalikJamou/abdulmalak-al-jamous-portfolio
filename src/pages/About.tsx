import Section from '../components/Section';
import SkillGroup from '../components/SkillGroup';
import { useLanguage } from '../context/LanguageContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function About() {
  const { t, dir } = useLanguage();
  useDocumentTitle(t.labels.pageTitles.about);

  return (
    <>
      <h1 className="sr-only">{t.labels.aboutTitle}</h1>
      {/* About Section */}
      <Section title={t.labels.aboutTitle} dir={dir}>
        <div className={`max-w-3xl ${dir === 'rtl' ? 'text-right' : ''}`}>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {t.about}
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            {t.bio}
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section title={t.labels.skillsTitle} dir={dir}>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ${dir === 'rtl' ? 'text-right' : ''}`}>
          <SkillGroup
            title={t.labels.programming}
            skills={t.skills.programming}
            dir={dir}
          />
          <SkillGroup
            title={t.labels.backend}
            skills={t.skills.backend}
            dir={dir}
          />
          <SkillGroup
            title={t.labels.frontend}
            skills={t.skills.frontend}
            dir={dir}
          />
          <SkillGroup
            title={t.labels.cloudDevOps}
            skills={t.skills.cloudDevOps}
            dir={dir}
          />
          <SkillGroup
            title={t.labels.aiAutomation}
            skills={t.skills.aiAutomation}
            dir={dir}
          />
          <SkillGroup
            title={t.labels.infrastructure}
            skills={t.skills.infrastructure}
            dir={dir}
          />
        </div>
      </Section>
    </>
  );
}
