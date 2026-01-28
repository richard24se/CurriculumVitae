import React from 'react';
import styled from 'styled-components';
import { t } from './i18n.js';

// ========== STYLED COMPONENTS ==========

const Container = styled.div`
  max-width: 850px;
  margin: 0 auto;
  padding: 40px 50px;
  font-family: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace;
  font-size: 14px;
  color: #1a1a1a;
  background: #ffffff;
  line-height: 1.5;

  @media print {
    padding: 0;
    max-width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 32px;
  gap: 24px;
`;

const HeaderLeft = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 4px 0;
`;

const Label = styled.p`
  font-size: 16px;
  color: #4a5568;
  margin: 0 0 4px 0;
`;

const Location = styled.p`
  font-size: 13px;
  color: #718096;
  margin: 0 0 12px 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  color: #4a5568;
  text-decoration: none;
  font-size: 12px;
  
  &:hover {
    background: #edf2f7;
    border-color: #cbd5e0;
  }
`;

const ContactText = styled.span`
  font-size: 12px;
  color: #4a5568;
  
  a {
    color: #4a5568;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
`;

const Section = styled.section`
  margin-bottom: 28px;
  ${props => props.$pageBreak && 'page-break-before: always;'}
  
  @media print {
    padding-top: ${props => props.$pageBreak ? '0' : '16px'};
  }
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #e2e8f0;
`;

const AboutText = styled.p`
  font-size: 14px;
  color: #4a5568;
  line-height: 1.7;
  margin: 0;
`;

// Work Experience styles
const WorkItem = styled.div`
  margin-bottom: 24px;
  overflow: hidden;
  ${props => props.$pageBreak && 'page-break-before: always;'}
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 4px;
`;

const WorkTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

const CompanyName = styled.span`
  font-weight: 600;
  color: #1a1a1a;
`;

const WorkType = styled.span`
  font-size: 12px;
  color: #718096;
`;

const DateRange = styled.span`
  font-size: 13px;
  color: #718096;
  white-space: nowrap;
`;

const Position = styled.div`
  font-size: 13px;
  /* color: #2d3748; */
  color: #0e0e0fff;
  margin-bottom: 6px;
`;

const Description = styled.p`
  font-size: 13px;
  color: #4a5568;
  line-height: 1.6;
  margin: 0 0 6px 0;
`;

const HighlightList = styled.ul`
  margin: 6px 0 0 0;
  padding-left: 18px;
  list-style-type: disc;
`;

const HighlightItem = styled.li`
  font-size: 13px;
  color: #4a5568;
  line-height: 1.5;
  margin-bottom: 2px;
`;

const TechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 8px;
`;

const TechTag = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #1a1a1a;
  color: #ffffff;
  font-size: 11px;
  border-radius: 4px;
`;

// Education styles
const EducationItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const EducationInfo = styled.div``;

const Institution = styled.div`
  font-weight: 600;
  color: #1a1a1a;
`;

const Degree = styled.div`
  font-size: 13px;
  color: #4a5568;
`;

// Skills styles
const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillBadge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  background: #1a1a1a;
  color: #ffffff;
  font-size: 12px;
  border-radius: 4px;
`;

// Projects styles
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media print {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ProjectCard = styled.div`
  padding: 12px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  overflow: hidden;
  ${props => props.$pageBreak && 'page-break-before: always;'}
`;

const ProjectName = styled.div`
  font-weight: 600;
  color: #1a1a1a;
  font-size: 13px;
  margin-bottom: 4px;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 12px;
  color: #718096;
  line-height: 1.5;
  margin: 0 0 8px 0;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const ProjectTag = styled.span`
  display: inline-block;
  padding: 2px 6px;
  background: #f7fafc;
  border: 1px solid #e2e8f0;
  color: #4a5568;
  font-size: 10px;
  border-radius: 4px;
`;

// ========== HELPER FUNCTIONS ==========

const formatDate = (date) => {
    if (!date) return '';
    const d = new Date(date);
    return d.getFullYear().toString();
};

const formatDateRange = (start, end) => {
    const startYear = formatDate(start);
    const endYear = end ? formatDate(end) : t('present');
    if (!startYear) return endYear;
    return `${startYear} - ${endYear}`;
};

const getIconForNetwork = (network) => {
    const icons = {
        github: 'GH',
        linkedin: 'in',
        twitter: '𝕏',
        email: '✉',
        phone: '☎',
        website: '🌐',
    };
    return icons[network?.toLowerCase()] || network?.charAt(0)?.toUpperCase() || '•';
};

// ========== RESUME COMPONENT ==========

function Resume({ resume }) {
    const {
        basics = {},
        work = [],
        education = [],
        skills = [],
        projects = [],
        languages = [],
        meta = {},
    } = resume;

    const textOnlyContact = meta.textOnlyContact || false;

    const allKeywords = skills.flatMap(s => s.keywords || []);

    return (
        <Container>
            {/* Header */}
            <Header>
                <HeaderLeft>
                    <Name>{basics.name}</Name>
                    {basics.label && <Label>{basics.label}</Label>}
                    {basics.location && (
                        <Location>
                            {basics.location.city}
                            {basics.location.region && `, ${basics.location.region}`}
                            {basics.location.countryCode && `, ${basics.location.countryCode}`}
                        </Location>
                    )}
                    <SocialLinks>
                        {textOnlyContact ? (
                            <>
                                {basics.email && <ContactText><a href={`mailto:${basics.email}`}>{basics.email}</a></ContactText>}
                                {basics.phone && <ContactText> | <a href={`tel:${basics.phone}`}>{basics.phone}</a></ContactText>}
                                {basics.url && <ContactText> | <a href={basics.url} target="_blank" rel="noopener noreferrer">{basics.url.replace(/^https?:\/\//, '')}</a></ContactText>}
                                {basics.profiles?.map((profile, i) => (
                                    <ContactText key={i}> | <a href={profile.url} target="_blank" rel="noopener noreferrer">{profile.network}</a></ContactText>
                                ))}
                            </>
                        ) : (
                            <>
                                {basics.email && (
                                    <SocialLink href={`mailto:${basics.email}`} title="Email">
                                        ✉
                                    </SocialLink>
                                )}
                                {basics.phone && (
                                    <SocialLink href={`tel:${basics.phone}`} title="Phone">
                                        ☎
                                    </SocialLink>
                                )}
                                {basics.url && (
                                    <SocialLink href={basics.url} target="_blank" rel="noopener noreferrer" title="Website">
                                        🌐
                                    </SocialLink>
                                )}
                                {basics.profiles?.map((profile, i) => (
                                    <SocialLink
                                        key={i}
                                        href={profile.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={profile.network}
                                    >
                                        {getIconForNetwork(profile.network)}
                                    </SocialLink>
                                ))}
                            </>
                        )}
                    </SocialLinks>
                </HeaderLeft>
                {basics.image && (
                    <ProfileImage src={basics.image} alt={basics.name} />
                )}
            </Header>

            {/* About */}
            {basics.summary && (
                <Section>
                    <SectionTitle>{t('about')}</SectionTitle>
                    <AboutText>{basics.summary}</AboutText>
                </Section>
            )}

            {/* Work Experience */}
            {work.length > 0 && (
                <Section>
                    <SectionTitle>{t('workExperience')}</SectionTitle>
                    {work.map((job, i) => (
                        <WorkItem key={i} $pageBreak={job.pageBreakBefore}>
                            <WorkHeader>
                                <WorkTitle>
                                    <CompanyName>{job.name}</CompanyName>
                                    {job.location && <WorkType>{job.location}</WorkType>}
                                </WorkTitle>
                                <DateRange>{formatDateRange(job.startDate, job.endDate)}</DateRange>
                            </WorkHeader>
                            <Position>{job.position}</Position>
                            {job.summary && <Description>{job.summary}</Description>}
                            {job.highlights && job.highlights.length > 0 && (
                                <HighlightList>
                                    {job.highlights.map((highlight, j) => (
                                        <HighlightItem key={j}>{highlight}</HighlightItem>
                                    ))}
                                </HighlightList>
                            )}
                        </WorkItem>
                    ))}
                </Section>
            )}

            {/* Education */}
            {education.length > 0 && (
                <Section>
                    <SectionTitle>{t('education')}</SectionTitle>
                    {education.map((edu, i) => (
                        <EducationItem key={i}>
                            <EducationInfo>
                                <Institution>{edu.institution}</Institution>
                                <Degree>
                                    {edu.studyType && `${edu.studyType} `}
                                    {edu.area && `in ${edu.area}`}
                                </Degree>
                            </EducationInfo>
                            <DateRange>{formatDateRange(edu.startDate, edu.endDate)}</DateRange>
                        </EducationItem>
                    ))}
                </Section>
            )}

            {/* Skills */}
            {allKeywords.length > 0 && (
                <Section>
                    <SectionTitle>{t('skills')}</SectionTitle>
                    <SkillsContainer>
                        {allKeywords.map((keyword, i) => (
                            <SkillBadge key={i}>{keyword}</SkillBadge>
                        ))}
                    </SkillsContainer>
                </Section>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <Section>
                    <SectionTitle>{t('projects')}</SectionTitle>
                    <ProjectsGrid>
                        {projects.map((project, i) => (
                            <ProjectCard key={i} $pageBreak={project.pageBreakBefore}>
                                <ProjectName>
                                    {project.url ? (
                                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                                            {project.name} ↗
                                        </a>
                                    ) : (
                                        project.name
                                    )}
                                </ProjectName>
                                {project.description && (
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                )}
                                {project.keywords?.length > 0 && (
                                    <ProjectTags>
                                        {project.keywords.map((kw, j) => (
                                            <ProjectTag key={j}>{kw}</ProjectTag>
                                        ))}
                                    </ProjectTags>
                                )}
                            </ProjectCard>
                        ))}
                    </ProjectsGrid>
                </Section>
            )}

            {/* Languages */}
            {languages.length > 0 && (
                <Section>
                    <SectionTitle>{t('languages')}</SectionTitle>
                    <SkillsContainer>
                        {languages.map((lang, i) => (
                            <SkillBadge key={i}>
                                {lang.language} {lang.fluency && `(${lang.fluency})`}
                            </SkillBadge>
                        ))}
                    </SkillsContainer>
                </Section>
            )}
        </Container>
    );
}

export default Resume;
