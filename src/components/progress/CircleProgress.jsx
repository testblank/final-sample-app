import React from 'react';
import PropTypes from 'prop-types';
import CircleProgressPublish from '@publish/progress/CircleProgressPublish';

const CircleProgress = ({ type = 'primary' }) => {
  const CircleColor = `border-t-${type}-500`;
  return <CircleProgressPublish CircleColor={CircleColor} />;
};

CircleProgress.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'success']),
};

export default CircleProgress;
