import React from 'react';

const ResourceLinks = ({ resources }) => {
  return (
    <div className="resource-links">
      <a href={resources.pdf} target="_blank" rel="noopener noreferrer">PDF</a>
      <a href={resources.acm} target="_blank" rel="noopener noreferrer">ACM DL</a>
      <a href={resources.video} target="_blank" rel="noopener noreferrer">Video</a>
      <a href={resources.code} target="_blank" rel="noopener noreferrer">Code</a>
    </div>
  );
};

export default ResourceLinks;
