// i18n translations for the theme
// Language detection priority:
// 1. RESUME_LANG environment variable (explicit override)
// 2. meta.language field in resume.json (e.g., "meta": {"language": "es"})
// 3. Default: 'en'

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

let metaLang = null;

export function setLanguageFromMeta(resume) {
    if (resume && resume.meta && resume.meta.language) {
        metaLang = resume.meta.language.toLowerCase();
    }
    return metaLang;
}

export function getLanguage() {
    if (process.env.RESUME_LANG) {
        return process.env.RESUME_LANG;
    }
    if (metaLang) {
        return metaLang;
    }
    return 'en';
}

export function t(key) {
    const lang = getLanguage();
    return translations[lang] && translations[lang][key] ? translations[lang][key] : (translations.en[key] || key);
}

export default translations;
