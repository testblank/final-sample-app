import { arrayOf, bool, func, shape, string } from 'prop-types';
import { useSwitch } from 'customHooks';
import { SwitchPublish } from 'publish';

const Switch = ({ list }) => {
  const [stateObj, onClick] = useSwitch(list);

  const cbOnClick = (idx) => {
    onClick(idx);
  };

  return (
    list &&
    list.length > 0 &&
    list.map((item, idx) => (
      <SwitchPublish
        key={`${item.text}_${idx}`}
        text={item.text}
        isOn={stateObj[idx].isOn}
        disabled={stateObj[idx].disabled}
        className={item.className}
        onClick={() => cbOnClick(idx)}
      />
    ))
  );
};

Switch.propTypes = {
  list: arrayOf(
    shape({
      text: string,
      initialIsOn: bool,
      disabled: bool,
      className: string,
      disableAll: bool,
    }),
  ),
};

export default Switch;
