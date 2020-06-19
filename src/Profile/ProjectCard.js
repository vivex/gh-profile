import React from 'react';

const ProjectCard = ({name, description, subHeading}) => {
  return (<div className="u-cushion--10x-v c-project-card">
   <h3>
     <a>{name}</a>
   </h3>
    <p className="c-project-card__sub_heading u-spacer--2x-v">{subHeading}</p>
    <p className="u-spacer--4x-v">{description}</p>
  </div>)
};

ProjectCard.defaultProps = {
  name: 'vivek',
  subHeading: 'Forked from MyOutDeskLLC/node-browser-history',
  description: 'This module is aimed to get all browser history from some common web browsers.\n'
}

export default ProjectCard;