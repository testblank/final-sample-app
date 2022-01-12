import { bool, func, number, string } from 'prop-types';

const RadioButtonPublish = ({ id, disabled, selectedId, text, onClick }) => {
  const cbOnClick = () => {
    !disabled && onClick && onClick();
  };

  const selected = id === selectedId ? true : false;

  return (
    <div
      onClick={cbOnClick}
      className={`max-w-xs flex justify-start items-center mb-2`}
    >
      <div
        className={`
        border 
        border-${!disabled && selected ? 'primary-500' : 'gray-300'} 
        bg-${!disabled && selected ? 'primary-500' : 'white'} 
        rounded-full 
        flex 
        justify-center 
        items-center`}
        style={{
          boxSizing: 'border-box',
          width: '16px',
          height: '16px',
          transition: 'all 0.1s ease',
        }}
      >
        <div
          className={`rounded-full bg-white`}
          style={{
            background: disabled ? 'rgba(233, 239, 245, 0.6)' : 'white',
            width: disabled ? '100%' : '8px',
            height: disabled ? '100%' : '8px',
          }}
        />
      </div>
      <div
        className={`
         text-gray-${disabled ? '300' : '900'} 
         font-regular 
         text-14 
         leading-21`}
        style={{ marginLeft: '12px' }}
      >
        {text}
      </div>
    </div>
  );
};

RadioButtonPublish.propTypes = {
  id: number,
  disabled: bool,
  selectedId: number,
  text: string,
  onClick: func,
};

export default RadioButtonPublish;
