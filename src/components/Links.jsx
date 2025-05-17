import { SiUpwork } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

import { useTranslation } from 'react-i18next';
import { personalInfo } from '../config';

/**
 *  Links component
 * Displays links to the developer's social media and freelancing profiles.
 * 
 * @returns {JSX.Element}
 */
const Links = () => {
  const { t } = useTranslation();

  const links = [
    { icon: <FaLinkedin  size={30} />, url: `https://linkedin.com/in/${personalInfo.linkedin}`, name: "LinkedIn" },
    { icon: <FaGithub size={30} />, url: `https://github.com/${personalInfo.github}`, name: "GitHub" },
    { icon: <SiUpwork size={30} />, url: `https://www.upwork.com/freelancers/~${personalInfo.upwork}`, name: "Upwork" },
    { icon: <SiFiverr  size={30} />, url: `https://www.fiverr.com/${personalInfo.fiverr}`, name: "Fiverr" },
  ];

   return (
    <section id="links" className="my-8">
      <h2 className="text-2xl font-bold text-orange-900 mb-4">{t('findMe')}</h2>
      <p className="text-gray-700 mb-4 max-w-xl">
        {t('freelancingNote')}
      </p>
      <div className="flex gap-6 ">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-gray-700 hover:text-orange-500 transition-colors transform hover:scale-150 transition-transform duration-200"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Links;