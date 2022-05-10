import React, { createContext, useContext, useState } from "react";
import CheckIcon from "../CheckIcon";
import "./styles.css";

const TabContext = createContext(null);

export const TabTrigger = ({ children, value = 0 }) => {
  const context = useContext(TabContext);

  const isActive = context.value === value;
  const isFinished = context.value > value;

  return (
    <div
      className={`tab-trigger ${isActive ? "active" : ""} ${
        isFinished ? "finished" : ""
      }`}
    >
      <div className="tab-trigger-number-border">
        <div className="tab-trigger-number">
          {isFinished ? <CheckIcon /> : value}
        </div>
      </div>
      <div className="name">{children}</div>
    </div>
  );
};

export const TabTriggerList = ({ children }) => {
  return <div className="tab-list">{children}</div>;
};

export const Tabs = ({ children, value, setValue }) => {
  const [finished, setFinished] = useState([]);
  return (
    <TabContext.Provider
      value={{
        value,
        setValue: () => {
          setFinished([...finished, value]);
          setValue();
        },
        finished,
      }}
    >
      {children}
    </TabContext.Provider>
  );
};

export const TabScreen = ({ children, value }) => {
  const context = useContext(TabContext);

  if (value === context.value) return children;

  return;
};
