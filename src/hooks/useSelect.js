import { useState } from 'react';

const useSelect = (options) => {
  const [selected, setSelected] = useState(options[0].id);

  const onChangeSelect = (e) => {
    console.log(e.target.value);
    const targetValue = e.target.value || '';
    setSelected(targetValue);
  };

  return [selected, onChangeSelect];
};

export default useSelect;
