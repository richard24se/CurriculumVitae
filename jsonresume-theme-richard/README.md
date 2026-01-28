# jsonresume-theme-richard

Modern bilingual JSON Resume theme with ES/EN support.

## Installation

```bash
npm install ./jsonresume-theme-richard
```

## Usage

### Export to PDF (English - default)

```bash
npx resume export resume.pdf --theme jsonresume-theme-richard
```

### Export to PDF (Spanish)

```bash
# PowerShell
$env:RESUME_LANG='es'; npx resume export resume_es.pdf --theme jsonresume-theme-richard

# Bash/Linux/Mac
RESUME_LANG=es npx resume export resume_es.pdf --theme jsonresume-theme-richard
```

### Preview

```bash
npx resume serve --theme jsonresume-theme-richard --port 4000
```

## Environment Variables

| Variable | Values | Default | Description |
|----------|--------|---------|-------------|
| `RESUME_LANG` | `en`, `es` | `en` | Language for section titles |

## Features

- Modern, clean design inspired by professional engineering resumes
- Profile photo support (`basics.image`)
- Social icons (GitHub, LinkedIn, Email, Phone, Website)
- Skills displayed as badges
- Projects in 3-column grid
- ATS-friendly formatting
- Print-optimized styles

## Section Titles by Language

| Key | English | Spanish |
|-----|---------|---------|
| about | About | Acerca de |
| workExperience | Work Experience | Experiencia Laboral |
| education | Education | Educación |
| skills | Skills | Habilidades |
| projects | Projects | Proyectos |

## Development

```bash
cd jsonresume-theme-richard
npm run build
cd ..
npm install ./jsonresume-theme-richard
```

## Clean

```bash
Remove-Item -Recurse -Force dist; Remove-Item -Recurse -Force node_modules; npm install; npm run build
```