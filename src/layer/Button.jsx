import React from 'react';

const Button = ({ children, className='', url }) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-green text-white  text-[16px]  text-center py-[13px] px-[22px] rounded-[5px]  hover:bg-green-dark transition-all duration-300 font-medium ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
