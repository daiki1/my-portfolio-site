import { useTranslation } from 'react-i18next';
import { personalInfo } from '../config';

/**
 *  Footer component
 * Displays the footer of the website with copyright information.
 * 
 * @returns {JSX.Element}
 */
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center text-sm text-gray-500 my-8">
      &copy; {new Date().getFullYear()} {personalInfo.name}. {t('allRightsReserved')}
    </footer>
  );
};

export default Footer;