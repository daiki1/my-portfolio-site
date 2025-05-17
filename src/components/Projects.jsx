import { useTranslation } from 'react-i18next';
import { projectsMeta  } from '../config';

const Projects = () => {
  const { t } = useTranslation();
  const translatedProjects  = t("projectsList", { returnObjects: true });
  const projects = projectsMeta.map(meta => ({
    ...meta,
    ...translatedProjects[meta.id],
  }));

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-orange-900 mb-2">{t('projects')}</h2>
      <p className="mb-4">
        {t('aboutPrivate')}
      </p>
      {
        projects.map((project) => (
          <div key={project.name} className="mb-6">
            <h3 className="text-xl font-semibold text-orange-800">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <ul className="list-disc pl-6 text-gray-800 mt-2 space-y-1">
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a
              href={project.url}
              className="text-orange-600 hover:text-orange-800 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('viewOnGithub')}
            </a>
          </div>
        ))
      }
    </section>
  );
};

export default Projects;