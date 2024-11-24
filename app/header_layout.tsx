import React, { ReactNode } from "react";
import Header from "./_components/Header";

interface HeaderLayoutProp {
  children: ReactNode;
}
const header_layout: React.FC<HeaderLayoutProp> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default header_layout;
