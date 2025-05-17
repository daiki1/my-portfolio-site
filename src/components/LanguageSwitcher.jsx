import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 flex space-x-2 bg-white bg-opacity-80 rounded shadow p-1 select-none z-50">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-1 rounded ${
          i18n.language === 'en' 
            ? 'bg-orange-500 text-white' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-3 py-1 rounded ${
          i18n.language === 'es' 
            ? 'bg-orange-500 text-white' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Español
      </button>
    </div>
  );
};

export default LanguageSwitcher;