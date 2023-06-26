import React from "react";

type props = {
  children: React.ReactNode;
  classname: string;
};

const TabWrapper = ({ children, classname }: props) => {
  return <div className={classname}>{children}</div>;
};

export default TabWrapper;
