import React from "react";

interface Props {
  children: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return <div className="relative -mr-4 ml-64 gap-4">{children}</div>;
};

export default PageWrapper;
