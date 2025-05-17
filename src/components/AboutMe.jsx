import { useTranslation } from 'react-i18next';

/**
 *  AboutMe component
 *  Displays information about the developer.
 * 
 * @returns {JSX.Element}
 */
const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="my-4">
      <h2 className="text-2xl font-bold text-orange-900 mb-4">{t('about')}</h2>
      <p className="mb-4 text-justify">
        {t('aboutIntro')}
      </p>      
      <p className="mb-4 text-justify">
        {t('aboutDetails')}
      </p>           
    </section>
  );
};

export default AboutMe;