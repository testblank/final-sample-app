import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ImgUnfold from '../icons/icons-unfold.svg';

const ExpandableListPublish = ({
  titleText='눌러서 상세보기',
  initialOpen = false,
  innerText='상세',
  className,
}) => {

  const [open, setOpen] = useState(initialOpen);
  const cbOnClick = () => {
    console.log('click'+open);
    setOpen(!open);
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <div className='cursor-pointer flex flex-row text-base font-bold' onClick={cbOnClick}>
        <div className='text-left'>
          {titleText}
        </div>
        <img
        className='absolute right-5'
        src={ImgUnfold}
        alt={''}/>
      </div>
      { open &&(
      <div className='text-left text-sm font-normal text-gray-600 pt-5 px-1'>
        <p>{innerText}</p>
      </div>
      )}
  </div>
  );
};

ExpandableListPublish.propTypes = {
  titleText: PropTypes.string,
  initialOpen: PropTypes.bool,
  innerText: PropTypes.string,
  className: PropTypes.string,
};

export default ExpandableListPublish;
