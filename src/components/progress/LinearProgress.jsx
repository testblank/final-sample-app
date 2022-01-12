import React from 'react';
import PropTypes from 'prop-types';
import LinearProgressPublish from '@publish/progress/LinearProgressPublish';

const LinearProgress = ({ type = 'primary', value = 0 }) => {
  const barColor = `bg-${type}-500`;
  const pValue = value > 100 ? 100 : value;
  return <LinearProgressPublish barColor={barColor} value={pValue} />;
};

const within100 = (props, propName, componentName) => {
  if (props[propName]) {
    let value = props[propName];
    if (typeof value === 'number') {
      if (value < 0 || value > 100)
        return new Error(
          propName + ' in ' + componentName + ' is not within 1 to 100',
        );
    }
  }
};

LinearProgress.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'success']),
  value: within100,
};

export default LinearProgress;
