import React, { useContext } from "react";

export const CategoryContext = React.createContext();

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};
