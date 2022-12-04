import React from "react";
import { HomeContextInterface } from "../types/Home";

const HomeContext = React.createContext<HomeContextInterface>({
  navExpanded: false,
  toggleNav: () => {},
  expandNav: () => {},
  closeNav: () => {},
});
const HomeProvider = HomeContext.Provider;
const HomeConsumer = HomeContext.Consumer;

export { HomeContext, HomeProvider };
