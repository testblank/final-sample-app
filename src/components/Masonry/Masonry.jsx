import { useWindowSize } from 'customHooks';
import { arrayOf, element } from 'prop-types';
import { number } from 'prop-types';

export const Masonry = ({ gap = 0, columns = 1, brickWidth, children }) => {
  const innerWidth = useWindowSize().innerWidth;

  let childrenEl;
  if (!children.length) {
    childrenEl = [children];
  } else {
    childrenEl = children;
  }

  let newColumn;
  if (innerWidth && brickWidth) {
    newColumn = Math.floor(innerWidth / brickWidth);
  } else {
    newColumn = columns;
  }

  const columnWrapper = {};
  const result = [];

  for (let i = 0; i < newColumn; i++) {
    columnWrapper[`column${i}`] = [];
  }

  for (let i = 0; i < childrenEl.length; i++) {
    const columnIndex = i % newColumn;
    columnWrapper[`column${columnIndex}`].push(childrenEl[i]);
  }

  for (let i = 0; i < newColumn; i++) {
    result.push(
      <div
        style={{
          flex: 1,
          marginLeft: `${i > 0 ? gap : 0}px`,
        }}
        key={i}
      >
        {columnWrapper[`column${i}`]}
      </div>,
    );
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>{result}</div>
  );
};

Masonry.propTypes = {
  gap: number,
  columns: number,
  brickWidth: number,
  children: arrayOf(element).isRequired,
};

export default Masonry;
