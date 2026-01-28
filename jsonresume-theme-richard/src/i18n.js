// i18n translations for the theme
// Language is determined by RESUME_LANG environment variable (default: 'en')

const translations = {
  en: {
    about: 'About',
    workExperience: 'Work Experience',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    certificates: 'Certificates',
    languages: 'Languages',
    interests: 'Interests',
    references: 'References',
    volunteer: 'Volunteer',
    awards: 'Awards',
    publications: 'Publications',
    present: 'Present',
    remote: 'Remote',
    sideProject: 'Side Project',
    viewProject: 'View Project',
  },
  es: {
    about: 'Acerca de',
    workExperience: 'Experiencia Laboral',
    education: 'Educación',
    skills: 'Habilidades',
    projects: 'Proyectos',
    certificates: 'Certificados',
    languages: 'Idiomas',
    interests: 'Intereses',
    references: 'Referencias',
    volunteer: 'Voluntariado',
    awards: 'Premios',
    publications: 'Publicaciones',
    present: 'Presente',
    remote: 'Remoto',
    sideProject: 'Proyecto Personal',
    viewProject: 'Ver Proyecto',
  }
};

export function getLanguage() {
  return process.env.RESUME_LANG || 'en';
}

export function t(key) {
  const lang = getLanguage();
  return translations[lang]?.[key] || translations.en[key] || key;
}

export default translations;
