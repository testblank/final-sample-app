import React from 'react';

const PageTitle = ({ children }) => {
  return (
    <div className={'font-bold text-24 leading-36 w-full flex text-left'}>
      {children}
    </div>
  );
};

export default PageTitle;
