import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1368px] px-6 mx-auto ${className} `} >
      {children}
    </div>
  );
}

export default Container