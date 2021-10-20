import React from 'react';
import Header from './header';
var children = ({ children }) => {
  return (
    <>
      <Header />
      {/* <main style={{ minHeight: '100vh' }}>{children}</main> */}
    </>
  );
};
export default children;
