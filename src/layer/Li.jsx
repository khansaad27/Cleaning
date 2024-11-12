import React from 'react';
import { Link } from 'react-router-dom'; 

const Li = ({ to, children,className='' }) => {
  return (
    <li>
      <Link to={to} className={`text-gray-700 hover:text-green transition-all duration-300 font-medium ${className}`}>
        {children}
      </Link>
    </li>
  );
};

export default Li;
