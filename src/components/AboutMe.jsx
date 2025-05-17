import { useTranslation } from 'react-i18next';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="my-4">
      <h2 className="text-2xl font-bold text-orange-900 mb-4">{t('about')}</h2>
      <p className="mb-4">
        {t('aboutIntro')}
      </p>      
      <p className="mb-4">
        {t('aboutDetails')}
      </p>           
    </section>
  );
};

export default AboutMe;