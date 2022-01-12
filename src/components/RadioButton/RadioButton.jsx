import { arrayOf, bool, number, shape, string } from 'prop-types';

import { RadioButtonPublish } from 'publish';
import { useRadioButton } from '@hooks';

const RadioButton = ({ list }) => {
  const [selectedId, onClickRadioBtn] = useRadioButton(list);

  return (
    <>
      {list &&
        list.length > 0 &&
        list.map((item, idx) => {
          return (
            <RadioButtonPublish
              key={`${item.id}_${idx}`}
              id={item.id}
              disabled={item.disabled}
              selectedId={selectedId}
              text={item.text}
              onClick={() => onClickRadioBtn(item.id)}
            />
          );
        })}
    </>
  );
};

RadioButton.propTypes = {
  list: arrayOf(
    shape({
      id: number,
      text: string,
      selected: bool,
      disabled: bool,
    }),
  ),
};

export default RadioButton;
