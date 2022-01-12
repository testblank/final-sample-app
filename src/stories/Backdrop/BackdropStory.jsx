import React, { useState } from 'react';
import Backdrop from 'publish/BackdropPublish';
import { BaseButton2 } from 'components/Button';

const BackdropStory = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <BaseButton2
        color='primary'
        onClick={() => {
          setShow(true);
        }}
        size='small'
        text='Show backdrop'
        variant='contained'
      />
      <Backdrop
        show={show}
        onClick={() => {
          setShow(false);
        }}
      />
    </>
  );
};

export default BackdropStory;
