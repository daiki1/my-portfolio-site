import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/**
 * * i18n configuration
 * * This file sets up the i18n configuration for the application.
 * * It initializes the i18n instance with language detection, fallback language,
 * * * and translation resources.
 * * The translations are provided in English and Spanish.
 */
i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          title: "Full Stack Developer | Software Engineer",
          tagline: "I love building useful tools and learning new technologies.",
          about: "About Me",
          aboutIntro: "I'm an experienced Full-Stack Developer passionate about innovation, system optimization, and clean, maintainable code. With over 15 years of experience in software development, I specialize in building scalable web applications, integrating systems, and enhancing legacy platforms.",
          aboutDetails: "Programming has always been more than just a job to me—it's a hobby that I’m lucky to do for a living. I enjoy learning new technologies, adapting to different programming standards, and solving complex problems creatively.",
          projects: "Projects",
          aboutPrivate: "Most of my past work has been for private companies, so I’m unable to share source code or client-specific details. However, I'm actively building my public portfolio on GitHub to showcase my skills and coding practices through open projects.",
          projectsList: 
        {
            "springboot-template": {
                name: "Spring Boot API Starter Template",
                description:
                "Production-ready Spring Boot REST API project to kickstart any backend application with modern essentials — built with simplicity, scalability, and maintainability in mind.",
                features: [
                    "MySQL Database Integration",
                    "JWT Authentication & Role-Based Access Control",
                    "Configurable one session per user or multiple sessions",
                    "DTO Mapping with MapStruct",
                    "Internationalization (i18n) with English and Spanish messages",
                    "Liquibase for database versioning/migrations",
                    "API Documentation with Swagger / Springdoc OpenAPI",
                    "Centralized Exception Handling",
                    "Environment-based configuration: dev, prod",
                    "Unit & Integration Tests (JUnit, Mockito)",
                    "Clean Architecture: Controller, Service, Repository, DTO, Mapper",
                    "Sample Data: Countries, States, Cities API (Importing may take a while only the first time it runs)"
                ]
            }, 
            "flutter-auth-template": {
                name: "Flutter Auth Starter App",
                description:
                "A ready-to-use Flutter application template designed for secure, modern mobile apps that works with my other project \"Spring Boot API Starter Template\". It features access and refresh token authentication, robust session management, and a clean architecture to jumpstart any Flutter project with scalability and maintainability in mind.",
                features: [
                    "Login system: Login, Sign Up, Forgot Password (request code), Reset Password (with code)",
                    "Connects to Spring Boot backend with full JWT-based authentication",
                    "Role-based API access demo: Test endpoints that return success or error based on user roles/permissions",
                    "Multi-language support (English 🇺🇸 / Spanish 🇪🇸): Language can be changed from Login screen or Home menu",
                    "Location picker example: Select Country → State → City (demonstrates API connection flow)",                    
                    "Custom reusable widgets: Button, Dropdown, Input field, Popup dialog. Global loader overlay",
                    "Language selector",
                    "Refresh token logic with session expiration message",
                    "post and get functions customized for consistent API usage",
                    "translation.dart extending Translations from GetX",
                    "Field validators",
                    "State management using GetX with Obx",
                ]
            }, 
            "react-auth-template": {
                name: "React Auth Starter App",
                description:
                "A production-ready React project built using the Lovable.dev generator, customized and extended to work seamlessly with a Spring Boot backend (\"Spring Boot API Starter Template\").",                
                features: [
                    "Complete Authentication System: Login, registration, forgot password, and password reset functionality",
                    "Role-Based Access Control: Admin, user, and auditor roles with protected routes",
                    "JWT Token Management: Automatic token refresh and secure storage",
                    "Internationalization (i18n): Multi-language support with React i18next",
                    "User Management: Admin panel for managing users and roles",                        
                    "Audit Logging: Comprehensive audit trail with filtering and pagination",
                    "Responsive Design: Mobile-first approach with Tailwind CSS",
                    "Modern UI Components: Built with shadcn/ui component library",
                    "Type Safety: Full TypeScript implementation",
                    "API Integration: Seamless integration with Spring Boot backend",
                    "Real-time Updates: React Query for efficient data fetching and caching",
                ]
            }, 
            "portfolio-site": {                    
                name: "My Portfolio Site",
                description:
                "A personal portfolio built with React, Vite, and Tailwind CSS showcasing my skills, projects, and contact info.",
                features: [
                    "React and Vite for fast development",
                    "Responsive design with Tailwind CSS",
                    "Language switcher (English and Spanish)",
                    "Falling leaves animation just for fun",
                ]
            }               
        },                                  
          viewOnGithub: "View on GitHub",
          skills: "Skills",
          findMe: "Find me on",
          freelancingNote: "I'm just starting my journey as a freelancer. I recently created my Upwork and Fiverr profiles, and I'm currently focused on building my portfolio before actively offering services on those platforms.",          
          allRightsReserved: "All rights reserved.",
          // Add all keys here...
        },
      },
      es: {
        translation: {
          title: "Desarrollador Full Stack | Ingeniero de Software",
          tagline: "Me encanta crear herramientas útiles y aprender nuevas tecnologías.",
          about: "Sobre mí",
          aboutIntro: "Soy un Desarrollador Full-Stack con experiencia y pasión por la innovación, la optimización de sistemas y el código limpio y mantenible. Con más de 15 años de experiencia en desarrollo de software, me especializo en construir aplicaciones web escalables, integrar sistemas y mejorar plataformas existentes.",
          aboutDetails: "La programación siempre ha sido más que un trabajo para mí: es un hobby que tengo la suerte de hacer profesionalmente. Disfruto aprender nuevas tecnologías, adaptarme a diferentes estándares de programación y resolver problemas complejos de forma creativa.",
          projects: "Proyectos",
          aboutPrivate: "La mayoría de mi trabajo anterior ha sido para empresas privadas, por lo que no puedo compartir código fuente ni detalles específicos de clientes. Sin embargo, estoy construyendo activamente mi portafolio público en GitHub para mostrar mis habilidades y prácticas de codificación a través de proyectos abiertos.",
          projectsList: 
            {
                "springboot-template": {
                    name: "Plantilla de Inicio para API Spring Boot",
                    description:
                    "Proyecto de API REST con Spring Boot listo para producción, ideal para iniciar cualquier aplicación backend moderna — construido con simplicidad, escalabilidad y mantenibilidad en mente.",                
                    features: [
                        "Integración con base de datos MySQL",
                        "Autenticación JWT y control de acceso basado en roles",
                        "Sesión configurable: una por usuario o múltiples",
                        "Mapeo de DTO con MapStruct",
                        "Internacionalización (i18n) en inglés y español",
                        "Versionado de base de datos con Liquibase",
                        "Documentación API con Swagger / Springdoc OpenAPI",
                        "Manejo centralizado de errores",
                        "Configuración por entorno: desarrollo, producción",
                        "Pruebas unitarias e integración (JUnit, Mockito)",
                        "Arquitectura limpia: Controlador, Servicio, Repositorio, DTO, Mapper",
                        "Datos de ejemplo: API de países, estados y ciudades (La importación puede tardar, solo la primera vez que se ejecuta)"
                    ]
                },
                "flutter-auth-template": {
                    name: "App de Inicio Flutter con Autenticación",
                    description:
                    "Una plantilla lista para usar de aplicación Flutter diseñada para apps móviles modernas y seguras que funciona con mi otro proyecto \"Spring Boot API Starter Template\". Cuenta con autenticación mediante tokens de acceso y refresco, manejo automático de sesiones y una arquitectura limpia pensada para escalar y mantener fácilmente cualquier proyecto Flutter.",
                    features: [
                        "Sistema de inicio de sesión: Iniciar sesión, Registrarse, ¿Olvidaste tu contraseña? (solicitar código), Restablecer contraseña (con código)",
                        "Conexión al backend de Spring Boot con autenticación JWT completa",
                        "Demostración de acceso a la API basado en roles: Endpoints de prueba que devuelven éxito o error según los roles/permisos del usuario",
                        "Soporte multilenguaje (Inglés 🇺🇸 / Español 🇪🇸): El idioma se puede cambiar desde la pantalla de inicio de sesión o el menú principal",
                        "Ejemplo de selector de ubicación: Seleccionar País → Estado → Ciudad (demuestra flujo de conexión con la API)",                        
                        "Widgets reutilizables personalizados: Botón, Desplegable, Campo de entrada, Diálogo emergente. Capa de carga global, Selector de idioma",
                        "Lógica de refresh token con mensaje de expiración de sesión",
                        "Funciones post y get personalizadas para un uso consistente de la API",
                        "translation.dart extendiendo Translations de GetX",
                        "Validadores de campos",
                        "Gestión de estado usando GetX con Obx",
                    ]
                }, 
                "react-auth-template": {
                  "name": "Aplicación de Inicio con Autenticación en React",
                  "description": "Un proyecto de React listo para producción, construido utilizando el generador Lovable.dev, personalizado y ampliado para funcionar perfectamente con un backend en Spring Boot (\"Spring Boot API Starter Template\").",
                  "features": [
                    "Sistema completo de autenticación: inicio de sesión, registro, recuperación de contraseña y restablecimiento",
                    "Control de acceso basado en roles: roles de administrador, usuario y auditor con rutas protegidas",
                    "Gestión de tokens JWT: renovación automática de tokens y almacenamiento seguro",
                    "Internacionalización (i18n): soporte multilenguaje con React i18next",
                    "Gestión de usuarios: panel de administración para gestionar usuarios y roles",
                    "Registro de auditoría: historial completo con filtrado y paginación",
                    "Diseño responsivo: enfoque móvil primero con Tailwind CSS",
                    "Componentes de interfaz modernos: construido con la biblioteca de componentes shadcn/ui",
                    "Seguridad de tipos: implementación completa con TypeScript",
                    "Integración con API: integración fluida con backend en Spring Boot",
                    "Actualizaciones en tiempo real: React Query para obtención de datos eficiente y caché"
                  ]
                }, 
                "portfolio-site": {
                    name: "Mi Sitio de Portafolio",
                    description:
                    "Portafolio personal creado con React, Vite y Tailwind CSS que muestra mis habilidades, proyectos y formas de contacto.",
                    url: "https://github.com/daiki1/my-portfolio-site",
                    features: [
                        "React y Vite para desarrollo rápido",
                        "Diseño responsivo con Tailwind CSS",
                        "Selector de idioma (inglés y español)",
                        "Animación de hojas cayendo solo por diversión",
                    ]
                }                
            },              
          viewOnGithub: "Ver en GitHub",
          skills: "Habilidades",
          findMe: "Encuéntrame en",
          freelancingNote: "Estoy comenzando mi camino como freelancer. Recientemente creé mis perfiles en Upwork y Fiverr, y actualmente estoy enfocado en construir mi portafolio antes de ofrecer servicios activamente en esas plataformas.",                    
          allRightsReserved: "Todos los derechos reservados.",
          // Match same keys...
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;