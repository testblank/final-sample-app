import { bool, number, object, oneOfType, string } from 'prop-types';
import { BaseCardPublish } from 'publish/Card';
import { svgIcDown } from 'res/svg';
import decimalSeparator from 'util/decimalSeparator';

const CardTypeFour = ({
  isOpen = true,
  style,
  bgClear,
  title,
  num,
  desc,
  balance,
  className,
  backgroundColor,
}) => {
  return (
    <BaseCardPublish
      bgClear={bgClear}
      style={{ padding: '0 16px', ...style }}
      className={className}
      backgroundColor={backgroundColor}
    >
      <div className={`CardTypeFour flex justify-between`}>
        <div
          className={`flex flex-col flex-1 text-left`}
          style={{ padding: '15px 0 19px' }}
        >
          <div className={'flex'} style={{ marginBottom: '4px' }}>
            <div
              className={`title text-gray-900 font-medium text-16 leading-24 flex-none`}
            >
              {title}
            </div>
            <div
              className={`num text-blue-500 font-medium text-16 leading-24 flex-none`}
              style={{ marginLeft: '4px' }}
            >
              {num}
            </div>
          </div>
          <div
            className={`desc text-gray-600 font-medium text-12 leading-18 flex-none`}
          >
            {desc}
          </div>
        </div>
        <div className={`flex items-center flex-none`}>
          <div className={'balance'} style={{ marginRight: '8px' }}>
            {decimalSeparator(balance)}
            <span className={`text-gray-600`} style={{ marginLeft: '4px' }}>
              원
            </span>
          </div>
          {svgIcDown(16, 16, '', {
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            // transform: `rotate3d(1, 0, 0, ${isOpen ? 180 : 0}deg)`,
            transition: 'transform 0.2s linear',
          })}
        </div>
      </div>
    </BaseCardPublish>
  );
};

CardTypeFour.propTypes = {
  isOpen: bool,
  bgClear: bool,
  title: string,
  num: oneOfType([number, string]),
  desc: string,
  balance: oneOfType([number, string]),
  style: object,
  className: string,
  backgroundColor: string,
};

export default CardTypeFour;
