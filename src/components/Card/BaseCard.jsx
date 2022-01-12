import React from 'react';
import { string, object, element, bool } from 'prop-types';

import { BaseCardPublish } from '@publish/Card';

const BaseCard = ({ bgClear, backgroundColor, children, style, className }) => {
  return (
    <BaseCardPublish
      bgClear={bgClear}
      className={className}
      style={style}
      backgroundColor={backgroundColor}
      children={children}
    />
  );
};

BaseCard.propTypes = {
  bgClear: bool,
  backgroundColor: string,
  children: element,
  style: object,
  className: string,
};

export default BaseCard;
