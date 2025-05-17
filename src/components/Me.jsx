import { useTranslation } from 'react-i18next';
import { personalInfo } from '../config';

const Me = () => {
  const { t } = useTranslation();

  return (
    <>
        <h1 className="text-4xl font-bold text-orange-500">{personalInfo.name}</h1>
        <p className="text-xl mt-2">{t('title')}</p>
        <p className="mt-2 text-sm italic text-gray-600">
            {t('tagline')}
        </p>
    </>
  );
};

export default Me;