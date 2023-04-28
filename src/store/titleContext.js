import React, { createContext, useState } from "react";

export const TitleContext = createContext({
  title: "Right Solutions",
  changeTitle: () => {},
});

export const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Right Solutions");

  const changeTitle = (newTitle) => {
    setTitle(newTitle);
  };

  return (
    <TitleContext.Provider value={{ title, changeTitle }}>
      {children}
    </TitleContext.Provider>
  );
};
