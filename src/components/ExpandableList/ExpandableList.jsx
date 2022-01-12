import PropTypes from 'prop-types';

import { ExpandableListPublish } from 'publish';

const ExpandableList = (props) => {
  const { list, className } = props;

  const isBorder = ( idx) => {
    // border-b-2
    console.log('list.length',list.length);
    console.log('idx+1',idx+1);
    const cm = list.length === idx+1 ? className : className + ' pb-1 border-b';
    console.log(cm)
    return cm;
  };

  return list.map((item, idx) => (
    <ExpandableListPublish
      key={`${item.titleText}_${idx}`}
      initialOpen={item.initialOpen}
      titleText={item.titleText}
      innerText={item.innerText}
      className={isBorder(idx)}
    />
  ));
};

ExpandableList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      titleText: PropTypes.string,
      initialOpen: PropTypes.bool,
      innerText: PropTypes.string,
    }),
  ),
  className: PropTypes.string,
};

export default ExpandableList;
