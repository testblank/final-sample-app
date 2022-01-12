import React from 'react';

const LinearProgressPublish = ({ barColor = 'bg-primary-500', value = 0 }) => {
  return (
    <>
      <div className={'relative pt-1'}>
        <div className={'overflow-hidden h-2 text-xs flex rounded bg-gray-200'}>
          <div
            style={{ width: `${value}%` }}
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-cente ${barColor}`}
          ></div>
        </div>
      </div>
    </>
  );
};

export default LinearProgressPublish;
