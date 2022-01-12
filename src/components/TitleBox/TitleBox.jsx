import React from 'react';
import { element, func, string } from 'prop-types';
import { TitleBoxPublish } from 'publish';

const TitleBox = ({ icon, title = '', className, onClick }) => {
  return (
    <TitleBoxPublish
      icon={icon}
      title={title}
      className={className}
      onClick={onClick}
    />
  );
};

TitleBox.propTypes = {
  icon: element,
  title: string.isRequired,
  className: string,
  onClick: func,
};

export default TitleBox;
