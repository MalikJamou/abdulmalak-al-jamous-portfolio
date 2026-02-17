import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Projects() {
  const { t, dir } = useLanguage();
  useDocumentTitle(t.labels.pageTitles.projects);

  return (
    <>
      <h1 className="sr-only">{t.labels.projectsTitle}</h1>
      <Section
        title={t.labels.projectsTitle}
        subtitle="A selection of work I've completed for clients and personal growth"
        dir={dir}
      >
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${dir === 'rtl' ? 'text-right' : ''}`}>
          {t.projects.map((project, index) => (
            <ProjectCard key={index} {...project} dir={dir} />
          ))}
        </div>
      </Section>
    </>
  );
}
