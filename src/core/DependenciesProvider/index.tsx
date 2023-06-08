import { createContext } from "react";
import { FieldValues } from "react-hook-form";

import { DependenciesProviderProps } from "./types";

export const DependenciesContext = createContext({});

const DependenciesProvider = <T extends FieldValues = FieldValues>(
  props: DependenciesProviderProps<T>
) => {
  const { dependencies, children } = props;
  return (
    <DependenciesContext.Provider value={dependencies}>
      {children}
    </DependenciesContext.Provider>
  );
};

export default DependenciesProvider;
