import React from "react";

const Layout: React.FC<React.PropsWithChildren<object>> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;