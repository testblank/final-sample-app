// import PropTypes from 'prop-types';

import { PrimaryInputPublish } from 'publish';

const MeasureInput = (props) => {
  const { measureUnit } = props;

  return (
    <PrimaryInputPublish {...props}>
      <div className={`text-2xl ml-2  flex items-end`}>{measureUnit}</div>
    </PrimaryInputPublish>
  );
};

export default MeasureInput;
