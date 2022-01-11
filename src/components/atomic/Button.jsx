import { func, object, element, string } from 'prop-types';

const Button = ({ children, onClick, style, className }) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    onClick && onClick();
  };

  return (
    <button onClick={handleOnClick} className={`Button ${className}`} style={style}>
      {children && children}
    </button>
  );
};

Button.propTypes = {
  children: element,
  onClick: func,
  style: object,
  className: string,
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
  style: null,
  className: null,
}

export default Button;
