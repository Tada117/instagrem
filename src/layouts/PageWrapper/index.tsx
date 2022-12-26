import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageWrapper = (props: Props) => {
  const { children } = props;
  return (
    <div className="relative -mr-4 ml-64 flex justify-center gap-4">
      {children}
    </div>
  );
};

export default PageWrapper;
