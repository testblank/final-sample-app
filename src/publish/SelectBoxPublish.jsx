import PropTypes from 'prop-types';

const SelectBoxPublish = ({
  selected,
  options = [],
  onChangeSelect,
  className,
}) => {
  const cbOnChange = (e) => {
    onChangeSelect && onChangeSelect(e);
  };

  return (
    <div
      className={`flex justify-center items-center rounded-lg border-gray-300 border-solid border ml-2 max-w-xs ${className}`}
    >
      <select className={`bg-white`} onChange={cbOnChange} value={selected}>
        {options.length > 1 &&
          options.map((data, idx) => {
            return (
              <option key={`${data.id}_${idx}`} value={data.id}>
                {data.value}
              </option>
            );
          })}
      </select>
    </div>
  );
};

SelectBoxPublish.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
    }),
  ),
  onChangeSelect: PropTypes.func,
  className: PropTypes.string,
};

export default SelectBoxPublish;
