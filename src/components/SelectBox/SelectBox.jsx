import { arrayOf, func, number, shape, string } from 'prop-types';

import { SelectBoxPublish } from 'publish';

const SelectBox = ({ options, selected, onChangeSelect, className }) => {
  return (
    <SelectBoxPublish
      options={options}
      selected={selected}
      onChangeSelect={onChangeSelect}
      calssName={className}
    />
  );
};

SelectBox.propType = {
  options: arrayOf(
    shape({
      id: number,
      value: string,
    }),
  ),
  selected: string,
  onChangeSelect: func,
  className: string,
};

export default SelectBox;
