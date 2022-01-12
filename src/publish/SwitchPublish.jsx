import { bool, func, string } from 'prop-types';

const SwitchPublish = ({ text, isOn, disabled, className, onClick }) => {
  const cbOnClick = () => {
    !disabled && onClick && onClick();
  };

  const setColor = (isOn, disabled) => {
    let opacity = 0;
    let color = isOn ? 'primary' : 'gray';

    if (disabled) {
      opacity = isOn ? 200 : 100;
    } else {
      opacity = isOn ? 500 : 300;
    }

    return `bg-${color}-${opacity}`;
  };

  return (
    <div
      className={`flex justify-between items-center w-full font-regular ${className}`}
      style={{ marginBottom: '24px' }}
    >
      <div className={`text-gray-${disabled ? 300 : 900} text-14 leading-21`}>
        {text}
      </div>
      <div
        className={`rounded-full ${setColor(isOn, disabled)}`}
        style={{
          width: '48px',
          height: '24px',
          transition: 'background 0.1s ease',
          position: 'relative',
        }}
        onClick={cbOnClick}
      >
        <div
          className={'rounded-full bg-gray-100'}
          style={{
            width: '20px',
            height: '20px',
            position: 'absolute',
            margin: '0 2px',
            top: '50%',
            transform: `translateY(-50%) translateX(calc(${
              isOn ? `100% + 4px` : `0%`
            }))`,
            transition: 'transform 0.1s ease',
            willChange: 'transform',
            backgroundColor: 'white',
          }}
        />
      </div>
    </div>
  );
};

SwitchPublish.propTypes = {
  text: string,
  isOn: bool,
  disabled: bool,
  className: string,
  onClick: func,
};

export default SwitchPublish;
