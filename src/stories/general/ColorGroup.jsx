import React from 'react';
import _config from '../../config/tailwindConfig';

export const Color = ({ type, number, colorValue }) => {
  return (
    <>
      <div className={`bg-${type}-${number} w-full h-32 rounded-md`}></div>
      <p className={`text-xs w-full `}>{`bg-${type}-${number}`}</p>
      <p className={`text-xs w-full`}>{colorValue}</p>
    </>
  );
};

export const ColorGroup = () => {
  const keys = Object.keys(_config.colors).filter((color) => color !== 'white');
  return (
    <div>
      <ul>
        {keys.map((type) => (
          <li key={type}>
            <div className={``}>
              <h1>{type.toUpperCase()}</h1>
              <div className={`flex flex-row flex-wrap justify-start`}>
                {Object.keys(_config.colors[type]).map((number) => (
                  <div
                    key={`${type}-${number}`}
                    className={`flex flex-col w-32`}
                  >
                    <div className={`p-2`}>
                      <Color
                        type={type}
                        number={number}
                        colorValue={_config.colors[type][number]}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
