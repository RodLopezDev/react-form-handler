import { useCallback, useContext } from "react";
import { FieldValues, Path, useFormContext } from "react-hook-form";

import { Dependencies } from "./types";
import { DependenciesContext } from "./index";

function useDependencies<
  T extends FieldValues = FieldValues,
  TName extends Path<T> = Path<T>
>(name: TName): (currentValue: any) => void {
  const formContext = useFormContext<T>();
  const context = useContext(DependenciesContext) as Partial<
    Dependencies<T, TName>
  >;

  if (!formContext) {
    throw new Error("FormContext NOT FOUND");
  }
  if (!context) {
    throw new Error("DependenciesContext NOT FOUND");
  }

  const dependencyRunnable = context?.[name];

  const trigger = useCallback(
    (currentValue: any) => {
      if (dependencyRunnable) {
        const data = formContext.getValues();
        dependencyRunnable({ data, methods: formContext, currentValue });
      }
    },
    [dependencyRunnable]
  );

  return trigger;
}

export default useDependencies;
