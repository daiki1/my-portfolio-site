import { useTranslation } from 'react-i18next';

/**
 * Skills component
 * Displays a list of skills.
 * 
 * @returns {JSX.Element}
 */
const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    'Spring Boot',
    'Java',
    'JSF (JavaServer Faces)',
    'JEE (Enterprise Edition)',
    'Flutter/dart',
    'Laravel',
    'PHP',
    'React',
    'Python',
    'Bootstrap',
    'Tailwind CSS',
    'JavaScript',
    'MySQL',
  ];

  return (
    <section className="my-8 text-justify">
      <h2 className="text-2xl font-bold text-orange-900 mb-2">{t('skills')}</h2>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-orange-100 text-orange-800 px-4 py-2 rounded shadow-md
                 transform hover:scale-105 transition-transform duration-100">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;