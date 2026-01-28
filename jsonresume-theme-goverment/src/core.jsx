import React from 'react';
import styled from 'styled-components';

// Section component
export const Section = styled.section`
  margin-bottom: 24pt;
  page-break-inside: avoid;
`;

// SectionTitle component
export const SectionTitle = styled.h2`
  font-size: 14pt;
  font-weight: bold;
  color: #000000;
  margin: 18pt 0 12pt 0;
  padding-bottom: 4pt;
  border-bottom: 1pt solid #000000;
  text-transform: uppercase;
  font-family: 'Times New Roman', Georgia, serif;
`;

// ContactInfo component
const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8pt;
  font-size: 11pt;
  color: #000000;
  
  a {
    color: #000000;
    text-decoration: underline;
  }
`;

const ContactItem = styled.span`
  &:not(:last-child)::after {
    content: ' | ';
    margin-left: 8pt;
  }
`;

export const ContactInfo = ({ basics, className }) => {
  const items = [];
  
  if (basics?.email) {
    items.push(
      <ContactItem key="email">
        <a href={`mailto:${basics.email}`}>{basics.email}</a>
      </ContactItem>
    );
  }
  
  if (basics?.phone) {
    items.push(<ContactItem key="phone">{basics.phone}</ContactItem>);
  }
  
  if (basics?.location?.city) {
    const location = basics.location.region 
      ? `${basics.location.city}, ${basics.location.region}`
      : basics.location.city;
    items.push(<ContactItem key="location">{location}</ContactItem>);
  }
  
  if (basics?.url) {
    items.push(
      <ContactItem key="url">
        <a href={basics.url} target="_blank" rel="noopener noreferrer">
          {basics.url.replace(/^https?:\/\//, '')}
        </a>
      </ContactItem>
    );
  }
  
  if (basics?.profiles?.length > 0) {
    basics.profiles.forEach((profile, i) => {
      items.push(
        <ContactItem key={`profile-${i}`}>
          <a href={profile.url} target="_blank" rel="noopener noreferrer">
            {profile.network}
          </a>
        </ContactItem>
      );
    });
  }
  
  return <ContactWrapper className={className}>{items}</ContactWrapper>;
};

// DateRange component for formatting date ranges
const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

export const DateRange = ({ startDate, endDate }) => {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  
  if (!start && !end) return null;
  if (!start) return <span>{end}</span>;
  
  return <span>{start} - {end}</span>;
};
