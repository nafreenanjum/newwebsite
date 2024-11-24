import React, { createContext } from "react";
import all_product from "../COMPONENT/Assets/all_product"; // Ensure the path is correct

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { all_product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export { ShopContextProvider };