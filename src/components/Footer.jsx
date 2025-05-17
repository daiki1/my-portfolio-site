import { useTranslation } from 'react-i18next';
import { personalInfo } from '../config';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center text-sm text-gray-500 my-8">
      &copy; {new Date().getFullYear()} {personalInfo.name}. {t('allRightsReserved')}
    </footer>
  );
};

export default Footer;